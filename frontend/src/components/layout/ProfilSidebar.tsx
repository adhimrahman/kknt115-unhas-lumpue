"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Flag, Sparkles, Briefcase, Spline, Users, Network, Building2, X, ChevronRight } from "lucide-react";

const menu = [
	{ title: "Tentang", href: "/profil/tentang", icon: BookOpen },
	{ title: "Sejarah", href: "/profil/sejarah", icon: Flag },
	{ title: "Visi, Misi, Sasaran", href: "/profil/visi-misi-sasaran", icon: Sparkles },
	{ title: "Tugas & Fungsi", href: "/profil/tugas-dan-fungsi", icon: Briefcase },
	{ title: "Struktur Organisasi", href: "/profil/struktur-organisasi", icon: Spline },
	{ title: "Profil Pejabat", href: "/profil/profil-pejabat", icon: Users },
	{ title: "Kelembagaan", href: "/profil/kelembagaan", icon: Network },
	{ title: "Potensi Kelurahan", href: "/profil/potensi", icon: Building2 }
] as const;


type Props = {
	isOpen?: boolean;
	onClose?: () => void;
};

type SidebarInnerProps = {
	variant: "desktop" | "mobile";
	pathname: string;
	onClose?: () => void;
};

function SidebarInner({ variant, pathname, onClose }: SidebarInnerProps) {
	return (
		<div className="w-full">
			<div className="bg-linear-to-br from-[#1E293B] via-[#2D3E56] to-[#4D9AE1] rounded-2xl shadow-xl overflow-hidden">
				{/* Header */}
				<div className="bg-white/10 backdrop-blur-sm px-4 py-3 border-b border-white/20">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-white font-semibold text-base tracking-wide">Menu Profil</h2>
							<p className="text-white/70 text-xs mt-1">Kelurahan Lumpue</p>
						</div>

						{variant === "mobile" && (
							<button
								onClick={onClose}
								className="text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-200"
								aria-label="Tutup sidebar"
								type="button"
							>
								<X className="w-5 h-5" />
							</button>
						)}
					</div>
				</div>

				{/* Items */}
				<div className="p-3 space-y-2">
					{menu.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.href;

						return (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => {
									if (variant === "mobile") onClose?.();
								}}
							>
								<div
									className={`group relative overflow-hidden rounded-xl p-3 cursor-pointer transition-all duration-200 ${
										isActive ? "bg-white text-[#1E293B] shadow-md" : "text-white hover:bg-white/10 mt-1"
									}`}
								>
									<div className="flex items-center gap-3">
										<div
											className={`shrink-0 p-2 rounded-lg ${
												isActive
													? "bg-[#4D9AE1]/15 text-[#4D9AE1]"
													: "bg-white/10 text-white group-hover:bg-white/20"
											}`}
										>
											<Icon className="w-4 h-4" />
										</div>

										<h3
											className={`font-semibold text-[13px] truncate ${
												isActive ? "text-[#1E293B]" : "text-white"
											}`}
										>
											{item.title}
										</h3>

										<ChevronRight
											className={`ml-auto w-4 h-4 transition-transform duration-200 ${
												isActive
													? "text-[#1E293B] rotate-90"
													: "text-white/60 group-hover:translate-x-1"
											}`}
										/>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default function ProfilSidebar({ isOpen = false, onClose }: Props) {
	const pathname = usePathname();

	// Desktop only
	if (!onClose) {
		return <SidebarInner variant="desktop" pathname={pathname} />;
	}

	// Mobile overlay
	return (
		<div
			className={`lg:hidden fixed inset-0 z-60 transition-all duration-300 ${
				isOpen ? "opacity-100 visible" : "opacity-0 invisible"
			}`}
		>
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

			<div
				className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] shadow-2xl transform transition-transform duration-300 ease-out ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="h-full p-4">
					<SidebarInner variant="mobile" pathname={pathname} onClose={onClose} />
				</div>
			</div>
		</div>
	);
}