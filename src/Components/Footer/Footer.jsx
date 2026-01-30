import { React } from "react";
import { MdWhatsapp } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
export const Footer = () => {
	return (
		<footer className="relative  container  text-center mx-auto pt-10 pb-10 relative z-50 bg-slate-50 dark:bg-slate-950 mt-auto">
			<div className="absolute -bottom-10 -left-20 w-full h-[600px] bg-brand-primary/20 blur-[120px] rounded-full mix-blend-screen" />
			<div className="relative z-50 h-12 inline-flex gap-8 p-10">

				<a
					href="https://www.facebook.com/tramiXpress"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					className="w-8 h-8 relative z-50"
					style={{ pointerEvents: "auto" }}
				>
					<span className="sr-only">Facebook</span>
					<svg
						fill="currentColor"
						viewBox="0 0 24 24"
						className="text-slate-400 hover:text-brand-primary"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
							clipRule="evenodd"
						></path>
					</svg>
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=%2B19413990002"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Whatsapp"
					className="w-8 h-8 relative z-50"
					style={{ pointerEvents: "auto" }}
				>
					<span className="sr-only">Whatsapp</span>
					<MdWhatsapp className="text-slate-600 dark:text-slate-400 h-8 w-8 hover:text-brand-primary" />
				</a>
				<a
					href="https://www.tiktok.com/@tramixpress_"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="TikTok"
					className="w-8 h-8 relative z-50 flex items-center justify-center"
					style={{ pointerEvents: "auto" }}
				>
					<span className="sr-only">TikTok</span>
					<FaTiktok className="text-slate-400 hover:text-brand-primary h-7 w-7" />
				</a>
			</div>
			<div className="flex text-sm justify-center items-center relative z-50">
				<Link href="/terms" className="relative z-50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" style={{ pointerEvents: "auto" }}>
					Términos y Condiciones
				</Link>
			</div>
			<div className="relative z-50 text-slate-600 dark:text-slate-400 mt-4 space-y-1">
				<p>1201 9th ST W, Bradenton, FL, United States</p>
				<p>Tel: +1 941-399-0002 | Email: Tramixpress.llc@gmail.com</p>
			</div>
			<div className="relative z-50 text-slate-600 dark:text-slate-500 mt-6">© {new Date().getFullYear()} TramiXpress. Todos los derechos reservados.
				{" · "}
				Desarrollado por Valelee LLC
			</div>
		</footer>
	);
};
