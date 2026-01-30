"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "../ui/theme-toggle";

const navigation = [
	{ name: "Inicio", href: "/" },
	{ name: "Tracking", href: "/tracking" },
	{ name: "Preguntas Frecuentes", href: "/#faq" },
	{ name: "Términos y Condiciones", href: "/terms" },
];

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
				<div className="flex flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">TramiXpress</span>
						<Image width={50} height={50} src="/logo.jpg" alt="Logo TramiXpress" />
					</Link>
				</div>
				<div className="flex  gap-4 lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-brand-primary transition-colors"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex gap-6 lg:flex-1 lg:justify-end">
					<ThemeToggle />
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />

				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">TramiXpress</span>
							<Image width={50} height={50} src="/ctelogo.png" alt="TramiXpress Logo" />
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6 dark:text-white" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y ">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
