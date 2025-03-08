import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const articles = await getCollection("articles");

  return rss({
    title: "Mør: Field Notes",
    description: "A catchall for finds, discoveries, ideas and questions",
    site: "https://essens.dev",
    items: articles.map((a) => ({
      title: a.data.title,
      pubDate: "lol",
      link: `/${a.slug}/`,
      content: sanitizeHtml(parser.render(a.body)),
    })),
  });
}
