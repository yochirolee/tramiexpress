"use client";
import { React, useState, useEffect } from "react";
import { ColorTransitionGradient } from "../ui/background-gradient";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { TrackingDetails } from "../TrackingDetails/TrackingDetails";
import { useFetchByInvoiceOrHBL } from "@/Hooks/useFetchByInvoiceOrHBL";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineWhatsapp } from "react-icons/md";
import Link from "next/link";

export const HeroTracking = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

	const { data: invoice, isLoading, isError } = useFetchByInvoiceOrHBL(searchTerm);
	const [hasSearched, setHasSearched] = useState(!!searchParams.get("search"));


	useEffect(() => {
		const currentSearch = searchParams.get("search");
		if (currentSearch) {
			setSearchTerm(currentSearch);
			setHasSearched(true);
		}
	}, [searchParams]);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const newSearchTerm = formData.get("search");
		if (newSearchTerm !== searchTerm) {
			setSearchTerm(newSearchTerm);
			setHasSearched(true);
			router.push(`/tracking?search=${encodeURIComponent(newSearchTerm)}`);
		}
	};

	if (isError) {
		return <div className="text-center py-20 text-red-500">Hubo un error al buscar la información.</div>;
	}

	return (
		<div className="relative isolate min-h-[60vh]">
			<ColorTransitionGradient />

			<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
				<div className="mx-auto max-w-2xl text-center flex flex-col items-center">
					<div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 mb-8 ring-1 ring-brand-primary/30">
						<span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
						<span className="text-sm font-medium text-brand-primary">Tracking 24/7</span>
					</div>

					<MapPinIcon
						className={`w-16 h-16 mx-auto text-brand-primary ${hasSearched && isLoading ? "animate-spin" : "animate-bounce"
							}`}
					/>

					<h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
						Localiza tu <span className="text-brand-primary">Envío</span>
					</h1>

					<p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
						Sigue el estado de tus paquetes a Cuba en tiempo real. Ingresa tu número de factura o HBL para comenzar.
					</p>

					<div className="mt-10 w-full max-w-lg">
						<form onSubmit={handleOnSubmit} className="relative group">
							<div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl focus-within:ring-2 focus-within:ring-brand-primary transition-all duration-300">
								<div className="flex-auto relative">
									<MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
									<input
										id="search"
										name="search"
										type="text"
										required
										defaultValue={searchTerm}
										className="w-full bg-transparent border-none pl-11 pr-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-0 sm:text-sm"
										placeholder="Número de Factura o HBL..."
									/>
								</div>
								<button
									type="submit"
									disabled={isLoading}
									className="rounded-xl bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-secondary transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
								>
									{hasSearched && isLoading ? (
										<>
											<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
											Buscando
										</>
									) : (
										"Rastrear Ahora"
									)}
								</button>
							</div>
						</form>
					</div>

					{(!hasSearched || (!invoice && !isLoading)) && (
						<div className="mt-12 flex flex-col items-center gap-4">
							<Link
								href="https://api.whatsapp.com/send?phone=%2B17542778810"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors"
							>
								<MdOutlineWhatsapp className="h-5 w-5" />
								<span>¿Necesitas ayuda? Contáctanos</span>
							</Link>
						</div>
					)}
				</div>

				{hasSearched && !isLoading && invoice && (
					<div className="mt-20">
						<TrackingDetails invoice={invoice} />
					</div>
				)}

				{hasSearched && !isLoading && !invoice && (
					<div className="mt-12 text-center text-slate-600 dark:text-slate-400 animate-fade-in">
						No se encontró información para el número ingresado. Por favor, verifica el dato e intenta nuevamente.
					</div>
				)}
			</div>
		</div>
	);
};
