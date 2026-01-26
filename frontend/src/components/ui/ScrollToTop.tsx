"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const scrollHeight =
				document.documentElement.scrollHeight - document.documentElement.clientHeight;

			const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

			setIsVisible(scrollTop > 300);
			setScrollProgress(progress);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!isVisible) return null;

	const radius = 24;
	const circumference = 2 * Math.PI * radius;
	const dashOffset = circumference * (1 - scrollProgress / 100);

	return (
		<button
			type="button"
			onClick={scrollToTop}
			aria-label="Scroll to top"
			className="fixed bottom-6 right-6 z-50 group transition-all duration-300 hover:scale-110 focus:outline-none hover:cursor-pointer"
		>
			<div className="relative w-14 h-14">
				{/* Background circle */}
				<svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56" aria-hidden="true">
					<circle
						cx="28"
						cy="28"
						r={radius}
						stroke="currentColor"
						strokeWidth="4"
						fill="none"
						className="text-gray-200"
					/>
				</svg>

				{/* Progress circle */}
				<svg
					className="absolute top-0 left-0 w-14 h-14 -rotate-90"
					viewBox="0 0 56 56"
					aria-hidden="true"
				>
					<circle
						cx="28"
						cy="28"
						r={radius}
						stroke="currentColor"
						strokeWidth="4"
						fill="none"
						strokeDasharray={circumference}
						strokeDashoffset={dashOffset}
						strokeLinecap="round"
						className="text-[#4D9AE1] transition-all duration-150 ease-out"
					/>
				</svg>

				{/* Button content */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:bg-[#4D9AE1]/10 transition-colors duration-200">
						<ChevronUp className="w-5 h-5 text-[#4D9AE1] group-hover:text-[#2B7AC4] transition-colors duration-200" />
					</div>
				</div>
			</div>
		</button>
	);
}