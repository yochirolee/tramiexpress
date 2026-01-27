import { format, parseISO } from "date-fns";
import { CheckCircleIcon, TruckIcon, ClockIcon } from "@heroicons/react/24/solid";

const LoadingSpinner = () => (
	<div className="flex items-center justify-center py-8">
		<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
		<span className="ml-3 text-sm font-medium text-slate-500">Cargando historial...</span>
	</div>
);

const getEventIcon = (statusCode) => {
	switch (statusCode) {
		case "DELIVERED":
			return <TruckIcon className="w-6 h-6 text-emerald-500" />;
		case "IN_TRANSIT":
			return <TruckIcon className="w-6 h-6 text-brand-primary" />;
		default:
			return <CheckCircleIcon className="w-6 h-6 text-brand-primary/60" />;
	}
};

const formatEventDate = (timestamp) => {
	if (!timestamp || timestamp === "0000-00-00") return "";

	try {
		const date = parseISO(timestamp);
		if (isNaN(date.getTime())) return "";
		return format(date, "d MMM, yyyy • HH:mm");
	} catch {
		return "";
	}
};

export const TrackingHistoryCard = ({ events, isLoading }) => {
	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!events || events.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-10 text-center">
				<ClockIcon className="h-10 w-10 text-slate-300 mb-2" />
				<p className="text-sm font-medium text-slate-500 dark:text-slate-400">
					No hay eventos registrados aún
				</p>
			</div>
		);
	}

	const sortedEvents = [...events].reverse();

	return (
		<div className="flow-root">
			<ul role="list" className="-mb-8">
				{sortedEvents.map((event, index) => (
					<li key={index}>
						<div className="relative pb-8">
							{index !== sortedEvents.length - 1 ? (
								<span
									className="absolute left-3 top-3 -ml-px h-full w-0.5 bg-slate-200 dark:bg-white/10"
									aria-hidden="true"
								/>
							) : null}
							<div className="relative flex items-start space-x-3">
								<div className="relative">
									<div className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900 ring-4 ring-white dark:ring-slate-900">
										{getEventIcon(event.statusCode)}
									</div>
								</div>
								<div className="min-w-0 flex-1 py-0.5">
									<div className="text-sm">
										<p className={`font-bold ${event.statusCode === "DELIVERED"
												? "text-emerald-600 dark:text-emerald-400"
												: "text-slate-900 dark:text-white"
											}`}>
											{event.statusName}
										</p>
									</div>
									<div className="mt-1 flex flex-col gap-1">
										{event.location && (
											<p className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
												<span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
												{event.location}
											</p>
										)}
										{formatEventDate(event.timestamp) && (
											<p className="text-[10px] font-bold text-brand-primary/80 uppercase tracking-widest">
												{formatEventDate(event.timestamp)}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
