import Link from 'next/link';
import { mockPotensi } from '@/lib/mockData';
import { potensiIconMap } from '@/lib/potensiIcon';

function kategoriLabel(kategori: string): string {
	const map: Record<string, string> = {
		umkm: 'UMKM',
		pertanian: 'Pertanian',
		perikanan: 'Perikanan',
		wisata: 'Wisata',
		kuliner: 'Kuliner',
		sdm: 'SDM'
	};

	return map[kategori] ?? kategori;
}

export default function PotensiBadges() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-[#1E293B] mb-2">Potensi Kelurahan</h2>
					<div className="w-24 h-1 bg-[#4D9AE1] mx-auto mb-4"></div>
					<p className="text-gray-600">Pilih kategori untuk melihat detail potensi</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{mockPotensi.map((p) => {
						const Icon = potensiIconMap[p.icon];

						return (
							<Link
								key={p.id}
								href={`/profil/potensi/${p.slug}`}
								className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex items-center gap-4"
							>
								<div className="w-14 h-14 rounded-2xl bg-[#4D9AE1]/15 flex items-center justify-center shrink-0 group-hover:bg-[#4D9AE1]/20 transition">
									<Icon className="w-7 h-7 text-[#4D9AE1]" />
								</div>

								<div className="min-w-0">
									<p className="text-xs font-semibold text-gray-500 mb-1">
										{kategoriLabel(p.kategori)}
									</p>
									<h3 className="text-base md:text-lg font-bold text-[#1E293B] group-hover:text-[#4D9AE1] transition-colors truncate">
										{p.nama}
									</h3>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}