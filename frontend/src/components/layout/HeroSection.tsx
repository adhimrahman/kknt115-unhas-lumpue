"use client";
import type { ReactNode } from "react";

type Props = {
	badge: string;
	title: string;
	description: string;
	children?: ReactNode;
	footerText?: ReactNode;
};

export default function HeroSection({ badge, title, description, children, footerText }: Props) {
	return (
		<section className="relative bg-linear-to-br from-[#1E293B] via-[#2D3E56] to-[#4D9AE1] py-12 md:py-16 overflow-hidden">
			<div className="absolute top-0 right-0 w-md h-md bg-white/10 rounded-full blur-3xl translate-x-56 -translate-y-56"></div>
			<div className="absolute bottom-0 left-0 w-88 h-88 bg-white/10 rounded-full blur-2xl -translate-x-40 translate-y-40"></div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="mb-6">
					<span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/20">
						{badge}
					</span>
				</div>

				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
				<p className="text-lg text-white/80 max-w-3xl mx-auto mb-4 min-h-14 flex items-center justify-center">{description}</p>

				{children && (
					<div className="max-w-4xl mx-auto">
						<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
							{children}
							{footerText && ( <p className="text-sm text-white/70 mt-6">{footerText}</p> )}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}