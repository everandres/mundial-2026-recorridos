// Preprocesa el dataset (../../data) en un único timeline.json que consume el frontend.
// Modelo temporal: cada leg es un vuelo con ventana [tStart,tEnd] dentro de su día.
//   - salida (con opponent): mañana, aterriza justo antes del partido (0.5 del día)
//   - regreso (Return):      tarde, después del partido
// Los choques (matches) se derivan de matches.json y se cruzan con los legs para
// confirmar presencia de ambos equipos (excluye cuartos pendientes sin vuelos).
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { FIFA_TO_ISO, CONFED_COLORS } from "./fifa-iso.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA = join(ROOT, "..", "data");
const OUT_DIR = join(ROOT, "public", "data");
mkdirSync(OUT_DIR, { recursive: true });

const readJSON = (p) => JSON.parse(readFileSync(join(DATA, p), "utf8"));

const teamsRaw = readJSON("teams.json");
const citiesRaw = readJSON("cities.json");
const stadiumsRaw = readJSON("stadiums.json");
const matchesRaw = readJSON("matches.json");
const summary = readJSON("metrics_summary.json");

// ---- helpers ----
const DAY0 = Date.parse("2026-06-11T00:00:00Z");
const dayOf = (d) => (Date.parse(d + "T00:00:00Z") - DAY0) / 86400000;
const lonlat = ([lat, lon]) => [lon, lat]; // dataset guarda [lat,lon]; deck.gl usa [lon,lat]
const iso = (code) => FIFA_TO_ISO[code] || "un";
const color = (conf) => CONFED_COLORS[conf] || "#F5C451";
const cityCoords = (name) => {
  const c = citiesRaw[name] || stadiumsRaw[name];
  return c ? lonlat(c.coords) : null;
};

// ---- itinerarios -> flights + teams + eliminaciones ----
const itinFiles = readdirSync(join(DATA, "itineraries")).filter((f) => f.endsWith(".json"));
const flights = [];
const teams = {};
let maxDay = 0;
// presencia: `${code}|${date}|${city}` para confirmar choques
const presence = new Set();

for (const file of itinFiles) {
  const it = JSON.parse(readFileSync(join(DATA, "itineraries", file), "utf8"));
  const code = it.code;
  const conf = it.confederation;
  const col = color(conf);

  // leg de eliminación = último leg con opponent (último partido jugado)
  let elimLeg = null;
  for (const lg of it.legs) if (lg.opponent) elimLeg = lg;

  it.legs.forEach((lg, i) => {
    const d = dayOf(lg.date);
    const isReturn = lg.stage === "Return";
    const isKnockout = ["Round32", "Round16", "Quarterfinal"].includes(lg.stage);
    // ventana temporal dentro del día: el vuelo de ida planea buena parte de la
    // jornada y aterriza justo antes del partido (0.5); el regreso ocupa la tarde.
    const tStart = isReturn ? d + 0.56 : d + 0.05;
    const tEnd = isReturn ? d + 0.96 : d + 0.48;
    if (tEnd > maxDay) maxDay = tEnd;

    flights.push({
      id: `${code}-${i}`,
      code,
      iso: iso(code),
      confederation: conf,
      color: col,
      from: lonlat(lg.from_coords),
      to: lonlat(lg.to_coords),
      fromCity: lg.from,
      toCity: lg.to,
      stage: lg.stage,
      isReturn,
      isKnockout,
      date: lg.date,
      day: d,
      tStart,
      tEnd,
      distance_km: lg.distance_km,
      cumBefore: +(lg.cumulative_km - lg.distance_km).toFixed(1),
      cumulative_km: lg.cumulative_km,
      opponent: lg.opponent || null,
      result: lg.result || null,
    });

    if (lg.opponent) presence.add(`${code}|${lg.date}|${lg.to}`);
  });

  const t = teamsRaw[code] || {};
  const elim = it.eliminated
    ? {
        elimCity: elimLeg ? elimLeg.to : it.baseCamp,
        elimCoords: elimLeg ? lonlat(elimLeg.to_coords) : lonlat(it.baseCampCoords),
        elimDay: elimLeg ? dayOf(elimLeg.date) : maxDay,
        elimTime: (elimLeg ? dayOf(elimLeg.date) : maxDay) + 0.55,
      }
    : {};

  teams[code] = {
    code,
    name: it.team,
    confederation: conf,
    iso: iso(code),
    color: col,
    baseCamp: it.baseCamp,
    baseCoords: lonlat(it.baseCampCoords),
    eliminated: it.eliminated,
    eliminatedRound: it.eliminatedRound || null,
    stageReached: it.stageReached,
    totalKm: it.metrics.total_km,
    ...elim,
  };
}

// ---- choques (matches) desde matches.json, confirmados por presencia de legs ----
const clashes = [];
let cid = 0;

const pushClash = (m, a, b, isKnockout) => {
  const coords = cityCoords(m.city);
  if (!coords) return;
  const d = dayOf(m.date);
  // solo si ambos equipos "vuelan" a esa sede ese día
  if (!presence.has(`${a}|${m.date}|${m.city}`) || !presence.has(`${b}|${m.date}|${m.city}`)) return;
  clashes.push({
    id: `clash-${cid++}`,
    date: m.date,
    day: d,
    tMatch: d + 0.5,
    city: m.city,
    stadium: m.stadium,
    coords,
    round: isKnockout ? m.round : `Grupo ${m.group}`,
    isKnockout,
    a: { code: a, iso: iso(a), color: color(teams[a]?.confederation) },
    b: { code: b, iso: iso(b), color: color(teams[b]?.confederation) },
    score: m.score || null,
    penalties: m.penalties || null,
    winner: m.winner || null,
  });
};

for (const m of matchesRaw.group) pushClash(m, m.home, m.away, false);
for (const m of matchesRaw.knockout) pushClash(m, m.teamA, m.teamB, true);

// ---- nodos de ciudad / sedes para el mapa ----
const stadiums = Object.entries(stadiumsRaw).map(([city, s]) => ({
  city,
  stadium: s.stadium,
  coords: lonlat(s.coords),
  country: s.country,
}));
const cities = Object.entries(citiesRaw).map(([name, c]) => ({
  name,
  coords: lonlat(c.coords),
  isHost: !!c.is_host_city,
  stadium: c.stadium,
}));

flights.sort((x, y) => x.tStart - y.tStart);
clashes.sort((x, y) => x.tMatch - y.tMatch);

// maxDay debe cubrir el último choque (tMatch+ventana de tarjeta) y eliminación.
for (const c of clashes) maxDay = Math.max(maxDay, c.tMatch + 0.5);
for (const code of Object.keys(teams)) {
  const e = teams[code].elimTime;
  if (e != null) maxDay = Math.max(maxDay, e + 0.1);
}

const out = {
  meta: {
    generated: summary.generated,
    status: summary.status,
    day0: "2026-06-11",
    minDay: 0,
    maxDay: +maxDay.toFixed(3),
    dayCount: Math.ceil(maxDay) + 1,
  },
  teams,
  flights,
  clashes,
  stadiums,
  cities,
};

writeFileSync(join(OUT_DIR, "timeline.json"), JSON.stringify(out));
console.log(
  `✓ timeline.json  teams=${Object.keys(teams).length} flights=${flights.length} clashes=${clashes.length} stadiums=${stadiums.length} maxDay=${out.meta.maxDay}`,
);
