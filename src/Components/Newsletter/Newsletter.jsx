import { React } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function NewsLetter() {
	return (
		<section className="relative isolate overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 lg:py-32">
			{/* Background Pattern */}

			
			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">

					{/* Left Column - Form */}
					<div className="max-w-xl lg:max-w-lg">

						{/* Badge */}
						<div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 mb-6 ring-1 ring-brand-primary/30">
							<span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
							<span className="text-sm font-medium text-brand-primary">Ofertas Exclusivas</span>
						</div>

						<h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl bg-gradient-to-r from-slate-900 via-orange-800 to-brand-primary dark:from-white dark:via-orange-200 dark:to-brand-primary bg-clip-text text-transparent">
							Únete a Nuestra Gran Familia
						</h2>

						<p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
							Recibe ofertas exclusivas para tus envíos a Cuba. Sé el primero en enterarte de nuestras promociones especiales y nuevas rutas de envío.
						</p>

						{/* Form with glassmorphism */}
						<div className="mt-8 p-6 rounded-2xl  backdrop-blur-sm border border-white/10 shadow-xl">
							<div className="space-y-4">
								<div>
									<label htmlFor="email-address" className="block text-sm font-medium text-slate-300 mb-2">
										Correo Electrónico
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="w-full rounded-xl border-0 bg-white dark:bg-slate-950/50 backdrop-blur-sm px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-inner ring-1 ring-slate-200 dark:ring-white/10 focus:ring-2 focus:ring-brand-primary transition-all duration-200"
										placeholder="tu@email.com"
									/>
								</div>

								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
										Teléfono (opcional)
									</label>
									<input
										id="phone"
										name="phone"
										type="tel"
										autoComplete="tel"
										className="w-full rounded-xl border-0 bg-white dark:bg-slate-950/50 backdrop-blur-sm px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-inner ring-1 ring-slate-200 dark:ring-white/10 focus:ring-2 focus:ring-brand-primary transition-all duration-200"
										placeholder="+1 (XXX) XXX-XXXX"
									/>
								</div>

								<div className="flex items-start gap-3 pt-2">
									<input
										type="checkbox"
										id="consent-checkbox"
										name="consent"
										className="mt-1 h-4 w-4 rounded border-slate-300 dark:border-white/20 bg-white dark:bg-white/10 text-brand-primary focus:ring-brand-primary focus:ring-offset-0"
										aria-describedby="consent-description"
									/>
									<label htmlFor="consent-checkbox" id="consent-description" className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
										Acepto recibir comunicaciones de marketing y ofertas exclusivas.
									</label>
								</div>
							</div>

							<button
								type="submit"
								className="mt-6 w-full rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-primary/25 hover:from-orange-400 hover:to-orange-600 hover:shadow-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-[1.02]"
							>
								Unirse Ahora
							</button>
						</div>

					</div>
					{/* Right Column - Benefits */}
					<div className="grid grid-cols-1 gap-6 lg:pt-2">
						{/* Benefit Card 1 */}
						<div className="group p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-300 shadow-sm">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 ring-1 ring-brand-primary/30 group-hover:ring-brand-primary/50 transition-all">
									<CalendarDaysIcon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
								</div>
								<div>
									<h3 className="font-semibold text-lg text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
										Promociones Exclusivas
									</h3>
									<p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
										Accede a descuentos especiales y tarifas preferenciales solo para suscriptores.
									</p>
								</div>
							</div>
						</div>

						{/* Benefit Card 2 */}
						<div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 ring-1 ring-emerald-500/30 group-hover:ring-emerald-400/50 transition-all">
									<HandRaisedIcon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
								</div>
								<div>
									<h3 className="font-semibold text-lg text-white group-hover:text-emerald-300 transition-colors">
										Cero Spam Garantizado
									</h3>
									<p className="mt-2 text-slate-400 leading-relaxed">
										En CTEnvíos nos comprometemos a enviarte solo información relevante y útil. Puedes darte de baja cuando quieras.
									</p>
								</div>
							</div>
						</div>

						{/* Stats mini */}
						<div className="grid grid-cols-2 gap-4 mt-2">
							<div className="text-center p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
								<div className="text-3xl font-bold text-brand-primary">10K+</div>
								<div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Suscriptores</div>
							</div>
							<div className="text-center p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
								<div className="text-3xl font-bold text-brand-secondary">20+</div>
								<div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Años de Experiencia</div>
							</div>
						</div>
					</div>

				</div>
           
			</div>
		</section>
	);
}
