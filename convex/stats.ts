import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getLatestMonthlyStat = query({
	args: {},
	handler: async (ctx) => {
		const rows = await ctx.db.query("monthlyStats").collect();
		const sorted = rows.sort((a, b) => b.month.localeCompare(a.month));
		return sorted[0] ?? null;
	},
});

export const listRoleTrends = query({
	args: {},
	handler: async (ctx) => {
		const posts = await ctx.db.query("jobPosts").collect();
		const counts = new Map<string, number>();

		for (const post of posts) {
			const count = counts.get(post.role) ?? 0;
			counts.set(post.role, count + 1);
		}

		return Array.from(counts.entries())
			.map(([role, latestCount]) => ({ role, latestCount }))
			.sort((a, b) => b.latestCount - a.latestCount)
			.slice(0, 10);
	},
});

export const listCompanyRanking = query({
	args: {},
	handler: async (ctx) => {
		const companies = await ctx.db.query("companies").collect();
		const posts = await ctx.db.query("jobPosts").collect();

		const postingByCompany = new Map<string, number>();
		for (const post of posts) {
			const key = post.companyId;
			postingByCompany.set(key, (postingByCompany.get(key) ?? 0) + 1);
		}

		return companies
			.map((company) => ({
				companyId: company._id,
				name: company.name,
				postings: postingByCompany.get(company._id) ?? 0,
			}))
			.sort((a, b) => b.postings - a.postings)
			.slice(0, 20);
	},
});

export const seedDemoData = mutation({
	args: {
		force: v.optional(v.boolean()),
	},
	handler: async (ctx, args) => {
		const existing = await ctx.db.query("monthlyStats").first();
		if (existing && !args.force) {
			return { seeded: false, reason: "already-seeded" as const };
		}

		if (args.force) {
			const monthly = await ctx.db.query("monthlyStats").collect();
			const companies = await ctx.db.query("companies").collect();
			const posts = await ctx.db.query("jobPosts").collect();
			const skills = await ctx.db.query("skillMentions").collect();

			for (const row of skills) await ctx.db.delete(row._id);
			for (const row of posts) await ctx.db.delete(row._id);
			for (const row of companies) await ctx.db.delete(row._id);
			for (const row of monthly) await ctx.db.delete(row._id);
		}

		await ctx.db.insert("monthlyStats", {
			month: "2025-12",
			totalAiPosts: 136440,
			aiShare: 0.44,
			growthYoY: 46.7,
		});
		await ctx.db.insert("monthlyStats", {
			month: "2026-01",
			totalAiPosts: 147888,
			aiShare: 0.5,
			growthYoY: 57.4,
		});

		const accentureId = await ctx.db.insert("companies", {
			name: "アクセンチュア",
			industry: "ITコンサル",
			region: "東京",
			employeeSize: "10000+",
		});

		const ibmId = await ctx.db.insert("companies", {
			name: "IBM",
			industry: "テクノロジー",
			region: "東京",
			employeeSize: "10000+",
		});

		await ctx.db.insert("jobPosts", {
			companyId: accentureId,
			role: "機械学習エンジニア",
			salaryMin: 700,
			salaryMax: 1200,
			location: "東京",
			postedAt: "2026-02-01",
			source: "demo",
		});

		await ctx.db.insert("jobPosts", {
			companyId: ibmId,
			role: "データサイエンティスト",
			salaryMin: 650,
			salaryMax: 1100,
			location: "東京",
			postedAt: "2026-02-02",
			source: "demo",
		});

		return { seeded: true };
	},
});
