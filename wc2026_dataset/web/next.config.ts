import type { NextConfig } from "next";

// Export estático para GitHub Pages. basePath/assetPrefix se toman de la variable
// NEXT_PUBLIC_BASE_PATH (definida solo en CI = "/mundial-2026-recorridos").
// En local queda vacío, así que el sitio funciona en "/".
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: base || undefined,
  assetPrefix: base || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
