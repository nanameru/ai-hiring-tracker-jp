import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	companies: defineTable({
		name: v.string(),
		industry: v.string(),
		region: v.string(),
		employeeSize: v.optional(v.string()),
	}),
	jobPosts: defineTable({
		companyId: v.id("companies"),
		role: v.string(),
		salaryMin: v.optional(v.number()),
		salaryMax: v.optional(v.number()),
		location: v.string(),
		postedAt: v.string(),
		source: v.string(),
	}),
	skillMentions: defineTable({
		jobPostId: v.id("jobPosts"),
		skill: v.string(),
		category: v.string(),
	}),
	monthlyStats: defineTable({
		month: v.string(),
		totalAiPosts: v.number(),
		aiShare: v.number(),
		growthYoY: v.number(),
	}),
});
