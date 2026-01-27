import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Instagram, MapPin, Phone, Store, User, MessageCircle } from "lucide-react";

import type { UMKM } from "@/types";
import { mockUMKM } from "@/lib/mockData";

function getFallbackImage(id: string) {
	return `https://picsum.photos/1200/800?random=${encodeURIComponent(id)}`;
}

function formatWhatsappLink(value?: string): string | null {
	if (!value) return null;

	const v = value.trim();
	if (v.startsWith("62")) return `https://wa.me/${v}`;
	if (v.startsWith("0")) return `https://wa.me/62${v.slice(1)}`;

	return `https://wa.me/${v.replace(/\D/g, "")}`;
}

function formatInstagramLink(value?: string): string | null {
	if (!value) return null;

	let v = value.trim();
	if (v.startsWith("@")) v = v.slice(1);
	if (!v) return null;

	return `https://instagram.com/${v}`;
}

function parseLokasi(lokasi?: string): { lat: number; lng: number } | null {
	if (!lokasi) return null;

	const parts = lokasi.split(",").map((x) => x.trim());
	if (parts.length !== 2) return null;

	const lat = Number(parts[0]);
	const lng = Number(parts[1]);

	if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
	return { lat, lng };
}

function googleMapsLink(lokasi?: string): string | null {
	const parsed = parseLokasi(lokasi);
	if (!parsed) return null;

	return `https://www.google.com/maps?q=${parsed.lat},${parsed.lng}`;
}

function SidebarUmkmCard({ item }: { item: UMKM }) {
	return (
		<Link href={`/umkm/${item.id}`} className="block group">
			<div className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors capitalize">
				<div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100">
					<Image
						src={item.gambar_url ?? getFallbackImage(item.id)}
						alt={item.nama}
						fill
						className="object-cover group-hover:scale-105 transition-transform duration-300"
						sizes="64px"
					/>
				</div>

				<div className="flex-1 min-w-0">
					<h3 className="font-semibold text-sm text-gray-900 mb-2 leading-tight group-hover:text-[#4D9AE1] transition-colors line-clamp-2 tracking-wide">
						{item.nama}
					</h3>
					<div className="text-xs text-gray-500 line-clamp-1">{item.owner}</div>
				</div>
			</div>
		</Link>
	);
}

export default async function UMKMDetailPage({ params }: { params: Promise<{ id: string }>; }) {
	const { id } = await params;
	const umkm = mockUMKM.find((x) => x.id === id);

	if (!umkm) {
		return (
			<div className="min-h-screen bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<p className="text-sm text-slate-500 mb-4">UMKM / Detail</p>
					<h1 className="text-3xl font-bold text-slate-900">Data tidak ditemukan</h1>
					<p className="text-slate-600 mt-2">
						UMKM dengan id <span className="font-semibold">&quot;{id}&quot;</span> tidak
						tersedia.
					</p>

					<div className="mt-8">
						<Link
							href="/umkm"
							className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow transition"
						>
							<ArrowLeft className="w-4 h-4" />
							Kembali ke UMKM
						</Link>
					</div>
				</div>
			</div>
		);
	}

	const waLink = formatWhatsappLink(umkm.whatsapp);
	const igLink = formatInstagramLink(umkm.instagram);
	const mapsLink = googleMapsLink(umkm.lokasi);

	const terkait = [...mockUMKM].filter((x) => x.id !== umkm.id).slice(0, 6);

	return (
		<div className="min-h-screen bg-slate-50 pt-4">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 max-w-full py-2 md:py-8 lg:py-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Main */}
					<div className="lg:col-span-3 space-y-8">
						{/* Back + Breadcrumb */}
						<div className="space-y-4">
							<Link
								href="/umkm"
								className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors pb-6"
							>
								<ArrowLeft size={16} />
								<span>Kembali ke UMKM</span>
							</Link>

							<nav className="flex items-center space-x-2 text-sm text-gray-500">
								<Link href="/" className="hover:text-gray-700">
									Beranda
								</Link>
								<span>/</span>
								<Link href="/umkm" className="hover:text-gray-700">
									UMKM
								</Link>
								<span>/</span>
								<span className="text-gray-900 font-medium">{umkm.nama}</span>
							</nav>
						</div>

						{/* Header */}
						<div className="space-y-6">
							<div className="flex items-center gap-3">
								<span className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
									<Store size={14} className="inline mr-2" />
									UMKM
								</span>
							</div>

							<h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight capitalize">
								{umkm.nama}
							</h1>

							<div className="flex flex-wrap items-center gap-6 text-gray-600 capitalize">
								<div className="flex items-center gap-2">
									<User size={16} />
									<span>Pemilik : {umkm.owner}</span>
								</div>
								<div className="flex items-center gap-2">
									<Phone size={16} />
									<span>{umkm.kontak}</span>
								</div>
							</div>
						</div>

						{/* Featured Image */}
						<div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100">
							<div
								className="absolute inset-0 opacity-10"
								style={{
									backgroundImage: `url(${umkm.gambar_url ?? getFallbackImage(umkm.id)})`,
									backgroundSize: "120px 120px",
									backgroundRepeat: "repeat",
									backgroundPosition: "center"
								}}
							/>

							<div className="absolute inset-0 flex items-center justify-center p-6">
								<div className="relative w-full h-full max-w-full max-h-full">
									<Image
										src={umkm.gambar_url ?? getFallbackImage(umkm.id)}
										alt={umkm.nama}
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
						<article className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
							<div>
								<h2 className="text-lg font-bold text-gray-900 mb-2">Deskripsi</h2>
								<p className="text-gray-700 leading-relaxed text-justify">{umkm.deskripsi}</p>
							</div>

							<div className="grid md:grid-cols-2 gap-4">
								<div className="rounded-xl border border-gray-200 p-4">
									<h3 className="font-semibold text-gray-900 mb-3">Alamat</h3>
									<div className="flex items-start gap-2 text-gray-700 pt-1 min-h-14">
										<MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
										<p className="leading-relaxed capitalize">{umkm.alamat}</p>
									</div>

									{mapsLink && (
										<div className="mt-3">
											<a
												href={mapsLink}
												target="_blank"
												rel="noreferrer"
												className="text-sm font-semibold text-[#4D9AE1] hover:underline"
											>
												Buka di Google Maps →
											</a>
										</div>
									)}
								</div>

								<div className="rounded-xl border border-gray-200 p-4">
									<h3 className="font-semibold text-gray-900 mb-3">Kontak</h3>

									<div className="space-y-2 text-gray-700">
										<div className="flex items-center gap-2">
											<Phone className="w-4 h-4 text-gray-400" />
											<span>{umkm.kontak}</span>
										</div>

										{igLink && (
											<div className="flex items-center gap-2">
												<Instagram className="w-4 h-4 text-gray-400" />
												<a
													href={igLink}
													target="_blank"
													rel="noreferrer"
													className="hover:underline text-[#4D9AE1] font-semibold"
												>
													{umkm.instagram}
												</a>
											</div>
										)}

										{waLink && (
											<div className="flex items-center gap-2">
												<MessageCircle className="w-4 h-4 text-gray-400" />
												<a
													href={waLink}
													target="_blank"
													rel="noreferrer"
													className="hover:underline text-emerald-700 font-semibold"
												>
													Chat WhatsApp
												</a>
											</div>
										)}
									</div>
								</div>
							</div>
						</article>

						{/* Bottom Actions */}
						<div className="bg-linear-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-6">
							<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
								<div className="flex items-center gap-3 text-gray-600">
									<Store size={20} />
									<div className="text-sm">
										<p className="font-medium">Detail UMKM</p>
										<p className="text-gray-500">&quot;{umkm.nama}&quot;</p>
									</div>
								</div>

								<Link
									href="/umkm"
									className="inline-flex items-center gap-2 px-6 py-2 bg-[#4D9AE1] text-white rounded-lg hover:brightness-95 transition-all shadow-sm"
								>
									<ArrowLeft size={16} />
									<span className="text-sm font-medium">Kembali ke UMKM</span>
								</Link>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						<div className="sticky top-25 space-y-6 mt-44">
							{terkait.length > 0 && (
								<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
									<h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
										<Store size={18} className="text-[#4D9AE1]" />
										UMKM Lainnya
									</h2>

									<div className="space-y-4">
										{terkait.map((item) => (
											<SidebarUmkmCard key={item.id} item={item} />
										))}
									</div>

									<div className="mt-6 pt-4 border-t border-gray-200">
										<Link
											href="/umkm"
											className="block text-center py-2 px-4 text-sm text-[#4D9AE1] hover:text-white hover:bg-[#4D9AE1] font-medium transition-all duration-200 rounded-lg border border-[#4D9AE1]/20 hover:border-[#4D9AE1]"
										>
											Lihat Semua UMKM →
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