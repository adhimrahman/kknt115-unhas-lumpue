"use client";
import { useEffect, useMemo, useState } from "react";
import type { Galeri } from "@/types";
import { mockGaleri } from "@/lib/mockData";

import GaleriGrid from "@/components/Galeri/GaleriGrid";
import GaleriStats from "@/components/Galeri/GaleriStats";
import Pagination from "@/components/ui/Pagination";
import { Search } from "lucide-react";
import HeroSection from "@/components/layout/HeroSection";

const ITEMS_PER_PAGE = 12;

export default function GaleriPage() {
	const [data, setData] = useState<Galeri[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		try {
			setLoading(true);
			setError(null);

			setData(mockGaleri);
			setCurrentPage(1);
		} catch (err) {
			console.error("Gagal memuat galeri:", err);
			setError("Gagal memuat data. Silakan coba lagi.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm]);

	const filteredData = useMemo(() => {
		const q = searchTerm.trim().toLowerCase();
		if (!q) return data;

		return data.filter((item) => {
			const judul = item.judul.toLowerCase();
			const desk = (item.deskripsi ?? "").toLowerCase();
			return judul.includes(q) || desk.includes(q);
		});
	}, [data, searchTerm]);

	const totalItems = filteredData.length;
	const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = filteredData.slice(startIndex, endIndex);

	const handleRetry = () => {
		try {
			setLoading(true);
			setError(null);

			setData(mockGaleri);
			setCurrentPage(1);
		} catch (err) {
			console.error("Gagal memuat galeri:", err);
			setError("Gagal memuat data. Silakan coba lagi.");
		} finally {
			setLoading(false);
		}
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
			<HeroSection
				badge="Dokumentasi Kegiatan Kelurahan"
				title="Galeri Foto"
				description="Kumpulan dokumentasi kegiatan, program, dan momen penting di Kelurahan Lumpue."
				footerText={
					<>
						Gunakan kata kunci singkat, misal: &quot;posyandu&quot;, &quot;gotong royong&quot;.
					</>
				}
			>
				<div className="relative">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
					<input
						type="text"
						placeholder="Cari judul atau deskripsi foto..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border-2 border-transparent focus:border-[#4D9AE1] focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
					/>
				</div>
			</HeroSection>

			<section className="py-14 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
					{/* Loading */}
					{loading && (
						<div className="py-20 text-center">
							<div className="inline-flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
								<span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4D9AE1] animate-pulse"></span>
								<p className="text-slate-700 font-medium">Memuat galeri...</p>
							</div>
						</div>
					)}

					{/* Error */}
					{!loading && error && (
						<div className="flex items-center justify-center py-20">
							<div className="text-center space-y-6 max-w-md">
								<div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
									<svg
										className="w-12 h-12 text-red-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h2 className="text-2xl font-bold text-slate-900">Terjadi Kesalahan</h2>
								<p className="text-slate-600">{error}</p>
								<button
									onClick={handleRetry}
									className="inline-flex items-center gap-2 px-6 py-3 bg-[#4D9AE1] text-white font-semibold rounded-xl hover:brightness-95 transition-all duration-200 hover:shadow-lg"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
										/>
									</svg>
									Coba Lagi
								</button>
							</div>
						</div>
					)}

					{/* Empty */}
					{!loading && !error && (!data || data.length === 0) && (
						<div className="flex items-center justify-center py-20">
							<div className="text-center space-y-6 max-w-md">
								<div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
									<svg
										className="w-12 h-12 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h2 className="text-2xl font-bold text-slate-900">Belum ada foto</h2>
								<p className="text-slate-600">Galeri foto belum tersedia. Silakan periksa kembali nanti.</p>
							</div>
						</div>
					)}

					{/* Content */}
					{!loading && !error && data && data.length > 0 && (
						<>
							<GaleriStats
								totalData={data.length}
								filteredData={filteredData.length}
								searchTerm={searchTerm}
								onClearSearch={() => setSearchTerm("")}
							/>

							{/* No search results */}
							{searchTerm && filteredData.length === 0 ? (
								<div className="text-center py-16">
									<div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
										<svg
											className="w-12 h-12 text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-slate-900 mb-2">Tidak ada hasil ditemukan</h3>
									<p className="text-slate-600 max-w-md mx-auto mb-4">
										Tidak ada foto yang cocok dengan pencarian &ldquo;{searchTerm}&rdquo;. Coba gunakan kata
										kunci yang berbeda.
									</p>
									<button
										onClick={() => setSearchTerm("")}
										className="inline-flex items-center gap-2 px-4 py-2 bg-[#4D9AE1] text-white text-sm font-medium rounded-lg hover:brightness-95 transition-colors"
									>
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
										Hapus pencarian
									</button>
								</div>
							) : (
								<GaleriGrid items={currentItems} />
							)}

							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								totalItems={totalItems}
								itemsPerPage={ITEMS_PER_PAGE}
								onPageChange={handlePageChange}
							/>
						</>
					)}
				</div>
			</section>
		</div>
	);
}