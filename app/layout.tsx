import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Particles from "./components/particles";
import { Footer } from "./section/footer";
import { Navbar } from "./section/navbar";

export const metadata: Metadata = {
	metadataBase: new URL("https://zaheed.tech"),
	title: {
		default: "Syed Zaheed",
		template: "%s | Syed Zaheed",
	},
	description: "Engineer, developer and writer.",
	icons: {
		icon: "/z-logo.png", // or .png/.svg in public/
		shortcut: "/z-logo.png",
	  },
	authors: [{ name: "Syed Zaheed" }],
	creator: "Syed Zaheed",
	publisher: "Syed Zaheed",
	category: "Technology",
	openGraph: {
		title: "Syed Zaheed",
		description: "Engineer, developer and tech enthusiast..",
		url: "https://zaheed.tech",
		siteName: "Syed Zaheed",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://aryanbharti.com/opengraph.png",
				width: 256,
				height: 256,
				alt: "Syed Zaheed's portfolio website",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Syed Zaheed",
		card: "summary_large_image",
		images: "https://aryanbharti.com/opengraph.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={clsx("text-black bg-white dark:text-white dark:bg-[#070f22]", GeistSans.variable, GeistMono.variable)}
		>
			<body className="antialiased max-w-2xl mb-10 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
				<SpeedInsights />
				<Analytics />
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={300} />
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
