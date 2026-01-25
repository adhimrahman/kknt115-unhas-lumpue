import Link from "next/link";
import { mockAdmin } from "@/lib/mockData";

export default function DashboardNavbar() {
	const admin = mockAdmin[0];

	return (
		<div className="sticky top-0 z-40 border-b bg-white">
			<div className="flex h-16 items-center justify-between px-4 md:px-6">
				<div className="flex items-center gap-3">
					<div className="h-9 w-9 rounded-xl border grid place-items-center font-bold">
						D
					</div>
					<div className="leading-tight">
						<p className="text-sm font-semibold text-gray-900">Dashboard Admin</p>
						<p className="text-xs text-gray-500">Kelurahan Lumpue</p>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Link href="/" className="hidden sm:inline-flex rounded-xl border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
						Lihat Website
					</Link>

					<div className="text-right leading-tight">
						<p className="text-sm font-semibold text-gray-900">{admin?.nama ?? "Admin"}</p>
						<p className="text-xs text-gray-500">{admin?.email ?? "admin@email.com"}</p>
					</div>
					<div className="h-10 w-10 rounded-2xl bg-gray-900 text-white grid place-items-center text-sm font-semibold">
						{admin?.nama?.[0]?.toUpperCase() ?? "A"}
					</div>
				</div>
			</div>
		</div>
	);
}