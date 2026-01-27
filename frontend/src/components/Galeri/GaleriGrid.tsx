import Image from "next/image";
import type { Galeri } from "@/types";

function formatTanggal(date: Date): string {
	return new Intl.DateTimeFormat("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	}).format(date);
}

function getFallbackImage(id: string) {
	return `https://picsum.photos/1200/800?random=${encodeURIComponent(id)}`;
}

export default function GaleriGrid({ items }: { items: Galeri[] }) {
	if (!items || items.length === 0) {
		return (
			<div className="text-center py-20">
				<div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
					<svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3 className="text-xl font-semibold text-slate-900 mb-2">Tidak ada foto ditemukan</h3>
				<p className="text-slate-600 max-w-md mx-auto">Coba ubah kata kunci pencarian Anda</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{items.map((item) => {
				const tanggal = formatTanggal(new Date(item.created_at));
				const src = item.gambar_url ?? getFallbackImage(item.id);

				return (
					<a
						key={item.id}
						href={src}
						target="_blank"
						rel="noreferrer"
						className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform aspect-square bg-white"
					>
						<Image
							src={src}
							alt={item.judul || "Galeri image"}
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-700"
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
						/>

						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

						<div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
							<div className="text-white">
								<h3 className="text-lg font-bold mb-2 leading-tight">
									{item.judul}
								</h3>

								{item.deskripsi && (
									<p className="text-sm text-gray-200 line-clamp-3 leading-relaxed mb-3">
										{item.deskripsi}
									</p>
								)}

								<div className="flex items-center gap-2 text-xs text-gray-300">
									<span>{tanggal}</span>
								</div>
							</div>
						</div>

						<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
								<svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}