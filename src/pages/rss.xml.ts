import rss from "@astrojs/rss";
import { type CollectionEntry, getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog: CollectionEntry<"blog">[] = (await getCollection("blog"))
    .filter((post: CollectionEntry<"blog">) => !post.data.draft);

  const projects: CollectionEntry<"projects">[] = (await getCollection("projects"))
    .filter((project: CollectionEntry<"projects">) => !project.data.draft);

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
