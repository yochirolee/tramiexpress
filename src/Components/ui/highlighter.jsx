"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Highlighter({
    children,
    className,
    action = "highlight",
    color = "#FFD700",
}) {
    if (action === "underline") {
        return (
            <span className={cn("relative inline-block", className)}>
                <span className="relative z-10">{children}</span>
                <svg
                    className="absolute left-0 top-full -mt-1 w-full h-3 -z-10 text-orange-400"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    style={{ overflow: "visible" }}
                >
                    <motion.path
                        d="M0 5 Q 50 10 100 5"
                        fill="transparent"
                        stroke={color}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.path
                        d="M0 8 Q 50 13 100 8"
                        fill="transparent"
                        stroke={color}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    />
                </svg>
            </span>
        );
    }

    // Default highlight action (Marker style)
    return (
        <span className={cn("relative inline-block px-2", className)}>
            <svg
                className="absolute left-0 top-0 w-full h-full -z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
            >
                <motion.path
                    d="M-5,10 L105,15 L100,85 L-5,80 Z"
                    fill={color}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            </svg>
            <span className="relative z-10">{children}</span>
        </span>
    );
}
