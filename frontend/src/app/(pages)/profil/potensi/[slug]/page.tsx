import Image from "next/image";
import { notFound } from "next/navigation";
import { mockPotensi, mockPotensiGambar } from "@/lib/mockData";

export default async function PotensiDetailPage({
	params
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const slugValue = (slug ?? "").trim();

	const potensi = mockPotensi.find((x) => x.slug === slugValue);
	if (!potensi) return notFound();

	const galeri = mockPotensiGambar
		.filter((g) => g.potensi_id === potensi.id)
		.sort((a, b) => a.order_index - b.order_index);

	return (
		<section className="py-14 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8">
					<p className="text-sm text-slate-500 mb-2">Profil / Potensi / {potensi.nama}</p>
					<h1 className="text-4xl font-bold text-slate-900">{potensi.nama}</h1>
					<p className="text-slate-600 mt-3 leading-relaxed whitespace-pre-line">
						{potensi.konten}
					</p>
				</div>

				{galeri.length > 0 && (
					<div className="grid md:grid-cols-3 gap-6">
						{galeri.map((img) => (
							<div key={img.id} className="rounded-2xl overflow-hidden bg-slate-100 shadow">
								<div className="relative aspect-video">
									<Image
										src={img.url}
										alt={img.caption ?? potensi.nama}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 33vw"
									/>
								</div>
								{img.caption && (
									<div className="p-4">
										<p className="text-sm text-slate-600">{img.caption}</p>
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}