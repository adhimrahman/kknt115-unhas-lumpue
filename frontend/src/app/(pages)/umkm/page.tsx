"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Search, Store, User } from "lucide-react";

import type { UMKM } from "@/types";
import { mockUMKM } from "@/lib/mockData";
import HeroSection from "@/components/layout/HeroSection";
import Pagination from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 15;

function normalize(str: string): string {
	return str.trim().toLowerCase();
}

function formatWhatsappLink(value?: string): string | null {
	if (!value) return null;
	const v = value.trim();
	if (v.startsWith("62")) return `https://wa.me/${v}`;
	if (v.startsWith("0")) return `https://wa.me/62${v.slice(1)}`;

	return `https://wa.me/${v.replace(/\D/g, "")}`;
}

function getFallbackImage(id: string) {
	return `https://picsum.photos/1200/800?random=${encodeURIComponent(id)}`;
}

const UmkmCard = ({ item }: { item: UMKM }) => {
	const waLink = formatWhatsappLink(item.whatsapp);

	return (
		<Link
			href={`/umkm/${item.id}`}
			className="group block rounded-2xl bg-white border border-slate-300/70 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
		>
			<div className="relative aspect-16/10 bg-slate-100">
				<Image
					src={item.gambar_url ?? getFallbackImage(item.id)}
					alt={item.nama}
					fill
					className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
					sizes="(max-width: 768px) 100vw, 33vw"
				/>
				<div className="absolute top-4 left-4">
					<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold shadow bg-emerald-600/95 text-white">
						<Store className="w-4 h-4" />
						UMKM
					</span>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#4D9AE1] transition-colors tracking-wider capitalize min-h-14">
					{item.nama}
				</h3>

				<p className="text-sm text-slate-600 min-h-12 line-clamp-2 mb-4 leading-relaxed text-justify">
					{item.deskripsi}
				</p>

				<div className="space-y-2 text-sm text-slate-600 capitalize">
					<div className="flex items-center gap-2">
						<User className="w-4 h-4 text-slate-400" />
						<span className="line-clamp-1">{item.owner}</span>
					</div>
					<div className="flex items-center gap-2">
						<MapPin className="w-4 h-4 text-slate-400" />
						<span className="line-clamp-1">{item.alamat}</span>
					</div>
					<div className="flex items-center gap-2">
						<Phone className="w-4 h-4 text-slate-400" />
						<span className="line-clamp-1">{item.kontak}</span>
					</div>
				</div>

				<div className="mt-5 flex items-center gap-2">
					<span className="text-sm font-semibold text-[#4D9AE1] group-hover:underline">
						Lihat Detail
					</span>

					{waLink && (
						<span className="ml-auto text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
							WA tersedia
						</span>
					)}
				</div>
			</div>
		</Link>
	);
};

export default function UMKMListPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const handleSearchChange = (value: string) => {
		setSearchQuery(value);
		setCurrentPage(1);
	};

	const sorted = useMemo(() => {
		return [...mockUMKM].sort((a, b) => (a.nama > b.nama ? 1 : -1));
	}, []);

	const filtered = useMemo(() => {
		const q = normalize(searchQuery);
		if (!q) return sorted;

		return sorted.filter((item) => {
			const hay = normalize(
				[
					item.nama,
					item.owner,
					item.deskripsi,
					item.alamat,
					item.kontak,
					item.instagram ?? "",
					item.whatsapp ?? ""
				].join(" ")
			);
			return hay.includes(q);
		});
	}, [sorted, searchQuery]);

	const totalItems = filtered.length;
	const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
	const safePage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1));
	const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = filtered.slice(startIndex, endIndex);

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
			<HeroSection
				badge="Etalase UMKM Kelurahan"
				title="UMKM"
				description="Temukan UMKM lokal, profil singkat, kontak, dan lokasi usaha."
				footerText={
					<>
						Menampilkan{" "}
						<span className="font-semibold text-white">{totalItems}</span> UMKM.
					</>
				}
			>
				<div className="relative">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
					<input
						type="text"
						placeholder="Cari UMKM, owner, alamat, atau kontak..."
						value={searchQuery}
						onChange={(e) => handleSearchChange(e.target.value)}
						className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 border-transparent focus:border-[#4D9AE1] focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
					/>
				</div>
			</HeroSection>

			<section className="py-14 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
					{totalItems > 0 ? (
						<>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{currentItems.map((item) => (
									<UmkmCard key={item.id} item={item} />
								))}
							</div>

							<Pagination
								currentPage={safePage}
								totalPages={totalPages}
								totalItems={totalItems}
								itemsPerPage={ITEMS_PER_PAGE}
								onPageChange={(page) => {
									setCurrentPage(page);
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
							/>
						</>
					) : (
						<div className="text-center py-20">
							<div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
								<Search className="w-12 h-12 text-slate-500" />
							</div>
							<h3 className="text-2xl font-bold text-slate-900 mb-2">
								Tidak Ada Hasil
							</h3>
							<p className="text-slate-600 mb-6">
								Tidak ditemukan UMKM dengan kata kunci{" "}
								<span className="font-semibold">
									&quot;{searchQuery.trim()}&quot;
								</span>
							</p>
							<button
								onClick={() => handleSearchChange("")}
								className="px-6 py-3 bg-[#4D9AE1] text-white rounded-2xl font-semibold hover:brightness-95 transition"
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