"use client";
import {
    BuildingStorefrontIcon,
    TruckIcon,
    GlobeAmericasIcon,
    CubeTransparentIcon,
    HomeIcon,
    ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export const ProcessBentoGrid = () => {
    return (
        <section className="relative  isolate rounded-3xl bg-transparent dark:bg-transparent py-24 sm:py-32 overflow-hidden">
            <motion.div
                className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-brand-primary">Sistema de Tracking</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Conozca en todo momento dónde se encuentra su envío
                    </p>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Monitoreo en tiempo real desde la recepción hasta la entrega final a través de nuestra red global.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    {/* Step 1: Recepción (Large 2x2) */}
                    <motion.div
                        variants={itemVariants}
                        className="relative lg:col-span-2 lg:row-span-2 flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-white/5 p-8 ring-1 ring-slate-200 dark:ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:ring-brand-primary/20 dark:hover:ring-white/20 sm:p-10 shadow-sm"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-x-3 mb-6">
                                <div className="rounded-xl bg-brand-primary/10 p-3">
                                    <BuildingStorefrontIcon className="h-8 w-8 text-brand-primary" />
                                </div>
                                <span className="inline-flex items-center rounded-md bg-brand-primary/10 px-2 py-1 text-xs font-medium text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                                    Paso 1
                                </span>
                            </div>
                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Recepción en Agencia</h3>
                            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 flex-1">
                                El proceso inicia en nuestras oficinas de Hialeah. Realizamos el pesaje, inspección exhaustiva
                                y etiquetado profesional de tu carga para garantizar un trayecto seguro.
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-brand-primary">
                                <ClipboardDocumentCheckIcon className="h-5 w-5" />
                                <span>Verificación inmediata</span>
                            </div>

                        </div>
                    </motion.div>

                    {/* Step 2: Consolidación (Tall 1x2) */}
                    <motion.div
                        variants={itemVariants}
                        className="relative lg:col-span-1 lg:row-span-2 flex flex-col overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-x-3 mb-6">
                                <div className="rounded-xl bg-brand-secondary/10 p-3">
                                    <CubeTransparentIcon className="h-8 w-8 text-brand-secondary" />
                                </div>
                            </div>
                            <span className="mb-2 inline-flex w-fit items-center rounded-md bg-brand-secondary/10 px-2 py-1 text-xs font-medium text-brand-secondary ring-1 ring-inset ring-brand-secondary/20">
                                Paso 2
                            </span>
                            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">Consolidación</h3>
                            <p className="mt-4 text-sm leading-6 text-slate-300 flex-1">
                                Agrupación segura en contenedores. Optimizamos el espacio y aseguramos la integridad de envíos
                                marítimos y aéreos.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 3: Mariel (Wide 1x1) */}
                    <motion.div
                        variants={itemVariants}
                        className="relative lg:col-span-1 lg:row-span-1 flex flex-col overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
                    >
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start">
                                <div className="rounded-xl bg-brand-primary/10 p-2">
                                    <GlobeAmericasIcon className="h-6 w-6 text-brand-primary" />
                                </div>
                                <span className="inline-flex items-center rounded-md bg-brand-primary/10 px-2 py-1 text-xs font-medium text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                                    Paso 3
                                </span>
                            </div>
                            <div>
                                <h3 className="mt-4 text-lg font-bold text-white">Puerto Mariel</h3>
                                <p className="mt-1 text-xs text-slate-400">Llegada y Aduana</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 4: Distribución (Wide 1x1) */}
                    <motion.div
                        variants={itemVariants}
                        className="relative lg:col-span-1 lg:row-span-1 flex flex-col overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20"
                    >
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start">
                                <div className="rounded-xl bg-brand-secondary/10 p-2">
                                    <TruckIcon className="h-6 w-6 text-brand-secondary" />
                                </div>
                                <span className="inline-flex items-center rounded-md bg-brand-secondary/10 px-2 py-1 text-xs font-medium text-brand-secondary ring-1 ring-inset ring-brand-secondary/20">
                                    Paso 4
                                </span>
                            </div>
                            <div>
                                <h3 className="mt-4 text-lg font-bold text-white">Logística</h3>
                                <p className="mt-1 text-xs text-slate-400">Distribución Provincial</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Step 5: Entrega Final (Wide Banner Style) */}
                <motion.div
                    variants={itemVariants}
                    className="mt-4 overflow-hidden rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:ring-white/20 sm:p-12"
                >
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="relative z-10">

                            <div className="flex items-center gap-x-3 mb-4">
                                <div className="rounded-xl bg-brand-primary/10 p-2">
                                    <HomeIcon className="h-6 w-6 text-brand-primary" />
                                </div>
                                <span className="inline-flex items-center rounded-md bg-brand-primary/10 px-2 py-1 text-xs font-medium text-brand-primary ring-1 ring-inset ring-brand-primary/20">
                                    Paso 5
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">Entrega Final Garantizada</h3>
                            <p className="text-slate-300">
                                Sus familiares reciben el paquete directamente en la puerta de su casa. Sin preocupaciones,
                                cumpliendo con los tiempos estimados.
                            </p>
                        </div>
                        <div className="flex items-center justify-start lg:justify-end gap-x-4 relative z-10">
                            <Link
                                href="/tracking"
                                className="rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors"
                            >
                                Rastrear Envío
                            </Link>
                        </div>
                    </div>

                    <BackgroundGradient />
                </motion.div>

            </motion.div>

        </section>
    );
};
