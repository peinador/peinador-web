import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeMermaid from "@beoe/rehype-mermaid";

export default defineConfig({
  site: "https://www.peinador.uk",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    syntaxHighlight: {
      excludeLangs: ["mermaid"]
    },
    rehypePlugins: [[rehypeMermaid, {
      strategy: "data-url",      // alternatively use "data-url"
      fsPath: "public/beoe", // add this to gitignore
      webPath: "/beoe",
      darkScheme: "class",
    },]]
  },
});
