import { defineConfig } from "astro/config";
import { site } from "./src/site";
import inspectUrls from "@jsdevtools/rehype-url-inspector";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        inspectUrls,
        {
          selectors: ["a[href]"],
          inspectEach(url) {
            if (
              !url.node.properties.href.includes(site.address) &&
              !url.node.properties.href.includes("#user-content")
            ) {
              url.node.properties.target = "_blank";
              url.node.properties.className = "external";
            }
          },
        },
      ],
      // ...other markdown configuration options
    ],
  },

  adapter: vercel(),
});