import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Kelurahan Lumpue Kota Parepare",
	description: "Website resmi Kelurahan Lumpue Kota Parepare.",
	robots: 'index, follow',
	icons: {
		icon: "/logo.png"
	}
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body className={poppins.className}>
				{children}
			</body>
		</html>
	);
}