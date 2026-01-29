'use client';
import { ReactNode } from "react";
import KelembagaanTabs from "@/components/layout/KelembagaanTabs";

export default function KelembagaanLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen mt-4">
			<div className="">
				<div className="max-w-7xl mx-auto py-4">
					<KelembagaanTabs />
				</div>
			</div>

			<main className="max-w-7xl mx-auto">
				{children}
			</main>
		</div>
	);
}