import Image from "next/image";
import { mockKelembagaan } from "@/lib/mockData";

export default function ProfilKelembagaanPage() {
	return (
		<section className="py-14 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-10">
					<p className="text-sm text-slate-500 mb-2">Profil / Kelembagaan</p>
					<h1 className="text-4xl font-bold text-slate-900">Kelembagaan</h1>
					<p className="text-slate-600 mt-3">
						Informasi lembaga/organisasi yang ada di kelurahan.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{mockKelembagaan.map((k) => (
						<div
							key={k.id}
							className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-lg"
						>
							<div className="relative aspect-video bg-slate-100">
								<Image
									src={k.gambar_url ?? "https://picsum.photos/1200/800?random=303"}
									alt={k.judul}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>

							<div className="p-6">
								<h2 className="text-xl font-bold text-slate-900">{k.judul}</h2>
								<p className="text-slate-700 mt-3 leading-relaxed whitespace-pre-line">
									{k.konten}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}