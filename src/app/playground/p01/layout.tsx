import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "フリップ時計",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
