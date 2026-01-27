import BlurFade from "../ui/blur-fade";
import NumberTicker from "../ui/number-ticker";
import Ripple from "../ui/ripple";
import { ColorTransitionGradient } from "../ui/background-gradient";

const stats = [
	{ id: 1, name: "Transporte eficiente y constante", description: "Contenedores Enviados", value: 85 },
	{ id: 2, name: "Entregas puerta a puerta", description: "Paquetes Entregados", value: 126000 },
	{ id: 3, name: "Nuevas Familias para TramiXpress", description: "Nuevos Clientes", value: 3402 },
];

export const Stats = () => {
	return (
		<div className=" relative overflow-hidden lg:rounded-3xl ">
			<ColorTransitionGradient />
			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl mb-10">
				<h2 className="text-base font-semibold leading-7 text-brand-primary">
					Paquetes Entregados y Clientes
				</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
					Resultados que Hablan por Nosotros – 2025
				</p>
			</div>
			<BlurFade delay={0.5 * 0.5} inView>
				<div className="relative grid items-center  md:grid-cols-3 my-10 md:my-0 h-[500px] w-full flex-col  overflow-hidden ">
					{stats.map((stat) => (
						<div key={stat.id} className="flex flex-col items-center lg:gap-10 ">
							<div className="text-xl leading-7 text-brand-secondary">{stat.description}</div>
							<div className="text-2xl leading-7 text-slate-500 dark:text-slate-400">{stat.name}</div>
							<div className="order-first text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
								<NumberTicker className="text-slate-900 dark:text-white" value={stat.value} />
							</div>
						</div>
					))}

				</div>
			</BlurFade>
			<Ripple />
		</div>
	);
};
