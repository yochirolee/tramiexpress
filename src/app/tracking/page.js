import { HeroTracking } from "@/Components/Hero/HeroTracking";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { Suspense } from "react";
import { Stats } from "@/Components/Stats/Stats";

export const metadata = {
	title: "Rastrear Envío a Cuba - Tracking de Paquetes | TramiXpress",
	description:
		"Rastrea tu paquete enviado a Cuba desde Sarasota en tiempo real. Ingresa tu número de tracking para ver el estado actual de tu envío por TramiXpress.",
	keywords: [
		"Rastrear paquete Cuba Sarasota",
		"Tracking envío Cuba TramiXpress",
		"Seguimiento de paquetes a Cuba Florida",
		"Estado de envío a Cuba Sarasota",
		"Número de tracking TramiXpress",
		"Localizar paquete Cuba Bradenton",
	],
	alternates: {
		canonical: "/tracking",
	},
	openGraph: {
		title: "Rastrear Envío a Cuba - TramiXpress Tracking",
		description:
			"Rastrea tu paquete a Cuba en tiempo real con TramiXpress. Ingresa tu número de seguimiento para ver actualizaciones desde Sarasota.",
		url: "https://tramiexpress.com/tracking",
		siteName: "TramiXpress",
		locale: "es_ES",
		type: "website",
	},
};

const Tracking = () => {
	return (
		<Suspense fallback={<div>Cargando...</div>}>
			<HeroTracking />
			
		</Suspense>
	);
};

export default Tracking;
