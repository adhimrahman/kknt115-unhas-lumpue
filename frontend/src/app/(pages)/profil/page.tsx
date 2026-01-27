import Link from "next/link";
import { Building2, Users, Network, Sparkles, BookOpen, Flag, Briefcase, Spline } from "lucide-react";

const profilMenu = [
	{
		title: "Tentang",
		desc: "Gambaran umum kelurahan",
		href: "/profil/tentang",
		icon: BookOpen
	},
	{
		title: "Sejarah",
		desc: "Sejarah singkat kelurahan",
		href: "/profil/sejarah",
		icon: Flag
	},
	{
		title: "Visi, Misi, Sasaran",
		desc: "Arah dan tujuan pembangunan",
		href: "/profil/visi-misi-sasaran",
		icon: Sparkles
	},
	{
		title: "Tugas & Fungsi",
		desc: "Peran dan layanan kelurahan",
		href: "/profil/tugas-dan-fungsi",
		icon: Briefcase
	},
	{
		title: "Struktur Organisasi",
		desc: "Struktur dan pembagian kerja",
		href: "/profil/struktur-organisasi",
		icon: Spline
	},
	{
		title: "Profil Pejabat",
		desc: "Pejabat dan perangkat kelurahan",
		href: "/profil/profil-pejabat",
		icon: Users
	},
	{
		title: "Kelembagaan",
		desc: "Lembaga/organisasi di kelurahan",
		href: "/profil/kelembagaan",
		icon: Network
	},
	{
		title: "Potensi Kelurahan",
		desc: "Kategori potensi unggulan",
		href: "/profil/potensi",
		icon: Building2
	}
] as const;

export default function ProfilPage() {
	return (
		<section className="py-14 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<h1 className="text-4xl font-bold text-[#1E293B]">Profil Kelurahan</h1>
					<div className="w-24 h-1 bg-[#4D9AE1] mx-auto mt-4 mb-3"></div>
					<p className="text-gray-600">
						Informasi resmi mengenai kelurahan, pejabat, kelembagaan, dan potensi unggulan.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{profilMenu.map((item) => {
						const Icon = item.icon;
						return (
							<Link
								key={item.href}
								href={item.href}
								className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-2xl bg-[#4D9AE1]/15 flex items-center justify-center shrink-0 group-hover:bg-[#4D9AE1]/20 transition">
										<Icon className="w-6 h-6 text-[#4D9AE1]" />
									</div>
									<div className="min-w-0">
										<h2 className="text-lg font-bold text-[#1E293B] group-hover:text-[#4D9AE1] transition-colors">
											{item.title}
										</h2>
										<p className="text-sm text-gray-600 mt-1">{item.desc}</p>
										<p className="text-sm font-semibold text-[#4D9AE1] mt-3">
											Lihat Detail →
										</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}