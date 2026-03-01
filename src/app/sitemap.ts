import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://ai-hiring-tracker-jp.vercel.app";
	const routes = [
		"",
		"/dashboard",
		"/companies",
		"/roles",
		"/about",
		"/help",
		"/terms",
		"/privacy",
		"/legal",
		"/status",
	];

	return routes.map((route) => ({
		url: `${base}${route}`,
		changeFrequency: "weekly",
		priority: route === "" ? 1 : 0.7,
	}));
}
