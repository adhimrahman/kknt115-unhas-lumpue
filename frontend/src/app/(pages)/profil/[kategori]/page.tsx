import Image from "next/image";
import { notFound } from "next/navigation";
import { mockProfil } from "@/lib/mockData";
import type { ProfilKategori } from "@/types";

function kategoriTitle(kategori: ProfilKategori) {
	const map: Record<ProfilKategori, string> = {
		tentang: "Tentang",
		sejarah: "Sejarah",
		"visi-misi-sasaran": "Visi, Misi, dan Sasaran",
		"tugas-dan-fungsi": "Tugas dan Fungsi",
		"struktur-organisasi": "Struktur Organisasi"
	};

	return map[kategori] ?? kategori;
}

export default async function ProfilKategoriPage({ params }: { params: Promise<{ kategori: string }>; }) {
	const { kategori } = await params;
	const kategoriSlug = (kategori ?? "").trim() as ProfilKategori;

	const profil = mockProfil.find((p) => p.kategori === kategoriSlug);
	if (!profil) return notFound();

	return (
		<section className="py-14 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8">
					<p className="text-sm text-slate-500 mb-2">Profil / {kategoriTitle(kategoriSlug)}</p>
					<h1 className="text-4xl font-bold text-slate-900">{profil.judul}</h1>
				</div>

				<div className="grid lg:grid-cols-12 gap-10 items-start">
					<div className="lg:col-span-7">
						<div className="prose prose-slate max-w-none">
							<p className="text-slate-700 leading-relaxed whitespace-pre-line">
								{profil.konten}
							</p>
						</div>
					</div>

					<div className="lg:col-span-5">
						<div className="rounded-2xl overflow-hidden bg-slate-100 shadow">
							<div className="relative aspect-video">
								<Image
									src={profil.gambar_url ?? "https://picsum.photos/1200/800?random=101"}
									alt={profil.judul}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 40vw"
								/>
							</div>
						</div>

						<div className="mt-4 text-sm text-slate-500">
							Diperbarui:{" "}
							<span className="text-slate-700">
								{new Intl.DateTimeFormat("id-ID", {
									day: "2-digit",
									month: "long",
									year: "numeric"
								}).format(profil.updated_at)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}