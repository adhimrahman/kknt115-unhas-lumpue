"use client";
import Link from "next/link";
import { mockGaleri } from "@/lib/mockData";
import type { Galeri } from "@/types";
import GaleriGrid from "@/components/Galeri/GaleriGrid";

export default function GaleriPage() {
	const galeriTerbaru: Galeri[] = [...mockGaleri]
		.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
		.slice(0, 8);

	return (
		<section id="galeri" className="py-20 bg-white scroll-mt-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between mb-12">
					<div>
						<h2 className="text-3xl font-bold text-[#1E293B] mb-2">Galeri Kegiatan</h2>
						<div className="w-24 h-1 bg-[#4D9AE1]" />
						<p className="text-gray-600 mt-3">Dokumentasi kegiatan terbaru di kelurahan</p>
					</div>

					<Link
						href="/galeri"
						className="flex items-center gap-2 text-[#4D9AE1] font-semibold hover:gap-3 transition-all"
					>
						Lihat Semua
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</Link>
				</div>

				<GaleriGrid items={galeriTerbaru} />
			</div>
		</section>
	);
}