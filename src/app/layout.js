//import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import {  ColorTransitionGradient } from "@/Components/ui/background-gradient";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/Components/Footer/Footer";
import QueryProvider from "@/Utils/Providers/QueryProvider";
import Script from "next/script";
import { JsonLd } from "@/Components/Seo/JsonLd";
import { ThemeProvider } from "@/Components/ui/theme-provider";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

export const metadata = {
	title: "CTEnvios - Envíos a Cuba Rápidos y Confiables",
	description:
		"CTEnvios ofrece servicios de envío a Cuba seguros y económicos. Envía paquetes, remesas, alimentos y más a tus seres queridos en Cuba con garantía y rapidez.",
	generator: "Next.js",
	applicationName: "CTEnvios",
	referrer: "origin-when-cross-origin",
	metadataBase: new URL("https://ctenvios.com"),
	alternates: {
		canonical: "/",
	},
	keywords: [
		"Envíos a Cuba",
		"Paquetes a Cuba",
		"Remesas a Cuba",
		"Envío marítimo y aéreo a Cuba",
		"Servicios de mensajería a Cuba",
		"Agencia de envíos a Cuba",
		"Autos y Carros para Cuba",
		"Motos para Cuba",
		"Enviar dinero a Cuba",
		"Enviar comida a Cuba",
		"Envíos seguros a Cuba",
		"Mejor servicio de envíos a Cuba",
		"Envíos garantizados a Cuba",
		"Cubamax envíos a Cuba",
		"Dimecuba envíos a Cuba",
		"Rapidviaservices envíos a Cuba",
		"Cubaencarga envíos a Cuba",
	],
	authors: [{ name: "CTEnvios Team" }],
	creator: "CTEnvios",
	publisher: "CTEnvios",
	icons: {
		icon: "/ctelogo.ico",
		shortcut: "/ctelogo.ico",
		apple: "/ctelogo.ico",
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
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
	openGraph: {
		title: "CTEnvios -Agencia de Envíos a Cuba Rápidos y Confiables",
		description:
			"Agencia de envíos a Cuba seguros y económicos. Envía paquetes y más a tus seres queridos en Cuba.",
		url: "https://ctenvios.com",
		siteName: "CTEnvios",
		images: [
			{
				url: "https://ctenvios.com/banner-discounts-compressed.jpg",
				width: 1200,
				height: 630,
				alt: "CTEnvios - Envíos a Cuba",
				type: "image/png",
			},
		],
		locale: "es_ES",
		alternateLocale: ["en_US"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CTEnvios - Agencia de Envíos a Cuba Rápidos y Confiables",
		description:
			"Agencia de envíos a Cuba seguros y económicos. Envía paquetes y más a tus seres queridos en Cuba.",
		creator: "@ctenvios",
		images: {
			url: "https://ctenvios.com/banner-discounts-compressed.jpg",
			alt: "CTEnvios - Envíos a Cuba",
		},
	},
	verification: {
		google: "B5Vgy5pZSGjmc9UX3WAcWCk-sBe_yUesP-DIZ7fDe2k",
	},
};

export const links = [
	{ rel: "preconnect", href: "https://www.google-analytics.com" },
	{ rel: "preconnect", href: "https://www.googletagmanager.com", crossOrigin: "anonymous" },
	{ rel: "dns-prefetch", href: "https://www.google-analytics.com" },
	{ rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
];

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default function RootLayout({ children }) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://www.google-analytics.com" />
				<link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
			</head>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-DMGE29VG1R" strategy="afterInteractive" />
			<Script id="gtag-init" strategy="afterInteractive">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-DMGE29VG1R'); // Google Ads
				gtag('config', 'G-E53C6QQ7Z8'); // Google Analytics 4
			`}
			</Script>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<div className="relative isolate pt-4 max-w-7xl mx-auto sm:px-6 lg:pt-14 lg:px-8">
						<ColorTransitionGradient />

						<header>
							<NavBar />
						</header>
						<QueryProvider>{children}</QueryProvider>
					</div>

					<Footer />
					<JsonLd />
				</ThemeProvider>
			</body>
		</html>
	);
}
