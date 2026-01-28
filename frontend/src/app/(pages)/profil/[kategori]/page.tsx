import Image from "next/image";
import { notFound } from "next/navigation";
import { mockProfil } from "@/lib/mockData";
import type { ProfilKategori } from "@/types";

export default async function ProfilKategoriPage({
	params
}: {
	params: { kategori: string } | Promise<{ kategori: string }>;
}) {
	const resolvedParams = await Promise.resolve(params);
	const raw = (resolvedParams.kategori ?? "").trim();

	const kategoriSlug = raw as ProfilKategori;

	const profil = mockProfil.find((p) => p.kategori === kategoriSlug);
	if (!profil) return notFound();

	const imgSrc = profil.gambar_url ?? "https://picsum.photos/1200/800?random=101";

	return (
		<section className="py-2 bg-gray-50">
			{/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
			<div className="">
				<div className="w-full relative">
					<div className="relative w-full h-48 sm:h-56 lg:h-64 mb-6 sm:mb-8 overflow-hidden rounded-2xl shadow-lg bg-slate-100">
						<div
							className="absolute inset-0 opacity-15"
							style={{
								backgroundImage: `url(${imgSrc})`,
								backgroundSize: "150px 150px",
								backgroundRepeat: "repeat",
								backgroundPosition: "center"
							}}
						/>

						<div className="absolute inset-0 flex items-center justify-center p-4">
							<div className="relative w-full h-full max-w-full max-h-full">
								<Image
									src={imgSrc}
									alt={profil.judul}
									fill
									unoptimized
									className="object-contain drop-shadow-lg"
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
								/>
							</div>
						</div>

						<div className="absolute inset-0 bg-white/5 rounded-2xl" />
					</div>
				</div>

				<div className="bg-white rounded-2xl shadow-sm p-5 sm:p-7 lg:p-10 min-h-96">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
						{profil.judul}
					</h1>

					<div className="w-24 h-1 bg-[#4D9AE1] mt-4 mb-7 rounded-full" />

					<div className="prose prose-base sm:prose-lg max-w-none wrap-break-words overflow-wrap-anywhere">
						<p className="whitespace-pre-line">{profil.konten}</p>
					</div>

					<div className="mt-8 text-sm text-slate-500">
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
		</section>
	);
}