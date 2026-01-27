"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Highlighter } from "../ui/highlighter";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroNew = () => {
    return (
        <div className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                        <Highlighter action="underline" color="#c8611b">Agencia</Highlighter> de Envío de Paquetes a{" "}
                        <Highlighter action="highlight" color="#ff7300">
                            Cuba
                        </Highlighter>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        TramiXpress es tu agencia confiable para envíos marítimos y aéreos a Cuba y el Caribe, con más de 20 años de experiencia. Ofrecemos entrega puerta a puerta, seguimiento en tiempo real y atención personalizada.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            href="https://api.whatsapp.com/send?phone=%2B17542778810"
                            target="_blank"
                            className="rounded-md bg-brand-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary flex items-center gap-2"
                        >
                            <MdOutlineWhatsapp className="h-5 w-5" />
                            Contáctanos
                        </Link>
                        <Link href="/tracking" className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-brand-primary transition-colors">
                            Tracking de su Envío <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* Right Image/Globe */}
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-1 lg:flex lg:justify-center">
                    <div className="relative rounded-xl group overflow-hidden shadow-2xl max-w-fit">
                        <Image
                            src="/new-women.png"
                            className="rounded-3xl relative z-10 hover:scale-105 transition-transform duration-700 ease-out"
                            alt="Agencia de Envíos TramiXpress"
                            width={400}
                            height={600}
                            priority={true}
                            quality={95}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />

                        {/* Street Lamps Decoration */}
                        <div className="absolute inset-0 z-20 pointer-events-none">
                            {[
                                { top: "20%", left: "25%" },
                                { top: "15%", left: "75%" },
                                { top: "26%", left: "33%" },
                                { top: "25%", left: "60%" },
                            ].map((pos, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: [0.3, 0.5, 0.8, 0.6], scale: [0, 1.2, 1] }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.8,
                                        repeat: Infinity,
                                        repeatDelay: 3 + i
                                    }}
                                    className="absolute w-4 h-4 rounded-full bg-orange-400 blur-sm mix-blend-screen"
                                    style={{ top: pos.top, left: pos.left, boxShadow: "0 0 20px 10px rgba(251, 146, 60, 0.5)" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
