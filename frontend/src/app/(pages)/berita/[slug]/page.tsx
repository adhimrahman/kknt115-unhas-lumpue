import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bell, Calendar, Newspaper, User, BookOpen, Tag } from "lucide-react";

import type { Berita, BeritaKategori } from "@/types";
import { mockBerita } from "@/lib/mockData";

function formatTanggal(date: Date): string {
	return new Intl.DateTimeFormat("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	}).format(date);
}

function formatTanggalPanjang(date: Date): string {
	return new Intl.DateTimeFormat("id-ID", {
		weekday: "long",
		day: "2-digit",
		month: "long",
		year: "numeric"
	}).format(date);
}

function kategoriMeta(kategori: BeritaKategori) {
	if (kategori === "pengumuman") {
		return {
			label: "Pengumuman",
			Icon: Bell,
			badgeClass: "bg-amber-100 text-amber-800",
			accentClass: "text-amber-600"
		};
	}

	return {
		label: "Berita",
		Icon: Newspaper,
		badgeClass: "bg-blue-100 text-blue-800",
		accentClass: "text-blue-600"
	};
}

function renderKonten(konten: string) {
	const parts = konten
		.split(/\n+/g)
		.map((x) => x.trim())
		.filter(Boolean);

	return parts.map((p, idx) => (
		<p key={idx} className="text-gray-700 leading-relaxed mb-4">
			{p}
		</p>
	));
}

function SidebarBeritaCard({ item }: { item: Berita }) {

	return (
		<Link
			href={`/berita/${item.slug}`}
			className="block group "
		>
			<div className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
				{/* Image */}
				<div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100">
					<Image
						src={item.gambar_url ?? "https://picsum.photos/400/400?random=" + item.id}
						alt={item.judul}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
						sizes="64px"
					/>
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					<h3 className="font-semibold text-sm text-gray-900 mb-2 leading-tight group-hover:text-[#4D9AE1] transition-colors line-clamp-2 tracking-wide">
						{item.judul}
					</h3>
					<div className="text-xs text-gray-500">
						{formatTanggal(item.tanggal)}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }>; }) {
	const { slug } = await params;
	const berita = mockBerita.find((x) => x.slug === slug);

	if (!berita) {
		return (
			<div className="min-h-screen bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<p className="text-sm text-slate-500 mb-4">Berita / Detail</p>
					<h1 className="text-3xl font-bold text-slate-900">Data tidak ditemukan</h1>
					<p className="text-slate-600 mt-2">
						Berita dengan slug <span className="font-semibold">&quot;{slug}&quot;</span> tidak tersedia.
					</p>

					<div className="mt-8">
						<Link
							href="/berita"
							className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow transition"
						>
							<ArrowLeft className="w-4 h-4" />
							Kembali ke Berita
						</Link>
					</div>
				</div>
			</div>
		);
	}

	const meta = kategoriMeta(berita.kategori);
	const terkait = [...mockBerita]
		.filter((x) => x.id !== berita.id && x.kategori === berita.kategori)
		.sort((a, b) => b.tanggal.getTime() - a.tanggal.getTime())
		.slice(0, 4);

	return (
		<div className="min-h-screen bg-slate-50 pt-4">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 max-w-full py-2 md:py-8 lg:py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-3 space-y-8">
						{/* Back Button + Breadcrumb */}
						<div className="space-y-4">
							<Link 
								href="/berita"
								className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors pb-6"
							>
								<ArrowLeft size={16} />
								<span>Kembali ke Berita</span>
							</Link>
							
							<nav className="flex items-center space-x-2 text-sm text-gray-500">
								<Link href="/" className="hover:text-gray-700">Beranda</Link>
								<span>/</span>
								<Link href="/berita" className="hover:text-gray-700">Berita</Link>
								<span>/</span>
								<span className="text-gray-900 font-medium">{berita.judul}</span>
							</nav>
						</div>

						{/* Header */}
						<div className="space-y-6">
							{/* Category Badge */}
							<div className="flex items-center gap-3">
								<span className={`px-4 py-2 rounded-full text-sm font-medium ${meta.badgeClass}`}>
									<Tag size={14} className="inline mr-2" />
									{meta.label}
								</span>
							</div>

							{/* Title */}
							<h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight capitalize">
								{berita.judul}
							</h1>

							{/* Meta Info */}
							<div className="flex flex-wrap items-center gap-6 text-gray-600 capitalize">
								<div className="flex items-center gap-2">
									<Calendar size={16} />
									<span>{formatTanggalPanjang(berita.tanggal)}</span>
								</div>
								<div className="flex items-center gap-2">
									<User size={16} />
									<span>Oleh: {berita.penulis}</span>
								</div>
							</div>
						</div>

						{/* Featured Image with Pattern Background */}
						<div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100">
							{/* Background pattern layer */}
							<div 
								className="absolute inset-0 opacity-10"
								style={{
									backgroundImage: `url(${berita.gambar_url})`,
									backgroundSize: '120px 120px',
									backgroundRepeat: 'repeat',
									backgroundPosition: 'center'
								}}
							/>
							
							{/* Main image centered */}
							<div className="absolute inset-0 flex items-center justify-center p-6">
								<div className="relative w-full h-full max-w-full max-h-full">
									<Image
										src={berita.gambar_url ?? ""}
										alt={berita.judul}
										fill
										className="object-contain drop-shadow-xl"
										priority
										sizes="(max-width: 768px) 100vw, 66vw"
									/>
								</div>
							</div>
							
							<div className="absolute inset-0 bg-white/5 rounded-xl"></div>
						</div>

						{/* Content */}
						<article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
							<div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700 prose-blockquote:border-l-gray-200 prose-blockquote:text-gray-500">
								{renderKonten(berita.konten)}
							</div>
						</article>

						{/* Bottom Actions */}
						<div className="bg-linear-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-6">
							<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
								{/* Left side - Article info */}
								<div className="flex items-center gap-3 text-gray-600">
									<BookOpen size={20} />
									<div className="text-sm">
										<p className="font-medium">Selesai membaca artikel</p>
										<p className="text-gray-500">&quot;{berita.judul}&quot;</p>
									</div>
								</div>

								{/* Right side - Actions */}
								<Link
									href="/berita"
									className="inline-flex items-center gap-2 px-6 py-2 bg-[#4D9AE1] text-white rounded-lg hover:brightness-95 transition-all shadow-sm"
								>
									<ArrowLeft size={16} />
									<span className="text-sm font-medium">Kembali ke Berita</span>
								</Link>
							</div>
						</div>
					</div>

					{/* Sidebar - 1 column */}
					<div className="lg:col-span-1">
						<div className="sticky top-25 space-y-6 mt-44">
							{/* Berita Lainnya */}
							{terkait.length > 0 && (
								<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
									<h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
										<BookOpen size={18} className={meta.accentClass} />
										{meta.label} Lainnya
									</h2>
									<div className="space-y-4">
										{terkait.map((item) => (
											<SidebarBeritaCard key={item.id} item={item} />
										))}
									</div>

									{/* See All Link */}
									<div className="mt-6 pt-4 border-t border-gray-200">
										<Link
											href="/berita"
											className="block text-center py-2 px-4 text-sm text-[#4D9AE1] hover:text-white hover:bg-[#4D9AE1] font-medium transition-all duration-200 rounded-lg border border-[#4D9AE1]/20 hover:border-[#4D9AE1]"
										>
											Lihat Semua {meta.label} →
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}