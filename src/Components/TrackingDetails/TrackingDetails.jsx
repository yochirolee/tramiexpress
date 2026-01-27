"use client";
import React from "react";
import { TrackingCard } from "../Cards/TrackingCard";

export const TrackingDetails = ({ invoice }) => {
	// Early return if invoice is falsy or empty
	if (!invoice || Object.keys(invoice).length === 0) {
		return null;
	}

	const { parcels } = invoice;

	// Early return if parcels is falsy or empty
	if (!parcels || parcels.length === 0) {
		return (
			<div className="text-center py-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/10 italic text-slate-500">
				No se encontraron paquetes asociados a esta búsqueda.
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-8 max-w-4xl mx-auto pb-20">
			{parcels.map((parcel, index) => (
				<TrackingCard key={`parcel-${index}`} parcel={parcel} invoice={invoice} />
			))}
		</div>
	);
};
