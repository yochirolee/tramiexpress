"use client";
import React, { useEffect, useRef } from "react";

const Globe = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let globeRadius;

        const resizeCanvas = () => {
            if (canvas.parentNode) {
                canvas.width = canvas.parentNode.clientWidth;
                canvas.height = canvas.parentNode.clientHeight;
                // Responsive radius: 45% of min dimension (90% diameter)
                globeRadius = Math.min(canvas.width, canvas.height) * 0.45;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                globeRadius = 300;
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const DOT_RADIUS = 2;
        const DOT_COUNT = 800;
        const dots = [];

        // Initialize dots on a sphere
        for (let i = 0; i < DOT_COUNT; i++) {
            const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
            const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;

            dots.push({
                phi,
                theta
            });
        }

        let angle = 0;

        const render = () => {
            if (!canvas) return;
            // Clear canvas with transparency to allow blending with background
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Rotation
            angle += 0.002;
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            dots.forEach((dot) => {
                // Calculate position based on current radius
                const x = globeRadius * Math.cos(dot.theta) * Math.sin(dot.phi);
                const y = globeRadius * Math.sin(dot.theta) * Math.sin(dot.phi);
                const z = globeRadius * Math.cos(dot.phi);

                // Rotate around Y axis
                const x2 = x * cos - z * sin;
                const z2 = z * cos + x * sin;

                // Perspective projection
                const scale = (globeRadius * 2) / ((globeRadius * 2) + z2); // Adjust perspective based on radius
                const x2d = (x2 * scale) + centerX;
                const y2d = (y * scale) + centerY;

                // Only draw if on front side
                if (scale > 0.5) { // Clipping back
                    const alpha = (scale - 0.5) * 1.5; // Fade out near edges/back
                    ctx.fillStyle = `rgba(56, 189, 248, ${Math.max(0, Math.min(1, alpha))})`; // Sky-400 color
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, DOT_RADIUS * scale, 0, Math.PI * 2);
                    ctx.fill();

                    // Add connecting lines for "network" effect (optional, simplified for perf)
                    // ...
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40 mix-blend-screen"
            style={{ position: 'absolute', top: 0, left: 0 }}
        />
    );
};

export default Globe;
