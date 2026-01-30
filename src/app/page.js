import { lazy, Suspense } from "react";
import { TrackingContent } from "@/Components/Content/TrackingContent";
import { HeroNew } from "@/Components/Hero/HeroNew";
import NewsLetter from "@/Components/Newsletter/Newsletter";
import { SocialMedia } from "@/Components/SocialMedia/SocialMedia";
import { Stats } from "@/Components/Stats/Stats";
import Faq from "@/Components/Faq/Faq";
import { ProcessBentoGrid } from "@/Components/Process/ProcessBentoGrid";


import { PricingSectionNew } from "@/Components/Pricing/PricingSectionNew";
const TrackingSection = lazy(() => import("./sections/tracking-section"));

const LoadingFallback = ({ height }) => (
	<div className={`flex justify-center items-center ${height}`}>
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
	</div>
);
export default function Home() {
	return (
		<main>
			<HeroNew />
			<Suspense fallback={<LoadingFallback height="h-80" />}>
				<PricingSectionNew />
				<TrackingSection />
			</Suspense>
			<ProcessBentoGrid />
			<SocialMedia />
			<Faq />
			<NewsLetter />
		</main>
	);
}
