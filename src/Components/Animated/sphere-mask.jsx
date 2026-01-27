'use client'
import { cn  } from "@/lib/utils";

export const SphereMask = ({ reverse = false }) => {
	return (
		<div
			className={cn(
				"[--color:var(--color-one)]",
				"pointer-events-none relative -z-[2] mx-auto overflow-hidden",

				// Reduce height and margin for small screens
				"h-[20rem] sm:h-[30rem] md:h-[50rem]",
				reverse
					? "mt-[-5rem] sm:mt-[-10rem] md:mt-[-18.8rem] rotate-180"
					: "my-[-5rem] sm:my-[-10rem] md:my-[-18.8rem] md:mt-[-30rem]",

				"before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]",
				"after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background",
			)}
		></div>
	);
};

