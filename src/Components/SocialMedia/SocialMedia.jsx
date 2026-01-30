import { React } from "react";
import { FaTiktok } from "react-icons/fa";
export const SocialMedia = () => {
	return (
		<div className=" py-20 sm:py-24 lg:py-32 mx-4 ">

			<div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
				<h2 className="text-base font-semibold leading-7 text-sky-400 dark:text-brand-primary">Nuestras Redes Sociales</h2>
				<p className="mt-2 text-2xl font-bold tracking-tight text-white dark:text-white sm:text-3xl">
					Comienza a seguirnos y únete a la comunidad TramiXpress.
				</p>
				<p className="mt-4 text-base text-slate-300 dark:text-slate-400 sm:text-lg">
					Mantente informado sobre nuestras ofertas, novedades y consejos para enviar paquetes a Cuba desde Sarasota de forma segura y rápida.
				</p>
			</div>
			<div className=" items-center mt-10  z-20 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
				<a
					href="https://www.facebook.com/TramiXpress/"
					target="_blank"
					className="w-full sm:w-auto border dark:bg-gray-800 focus:ring-4 focus:outline-none bg- focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
				>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 448 512"
						className="mx-4 text-5xl text-blue-600 dark:text-blue-500"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
					</svg>
					<div className="text-left">
						<div className="mb-1 dark:text-white ">Unete a nuesta familia en</div>
						<div className="-mt-1  text-blue-500  font-semibold">Facebook</div>
					</div>
				</a>
				<a
					href="https://www.tiktok.com/@tramixpress_"
					target="_blank"
					className="w-full sm:w-auto border dark:bg-gray-800 focus:ring-4 focus:outline-none bg-gray-50 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
				>
					<FaTiktok className="mx-4 text-5xl text-black dark:text-white" />
					<div className="text-left">
						<div className="mb-1 dark:text-white">Síguenos en TikTok</div>
						<div className="-mt-1  text-slate-500  font-semibold">TikTok</div>
					</div>
				</a>
			</div>
		</div>
	);
};
