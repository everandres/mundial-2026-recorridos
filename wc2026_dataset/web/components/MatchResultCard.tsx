"use client";
import { AnimatePresence, motion } from "motion/react";
import type { Clash } from "@/lib/types";

export default function MatchResultCard({ clash }: { clash: Clash | null }) {
  return (
    <AnimatePresence>
      {clash && (
        <motion.div
          key={clash.id}
          className="result"
          initial={{ opacity: 0, y: -18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          <div className="rs-round">{clash.round} · {clash.city}</div>
          <div className="rs-body">
            <Side iso={clash.a.iso} code={clash.a.code} win={clash.winner === clash.a.code} dir={-1} />
            <div className="rs-score">
              <span>{clash.score ?? "vs"}</span>
              {clash.penalties && <small>penales {clash.penalties}</small>}
              {!clash.penalties && !clash.winner && clash.score && <small>empate</small>}
            </div>
            <Side iso={clash.b.iso} code={clash.b.code} win={clash.winner === clash.b.code} dir={1} />
          </div>
          <div className="rs-stadium">{clash.stadium}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Side({ iso, code, win, dir }: { iso: string; code: string; win: boolean; dir: number }) {
  return (
    <motion.div
      className={`rs-side${win ? " win" : ""}`}
      initial={{ x: dir * 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.05 }}
    >
      <img src={`/flags/${iso}.png`} alt="" />
      <span>{code}</span>
      {win && <em>▲</em>}
    </motion.div>
  );
}
