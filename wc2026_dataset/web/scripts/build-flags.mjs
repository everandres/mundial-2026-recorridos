// Rasteriza las 48 banderas (flag-icons, formato 1x1) a PNG circular.
// Genera dos variantes por país: color (activo) y gris (eliminado).
// Salida: public/flags/{iso2}.png y public/flags/{iso2}_gray.png
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync, mkdirSync } from "node:fs";
import sharp from "sharp";
import { FIFA_TO_ISO } from "./fifa-iso.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "node_modules/flag-icons/flags/1x1");
const OUT = join(ROOT, "public/flags");
mkdirSync(OUT, { recursive: true });

const SIZE = 128;
// Máscara circular: opaco dentro del círculo, transparente fuera.
const circleMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`,
);

const isoCodes = [...new Set(Object.values(FIFA_TO_ISO))];
let count = 0;

for (const iso of isoCodes) {
  const svg = readFileSync(join(SRC, `${iso}.svg`));
  const base = sharp(svg, { density: 300 })
    .resize(SIZE, SIZE, { fit: "cover" })
    .composite([{ input: circleMask, blend: "dest-in" }]);

  await base.clone().png().toFile(join(OUT, `${iso}.png`));
  await base.clone().grayscale().modulate({ brightness: 0.55 }).png()
    .toFile(join(OUT, `${iso}_gray.png`));
  count++;
}

console.log(`✓ ${count} banderas x2 variantes -> public/flags/`);
