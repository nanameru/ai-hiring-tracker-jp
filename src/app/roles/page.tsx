import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roleTrends } from "@/lib/mock-data";

export default function RolesPage() {
	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-bold">職種別トレンド</h1>
			<Card>
				<CardHeader>
					<CardTitle>前年比成長率</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					{roleTrends.map((role) => (
						<div
							key={role.role}
							className="flex items-center justify-between rounded border p-3 text-sm"
						>
							<span>{role.role}</span>
							<span className="font-medium">
								{role.latestCount.toLocaleString()}件（+{role.growthYoY}%）
							</span>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	);
}
