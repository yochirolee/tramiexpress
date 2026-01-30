//import Script from "next/script";
import NavBar from "@/Components/NavBar/NavBar";
import { ColorTransitionGradient } from "@/Components/ui/background-gradient";
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
	title: "TramiXpress - Envíos a Cuba desde Sarasota, Bradenton y Tampa | Paquetería y Remesas",
	description:
		"TramiXpress: Tu agencia líder en envíos a Cuba desde Sarasota, Bradenton y Tampa. Ofrecemos paquetería, remesas, alimentos y carga con entrega puerta a puerta garantizada.",
	generator: "Next.js",
	applicationName: "TramiXpress",
	referrer: "origin-when-cross-origin",
	metadataBase: new URL("https://tramiexpress.com"),
	alternates: {
		canonical: "/",
	},
	keywords: [
		"Envíos a Cuba desde Sarasota",
		"Paquetes a Cuba desde Bradenton",
		"Remesas a Cuba desde Tampa",
		"Agencia de envíos a Cuba Bradenton",
		"Envío de combos de comida a Cuba",
		"Envíos aéreos y marítimos a Cuba Florida",
		"TramiXpress Bradenton office",
		"Agencia de pasajes y envíos a Cuba",
		"Enviar paquetes a Cuba desde Florida central",
		"Servicio puerta a puerta Cuba TramiXpress",
	],
	authors: [{ name: "TramiXpress Team" }],
	creator: "TramiXpress",
	publisher: "TramiXpress",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
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
		title: "TramiXpress - Envíos a Cuba desde Sarasota, Bradenton y Tampa",
		description:
			"Agencia de envíos a Cuba desde Sarasota. Paquetería, con seguridad y rapidez.",
		url: "https://tramiexpress.com",
		siteName: "TramiXpress",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "TramiXpress - Envíos a Cuba",
				type: "image/png",
			},
		],
		locale: "es_ES",
		alternateLocale: ["en_US"],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "TramiXpress - Envíos a Cuba desde Sarasota, Bradenton y Tampa",
		description:
			"Agencia de envíos a Cuba desde Sarasota. Paquetería, con seguridad y rapidez.",
		creator: "@tramiexpress",
		images: {
			url: "/og-image.jpg",
			alt: "TramiXpress - Envíos a Cuba",
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
