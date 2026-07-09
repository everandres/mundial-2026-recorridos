"use client";
import { useCallback, useMemo } from "react";
import MapGL, { useControl } from "react-map-gl/maplibre";
import { MapboxOverlay } from "@deck.gl/mapbox";
import { IconLayer, ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import { GreatCircleLayer } from "@deck.gl/geo-layers";
import type { ExpressionSpecification, StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Timeline } from "@/lib/types";
import { rgbDark } from "@/lib/colors";
import { activeClashes, explosions, graves, teamMarkers, trailFlights, EXPL_DUR, type TeamMarker } from "@/lib/timeline";

const TOMB =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M20 60h24V30a12 12 0 0 0-24 0z" fill="#6b7280"/><path d="M20 60h24V30a12 12 0 0 0-24 0z" fill="none" stroke="#2f3542" stroke-width="2"/><rect x="27" y="34" width="10" height="3" fill="#fff"/><rect x="30.5" y="30" width="3" height="14" fill="#fff"/></svg>`,
  );

// Explosión cómica (starburst) para el momento de la eliminación.
function starburst(cx: number, cy: number, spikes: number, outer: number, inner: number): string {
  let d = "";
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    d += (i === 0 ? "M" : "L") + (cx + Math.cos(a) * r).toFixed(1) + " " + (cy + Math.sin(a) * r).toFixed(1);
  }
  return d + "Z";
}
const EXPLO =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="${starburst(50, 50, 12, 48, 26)}" fill="#F2994A"/><path d="${starburst(50, 50, 12, 34, 15)}" fill="#F5C451"/><circle cx="50" cy="50" r="11" fill="#fff"/></svg>`,
  );

// Colores oficiales de los anfitriones FIFA 2026: USA azul, Canadá rojo, México verde.
const FILL_BY_CODE = ["match", ["get", "code"], "USA", "#E4EBFA", "CAN", "#FBE1E6", "MEX", "#E0F2E6", "#EFEFEF"] as ExpressionSpecification;
const LINE_BY_CODE = ["match", ["get", "code"], "USA", "#0A3EA1", "CAN", "#E4002B", "MEX", "#00843D", "#B9BDC7"] as ExpressionSpecification;

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    na: { type: "geojson", data: "/geo/na.geojson" },
  },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#FFFFFF" } },
    {
      id: "na-fill",
      type: "fill",
      source: "na",
      paint: { "fill-color": FILL_BY_CODE, "fill-opacity": 0.9 },
    },
    {
      id: "na-line",
      type: "line",
      source: "na",
      paint: { "line-color": LINE_BY_CODE, "line-width": 1.6 },
    },
  ],
};

function DeckOverlay(props: { layers: unknown[]; getTooltip: unknown }) {
  // overlaid (no interleaved): deck dibuja sobre el basemap y gestiona el picking
  // directamente, necesario para el clic en banderas y el tooltip de recorridos.
  const overlay = useControl(() => new MapboxOverlay({ interleaved: false }));
  // @ts-expect-error deck acepta props dinámicos
  overlay.setProps({ layers: props.layers, getTooltip: props.getTooltip });
  return null;
}

export default function MapCanvas({
  tl,
  t,
  focus,
  onSelect,
}: {
  tl: Timeline;
  t: number;
  focus: string | null;
  onSelect: (code: string) => void;
}) {
  const layers = useMemo(() => {
    const markers = teamMarkers(tl, t);
    // Con foco: se muestra el recorrido COMPLETO de ese equipo (todos sus legs);
    // sin foco: solo las estelas ya iniciadas en el tiempo t.
    const trails = focus ? tl.flights.filter((f) => f.code === focus) : trailFlights(tl, t);
    const clashes = activeClashes(tl, t).filter((c) => !focus || c.a.code === focus || c.b.code === focus);
    const tombs = graves(tl, t);
    const booms = explosions(tl, t);

    // Reparte en abanico las banderas que comparten posición (bases o sede de partido)
    // para que se vea que hay varias concentradas, no una sola.
    const FLAG = 20;
    const offsets: Map<string, [number, number]> = new Map();
    const groups: Map<string, TeamMarker[]> = new Map();
    for (const m of markers) {
      const key = `${m.pos[0].toFixed(2)},${m.pos[1].toFixed(2)}`;
      (groups.get(key) ?? groups.set(key, []).get(key)!).push(m);
    }
    for (const arr of groups.values()) {
      const n = arr.length;
      if (n === 1) {
        offsets.set(arr[0].code, [0, 0]);
        continue;
      }
      const R = Math.max(FLAG * 0.72, (n * FLAG) / (2 * Math.PI));
      arr.forEach((m, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        offsets.set(m.code, [Math.cos(a) * R, Math.sin(a) * R]);
      });
    }

    // Selecciones en reposo (no vuelan, no eliminadas): camita animada sobre la bandera.
    const resting = markers.filter((m) => !m.flying && !m.eliminated && (!focus || m.code === focus));
    const sleepSize = 16 + Math.sin(t * 5) * 1.3; // leve latido de sueño

    return [
      new ScatterplotLayer({
        id: "stadiums",
        data: tl.stadiums,
        getPosition: (d: (typeof tl.stadiums)[number]) => d.coords,
        getRadius: 5,
        radiusUnits: "pixels",
        getFillColor: [20, 23, 31, 35],
        getLineColor: [20, 23, 31, 190],
        stroked: true,
        lineWidthMinPixels: 1.5,
      }),
      new TextLayer({
        id: "stadium-labels",
        data: tl.stadiums,
        getPosition: (d: (typeof tl.stadiums)[number]) => d.coords,
        getText: (d: (typeof tl.stadiums)[number]) => d.city,
        getSize: 11,
        getColor: [20, 23, 31, 210],
        getPixelOffset: [0, -13],
        fontFamily: "Oswald, sans-serif",
        fontWeight: 600,
        characterSet: "auto",
        outlineColor: [255, 255, 255, 255],
        outlineWidth: 2,
        fontSettings: { sdf: true },
      }),
      new GreatCircleLayer({
        id: "trails",
        data: trails,
        pickable: true,
        getSourcePosition: (d) => d.from,
        getTargetPosition: (d) => d.to,
        getSourceColor: (d) => {
          const [r, g, b] = rgbDark(d.color);
          if (focus) return [r, g, b, d.isReturn ? 130 : 255];
          return [r, g, b, d.isReturn ? 55 : d.isKnockout ? 220 : 140];
        },
        getTargetColor: (d) => {
          const [r, g, b] = rgbDark(d.color);
          if (focus) return [r, g, b, d.isReturn ? 130 : 255];
          return [r, g, b, d.isReturn ? 55 : d.isKnockout ? 220 : 140];
        },
        getWidth: (d) =>
          focus ? (d.isKnockout ? 4 : d.isReturn ? 1.6 : 3) : d.isKnockout ? 2.5 : d.isReturn ? 0.8 : 1.4,
        widthUnits: "pixels",
        updateTriggers: { getSourceColor: focus, getTargetColor: focus, getWidth: focus },
      }),
      new ScatterplotLayer({
        id: "clash-pulse",
        data: clashes,
        getPosition: (d) => d.coords,
        getRadius: (d) => 8 + (t - d.tMatch) * 260,
        radiusUnits: "pixels",
        stroked: true,
        filled: false,
        getLineColor: (d) => {
          const a = Math.max(0, 230 - (t - d.tMatch) * 700);
          return d.isKnockout ? [228, 0, 43, a] : [10, 62, 161, a * 0.8];
        },
        lineWidthMinPixels: 2,
        updateTriggers: { getRadius: t, getLineColor: t },
      }),
      new IconLayer({
        id: "flags",
        data: markers,
        pickable: true,
        onClick: (info: { object?: TeamMarker }) => {
          if (info.object) onSelect(info.object.code);
        },
        getPosition: (d) => d.pos,
        getIcon: (d) => ({
          id: d.eliminated ? `${d.iso}_g` : d.iso,
          url: `/flags/${d.iso}${d.eliminated ? "_gray" : ""}.png`,
          width: 128,
          height: 128,
          mask: false,
        }),
        getSize: (d) => {
          const base = d.flying ? 28 : 20;
          return focus && d.code === focus ? base * 1.3 : base;
        },
        getColor: (d) => (!focus || d.code === focus ? [255, 255, 255, 255] : [255, 255, 255, 70]),
        getPixelOffset: (d) => offsets.get(d.code) ?? [0, 0],
        sizeUnits: "pixels",
        billboard: true,
        updateTriggers: {
          getPosition: t,
          getIcon: t,
          getSize: [t, focus],
          getColor: focus,
          getPixelOffset: t,
        },
      }),
      new IconLayer({
        id: "resting",
        data: resting,
        getPosition: (d: TeamMarker) => d.pos,
        getIcon: () => ({ id: "sleep", url: "/dormir.svg", width: 246, height: 246, mask: false }),
        getSize: sleepSize,
        getPixelOffset: (d: TeamMarker) => {
          const [ox, oy] = offsets.get(d.code) ?? [0, 0];
          const bob = Math.sin(t * 12 + d.code.charCodeAt(0)) * 1.4;
          return [ox + 13, oy - 15 + bob];
        },
        sizeUnits: "pixels",
        billboard: true,
        updateTriggers: { getSize: t, getPixelOffset: [t, focus] },
      }),
      new IconLayer({
        id: "explosions",
        data: booms,
        getPosition: (d) => d.elimCoords!,
        getIcon: () => ({ id: "boom", url: EXPLO, width: 100, height: 100, mask: false }),
        getSize: (d) => {
          const f = Math.min(1, Math.max(0, (t - d.elimTime!) / EXPL_DUR));
          return 14 + f * 46;
        },
        getColor: (d) => {
          const f = Math.min(1, Math.max(0, (t - d.elimTime!) / EXPL_DUR));
          return [255, 255, 255, Math.round(255 * (1 - f * f))];
        },
        sizeUnits: "pixels",
        billboard: true,
        updateTriggers: { getSize: t, getColor: t },
      }),
      new IconLayer({
        id: "graves",
        data: tombs,
        getPosition: (d) => d.elimCoords!,
        getIcon: () => ({ id: "tomb", url: TOMB, width: 64, height: 64, mask: false }),
        getSize: 22,
        getPixelOffset: [16, -2],
        sizeUnits: "pixels",
      }),
    ];
  }, [tl, t, focus, onSelect]);

  const getTooltip = useCallback(
    (info: { object?: { code?: string; fromCity?: string; toCity?: string }; layer?: { id?: string } }) => {
      const o = info.object;
      const id = info.layer?.id;
      if (!o?.code) return null;
      const name = tl.teams[o.code]?.name ?? o.code;
      const style = {
        background: "#fff",
        color: "#14171F",
        border: "2px solid #14171F",
        borderRadius: "4px",
        fontFamily: "Oswald, sans-serif",
        fontSize: "12px",
        padding: "6px 9px",
        boxShadow: "3px 3px 0 rgba(20,23,31,0.18)",
      };
      if (id === "trails") return { html: `<b>${name}</b><br/>${o.fromCity} → ${o.toCity}`, style };
      if (id === "flags") return { html: `<b>${name}</b>`, style };
      return null;
    },
    [tl],
  );

  return (
    <MapGL
      initialViewState={{ longitude: -100, latitude: 37, zoom: 3.1 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      mapStyle={MAP_STYLE}
      maxBounds={[
        [-150, 6],
        [-45, 66],
      ]}
      attributionControl={false}
    >
      <DeckOverlay layers={layers} getTooltip={getTooltip} />
    </MapGL>
  );
}
