"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bell, Calendar, Filter, Newspaper, Search, User } from "lucide-react";
import type { Berita, BeritaKategori } from "@/types";
import { mockBerita } from "@/lib/mockData";
import HeroSection from "@/components/layout/HeroSection";

function formatTanggal(date: Date): string {
	return new Intl.DateTimeFormat("id-ID", {
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
			badgeClass: "bg-amber-500/95 text-white",
			accentClass: "text-amber-600"
		};
	}

	return {
		label: "Berita",
		Icon: Newspaper,
		badgeClass: "bg-[#4D9AE1]/95 text-white",
		accentClass: "text-[#4D9AE1]"
	};
}

export default function BeritaPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [filterKategori, setFilterKategori] = useState<"semua" | "berita" | "pengumuman">("semua");

	const sorted = useMemo(() => {
		return [...mockBerita].sort((a, b) => b.tanggal.getTime() - a.tanggal.getTime());
	}, []);

	const filtered = useMemo(() => {
		const q = searchQuery.trim().toLowerCase();

		return sorted.filter((item) => {
			const matchSearch =
				q.length === 0 ||
				item.judul.toLowerCase().includes(q) ||
				item.konten.toLowerCase().includes(q);

			const matchKategori = filterKategori === "semua" || item.kategori === filterKategori;

			return matchSearch && matchKategori;
		});
	}, [sorted, searchQuery, filterKategori]);

	const beritaTerbaru = filtered.filter((x) => x.kategori === "berita");
	const pengumumanTerbaru = filtered.filter((x) => x.kategori === "pengumuman");

	const Card = ({ item }: { item: Berita }) => {
		const meta = kategoriMeta(item.kategori);

		return (
			<Link
				href={`/berita/${item.slug}`}
				className="group block rounded-2xl bg-white border border-slate-300/70 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
			>
				<div className="relative aspect-16/10 bg-slate-100">
					<Image
						src={item.gambar_url ?? "https://picsum.photos/1200/800?random=900"}
						alt={item.judul}
						fill
						className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
						sizes="(max-width: 768px) 100vw, 33vw"
					/>

					<div className="absolute top-4 left-4">
						<span
							className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow ${meta.badgeClass}`}
						>
							<meta.Icon className="w-4 h-4" />
							{meta.label}
						</span>
					</div>
				</div>

				<div className="p-6">
					<div className="flex items-center justify-between gap-4 mb-3 text-sm text-slate-500">
						<div className="flex items-center gap-1.5">
							<Calendar className="w-3.5 h-3.5" />
							<span>{formatTanggal(item.tanggal)}</span>
						</div>
						<div className="flex items-center gap-1.5">
							<User className="w-3.5 h-3.5" />
							<span className="capitalize">{item.penulis}</span>
						</div>
					</div>

					<h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#4D9AE1] transition-colors min-h-14 text-justify tracking-wider capitalize">
						{item.judul}
					</h3>

					<p className="text-sm text-slate-600 line-clamp-3 mb-5 leading-relaxed min-h-16 text-justify">
						{item.konten}
					</p>

					<div className="inline-flex items-center gap-2 text-sm font-semibold text-[#4D9AE1] group-hover:gap-3 transition-all">
						<span>Baca Selengkapnya</span>
						<ArrowRight className="w-4 h-4" />
					</div>
				</div>
			</Link>
		);
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
			<HeroSection
				badge="Portal Informasi Kelurahan"
				title="Berita & Pengumuman"
				description="Informasi terkini seputar kegiatan, program, dan pengumuman penting dari Kelurahan Lumpue."
				footerText={
					<>
						Menampilkan <span className="font-semibold text-white">{filtered.length}</span> item.
					</>
				}
			>
				<div className="grid md:grid-cols-3 gap-4">
					<div className="md:col-span-2 relative">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
						<input
							type="text"
							placeholder="Cari berita atau pengumuman..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 border-transparent focus:border-[#4D9AE1] focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
						/>
					</div>

					<div className="relative">
						<Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
						<select
							value={filterKategori}
							onChange={(e) => setFilterKategori(e.target.value as typeof filterKategori)}
							className="w-full pl-12 pr-10 py-3.5 bg-white rounded-xl border-2 border-transparent focus:border-[#4D9AE1] focus:outline-none transition-colors text-slate-900 appearance-none cursor-pointer"
						>
							<option value="semua">Semua Kategori</option>
							<option value="berita">Berita</option>
							<option value="pengumuman">Pengumuman</option>
						</select>
					</div>
				</div>
			</HeroSection>

			{/* Content */}
			<section className="py-14 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Berita */}
					{beritaTerbaru.length > 0 && (
						<div className="mb-14">
							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 bg-[#4D9AE1] rounded-2xl flex items-center justify-center shadow-sm">
									<Newspaper className="w-6 h-6 text-white" />
								</div>
								<div>
									<h2 className="text-3xl font-bold text-slate-900">Berita Terkini</h2>
									<div className="w-24 h-1 bg-[#4D9AE1] mt-2"></div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{beritaTerbaru.map((item) => (
									<Card key={item.id} item={item} />
								))}
							</div>
						</div>
					)}

					{/* Pengumuman */}
					{pengumumanTerbaru.length > 0 && (
						<div>
							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-sm">
									<Bell className="w-6 h-6 text-white" />
								</div>
								<div>
									<h2 className="text-3xl font-bold text-slate-900">Pengumuman</h2>
									<div className="w-24 h-1 bg-amber-500 mt-2"></div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{pengumumanTerbaru.map((item) => (
									<Card key={item.id} item={item} />
								))}
							</div>
						</div>
					)}

					{/* Empty */}
					{filtered.length === 0 && (
						<div className="text-center py-20">
							<div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
								<Search className="w-12 h-12 text-slate-500" />
							</div>
							<h3 className="text-2xl font-bold text-slate-900 mb-2">Tidak Ada Hasil</h3>
							<p className="text-slate-600 mb-6">
								Tidak ditemukan berita atau pengumuman dengan kata kunci{" "}
								<span className="font-semibold">&quot;{searchQuery.trim()}&quot;</span>
							</p>
							<button
								onClick={() => {
									setSearchQuery("");
									setFilterKategori("semua");
								}}
								className="px-6 py-3 bg-[#4D9AE1] text-white rounded-2xl font-semibold hover:brightness-95 transition cursor-pointer"
							>
								Reset Pencarian
							</button>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}