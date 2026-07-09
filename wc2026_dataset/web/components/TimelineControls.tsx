"use client";
import { fmtDate } from "@/lib/timeline";

interface Props {
  t: number;
  min: number;
  max: number;
  playing: boolean;
  speed: number;
  day0: string;
  onToggle: () => void;
  onSeek: (v: number) => void;
  onSpeed: (v: number) => void;
}

const SPEEDS = [0.35, 0.7, 1.5, 3];

export default function TimelineControls(p: Props) {
  return (
    <div className="controls">
      <button className="play" onClick={p.onToggle}>
        {p.playing ? "❚❚" : "▶"}
      </button>
      <div className="date">{fmtDate(p.day0, p.t)}</div>
      <input
        className="scrub"
        type="range"
        min={p.min}
        max={p.max}
        step={0.01}
        value={p.t}
        onChange={(e) => p.onSeek(parseFloat(e.target.value))}
      />
      <div className="speeds">
        {SPEEDS.map((s) => (
          <button
            key={s}
            className={`spd${p.speed === s ? " on" : ""}`}
            onClick={() => p.onSpeed(s)}
          >
            {s}×
          </button>
        ))}
      </div>
    </div>
  );
}
