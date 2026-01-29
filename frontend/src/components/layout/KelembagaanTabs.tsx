'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Building2, Users, HeartPulse } from "lucide-react";
import { KELEMBAGAAN, kelembagaanMeta } from "@/lib/kelembagaan";
import { JSX } from "react";

const ICONS: Record<string, JSX.Element> = {
	lpmk: <Building2 size={18} />,
	"karang-taruna": <Users size={18} />,
	pkk: <HeartPulse size={18} />,
	rt: <Users size={18} />,
	rw: <Users size={18} />,
	"lembaga-adat": <Building2 size={18} />,
	posyandu: <HeartPulse size={18} />
};

export default function KelembagaanTabs() {
	const pathname = usePathname();

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex items-center">
				<Link
					href="/profil/tentang"
					className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
						text-slate-600 bg-white border border-slate-300 rounded-lg
						hover:bg-slate-50 hover:text-slate-800 transition shadow-sm"
				>
					<ArrowLeft className="w-4 h-4" />
					<span>Kembali ke Profil</span>
				</Link>
			</div>

			<div className="hidden lg:block">
				<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 min-h-20 flex items-center">
					<div className="flex items-center space-x-1 w-full">
						{KELEMBAGAAN.map((slug) => {
							const href = `/profil/kelembagaan/${slug}`;
							const isActive = pathname === href;

							return (
								<Link
									key={slug}
									href={href}
									className={`flex-1 flex items-center justify-center gap-2
										px-2 py-3 rounded-lg min-h-16
										text-sm font-semibold transition-all
										${isActive
											? "bg-[#4D9AE1]/10 text-[#4D9AE1] border border-[#4D9AE1] shadow-sm"
											: "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
										}`}
								>
									{ICONS[slug]}
									<span className="tracking-wide text-center">
										{kelembagaanMeta[slug].label}
									</span>
								</Link>
							);
						})}
					</div>
				</div>
			</div>

			<div className="lg:hidden">
				<div className="bg-white rounded-xl shadow-sm border border-slate-200 pt-3 p-2">
					<div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
						{KELEMBAGAAN.map((slug) => {
							const href = `/profil/kelembagaan/${slug}`;
							const isActive = pathname === href;

							return (
								<Link
									key={slug}
									href={href}
									className={`shrink-0 flex flex-col items-center gap-2
										px-4 py-3 rounded-lg min-w-30
										text-xs font-semibold transition-all
										${isActive
											? "bg-[#4D9AE1]/10 text-[#4D9AE1] border border-[#4D9AE1] shadow-sm"
											: "text-slate-600 hover:bg-slate-50"
										}`}
								>
									{ICONS[slug]}
									<span className="text-center leading-tight">
										{kelembagaanMeta[slug].label}
									</span>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}