import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fieldnotes.databard.co.uk",
  integrations: [mdx(), sitemap()],
  output: "static",
});
