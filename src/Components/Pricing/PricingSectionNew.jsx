"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { ColorTransitionGradient } from "../ui/background-gradient";

const tiers = [
    {
        name: "Estándar",
        id: "tier-standard",
        href: "/oferta-envio-cuba-4-julio",
        priceMonthly: "$1.99",
        description: "La tarifa base para envíos seguros a Cuba.",
        features: [
            "Envío Marítimo Regular",
            "Entrega puerta a puerta",
            "Seguimiento básico",
            "Soporte por email",
        ],
        featured: false,
        buttonText: "Empezar Envío",
    },
    {
        name: "Oferta Jueves",
        id: "tier-offer",
        href: "#",
        priceMonthly: "$1.49",
        description: "¡Nuestra mejor tarifa semanal! Solo jueves.",
        features: [
            "Precio reducido por libra",
            "Prioridad en consolidación",
            "Entrega puerta a puerta",
            "Seguimiento en tiempo real",
            "Soporte prioritario WhatsApp",
        ],
        featured: true,
        buttonText: "Aprovechar Oferta",
    },
    {
        name: "Caja de Alimentos y Aseo",
        id: "tier-wholesale",
        href: "#",
        priceMonthly: "Solamente $30",
        description: "Caja 12x12x12 de alimentos y aseo.",
        features: [
            "Envío Marítimo Regular",
            "Entrega puerta a puerta",
            "Seguimiento en tiempo real",
            "Soporte prioritario WhatsApp",
        ],
        featured: false,
        buttonText: "Contactar Ventas",
    },

];

export const PricingSectionNew = () => {
    return (
        <section className="relative isolate bg-slate-50 dark:bg-slate-950 lg:rounded-3xl py-24 sm:py-32 overflow-hidden">
           <ColorTransitionGradient />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-primary">Precios Transparentes</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        Elige el plan que se adapta a tus envíos
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Sin tarifas ocultas. Precios competitivos diseñados para conectar familias y negocios con Cuba de manera económica y segura.
                    </p>
                </div>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`flex flex-col justify-between rounded-3xl p-8 ring-1 xl:p-10 transition-all duration-300 hover:ring-2 ${tier.featured
                                ? "bg-white dark:bg-white/5 ring-brand-primary shadow-xl shadow-brand-primary/20 hover:ring-brand-primary hover:bg-slate-50 dark:hover:bg-white/10 scale-105 z-10"
                                : "bg-white dark:bg-white/5 ring-slate-200 dark:ring-white/10 hover:ring-brand-primary/20 dark:hover:ring-white/20 hover:bg-slate-50 dark:hover:bg-white/10"
                                }`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={`text-lg font-semibold leading-8 ${tier.featured ? "text-brand-primary" : "text-slate-900 dark:text-white"
                                            }`}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.featured && (
                                        <span className="rounded-full bg-brand-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-brand-primary">
                                            Más Popular
                                        </span>
                                    )}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {tier.priceMonthly}
                                    </span>
                                    {tier.priceMonthly.startsWith('$') && (
                                        <span className="text-sm font-semibold leading-6 text-slate-400">
                                            /lb
                                        </span>
                                    )}
                                </p>
                                <ul
                                    role="list"
                                    className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon
                                                className="h-6 w-5 flex-none text-brand-primary"
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${tier.featured
                                    ? "bg-brand-primary text-white shadow-sm hover:bg-brand-secondary focus-visible:outline-brand-primary"
                                    : "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 focus-visible:outline-white"
                                    }`}
                            >
                                {tier.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
