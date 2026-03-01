# AI採用トレンドJP

日本のAI採用市場を可視化するWebアプリです。  
Next.js + Convex + shadcn/ui + Vercel 構成で実装しています。

## 本番URL

- <https://ai-hiring-tracker-jp.vercel.app>

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Convex（DB / Function）
- Vercel（Hosting）

## ローカルセットアップ

```bash
npm install
npx convex dev --once
npm run dev
```

## 環境変数（例）

`.env.local` には以下が入ります（Convex初期化で自動生成）：

- `CONVEX_DEPLOYMENT`
- `NEXT_PUBLIC_CONVEX_URL`
- `NEXT_PUBLIC_CONVEX_SITE_URL`

Clerkを有効化する場合は追加で設定：

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## Convex 初期データ投入

```bash
npx convex run stats:seedDemoData '{"force": true}'
```

## 実装済みページ

- `/`（トップ）
- `/dashboard`（ダッシュボード）
- `/companies`（企業別ランキング）
- `/roles`（職種別トレンド）
- `/about` `/help` `/terms` `/privacy` `/legal` `/status`

## 次の優先タスク

1. Clerk本番設定（サインイン導線）
2. Convex実データの拡充（収集バッチ連携）
3. ダッシュボードのグラフ強化
