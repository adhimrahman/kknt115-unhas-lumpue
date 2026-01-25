"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ label: "Beranda", href: "/" },
	{ label: "Profil", href: "/profil" },
	{ label: "Berita", href: "/berita" },
	{ label: "UMKM", href: "/umkm" },
	{ label: "Galeri", href: "/galeri" },
	{ label: "Statistik", href: "/statistik" },
	{ label: "Kontak & Aspirasi", href: "/kontak-dan-aspirasi" },
];

function isActive(pathname: string, href: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteNavbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between gap-4">
					<Link href="/" className="flex items-center gap-2">
						<div className="h-9 w-9 rounded-xl border bg-white grid place-items-center font-bold">
							L
						</div>
						<div className="leading-tight">
							<p className="font-semibold text-gray-900">Kelurahan Lumpue</p>
							<p className="text-xs text-gray-500">Kota Parepare</p>
						</div>
					</Link>

					<nav className="hidden lg:flex items-center gap-1">
						{navItems.map((item) => {
							const active = isActive(pathname, item.href);
							return (
								<Link key={item.href} href={item.href}
									className={["rounded-xl px-3 py-2 text-sm transition", active
										? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100",
									].join(" ")}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<div className="flex items-center gap-2">
						<Link href="/login" className="rounded-xl border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
							Login Admin
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}