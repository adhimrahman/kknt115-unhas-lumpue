import Link from "next/link";
import { mockPotensi } from "@/lib/mockData";
import { potensiIconMap } from "@/lib/potensiIcon";

function kategoriLabel(kategori: string): string {
	const map: Record<string, string> = {
		umkm: "UMKM",
		pertanian: "Pertanian",
		perikanan: "Perikanan",
		wisata: "Wisata",
		kuliner: "Kuliner",
		sdm: "SDM"
	};

	return map[kategori] ?? kategori;
}

type Props = {
	title?: string;
	subtitle?: string;
	className?: string;
};

export default function PotensiBadgesProfil({
	title = "Potensi Kelurahan",
	subtitle = "Pilih kategori untuk melihat detail potensi",
	className = ""
}: Props) {
	return (
		<div className={className}>
			<div className="mb-6">
				<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
				<div className="w-20 h-1 bg-[#4D9AE1] mt-3 mb-3 rounded-full" />
				<p className="text-sm text-slate-600">{subtitle}</p>
			</div>

			<div className="flex flex-col gap-3">
				{mockPotensi.map((p) => {
					const Icon = potensiIconMap[p.icon];

					return (
						<Link key={p.id} href={`/profil/potensi/${p.slug}`}
							className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex items-center gap-4"
						>
							<div className="w-12 h-12 rounded-2xl bg-[#4D9AE1]/15 flex items-center justify-center shrink-0 group-hover:bg-[#4D9AE1]/20 transition">
								<Icon className="w-6 h-6 text-[#4D9AE1]" />
							</div>

							<div className="min-w-0">
								<p className="text-[11px] font-semibold text-slate-500 mb-1 capitalize">
									{kategoriLabel(p.kategori)}
								</p>
								<h3 className="text-base font-bold text-slate-900 group-hover:text-[#4D9AE1] transition-colors truncate capitalize">
									{p.nama}
								</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
