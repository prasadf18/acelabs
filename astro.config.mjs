import { defineConfig } from "astro/config";

// Where the site is hosted. These defaults match the GitHub Pages project URL:
//   https://prasadf18.github.io/acelabs/
//
// If the site moves to a custom domain, set these at build time instead of
// editing code:
//   SITE_URL=https://example.com BASE_PATH=/ npm run build
const site = process.env.SITE_URL ?? "https://prasadf18.github.io";
const base = process.env.BASE_PATH ?? "/acelabs";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  build: { format: "directory" },
});
