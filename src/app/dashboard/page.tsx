export const dynamic = "force-dynamic";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monthlyStats, roleTrends } from "@/lib/mock-data";

const latest = monthlyStats[monthlyStats.length - 1];

export default function DashboardPage() {
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">ダッシュボード</h1>
				<Badge>{latest.month} 更新</Badge>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle className="text-sm">AI求人件数</CardTitle>
					</CardHeader>
					<CardContent className="text-2xl font-semibold">
						{latest.totalAiPosts.toLocaleString()}
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-sm">AI比率</CardTitle>
					</CardHeader>
					<CardContent className="text-2xl font-semibold">
						{latest.aiShare}%
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-sm">前年比</CardTitle>
					</CardHeader>
					<CardContent className="text-2xl font-semibold">
						+{latest.growthYoY}%
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>注目職種（上位5）</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					{roleTrends.map((role) => (
						<div
							key={role.role}
							className="flex items-center justify-between border-b pb-2 text-sm"
						>
							<span>{role.role}</span>
							<span className="font-medium">
								{role.latestCount.toLocaleString()}件 / +{role.growthYoY}%
							</span>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	);
}
