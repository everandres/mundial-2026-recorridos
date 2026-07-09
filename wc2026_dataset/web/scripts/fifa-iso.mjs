// Mapeo código FIFA (3 letras) -> ISO2 usado por flag-icons.
// Casos especiales: ENG/SCO usan subdivisiones británicas (gb-eng, gb-sct).
export const FIFA_TO_ISO = {
  ALG: "dz", ARG: "ar", AUS: "au", AUT: "at", BEL: "be", BIH: "ba",
  BRA: "br", CAN: "ca", CIV: "ci", COD: "cd", COL: "co", CPV: "cv",
  CRO: "hr", CUW: "cw", CZE: "cz", ECU: "ec", EGY: "eg", ENG: "gb-eng",
  ESP: "es", FRA: "fr", GER: "de", GHA: "gh", HAI: "ht", IRN: "ir",
  IRQ: "iq", JOR: "jo", JPN: "jp", KOR: "kr", KSA: "sa", MAR: "ma",
  MEX: "mx", NED: "nl", NOR: "no", NZL: "nz", PAN: "pa", PAR: "py",
  POR: "pt", QAT: "qa", RSA: "za", SCO: "gb-sct", SEN: "sn", SUI: "ch",
  SWE: "se", TUN: "tn", TUR: "tr", URU: "uy", USA: "us", UZB: "uz",
};

// Colores por confederación (heredados del mapa-recorridos.html original).
export const CONFED_COLORS = {
  CONMEBOL: "#FFD23F",
  UEFA: "#56CCF2",
  CAF: "#2ECC71",
  AFC: "#FF6B6B",
  CONCACAF: "#C78BFF",
  OFC: "#F2994A",
};
