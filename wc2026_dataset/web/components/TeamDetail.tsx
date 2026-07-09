"use client";
import { motion } from "motion/react";
import type { Timeline } from "@/lib/types";

const MES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const fdate = (iso: string) => {
  const [, m, d] = iso.split("-").map(Number);
  return `${d} ${MES[m - 1]}`;
};
const STAGE_ES: Record<string, string> = {
  Group: "Grupo",
  Return: "Regreso",
  Round32: "Dieciseisavos",
  Round16: "Octavos",
  Quarterfinal: "Cuartos",
};
const orient = (score: string | null, isB: boolean) => {
  if (!score) return null;
  const [x, y] = score.split("-");
  return isB ? `${y}-${x}` : `${x}-${y}`;
};

export default function TeamDetail({
  tl,
  code,
  onClose,
}: {
  tl: Timeline;
  code: string;
  onClose: () => void;
}) {
  const team = tl.teams[code];
  if (!team) return null;
  const m = team.metrics;
  const legs = tl.flights.filter((f) => f.code === code);
  const matches = tl.clashes
    .filter((c) => c.a.code === code || c.b.code === code)
    .sort((a, b) => a.tMatch - b.tMatch);

  return (
    <div className="detail-backdrop" onClick={onClose}>
      <motion.div
        className="detail"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
      >
        <div className="tricolor" aria-hidden />
        <button className="detail-close" onClick={onClose} aria-label="Cerrar">✕</button>

        <header className="detail-head">
          <img className="detail-flag" src={`/flags/${team.iso}.png`} alt="" />
          <div className="detail-id">
            <div className="detail-name">{team.name}</div>
            <div className="detail-sub">{team.code} · {team.confederation}</div>
          </div>
          <div className={`detail-stage ${team.eliminated ? "out" : "live"}`}>
            {team.eliminated ? `Eliminado · ${team.eliminatedRound}` : team.stageReached}
          </div>
        </header>

        <div className="detail-base">
          <span className="db-k">Base de operaciones</span>
          {team.baseCamp}{team.baseCampFacility ? ` · ${team.baseCampFacility}` : ""}
          {team.baseCampCountry ? ` (${team.baseCampCountry})` : ""}
        </div>

        <div className="detail-stats">
          <Stat k="km totales" v={team.totalKm.toLocaleString("es")} />
          <Stat k="km grupos" v={m.group_stage_km.toLocaleString("es")} />
          <Stat k="km eliminatorias" v={m.knockout_km.toLocaleString("es")} />
          <Stat k="tramos" v={String(m.num_legs)} />
          <Stat k="ciudades" v={String(m.cities_visited)} />
          <Stat k="países" v={String(m.countries_visited)} />
        </div>

        <div className="detail-cols">
          <section>
            <h4>Partidos</h4>
            <div className="mlist">
              {matches.map((c) => {
                const isB = c.b.code === code;
                const opp = isB ? c.a : c.b;
                const sc = orient(c.score, isB);
                const pen = orient(c.penalties, isB);
                const outcome = c.winner === code ? "win" : c.winner ? "loss" : "draw";
                return (
                  <div key={c.id} className="mtch">
                    <span className="m-date">{fdate(c.date)}</span>
                    <span className="m-round">
                      {c.round}
                      {c.kickoff ? <em>{c.kickoff}</em> : null}
                    </span>
                    <img className="m-flag" src={`/flags/${opp.iso}.png`} alt="" />
                    <span className="m-opp">{opp.code}</span>
                    <span className={`m-score ${outcome}`}>
                      {sc ?? "vs"}{pen ? ` · pen ${pen}` : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h4>Recorrido</h4>
            <div className="llist">
              {legs.map((f) => (
                <div key={f.id} className={`leg${f.isReturn ? " ret" : ""}`}>
                  <span className="l-date">{fdate(f.date)}</span>
                  <span className="l-route">{f.fromCity} → {f.toCity}</span>
                  <span className="l-stage">{STAGE_ES[f.stage] ?? f.stage}</span>
                  <span className="l-km">{f.distance_km.toLocaleString("es")} km</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="dstat">
      <div className="dstat-v">{v}</div>
      <div className="dstat-k">{k}</div>
    </div>
  );
}
