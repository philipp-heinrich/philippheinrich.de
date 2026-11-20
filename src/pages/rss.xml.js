import rss from "@astrojs/rss";
import siteConfig from "@/site-config";
import { sortMDByDate } from "@/utils";

export async function GET(context) {
	const posts = Object.values(import.meta.glob("./posts/**/*.{md,mdx}", { eager: true }));

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: sortMDByDate(posts).map((post) => ({
			title: post.frontmatter.title,
			pubDate: post.frontmatter.publishDate,
			description: post.frontmatter.description,
			link: post.url,
		})),
		customData: `<language>en-gb</language>`,
	});
}
