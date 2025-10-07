// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node"; // or '@astrojs/vercel/static'
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["clsx", "kleur", "@astrojs/ssr-adapter"],
    },
  },
  adapter: node({
    mode: "standalone",
  }),
});
