import Script from "next/script";

// FAQ data for schema markup
const faqData = [
	{
		question: "¿Qué tiempo demora un envío a Cuba?",
		answer: "Generalmente, nuestros envíos de paquetes a Cuba tardan entre 30 y 45 días laborables. El tiempo de entrega varía según la provincia, con las provincias orientales siendo las que más tiempo requieren para la entrega.",
	},
	{
		question: "¿Cuál es el peso máximo permitido para un paquete?",
		answer: "El peso máximo permitido para un paquete es de 30 kg. Si su envío supera este peso, deberá dividirlo en varios paquetes para un envío seguro y eficiente.",
	},
	{
		question: "¿Qué artículos están prohibidos para enviar a Cuba?",
		answer: "Está prohibido enviar artículos como drogas, armas, explosivos, materiales inflamables, animales vivos, dinero en efectivo y otros artículos ilegales o peligrosos.",
	},
	{
		question: "¿Ofrecen seguro para los envíos a Cuba?",
		answer: "Sí, ofrecemos opciones de seguro para sus envíos a Cuba. El costo del seguro varía según el valor declarado del contenido del paquete.",
	},
	{
		question: "¿Cómo puedo rastrear mi paquete?",
		answer: "Puede rastrear su paquete utilizando el número de seguimiento proporcionado al momento del envío. Ingrese este número en la sección de Tracking de nuestra página web para obtener actualizaciones en tiempo real.",
	},
	{
		question: "¿Qué hago si mi paquete se pierde o se daña?",
		answer: "En caso de pérdida o daño de su paquete, contáctenos inmediatamente. Tenemos un proceso de reclamación que debe iniciarse dentro de los 15 días posteriores a la fecha estimada de entrega.",
	},
];

// LocalBusiness Schema
const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	"@id": "https://tramiexpress.com/#business",
	name: "TramiXpress",
	alternateName: "TramiXpress Florida",
	description:
		"TramiXpress: Tu agencia líder en envíos a Cuba desde Sarasota, Bradenton y Tampa. Ofrecemos paquetería, remesas, alimentos y carga con entrega puerta a puerta garantizada.",
	url: "https://tramiexpress.com",
	telephone: "+1-941-399-0002",
	email: "Tramixpress.llc@gmail.com",
	priceRange: "$$",
	image: "https://tramiexpress.com/logo.png",
	address: {
		"@type": "PostalAddress",
		streetAddress: "1201 9th ST W",
		addressLocality: "Bradenton",
		addressRegion: "FL",
		postalCode: "34205",
		addressCountry: "US",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 27.4913,
		longitude: -82.5714,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "18:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "09:00",
			closes: "14:00",
		},
	],
	sameAs: [
		"https://www.facebook.com/tramiexpress",
		"https://www.instagram.com/tramiexpress",
	],
	areaServed: [
		{
			"@type": "City",
			name: "Sarasota",
		},
		{
			"@type": "City",
			name: "Bradenton",
		},
		{
			"@type": "City",
			name: "Tampa",
		},
		{
			"@type": "Country",
			name: "Cuba",
		},
	],
	serviceType: ["Envíos a Cuba", "Paquetes a Cuba", "Envío marítimo", "Envío aéreo"],
};

// Organization Schema
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": "https://tramiexpress.com/#organization",
	name: "TramiXpress",
	alternateName: "TramiXpress",
	url: "https://tramiexpress.com",
	logo: {
		"@type": "ImageObject",
		url: "https://tramiexpress.com/logo.png",
		width: 512,
		height: 512,
	},
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+1-941-399-0002",
		contactType: "customer service",
		availableLanguage: ["Spanish", "English"],
		email: "Tramixpress.llc@gmail.com",
	},
	sameAs: [
		"https://www.facebook.com/tramiexpress",
		"https://www.instagram.com/tramiexpress",
	],
};

// FAQPage Schema
const faqPageSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqData.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq.answer,
		},
	})),
};

// WebSite Schema with SearchAction
const webSiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": "https://tramiexpress.com/#website",
	name: "TramiXpress",
	url: "https://tramiexpress.com",
	potentialAction: {
		"@type": "SearchAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: "https://tramiexpress.com/tracking?q={search_term_string}",
		},
		"query-input": "required name=search_term_string",
	},
};

export const JsonLd = () => {
	return (
		<>
			<Script
				id="schema-local-business"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>
			<Script
				id="schema-organization"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(organizationSchema),
				}}
			/>
			<Script
				id="schema-faq"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqPageSchema),
				}}
			/>
			<Script
				id="schema-website"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(webSiteSchema),
				}}
			/>
		</>
	);
};

export default JsonLd;
