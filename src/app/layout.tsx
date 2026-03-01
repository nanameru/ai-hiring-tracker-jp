import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";

const notoSansJp = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
	title: "AI採用トレンドJP",
	description: "日本のAI採用市場を可視化する分析ダッシュボード",
	openGraph: {
		title: "AI採用トレンドJP",
		description: "日本のAI採用市場を可視化する分析ダッシュボード",
		locale: "ja_JP",
		type: "website",
	},
};

const footerLinks = [
	["サービスについて", "/about"],
	["ヘルプ", "/help"],
	["利用規約", "/terms"],
	["プライバシー", "/privacy"],
	["特商法", "/legal"],
	["ステータス", "/status"],
] as const;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ja">
			<body className={`${notoSansJp.variable} font-sans antialiased`}>
				<ConvexClientProvider>
					<div className="mx-auto min-h-screen max-w-6xl px-4 py-6">
						<header className="mb-8 flex items-center justify-between">
							<Link href="/" className="text-lg font-bold">
								AI採用トレンドJP
							</Link>
							<nav className="flex gap-4 text-sm text-muted-foreground">
								<Link href="/dashboard">ダッシュボード</Link>
								<Link href="/companies">企業別</Link>
								<Link href="/roles">職種別</Link>
							</nav>
						</header>
						<main>{children}</main>
						<footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
							<div className="flex flex-wrap gap-4">
								{footerLinks.map(([label, href]) => (
									<Link key={href} href={href}>
										{label}
									</Link>
								))}
							</div>
						</footer>
					</div>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
