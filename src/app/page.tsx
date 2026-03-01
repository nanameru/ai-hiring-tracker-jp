import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monthlyStats } from "@/lib/mock-data";

const latest = monthlyStats[monthlyStats.length - 1];

const kpis = [
  { label: "AI求人数", value: latest.totalAiPosts.toLocaleString() },
  { label: "前年比成長", value: `+${latest.growthYoY}%` },
  { label: "AI比率", value: `${latest.aiShare}%` },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <Badge>日本市場版</Badge>
        <h1 className="text-3xl font-bold">日本のAI採用、いま何が起きているか。</h1>
        <p className="text-muted-foreground">企業・職種・スキルの変化を、週次で追えるダッシュボード。</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{kpi.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{kpi.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>今月のハイライト</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>・LLM関連スキルの記載率が継続上昇</p>
            <p>・機械学習エンジニアの採用が前年比2倍超</p>
            <p>・企業の複数AIツール併用が一般化</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
