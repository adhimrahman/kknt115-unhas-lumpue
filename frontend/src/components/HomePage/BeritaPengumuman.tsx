import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Newspaper, Bell } from 'lucide-react';
import type { Berita } from '@/types';
import { mockBerita } from '@/lib/mockData';

function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);
}

function sortByTanggalDesc(a: Berita, b: Berita): number {
	return b.tanggal.getTime() - a.tanggal.getTime();
}

export default function BeritaPengumuman() {
	const beritaTerkini = [...mockBerita]
		.filter((x) => x.kategori === 'berita')
		.sort(sortByTanggalDesc)
		.slice(0, 3);

	const pengumumanTerkini = [...mockBerita]
		.filter((x) => x.kategori === 'pengumuman')
		.sort(sortByTanggalDesc)
		.slice(0, 4);

	return (
		<section className="py-20 bg-white scroll-mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Berita Terkini */}
				<div className="mb-16">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h2 className="text-3xl font-bold text-[#1E293B] mb-2">Berita Terkini</h2>
							<div className="w-24 h-1 bg-[#4D9AE1]"></div>
						</div>

						<Link
							href="/berita"
							className="flex items-center gap-2 text-[#4D9AE1] font-semibold hover:gap-3 transition-all"
						>
							Lihat Semua <Newspaper className="w-5 h-5" />
						</Link>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{beritaTerkini.map((berita) => (
							<Link
								key={berita.id}
								href={`/berita/${berita.slug}`}
								className="bg-gray-150 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border border-slate-300/50"
							>
								<div className="relative aspect-video overflow-hidden bg-gray-200">
									{berita.gambar_url && (
										<Image
											src={berita.gambar_url}
											alt={berita.judul}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, 33vw"
										/>
									)}
								</div>

								<div className="p-6">
									<div className="flex items-center gap-2 mb-3">
										<Calendar className="w-4 h-4 text-gray-400" />
										<span className="text-sm text-gray-500">{formatDate(berita.tanggal)}</span>
									</div>

									<h3 className="text-lg font-bold text-[#1E293B] mb-2 line-clamp-2 group-hover:text-[#4D9AE1] transition-colors min-h-16 capitalize">
										{berita.judul}
									</h3>

									<span className="text-[#4D9AE1] font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
										Baca Selengkapnya →
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>

				{/* Pengumuman */}
				<div>
					<div className="flex items-center justify-between mb-8">
						<div>
							<h2 className="text-3xl font-bold text-[#1E293B] mb-2">Pengumuman</h2>
							<div className="w-24 h-1 bg-[#4D9AE1]"></div>
						</div>

						<Link
							href="/berita?kategori=pengumuman"
							className="flex items-center gap-2 text-[#4D9AE1] font-semibold hover:gap-3 transition-all"
						>
							Lihat Semua <Bell className="w-5 h-5" />
						</Link>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{pengumumanTerkini.map((pengumuman) => (
							<Link
								key={pengumuman.id}
								href={`/berita/${pengumuman.slug}`}
								className="bg-linear-to-br from-[#1E293B] to-[#2D3E56] rounded-2xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
							>
								<div className="flex items-start gap-4">
									<div className="shrink-0 w-12 h-12 bg-[#4D9AE1] rounded-xl flex items-center justify-center">
										<Bell className="w-6 h-6" />
									</div>

									<div className="flex-1">
										<div className="flex items-center gap-2 mb-2">
											<Calendar className="w-4 h-4 text-gray-300" />
											<span className="text-sm text-gray-300">{formatDate(pengumuman.tanggal)}</span>
										</div>
                                        
										<h3 className="text-lg font-bold mb-2 group-hover:text-[#4D9AE1] transition-colors line-clamp-2 min-h-16 capitalize">
											{pengumuman.judul}
										</h3>

										<span className="text-[#4D9AE1] font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
											Baca Selengkapnya →
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}