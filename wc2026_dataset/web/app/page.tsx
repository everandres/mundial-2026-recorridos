"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { Timeline } from "@/lib/types";
import { useClock } from "@/lib/useClock";
import { featuredClash, teamMarkers } from "@/lib/timeline";
import RankingRace from "@/components/RankingRace";
import TimelineControls from "@/components/TimelineControls";
import MatchResultCard from "@/components/MatchResultCard";

const MapCanvas = dynamic(() => import("@/components/MapCanvas"), { ssr: false });

export default function Page() {
  const [tl, setTl] = useState<Timeline | null>(null);
  useEffect(() => {
    fetch("/data/timeline.json")
      .then((r) => r.json())
      .then(setTl);
  }, []);

  if (!tl) return <div className="loading">Cargando recorridos…</div>;
  return <Board tl={tl} />;
}

function Board({ tl }: { tl: Timeline }) {
  const { t, playing, speed, setSpeed, toggle, seek } = useClock({
    min: tl.meta.minDay,
    max: tl.meta.maxDay,
  });

  const totalKm = useMemo(
    () => teamMarkers(tl, t).reduce((s, m) => s + m.km, 0),
    [tl, t],
  );
  const featured = useMemo(() => featuredClash(tl, t), [tl, t]);
  const alive = useMemo(
    () => Object.values(tl.teams).filter((x) => !(x.eliminated && x.elimTime != null && t >= x.elimTime)).length,
    [tl, t],
  );

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          MUNDIAL 2026
          <small>RECORRIDOS EN VIVO · {tl.meta.status.toUpperCase()}</small>
        </div>
        <div className="legend">
          <span><i style={{ background: "#FFD23F" }} />CONMEBOL</span>
          <span><i style={{ background: "#56CCF2" }} />UEFA</span>
          <span><i style={{ background: "#2ECC71" }} />CAF</span>
          <span><i style={{ background: "#FF6B6B" }} />AFC</span>
          <span><i style={{ background: "#C78BFF" }} />CONCACAF</span>
          <span><i style={{ background: "#F2994A" }} />OFC</span>
        </div>
      </header>

      <main className="stage">
        <div className="mapwrap">
          <MapCanvas tl={tl} t={t} />
          <div className="counter">
            <div className="c1">{Math.round(totalKm).toLocaleString("es")} km</div>
            <div className="c2">DISTANCIA TOTAL ACUMULADA · {alive} SELECCIONES EN PIE</div>
          </div>
          <MatchResultCard clash={featured} />
          <TimelineControls
            t={t}
            min={tl.meta.minDay}
            max={tl.meta.maxDay}
            playing={playing}
            speed={speed}
            day0={tl.meta.day0}
            onToggle={toggle}
            onSeek={seek}
            onSpeed={setSpeed}
          />
        </div>
        <RankingRace tl={tl} t={t} />
      </main>
    </div>
  );
}
