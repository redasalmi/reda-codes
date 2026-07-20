// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      weights: [400, 500, 600],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--font-space-mono",
      weights: [400, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
