"use client";
import { DocumentTextIcon, MapPinIcon, CubeIcon } from "@heroicons/react/24/outline";
import { React, useMemo } from "react";
import { TrackingHistoryCard } from "./TrackingHistoryCard";
import { useFetchHMHistory } from "@/Hooks/useFetchHMHistory";
import { mergeAndNormalizeEvents } from "@/Utils/eventMerger";

export const TrackingCard = ({ parcel, invoice }) => {
	const { data: hmHistory, isLoading: isLoadingHM } = useFetchHMHistory(
		parcel?.hbl
	);

	const mergedEvents = useMemo(() => {
		if (!parcel?.events) return [];
		return mergeAndNormalizeEvents(parcel.events, hmHistory);
	}, [parcel?.events, hmHistory]);

	if (!parcel) return null;

	return (
		<div className="relative group perspective-1000">
			<div className="relative z-10 overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl transition-all duration-500 hover:shadow-brand-primary/10">
				{/* Brand Accent Bar */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />

				<div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/10">
					{/* Left Section: Parcel Info */}
					<div className="p-8 lg:p-10 lg:w-[40%] flex flex-col justify-between">
						<div>
							<div className="flex items-center gap-3 mb-6">
								<div className="p-2 rounded-xl bg-brand-primary/10 ring-1 ring-brand-primary/20">
									<CubeIcon className="h-6 w-6 text-brand-primary" />
								</div>
								<div>
									<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Agencia</h3>
									<p className="font-bold text-slate-900 dark:text-white">{invoice?.agency || "CTEnvíos"}</p>
								</div>
							</div>

							<div className="space-y-3">
								<div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
									<div className="flex items-center gap-2">
										<DocumentTextIcon className="h-5 w-5 text-slate-400" />
										<span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Factura</span>
									</div>
									<span className="font-mono text-sm font-bold text-brand-primary">{invoice?.invoiceId}</span>
								</div>

								<div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
									<div className="flex items-center gap-2">
										<CubeIcon className="h-5 w-5 text-slate-400" />
										<span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">HBL</span>
									</div>
									<span className="font-mono text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">{parcel?.hbl}</span>
								</div>

								<div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
									<div className="flex items-center gap-2">
										<MapPinIcon className="h-5 w-5 text-slate-400" />
										<span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Destino</span>
									</div>
									<span className="text-sm font-bold text-slate-900 dark:text-white text-right ml-2">
										{invoice?.province}{invoice?.city ? " - " + invoice.city : ""}
									</span>
								</div>

								{/* Description moved here */}
								<div className="flex flex-col gap-2 p-3 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-dashed border-slate-200 dark:border-white/10">
									<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-70">Contenido</span>
									<p className="text-sm text-slate-600 dark:text-slate-400 italic leading-snug">
										{parcel?.description || "Sin descripción disponible"}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Section: Timeline */}
					<div className="p-8 lg:flex-1 bg-slate-50/30 dark:bg-black/20">
						<div className="flex items-center justify-between mb-8">
							<h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
								<span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
								Historial de Eventos
							</h4>
							{isLoadingHM && (
								<div className="flex items-center gap-2 text-xs text-brand-primary font-medium">
									<div className="h-3 w-3 animate-spin rounded-full border border-brand-primary border-t-transparent" />
									Sincronizando...
								</div>
							)}
						</div>

						<TrackingHistoryCard events={mergedEvents} isLoading={isLoadingHM} />
					</div>
				</div>
			</div>

			{/* Background Decorative Blur */}
			<div className="absolute -inset-px bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-primary/20 rounded-[inherit] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
		</div>
	);
};
