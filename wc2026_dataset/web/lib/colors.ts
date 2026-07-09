// Paleta heredada de mapa-recorridos.html
export const THEME = {
  ink: "#090D18",
  panel: "#0F1526",
  panel2: "#141B30",
  line: "rgba(255,255,255,.07)",
  tx: "#E9EDF7",
  mut: "#7E89A6",
  gold: "#F5C451",
};

export const CONFED_COLORS: Record<string, string> = {
  CONMEBOL: "#FFD23F",
  UEFA: "#56CCF2",
  CAF: "#2ECC71",
  AFC: "#FF6B6B",
  CONCACAF: "#C78BFF",
  OFC: "#F2994A",
};

// hex "#RRGGBB" -> [r,g,b]
export function rgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}
