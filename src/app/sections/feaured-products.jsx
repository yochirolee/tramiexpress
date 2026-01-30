import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "../../Components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../../Components/ui/carousel";
import { Button } from "../../Components/ui/button";
import { CheckIcon } from "lucide-react";

const products = [
	{
		name: "Scorpion E1",
		price: 2092.0,
		specs: [
			"Cilindrada: 150cc",
			"Vel Máx: 85km/h",
			"Capacidad de Tanque: 6 Litros",
			"Freno de Discos",
			"Neumáticos: 120/70-12",
		],

		images: [
			"/bikes/e1/e1-1.webp?height=150&width=150",
			"/bikes/e1/e1-2.webp?height=150&width=150",
			"/bikes/e1/e1-3.webp?height=150&width=150",
		],
	},
	{
		name: "Scorpion E2",
		price: 1983.0,
		specs: [
			"Cilindrada: 125cc",
			"Vel Máx: 80km/h",
			"Capacidad de Tanque: 5 Litros",
			"Freno de Discos",
			"Neumáticos: 3.50-10",
		],
		images: [
			"/bikes/e2/e2-1.webp?height=150&width=150",
			"/bikes/e2/e2-2.webp?height=150&width=150",
			"/bikes/e2/e2-3.webp?height=150&width=150",
		],
	},

	{
		name: "Scorpion E3",
		price: 2389.0,
		specs: [
			"Cilindrada: 150cc",
			"Vel Max: 85km/h",
			"Capacidad de Tanque: 6 Litros",
			"Freno de Discos",
			"Neumaticos: 130/60-13",
		],
		images: [
			"/bikes/e3/e3-1.webp?height=150&width=150",
			"/bikes/e3/e3-1.webp?height=150&width=150",
			"/bikes/e3/e3-1.webp?height=150&width=150",
		],
	},
	{
		name: "Scorpion E4",
		price: 2137.0,
		specs: [
			"Cilindrada: 150cc",
			"Vel Max: 85km/h",
			"Capacidad de Tanque: 6 Litros",
			"Freno de Discos",
			"Neumaticos: 110/70-12",
		],
		images: [
			"/bikes/e4/e4-1.webp?height=150&width=150",
			"/bikes/e4/e4-2.webp?height=150&width=150",

			"/bikes/e4/e4-3.webp?height=150&width=150",
		],
	},
	{
		name: "Scorpion E5",
		price: 1953.0,
		specs: [
			"Cilindrada: 125cc",
			"Vel Max: 80km/h",
			"Capacidad de Tanque: 6 Litros",
			"Freno de Discos",
			"Neumaticos: 3.50-10",
		],
		images: [
			"/bikes/e5/e5-1.webp?height=150&width=150",
			"/bikes/e5/e5-2.webp?height=150&width=150",
			"/bikes/e5/e5-3.webp?height=150&width=150",
		],
	},
];

// Add this function at the top level of your component
const createWhatsAppLink = (product) => {
	const phoneNumber = "19413990002"; // Replace with your actual WhatsApp number
	const message = encodeURIComponent(`Pre-reservar ${product.name}`);
	return `https://wa.me/${phoneNumber}?text=${message}`;
};

export default function FeaturedProducts() {
	return (
		<div className="py-20 max-w-5xl sm:py-24 lg:py-32 lg:mx-auto mx-4">
			<div className="mx-auto p-10 max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-sky-600">Reserve desde ya</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					Ya puedes pre-reservar tu moto de gasolina !!!
				</p>
			</div>

			<div className="grid grid-cols-1  md:grid-cols-3 gap-6 md:gap-6 ">
				{products.map((product, productIndex) => (
					<Card key={productIndex} className="overflow-hidden shadow-md">
						<Carousel className="w-full ">
							<CarouselContent>
								{product?.images?.map((image, index) => (
									<CarouselItem key={index}>
										<Image
											src={image}
											alt={`${product.name} - Image ${index + 1}`}
											width={150}
											height={150}
											className="w-full h-60 p-6 object-contain bg-gray-50 mb-2 rounded-t-md"
										/>
									</CarouselItem>
								))}
							</CarouselContent>

							<div className="absolute px-6  inset-y-0 left-2 right-2 flex items-center justify-between ">
								<CarouselPrevious className=" left-0 w-6 h-6" />
								<CarouselNext className=" right-0 w-6 h-6" />
							</div>
						</Carousel>
						<CardContent className="grid p-4 gap-4 ">
							<div className="inline-flex justify-between items-center">
								<h3 className="text-sm text-gray-700 font-semibold truncate">{product.name}</h3>
								<span className="text-base font-bold text-sky-600">
									${product.price.toFixed(2)}
								</span>
							</div>
							<div className="grid gap-2 border-t pt-4 items-center">
								<ul className="gap-2 text-xs flex flex-col">
									{product?.specs?.map((spec, index) => (
										<li key={index} className="flex gap-x-3">
											<CheckIcon aria-hidden="true" className="text-sky-600 h-6 w-5 flex-none" />
											{spec}
										</li>
									))}
								</ul>
							</div>
							<a href={createWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
								<Button className="w-full">Pre-Reservar</Button>
							</a>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
