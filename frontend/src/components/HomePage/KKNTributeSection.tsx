import Image from "next/image";

type KKNPhoto = {
	id: string;
	src: string;
	alt: string;
};

const kknPhotos: {
	hero: KKNPhoto;
	highlights: KKNPhoto[];
} = {
	hero: {
		id: "hero",
		src: "/kkn/kknteam.jpg",
		alt: "Foto bersama Mahasiswa KKN Unhas Gel. 115 di Kelurahan Lumpue"
	},
	highlights: [
		{ id: "h1", src: "/kkn/kkn-1.jpeg", alt: "Kegiatan KKN 1" },
		{ id: "h2", src: "/kkn/kkn-2.jpeg", alt: "Kegiatan KKN 2" },
		{ id: "h3", src: "/kkn/kkn-3.jpeg", alt: "Kegiatan KKN 3" },
		{ id: "h4", src: "/kkn/kkn-4.jpeg", alt: "Kegiatan KKN 4" },
	]
};

export default function KKNTributeSection() {
	return (
		<section className="bg-white border-t-4 border-slate-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid lg:grid-cols-12 gap-8 items-start">
					{/* Foto utama */}
					<div className="lg:col-span-7">
						<div className="relative overflow-hidden rounded-3xl shadow-xl">
							<div className="relative aspect-video">
								<Image
									src={kknPhotos.hero.src}
									alt={kknPhotos.hero.alt}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 60vw"
									priority={false}
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

								<div className="absolute bottom-4 left-4 right-4">
									<div className="flex flex-wrap items-center gap-2">
										<span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white border border-white/20 tracking-wider">
											KKNT Universitas Hasanuddin • Gelombang 115
										</span>
										<span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white border border-white/20 tracking-wider">
											Kelurahan Lumpue • Kota Parepare
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Mini gallery */}
						<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
							{kknPhotos.highlights.map((p) => (
								<div
									key={p.id}
									className="relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
								>
									<Image
										src={p.src}
										alt={p.alt}
										fill
										className="object-cover hover:scale-105 transition-transform duration-500"
										sizes="(max-width: 768px) 50vw, 20vw"
									/>
								</div>
							))}
						</div>
					</div>

					{/* Text tribute */}
					<div className="lg:col-span-5">
						<h3 className="text-2xl font-bold text-slate-900 mb-6 text-justify tracking-wider ">
							Jejak Pengabdian Mahasiswa KKN Universitas Hasanuddin
						</h3>

						<p className="text-slate-600 text-justify tracking-wide leading-7">
							Website ini dikembangkan sebagai bagian dari{" "}
							<span className="font-semibold text-slate-800">
								Kuliah Kerja Nyata (KKN) Tematik Inovasi Daerah Universitas Hasanuddin Gelombang 115
							</span>{" "}
							di Kelurahan Lumpue, Kecamatan Bacukiki Barat, Kota Parepare.
						</p>

                        <p className="text-sm text-slate-500 mt-12 text-justify tracking-wider leading-relaxed">
                            Website ini dikembangkan sebagai bagian dari kegiatan Kuliah Kerja Nyata (KKN) Tematik Inovasi Daerah Universitas Hasanuddin Gelombang 115 yang dilaksanakan di Kelurahan Lumpue, Kecamatan Bacukiki Barat, Kota Parepare. Website ini menjadi wujud kontribusi mahasiswa dalam mendukung proses digitalisasi kelurahan, khususnya dalam penyediaan informasi pemerintahan, dokumentasi kegiatan, serta penyampaian informasi publik kepada masyarakat. Kehadiran website ini diharapkan dapat mempermudah akses informasi secara cepat dan akurat, meningkatkan transparansi, serta memperkuat komunikasi antara pemerintah kelurahan dan masyarakat.
                        </p>
					</div>
				</div>
			</div>
		</section>
	);
}