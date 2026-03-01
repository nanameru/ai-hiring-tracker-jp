export type MonthlyStat = {
	month: string;
	totalAiPosts: number;
	aiShare: number;
	growthYoY: number;
};

export type CompanyTrend = {
	name: string;
	postings: number;
	llmMentionRate: number;
	topRole: string;
};

export type RoleTrend = {
	role: string;
	latestCount: number;
	growthYoY: number;
};

export const monthlyStats: MonthlyStat[] = [
	{ month: "2025-10", totalAiPosts: 121340, aiShare: 0.39, growthYoY: 31.2 },
	{ month: "2025-11", totalAiPosts: 128920, aiShare: 0.41, growthYoY: 38.9 },
	{ month: "2025-12", totalAiPosts: 136440, aiShare: 0.44, growthYoY: 46.7 },
	{ month: "2026-01", totalAiPosts: 147888, aiShare: 0.5, growthYoY: 57.4 },
];

export const companyTrends: CompanyTrend[] = [
	{
		name: "???????",
		postings: 1211,
		llmMentionRate: 31.4,
		topRole: "?????????",
	},
	{ name: "IBM", postings: 980, llmMentionRate: 24.8, topRole: "???????????" },
	{ name: "SAP", postings: 620, llmMentionRate: 20.1, topRole: "???????????" },
	{ name: "Adobe", postings: 517, llmMentionRate: 18.3, topRole: "?????????" },
	{ name: "Visa", postings: 503, llmMentionRate: 17.9, topRole: "QA?????" },
];

export const roleTrends: RoleTrend[] = [
	{ role: "?????????", latestCount: 3300, growthYoY: 131 },
	{ role: "???????????", latestCount: 2373, growthYoY: 15 },
	{ role: "???????????", latestCount: 299, growthYoY: 26 },
	{ role: "??????????????", latestCount: 295, growthYoY: 13 },
	{ role: "DS??????", latestCount: 157, growthYoY: 59 },
];
