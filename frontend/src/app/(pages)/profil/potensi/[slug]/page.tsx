import Image from "next/image";
import SiteNavbar from "@/components/layout/SiteNavbar";
import Footer from "@/components/layout/Footer";
import { mockPotensi, mockPotensiGambar } from "@/lib/mockData";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export default async function PotensiDetailPage({ params }: PageProps) {
	const { slug } = await params;

	const potensi = mockPotensi.find((x) => x.slug === slug);

	if (!potensi) {
		return (
			<div className="min-h-screen flex flex-col">
				<SiteNavbar />
				<main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<h1 className="text-3xl font-bold text-slate-900 mb-2">Data tidak ditemukan</h1>
					<p className="text-slate-600">Potensi dengan slug &quot;{slug}&quot; tidak tersedia.</p>
				</main>
				<Footer />
			</div>
		);
	}

	const galeri = mockPotensiGambar
		.filter((g) => g.potensi_id === potensi.id)
		.sort((a, b) => a.order_index - b.order_index);

	return (
		<div className="min-h-screen flex flex-col">
			<SiteNavbar />
			<main className="grow">
				<section className="py-14 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="mb-8">
							<p className="text-sm text-slate-500 mb-2">Potensi / {potensi.nama}</p>
							<h1 className="text-4xl font-bold text-slate-900">{potensi.nama}</h1>
							<p className="text-slate-600 mt-3 leading-relaxed">{potensi.konten}</p>
						</div>

						{galeri.length > 0 && (
							<div className="grid md:grid-cols-3 gap-6">
								{galeri.map((img) => (
									<div
										key={img.id}
										className="rounded-2xl overflow-hidden bg-slate-100 shadow"
									>
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
			</main>
			<Footer />
		</div>
	);
}