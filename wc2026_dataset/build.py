# -*- coding: utf-8 -*-
"""
Construye el dataset de recorridos del Mundial 2026 segun la logica del MD:
  Fase de grupos:  base <-> ciudad (ida y vuelta) x3
  Clasifica:       base -> Round of 32
  Eliminatorias:   ciudad -> ciudad (sin volver a base) hasta caer / final
"""
import json, math, os
from data import (CITY_COORDS, TEAMS, BASE_CAMPS, STADIUMS, CITY_COUNTRY,
                  GROUP_MATCHES, KO_MATCHES, ROUND_NAMES_ES)

OUT = "/mnt/user-data/outputs/wc2026"
os.makedirs(os.path.join(OUT, "data", "itineraries"), exist_ok=True)

R = 6371.0088  # radio terrestre medio (km)

def haversine(a, b):
    lat1, lon1 = map(math.radians, a)
    lat2, lon2 = map(math.radians, b)
    dlat, dlon = lat2 - lat1, lon2 - lon1
    h = math.sin(dlat/2)**2 + math.cos(lat1)*math.cos(lat2)*math.sin(dlon/2)**2
    return round(2*R*math.asin(math.sqrt(h)), 1)

def country_of(city):
    return CITY_COUNTRY.get(city, "USA")

def coords(city):
    return CITY_COORDS[city]

# --- indices auxiliares ---
group_by_team = {c: [] for c in TEAMS}
for date, grp, a, b, city in GROUP_MATCHES:
    group_by_team[a].append((date, grp, b, city))
    group_by_team[b].append((date, grp, a, city))

ko_by_team = {c: [] for c in TEAMS}
for mno, date, rnd, a, b, city, winner, score in KO_MATCHES:
    for team, opp in ((a, b), (b, a)):
        ko_by_team[team].append(
            dict(match=mno, date=date, round=rnd, opp=opp, city=city,
                 winner=winner, score=score, played=winner is not None))
for c in ko_by_team:
    ko_by_team[c].sort(key=lambda m: (m["date"], m["match"]))
for c in group_by_team:
    group_by_team[c].sort(key=lambda g: g[0])


def build_itinerary(code):
    name, conf = TEAMS[code]
    base_city, facility, base_country = BASE_CAMPS[code]
    base_pt = coords(base_city)

    legs, nodes = [], [base_city]
    cumulative = 0.0

    def add_leg(frm, to, stage, opp=None, date=None, score=None):
        nonlocal cumulative
        d = haversine(coords(frm), coords(to))
        cumulative += d
        leg = {
            "from": frm, "from_coords": list(coords(frm)),
            "to": to, "to_coords": list(coords(to)),
            "stage": stage, "distance_km": d,
            "cumulative_km": round(cumulative, 1),
        }
        if date:  leg["date"] = date
        if opp:   leg["opponent"] = opp
        if score is not None: leg["result"] = score
        legs.append(leg)
        nodes.append(to)

    # ---- fase de grupos: base <-> ciudad x3 ----
    for date, grp, opp, city in group_by_team[code]:
        add_leg(base_city, city, "Group", opp=opp, date=date)
        add_leg(city, base_city, "Return", date=date)

    # ---- eliminatorias ----
    kos = ko_by_team[code]
    played = [m for m in kos if m["played"]]
    pending = [m for m in kos if not m["played"]]

    eliminated = True
    eliminated_round = "Group"
    reached = "Group"
    next_match = None

    if played:
        # primer salto: base -> sede de dieciseisavos
        prev_city = base_city
        for i, m in enumerate(played):
            stage = m["round"]
            frm = base_city if i == 0 else prev_city
            add_leg(frm, m["city"], stage, opp=m["opp"], date=m["date"], score=m["score"])
            prev_city = m["city"]
            reached = stage
        last = played[-1]
        won_last = last["winner"] == code
        if won_last and pending:
            eliminated = False
            eliminated_round = None
            reached = pending[0]["round"]
            nm = pending[0]
            next_match = {"round": nm["round"], "date": nm["date"],
                          "opponent": nm["opp"], "city": nm["city"]}
        elif won_last and not pending:
            eliminated = False           # campeon o aun vivo sin siguiente cargado
            eliminated_round = None
        else:
            eliminated = True
            eliminated_round = last["round"]
    else:
        # eliminado en fase de grupos: termina en base tras 3ra vuelta
        eliminated = True
        eliminated_round = "Group"
        reached = "Group"

    # ---- metricas ----
    total = round(sum(l["distance_km"] for l in legs), 1)
    group_km = round(sum(l["distance_km"] for l in legs if l["stage"] in ("Group", "Return")), 1)
    ko_km = round(total - group_km, 1)
    dists = [l["distance_km"] for l in legs]
    match_cities = []
    for l in legs:
        if l["stage"] not in ("Return",) and l["to"] not in match_cities:
            match_cities.append(l["to"])
    cities_visited = sorted(set(nodes))
    countries = sorted(set(country_of(c) if c != base_city else base_country for c in nodes))

    return {
        "team": name,
        "code": code,
        "confederation": conf,
        "baseCamp": base_city,
        "baseCampFacility": facility,
        "baseCampCountry": base_country,
        "baseCampCoords": list(base_pt),
        "eliminated": eliminated,
        "eliminatedRound": ROUND_NAMES_ES.get(eliminated_round) if eliminated_round else None,
        "stageReached": ROUND_NAMES_ES.get(reached, reached),
        "nextMatch": next_match,
        "legs": legs,
        "metrics": {
            "total_km": total,
            "group_stage_km": group_km,
            "knockout_km": ko_km,
            "num_legs": len(legs),
            "cities_visited": len(cities_visited),
            "countries_visited": len(countries),
            "countries": countries,
            "avg_leg_km": round(total/len(legs), 1) if legs else 0,
            "longest_leg_km": max(dists) if dists else 0,
            "shortest_leg_km": min(dists) if dists else 0,
        },
    }

# ---- construir todo ----
itineraries = {c: build_itinerary(c) for c in TEAMS}

# archivos de referencia
cities_json = {city: {"coords": list(pt),
                      "stadium": STADIUMS.get(city),
                      "country": country_of(city),
                      "is_host_city": city in STADIUMS}
               for city, pt in CITY_COORDS.items()}
teams_json = {c: {"name": n, "confederation": conf,
                  "baseCamp": BASE_CAMPS[c][0], "facility": BASE_CAMPS[c][1]}
              for c, (n, conf) in TEAMS.items()}
stadiums_json = {city: {"stadium": st, "coords": list(CITY_COORDS[city]),
                        "country": country_of(city)} for city, st in STADIUMS.items()}
base_camps_json = {c: {"team": TEAMS[c][0], "city": bc[0], "facility": bc[1],
                       "country": bc[2], "coords": list(CITY_COORDS[bc[0]])}
                   for c, bc in BASE_CAMPS.items()}
matches_json = {
    "group": [dict(date=d, group=g, home=a, away=b, city=c,
                   stadium=STADIUMS[c]) for d, g, a, b, c in GROUP_MATCHES],
    "knockout": [dict(match=m, date=d, round=r, teamA=a, teamB=b, city=c,
                      stadium=STADIUMS[c], winner=w, score=s)
                 for m, d, r, a, b, c, w, s in KO_MATCHES],
}

def dump(path, obj):
    with open(os.path.join(OUT, path), "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)

dump("data/teams.json", teams_json)
dump("data/cities.json", cities_json)
dump("data/stadiums.json", stadiums_json)
dump("data/base_camps.json", base_camps_json)
dump("data/matches.json", matches_json)
for c, it in itineraries.items():
    dump(f"data/itineraries/{c}.json", it)

# resumen / ranking
ranking = sorted(itineraries.values(), key=lambda x: -x["metrics"]["total_km"])
summary = {
    "generated": "2026-07-09",
    "status": "Cuartos de final en curso",
    "note": ("Selecciones eliminadas: recorrido completo. "
             "Los 8 de cuartos (ARG, SUI, FRA, MAR, NOR, ENG, ESP, BEL): "
             "recorrido hasta octavos; cuartos aun no computados."),
    "teams": len(itineraries),
    "ranking_by_distance": [
        {"code": t["code"], "team": t["team"], "total_km": t["metrics"]["total_km"],
         "stage": t["stageReached"], "eliminated": t["eliminated"]}
        for t in ranking
    ],
}
dump("data/metrics_summary.json", summary)

# ---- validacion en consola ----
print("=== VALIDACION ===\n")
col = itineraries["COL"]
print(f"COLOMBIA  base: {col['baseCamp']} ({col['baseCampFacility']})")
print(f"  Estado: {col['stageReached']} | eliminada en: {col['eliminatedRound']}")
print(f"  Total: {col['metrics']['total_km']:,} km  "
      f"(grupos {col['metrics']['group_stage_km']:,} + KO {col['metrics']['knockout_km']:,})")
print(f"  Tramos: {col['metrics']['num_legs']} | ciudades: {col['metrics']['cities_visited']} "
      f"| paises: {col['metrics']['countries_visited']}")
print("  Ruta:")
for l in col["legs"]:
    tag = l["stage"]
    extra = f"  vs {l.get('opponent')}" if l.get("opponent") else ""
    res = f"  [{l.get('result')}]" if l.get("result") else ""
    print(f"    {l['from']:>22} -> {l['to']:<22} {l['distance_km']:>7.1f} km  ({tag}){extra}{res}")

print("\n=== TOP 10 por distancia recorrida ===")
for i, t in enumerate(ranking[:10], 1):
    st = t["stageReached"]
    print(f"  {i:>2}. {t['team']:<18} {t['metrics']['total_km']:>8,.1f} km   {st}")
print("\n=== TOP 5 que MENOS viajaron ===")
for i, t in enumerate(ranking[-5:], 1):
    print(f"     {t['team']:<18} {t['metrics']['total_km']:>8,.1f} km   {t['stageReached']}")

tot = sum(t['metrics']['total_km'] for t in itineraries.values())
print(f"\nDistancia total sumada (48 selecciones): {tot:,.0f} km")
print(f"Archivos escritos en: {OUT}/data/")
