// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Sitio personal de GitHub Pages: se publica en la raíz del dominio, sin `base`.
  site: "https://miriandelacon13-ux.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
