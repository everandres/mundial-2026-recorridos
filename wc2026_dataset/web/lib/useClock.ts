"use client";
import { useCallback, useEffect, useRef, useState } from "react";

interface Opts {
  min: number;
  max: number;
  speed?: number; // días por segundo
}

export function useClock({ min, max, speed = 0.4 }: Opts) {
  const [t, setT] = useState(min);
  const [playing, setPlaying] = useState(false);
  const [spd, setSpd] = useState(speed);
  const raf = useRef<number | null>(null);
  const last = useRef<number | null>(null);
  const tRef = useRef(min);
  tRef.current = t;

  useEffect(() => {
    if (!playing) {
      if (raf.current) cancelAnimationFrame(raf.current);
      last.current = null;
      return;
    }
    const step = (now: number) => {
      if (last.current == null) last.current = now;
      const dt = (now - last.current) / 1000;
      last.current = now;
      let next = tRef.current + dt * spd;
      if (next >= max) {
        next = max;
        setPlaying(false);
      }
      setT(next);
      if (next < max) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [playing, spd, max]);

  const toggle = useCallback(() => {
    setT((cur) => (cur >= max ? min : cur));
    setPlaying((p) => !p);
  }, [max, min]);

  const seek = useCallback((v: number) => {
    setPlaying(false);
    setT(Math.max(min, Math.min(max, v)));
  }, [min, max]);

  return { t, playing, speed: spd, setSpeed: setSpd, toggle, seek, setPlaying };
}
