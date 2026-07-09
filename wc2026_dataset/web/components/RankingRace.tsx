"use client";
import { useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Timeline } from "@/lib/types";
import { ranking, teamMarkers } from "@/lib/timeline";

export default function RankingRace({ tl, t }: { tl: Timeline; t: number }) {
  // Reordena a ~10 fps para no saturar el layout animado.
  const tq = Math.round(t * 10) / 10;
  const rows = useMemo(() => ranking(tl, teamMarkers(tl, tq)), [tl, tq]);
  const maxKm = Math.max(1, rows[0]?.km ?? 1);

  return (
    <aside className="ranking">
      <div className="rk-head">
        <span className="rk-title">Ranking · km recorridos</span>
        <span className="rk-sub">{rows.length} selecciones</span>
      </div>
      <div className="rk-list">
        <AnimatePresence>
          {rows.map((r) => (
            <motion.div
              key={r.code}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 42 }}
              className={`rk-row${r.eliminated ? " out" : ""}`}
            >
              <span className="rk-pos">{r.rank}</span>
              <img className="rk-flag" src={`/flags/${r.iso}${r.eliminated ? "_gray" : ""}.png`} alt="" />
              <div className="rk-body">
                <div className="rk-name">
                  {r.code}
                  <span className="rk-full">{r.name}</span>
                </div>
                <div className="rk-track">
                  <motion.div
                    className="rk-bar"
                    style={{ background: r.color }}
                    animate={{ width: `${(r.km / maxKm) * 100}%` }}
                    transition={{ duration: 0.25 }}
                  />
                </div>
              </div>
              <span className="rk-km">{r.km.toLocaleString("es")}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </aside>
  );
}
