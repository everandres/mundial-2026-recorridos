import type { Metadata } from "next";
import { Alfa_Slab_One, Oswald } from "next/font/google";
import "./globals.css";

// Alfa Slab One: slab pesada tipo cartel de imprenta / pancarta clásica.
const display = Alfa_Slab_One({ variable: "--font-display", subsets: ["latin"], weight: ["400"] });
// Oswald: condensada atlética, para etiquetas, datos y texto.
const cond = Oswald({ variable: "--font-cond", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Mundial 2026 · Recorridos en vivo",
  description: "Animación día a día de los vuelos de las 48 selecciones del Mundial FIFA 2026.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${cond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
