import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { mockKontak } from "@/lib/mockData";

const footerLogos = [
	{
		src: "/logos/parepare.png",
		alt: "Logo Kota Parepare",
		label: "Pemkot Parepare"
	},
	{
		src: "/logos/unhas.png",
		alt: "Logo Universitas Hasanuddin",
		label: "Universitas Hasanuddin"
	},
	{
		src: "/logos/kkn.png",
		alt: "Logo KKN Unhas",
		label: "KKN Unhas"
	},
	{
		src: "/logos/kkn115.png",
		alt: "Logo KKN Unhas Gelombang 115",
		label: "KKN Gel. 115"
	}
] as const;

export default function Footer() {
	return (
		<footer className="bg-[#1E293B] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid gap-10 md:grid-cols-3">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-3 mb-4">
							<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
								<div className="relative w-9 h-9">
									<Image
										src="/logos/parepare.png"
										alt="Logo Kota Parepare"
										fill
										className="object-contain"
										sizes="36px"
										priority
									/>
								</div>
							</div>

							<div>
								<h3 className="font-bold text-lg leading-tight">Kelurahan Lumpue</h3>
								<p className="text-sm text-white/70">Kota Parepare • Sulawesi Selatan</p>
							</div>
						</div>

						<p className="text-white/70 text-sm leading-6 tracking-wide">
							Website Profil & Sistem Informasi Kelurahan Lumpue, Kecamatan Bacukiki
							Barat, Kota Parepare. <br /> Melayani dengan sepenuh hati untuk kesejahteraan
							masyarakat.
						</p>
					</div>

					{/* Kontak */}
					<div>
						<h3 className="font-bold mb-4">Kontak</h3>
						<div className="space-y-3 text-sm text-white/70">
							<div className="flex gap-3">
								<MapPin className="w-4 h-4 mt-0.5 text-white/60" />
								<p className="leading-relaxed">{mockKontak.alamat}</p>
							</div>

							<div className="flex gap-3">
								<Phone className="w-4 h-4 mt-0.5 text-white/60" />
								<p>{mockKontak.telepon} • WA {mockKontak.whatsapp}</p>
							</div>

							<div className="flex gap-3">
								<Mail className="w-4 h-4 mt-0.5 text-white/60" />
								<p>{mockKontak.email}</p>
							</div>

							<div className="flex gap-3">
								<Clock className="w-4 h-4 mt-0.5 text-white/60" />
								<p>{mockKontak.jam_kerja}</p>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-bold mb-4">Link Cepat</h3>
						<div className="grid grid-cols-2 gap-2 text-sm">
							<Link href="/profil" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Profil
							</Link>
							<Link href="/profil/kelembagaan" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Kelembagaan
							</Link>
							<Link href="/berita" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Berita
							</Link>
							<Link href="/profil/potensi" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Potensi
							</Link>
							<Link href="/galeri" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Galeri
							</Link>
							<Link href="/statistik" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Statistik
							</Link>
							<Link href="/kontak-dan-aspirasi" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Kontak dan Aspirasi
							</Link>
							<Link href="/profil/profil-pejabat" className="text-white/70 hover:text-[#4D9AE1] transition-colors">
								Profil Pejabat
							</Link>
						</div>
					</div>
				</div>

				{/* Logo */}
				<div className="mt-6 pt-2">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div className="w-full flex items-center justify-center gap-3 md:gap-4">
							{footerLogos.map((logo) => (
								<div
									key={logo.src}
									className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-2"
								>
									<div className="relative w-12 h-12">
										<Image
											src={logo.src}
											alt={logo.alt}
											fill
											className="object-contain"
											sizes="36px"
											priority={false}
										/>
									</div>
									<span className="text-xs text-white/70 hidden sm:inline">
										{logo.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center text-sm text-white/60">
					<p>© {new Date().getFullYear()} Kelurahan Lumpue. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}