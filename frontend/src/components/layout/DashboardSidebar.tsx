"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{ label: "Ringkasan", href: "/dashboard" },
	{ label: "Profil", href: "/dashboard/profil" },
	{ label: "Profil Pejabat", href: "/dashboard/profil-pejabat" },
	{ label: "Kelembagaan", href: "/dashboard/kelembagaan" },
	{ label: "Berita", href: "/dashboard/berita" },
	{ label: "UMKM", href: "/dashboard/umkm" },
	{ label: "Galeri", href: "/dashboard/galeri" },
	{ label: "Statistik", href: "/dashboard/statistik" },
	{ label: "Kontak", href: "/dashboard/kontak" },
	{ label: "Aspirasi", href: "/dashboard/aspirasi" },
	{ label: "Admin", href: "/dashboard/admin" },
	{ label: "Role", href: "/dashboard/role" },
	{ label: "Permission", href: "/dashboard/permission" },
	{ label: "Admin Log", href: "/dashboard/admin-log" },
];

function isActive(pathname: string, href: string) {
	if (href === "/dashboard") return pathname === "/dashboard";
	return pathname === href || pathname.startsWith(href + "/");
}

export default function DashboardSidebar() {
	const pathname = usePathname();

	return (
		<aside className="hidden md:flex md:w-72 md:flex-col border-r bg-white">
			<div className="px-4 py-5">
				<div className="rounded-2xl border bg-gray-50 px-4 py-4">
					<p className="text-sm font-semibold text-gray-900">Kelurahan Lumpue</p>
					<p className="text-xs text-gray-600">Panel pengelolaan konten</p>
				</div>
			</div>

			<nav className="flex-1 overflow-auto px-3 pb-6">
				<div className="grid gap-1">
					{items.map((item) => {
						const active = isActive(pathname, item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={[
								"rounded-xl px-3 py-2 text-sm transition",
								active
									? "bg-gray-900 text-white"
									: "text-gray-700 hover:bg-gray-100",
								].join(" ")}
							>
								{item.label}
							</Link>
						);
					})}
				</div>
			</nav>

			<div className="border-t p-4">
				<Link
					href="/login"
					className="block w-full rounded-xl border px-3 py-2 text-center text-sm text-gray-700 hover:bg-gray-50"
				>
					Keluar (dummy)
				</Link>
			</div>
		</aside>
	);
}