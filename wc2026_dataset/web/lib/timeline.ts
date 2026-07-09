import type { Clash, Flight, LngLat, Team, Timeline } from "./types";

const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

// Interpolación sobre círculo máximo (slerp) para que la bandera siga el arco.
export function greatCircle(from: LngLat, to: LngLat, f: number): LngLat {
  const lon1 = from[0] * D2R, lat1 = from[1] * D2R;
  const lon2 = to[0] * D2R, lat2 = to[1] * D2R;
  const dLat = lat2 - lat1, dLon = lon2 - lon1;
  const hav =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const d = 2 * Math.asin(Math.min(1, Math.sqrt(hav)));
  if (d < 1e-9) return [from[0], from[1]];
  const A = Math.sin((1 - f) * d) / Math.sin(d);
  const B = Math.sin(f * d) / Math.sin(d);
  const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
  const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
  const z = A * Math.sin(lat1) + B * Math.sin(lat2);
  const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
  const lon = Math.atan2(y, x);
  return [lon * R2D, lat * R2D];
}

const easeInOut = (k: number) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);

export interface TeamMarker {
  code: string;
  iso: string;
  color: string;
  pos: LngLat;
  flying: boolean;
  eliminated: boolean;
  km: number;
}

// Índice vuelos-por-equipo (ordenados). Se cachea por Timeline para no
// reconstruirlo en cada frame (teamMarkers se llama varias veces por frame).
const indexCache = new WeakMap<Timeline, Map<string, Flight[]>>();
function flightIndex(tl: Timeline): Map<string, Flight[]> {
  let idx = indexCache.get(tl);
  if (idx) return idx;
  idx = new Map<string, Flight[]>();
  for (const f of tl.flights) {
    if (!idx.has(f.code)) idx.set(f.code, []);
    idx.get(f.code)!.push(f);
  }
  for (const arr of idx.values()) arr.sort((a, b) => a.tStart - b.tStart);
  indexCache.set(tl, idx);
  return idx;
}

// Posición actual de cada selección + km acumulado en el tiempo t.
export function teamMarkers(tl: Timeline, t: number): TeamMarker[] {
  const byTeam = flightIndex(tl);
  const markers: TeamMarker[] = [];
  for (const code of Object.keys(tl.teams)) {
    const team = tl.teams[code];
    const legs = byTeam.get(code) || [];
    let pos: LngLat = team.baseCoords;
    let flying = false;
    let km = 0;

    let inFlight: Flight | null = null;
    let lastDone: Flight | null = null;
    for (const lg of legs) {
      if (t >= lg.tStart && t <= lg.tEnd) inFlight = lg;
      if (t > lg.tEnd) lastDone = lg;
    }

    if (inFlight) {
      const raw = (t - inFlight.tStart) / (inFlight.tEnd - inFlight.tStart);
      const f = easeInOut(Math.max(0, Math.min(1, raw)));
      pos = greatCircle(inFlight.from, inFlight.to, f);
      flying = inFlight.distance_km > 1;
      km = inFlight.cumBefore + f * inFlight.distance_km;
    } else if (lastDone) {
      pos = lastDone.to;
      km = lastDone.cumulative_km;
    } else {
      pos = team.baseCoords;
      km = 0;
    }

    const eliminated = team.eliminated && team.elimTime != null && t >= team.elimTime;
    if (eliminated && team.elimCoords) pos = team.elimCoords;

    markers.push({ code, iso: team.iso, color: team.color, pos, flying, eliminated, km: Math.round(km) });
  }
  return markers;
}

export interface RankRow extends TeamMarker {
  rank: number;
  name: string;
  eliminatedRound: string | null;
}

export function ranking(tl: Timeline, markers: TeamMarker[]): RankRow[] {
  return markers
    .slice()
    .sort((a, b) => b.km - a.km)
    .map((m, i) => ({
      ...m,
      rank: i + 1,
      name: tl.teams[m.code].name,
      eliminatedRound: tl.teams[m.code].eliminatedRound,
    }));
}

// Vuelos con estela visible (ya iniciados).
export function trailFlights(tl: Timeline, t: number): Flight[] {
  return tl.flights.filter((f) => t >= f.tStart && f.distance_km > 1);
}

// Choques activos para el pulso en el mapa (dentro de una ventana temporal).
export function activeClashes(tl: Timeline, t: number, win = 0.28): Clash[] {
  return tl.clashes.filter((c) => t >= c.tMatch && t <= c.tMatch + win);
}

// Choque destacado para la tarjeta de resultado. En una jornada con varios
// partidos simultáneos (fase de grupos) cicla entre ellos a lo largo de la ventana.
export function featuredClash(tl: Timeline, t: number, win = 0.45): Clash | null {
  const active = tl.clashes.filter((c) => c.score && t >= c.tMatch && t <= c.tMatch + win);
  if (active.length === 0) return null;
  let latest = -Infinity;
  for (const c of active) if (c.tMatch > latest) latest = c.tMatch;
  const day = active.filter((c) => c.tMatch === latest).sort((a, b) => a.id.localeCompare(b.id));
  const cycle = 0.09; // cambia de tarjeta cada ~0.09 día
  const idx = Math.floor((t - latest) / cycle) % day.length;
  return day[idx];
}

// Eliminaciones ya ocurridas (para lápidas).
export function graves(tl: Timeline, t: number): Team[] {
  return Object.values(tl.teams).filter(
    (team) => team.eliminated && team.elimTime != null && t >= team.elimTime && team.elimCoords,
  );
}

export function fmtDate(day0: string, t: number): string {
  const ms = Date.parse(day0 + "T00:00:00Z") + t * 86400000;
  const d = new Date(ms);
  return d.toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
}
