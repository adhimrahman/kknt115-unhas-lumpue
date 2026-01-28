"use client";
import type { ReactNode } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import ProfilSidebar from "@/components/layout/ProfilSidebar";

export default function ProfilLayout({ children }: { children: ReactNode }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const pathname = usePathname();

	const hideSidebar = pathname === "/profil";

	return (
		<div className="min-h-screen flex-col bg-slate-50">
			{/* Mobile header */}
			{!hideSidebar && (
				<div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-30 shadow-sm">
					<div className="flex items-center justify-between gap-3">
						<button
							onClick={() => setIsSidebarOpen(true)}
							className="inline-flex items-center gap-2 bg-[#4D9AE1] text-white px-4 py-2 rounded-xl hover:brightness-95 transition-colors shadow-sm"
						>
							<Menu className="w-5 h-5" />
							<span className="text-sm font-semibold">Menu Profil</span>
						</button>

						<p className="text-sm font-semibold text-slate-700">Profil Kelurahan</p>
					</div>
				</div>
			)}

			<div className="container mx-auto px-4 sm:px-6 lg:px-40">
				<div className={`py-6 ${hideSidebar ? "" : "lg:py-8"}`}>
					{hideSidebar ? (
						<main>{children}</main>
					) : (
						<div className="flex flex-col lg:flex-row gap-6">
							<aside className="hidden lg:block lg:w-80 xl:w-96 lg:hrink-0">
								<div className="sticky top-26">
									<ProfilSidebar />
								</div>
							</aside>

							<main className="flex-1 min-w-0">{children}</main>
						</div>
					)}
				</div>
			</div>

			{/* Mobile Sidebar */}
			{!hideSidebar && (
				<ProfilSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
			)}
		</div>
	);
}