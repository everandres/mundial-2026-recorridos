"use client";
import { useMemo } from "react";
import Map, { useControl } from "react-map-gl/maplibre";
import { MapboxOverlay } from "@deck.gl/mapbox";
import { IconLayer, ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import { GreatCircleLayer } from "@deck.gl/geo-layers";
import type { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Timeline } from "@/lib/types";
import { rgb } from "@/lib/colors";
import { activeClashes, graves, teamMarkers, trailFlights } from "@/lib/timeline";

const TOMB =
  "data:image/svg+xml;base64," +
  btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M20 60h24V30a12 12 0 0 0-24 0z" fill="#8892ab"/><path d="M20 60h24V30a12 12 0 0 0-24 0z" fill="none" stroke="#c3cbe0" stroke-width="2"/><rect x="27" y="34" width="10" height="3" fill="#e9edf7"/><rect x="30.5" y="30" width="3" height="14" fill="#e9edf7"/></svg>`,
  );

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    na: { type: "geojson", data: "/geo/na.geojson" },
  },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#070B14" } },
    {
      id: "na-fill",
      type: "fill",
      source: "na",
      paint: { "fill-color": "#111a2e", "fill-opacity": 0.9 },
    },
    {
      id: "na-line",
      type: "line",
      source: "na",
      paint: { "line-color": "#2b3a52", "line-width": 1 },
    },
  ],
};

function DeckOverlay(props: { layers: unknown[] }) {
  const overlay = useControl(() => new MapboxOverlay({ interleaved: true }));
  // @ts-expect-error deck acepta layers dinámicos
  overlay.setProps({ layers: props.layers });
  return null;
}

export default function MapCanvas({ tl, t }: { tl: Timeline; t: number }) {
  const layers = useMemo(() => {
    const markers = teamMarkers(tl, t);
    const trails = trailFlights(tl, t);
    const clashes = activeClashes(tl, t);
    const tombs = graves(tl, t);

    return [
      new ScatterplotLayer({
        id: "stadiums",
        data: tl.stadiums,
        getPosition: (d: (typeof tl.stadiums)[number]) => d.coords,
        getRadius: 5,
        radiusUnits: "pixels",
        getFillColor: [245, 196, 81, 40],
        getLineColor: [245, 196, 81, 200],
        stroked: true,
        lineWidthMinPixels: 1,
      }),
      new TextLayer({
        id: "stadium-labels",
        data: tl.stadiums,
        getPosition: (d: (typeof tl.stadiums)[number]) => d.coords,
        getText: (d: (typeof tl.stadiums)[number]) => d.city,
        getSize: 10,
        getColor: [126, 137, 166, 200],
        getPixelOffset: [0, -12],
        fontFamily: "monospace",
        characterSet: "auto",
      }),
      new GreatCircleLayer({
        id: "trails",
        data: trails,
        getSourcePosition: (d) => d.from,
        getTargetPosition: (d) => d.to,
        getSourceColor: (d) => {
          const [r, g, b] = rgb(d.color);
          return [r, g, b, d.isReturn ? 35 : d.isKnockout ? 150 : 90];
        },
        getTargetColor: (d) => {
          const [r, g, b] = rgb(d.color);
          return [r, g, b, d.isReturn ? 35 : d.isKnockout ? 150 : 90];
        },
        getWidth: (d) => (d.isKnockout ? 2.5 : d.isReturn ? 0.8 : 1.4),
        widthUnits: "pixels",
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
          const a = Math.max(0, 220 - (t - d.tMatch) * 700);
          return d.isKnockout ? [245, 196, 81, a] : [233, 237, 247, a * 0.6];
        },
        lineWidthMinPixels: 2,
        updateTriggers: { getRadius: t, getLineColor: t },
      }),
      new IconLayer({
        id: "flags",
        data: markers,
        getPosition: (d) => d.pos,
        getIcon: (d) => ({
          id: d.eliminated ? `${d.iso}_g` : d.iso,
          url: `/flags/${d.iso}${d.eliminated ? "_gray" : ""}.png`,
          width: 128,
          height: 128,
          mask: false,
        }),
        getSize: (d) => (d.flying ? 34 : 26),
        sizeUnits: "pixels",
        billboard: true,
        updateTriggers: { getPosition: t, getIcon: t, getSize: t },
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
  }, [tl, t]);

  return (
    <Map
      initialViewState={{ longitude: -100, latitude: 37, zoom: 3.1 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      mapStyle={MAP_STYLE}
      maxBounds={[
        [-150, 6],
        [-45, 66],
      ]}
      attributionControl={false}
    >
      <DeckOverlay layers={layers} />
    </Map>
  );
}
