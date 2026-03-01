import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: "*", allow: "/" }],
		sitemap: "https://ai-hiring-tracker-jp.vercel.app/sitemap.xml",
	};
}
