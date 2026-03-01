import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { companyTrends } from "@/lib/mock-data";

export default function CompaniesPage() {
	return (
		<div className="space-y-4">
			<h1 className="text-2xl font-bold">企業別ランキング</h1>
			<Card>
				<CardHeader>
					<CardTitle>AI採用アクティブ企業</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>企業名</TableHead>
								<TableHead>求人件数</TableHead>
								<TableHead>LLM記載率</TableHead>
								<TableHead>主要職種</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{companyTrends.map((company) => (
								<TableRow key={company.name}>
									<TableCell>{company.name}</TableCell>
									<TableCell>{company.postings.toLocaleString()}</TableCell>
									<TableCell>{company.llmMentionRate}%</TableCell>
									<TableCell>{company.topRole}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
