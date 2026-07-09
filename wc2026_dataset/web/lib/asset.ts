// Prefijo de ruta base. En GitHub Pages el sitio vive en /<repo>/, así que los
// assets absolutos (/data, /flags, /geo, /dormir.svg) deben llevar ese prefijo.
// En local NEXT_PUBLIC_BASE_PATH está vacío y todo funciona como /.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BASE}${p}`;
