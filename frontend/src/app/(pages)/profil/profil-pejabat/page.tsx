import Image from "next/image";
import { mockProfilPejabat } from "@/lib/mockData";

export default function ProfilPejabatPage() {
	return (
		<section className="py-14 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-10">
					<p className="text-sm text-slate-500 mb-2">Profil / Profil Pejabat</p>
					<h1 className="text-4xl font-bold text-slate-900">Profil Pejabat</h1>
					<p className="text-slate-600 mt-3">
						Informasi pejabat/perangkat kelurahan yang bertugas.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{mockProfilPejabat.map((p) => (
						<div
							key={p.id}
							className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
						>
							<div className="relative aspect-4/3 bg-slate-100">
								<Image
									src={p.gambar_url ?? "https://picsum.photos/800/600?random=202"}
									alt={p.nama}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							</div>

							<div className="p-6">
								<h2 className="text-lg font-bold text-slate-900">{p.nama}</h2>
								<p className="text-sm text-slate-600 mt-1">{p.jabatan}</p>

								<div className="mt-4 text-sm text-slate-600 space-y-1">
									<p>
										<span className="font-semibold text-slate-800">Golongan:</span>{" "}
										{p.golongan}
									</p>
									<p>
										<span className="font-semibold text-slate-800">Pendidikan:</span>{" "}
										{p.pendidikan}
									</p>
								</div>

								{/* nanti kalau file riwayat sudah real dari backend, tinggal jadikan link */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
