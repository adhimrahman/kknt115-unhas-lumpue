import DashboardNavbar from "@/components/layout/DashboardNavbar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-gray-50">
			<DashboardNavbar />

			<div className="mx-auto flex w-full max-w-350">
				<DashboardSidebar />

				<main className="flex-1 p-4 md:p-6">
					<div className="rounded-2xl border bg-white p-4 md:p-6">
						{children}
					</div>
				</main>
			</div>
		</div>
	);
}