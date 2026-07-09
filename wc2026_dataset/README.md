# Recorridos de las selecciones — Mundial FIFA 2026

Dataset abierto y reutilizable con el itinerario, distancia recorrida y métricas de
las 48 selecciones, desde el inicio del torneo hasta su eliminación (o hasta hoy si
siguen vivas). Estado: **9 de julio de 2026 — cuartos de final en curso**.

## Estructura

```
data/
├── teams.json          48 selecciones (código, confederación, base)
├── cities.json         todas las ciudades con coordenadas y estadio
├── stadiums.json       16 sedes
├── base_camps.json     48 Team Base Camps (ciudad, instalación, coords)
├── matches.json        104 partidos (72 grupos + 32 eliminatorias) con sede y resultado
├── metrics_summary.json ranking por distancia y estado del torneo
└── itineraries/
      COL.json, ARG.json, ...   un archivo por selección
```

## Modelo de recorrido (según logística FIFA)

- **Fase de grupos:** cada selección opera desde su Base Camp. Por cada partido se
  generan dos tramos: `Base → Sede` (`Group`) y `Sede → Base` (`Return`).
- **Clasificación:** el último salto de grupos es `Base → Dieciseisavos` (`Round32`).
- **Eliminatorias:** desde dieciseisavos se viaja ciudad-a-ciudad, sin volver a la base
  (`Round16`, `Quarterfinal`, ...). El recorrido termina donde la selección es eliminada.

Distancias por **haversine** (geodésica) entre coordenadas consecutivas. Cada tramo
trae `distance_km` y `cumulative_km`.

## Métricas por selección

total_km, group_stage_km, knockout_km, num_legs, cities_visited, countries_visited,
avg_leg_km, longest_leg_km, shortest_leg_km, stageReached, eliminatedRound.

## Notas y límites

- **Torneo en curso:** las ~40 selecciones eliminadas tienen recorrido completo. Las 8
  de cuartos (ARG, SUI, FRA, MAR, NOR, ENG, ESP, BEL) tienen recorrido **hasta octavos**;
  el partido de cuartos aún no se computa y su km seguirá creciendo.
- Coordenadas de sedes = estadio; coordenadas de bases = ciudad/instalación (aprox.).
- Un tramo puede dar 0 km si la selección juega en su propia ciudad base
  (p. ej. Colombia vs RD Congo en Guadalajara).

## Fuentes

FIFA, US Soccer, NPR, NBC, Yahoo Sports, worldcupwiki, KickoffAdventures (calendario,
sedes, bases y resultados de eliminatorias).
