import type { Metadata } from "next";
import "./globals.css";
import "ress";
export const metadata: Metadata = {
	title: {
		default: "Playground",
		template: "%s | Playground",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
