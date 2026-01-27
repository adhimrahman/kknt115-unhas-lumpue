import Link from "next/link";
import Image from "next/image";
import { mockGaleri } from "@/lib/mockData";
import type { Galeri } from "@/types";

export default function GaleriPage() {
	const galeriTerbaru: Galeri[] = [...mockGaleri]
		.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
		.slice(0, 8);

	return (
		<section id="galeri" className="py-20 bg-white scroll-mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-12">
					<div>
						<h2 className="text-3xl font-bold text-[#1E293B] mb-2">Galeri Kegiatan</h2>
						<div className="w-24 h-1 bg-[#4D9AE1]"></div>
						<p className="text-gray-600 mt-3">Dokumentasi kegiatan terbaru di kelurahan</p>
					</div>

					<Link
						href="/galeri"
						className="flex items-center gap-2 text-[#4D9AE1] font-semibold hover:gap-3 transition-all"
					>
						Lihat Semua
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</Link>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{galeriTerbaru.map((item) => (
						<Link
							key={item.id}
							href={`/galeri/${item.id}`}
							className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
						>
							{item.gambar_url ? (
								<Image
									src={item.gambar_url}
									alt={item.judul}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									sizes="(max-width: 768px) 50vw, 25vw"
								/>
							) : (
								<div className="absolute inset-0 bg-slate-200" />
							)}

							<div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h3 className="text-white font-bold text-sm mb-2 line-clamp-2 tracking-wide capitalize">
										{item.judul}
									</h3>
									<p className="text-white/80 text-xs line-clamp-2 mb-2">{item.deskripsi}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}