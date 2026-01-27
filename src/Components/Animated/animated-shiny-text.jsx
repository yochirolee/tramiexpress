import { cn } from "@/lib/utils";
import { ArrowRightCircleIcon, MapPinIcon } from "lucide-react";
import AnimatedShinyText from "../ui/animated-shiny-text";
import Link from "next/link";

export async function AnimatedShinyTextDemo() {
	return (
		<div className="  relative  items-center justify-center">
			<div className={cn(" rounded-full border border-black/5 mt-6  ")}>
				<AnimatedShinyText className="inline-flex items-center justify-center text-[13px]  px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
					<span className="hidden md:inline-flex">Estamos ubicados en </span>
					<span className="font ml-1 semi-bold text-gray-800">
						Sarasota, Florida
					</span>
					<Link
						href="https://www.google.com/maps/search/TramiXpress+Sarasota"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold text-indigo-600"
						aria-label="Ver ubicación en Google Maps"
					>
						<span className="absolute inset-0" aria-hidden="true" />
						<span aria-hidden="true">
							<MapPinIcon className="h-6 w-6" />
						</span>
						<span className="sr-only">Ver en Google Maps</span>
					</Link>
				</AnimatedShinyText>
			</div>
		</div>
	);
}
