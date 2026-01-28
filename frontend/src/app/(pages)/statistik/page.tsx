"use client";
import { useMemo, useState } from "react";
import type { StatistikKategori, StatistikItem } from "@/types";
import { mockStatistikKategori, mockStatistikItem } from "@/lib/mockData";
import { BarChart3, TrendingUp, Users, MapPin, Home, Search, ChevronRight, Info, FileText, Grid3x3, List } from "lucide-react";
import Link from "next/link";

function formatNumberID(value: number): string {
	return new Intl.NumberFormat("id-ID").format(value);
}

function formatValue(item: StatistikItem): string {
	const unit = item.unit ? ` ${item.unit}` : "";

	if (typeof item.value_number === "number") {
		const num =
			item.unit === "%" ? `${item.value_number}` : formatNumberID(item.value_number);
		return `${num}${unit}`;
	}

	if (typeof item.value_text === "string" && item.value_text.trim().length > 0) {
		return item.value_text;
	}

	return "-";
}

function buildKategoriMap(kategori: StatistikKategori[], items: StatistikItem[]) {
	const byId = new Map<string, StatistikKategori>();
	kategori.forEach((k) => byId.set(k.id, k));

	const itemsByKategori = new Map<string, StatistikItem[]>();
	for (const it of items) {
		const arr = itemsByKategori.get(it.kategori_id) ?? [];
		arr.push(it);
		itemsByKategori.set(it.kategori_id, arr);
	}

	for (const [key, arr] of itemsByKategori.entries()) {
		arr.sort((a, b) => a.order_index - b.order_index);
		itemsByKategori.set(key, arr);
	}

	return { byId, itemsByKategori };
}

function getCategoryIcon(categoryName: string) {
	const name = categoryName.toLowerCase();
	if (name.includes("bps")) return BarChart3;
	if (name.includes("umum")) return FileText;
	if (name.includes("orbitasi")) return MapPin;
	if (name.includes("personil")) return Users;
	return Grid3x3;
}

function getCategoryColor(categoryName: string) {
	const name = categoryName.toLowerCase();
	if (name.includes("bps")) return "blue";
	if (name.includes("umum")) return "green";
	if (name.includes("orbitasi")) return "purple";
	if (name.includes("personil")) return "orange";
	return "gray";
}

const colorClasses = {
	blue: {
		bg: "bg-blue-50",
		border: "border-blue-200",
		text: "text-blue-700",
		badge: "bg-blue-100 text-blue-800",
		icon: "text-blue-600",
		hover: "hover:bg-blue-100"
	},
	green: {
		bg: "bg-green-50",
		border: "border-green-200",
		text: "text-green-700",
		badge: "bg-green-100 text-green-800",
		icon: "text-green-600",
		hover: "hover:bg-green-100"
	},
	purple: {
		bg: "bg-purple-50",
		border: "border-purple-200",
		text: "text-purple-700",
		badge: "bg-purple-100 text-purple-800",
		icon: "text-purple-600",
		hover: "hover:bg-purple-100"
	},
	orange: {
		bg: "bg-orange-50",
		border: "border-orange-200",
		text: "text-orange-700",
		badge: "bg-orange-100 text-orange-800",
		icon: "text-orange-600",
		hover: "hover:bg-orange-100"
	},
	gray: {
		bg: "bg-gray-50",
		border: "border-gray-200",
		text: "text-gray-700",
		badge: "bg-gray-100 text-gray-800",
		icon: "text-gray-600",
		hover: "hover:bg-gray-100"
	}
};

export default function StatistikPage() {
	const [activeKategoriId, setActiveKategoriId] = useState<string>("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

	const { byId, itemsByKategori } = useMemo(
		() => buildKategoriMap(mockStatistikKategori, mockStatistikItem),
		[]
	);

	const kategoriList = useMemo(() => {
		return [...mockStatistikKategori].sort((a, b) => {
			if (b.tahun !== a.tahun) return b.tahun - a.tahun;
			return a.nama.localeCompare(b.nama);
		});
	}, []);

	const allItems = useMemo(() => {
		return [...mockStatistikItem].sort((a, b) => {
			if (a.kategori_id !== b.kategori_id) return a.kategori_id.localeCompare(b.kategori_id);
			return a.order_index - b.order_index;
		});
	}, []);

	const filteredItems = useMemo(() => {
		const term = searchTerm.trim().toLowerCase();

		const base =
			activeKategoriId === "all"
				? allItems
				: itemsByKategori.get(activeKategoriId) ?? [];

		if (!term) return base;

		return base.filter((it) => {
			const hay = [
				it.key,
				it.label,
				it.unit ?? "",
				typeof it.value_text === "string" ? it.value_text : "",
				typeof it.value_number === "number" ? String(it.value_number) : ""
			]
				.join(" ")
				.toLowerCase();

			return hay.includes(term);
		});
	}, [activeKategoriId, allItems, itemsByKategori, searchTerm]);

	const totalPenduduk = mockStatistikItem.find((x) => x.key === "total_penduduk")?.value_number ?? null;
	const jumlahKeluarga = mockStatistikItem.find((x) => x.key === "jumlah_keluarga")?.value_number ?? null;
	const luasWilayah = mockStatistikItem.find((x) => x.key === "luas_wilayah")?.value_number ?? null;

	const itemsByCategory = useMemo(() => {
		const grouped = new Map<
			string,
			{
				kategori: StatistikKategori | null;
				color: keyof typeof colorClasses;
				Icon: React.ElementType;
				items: StatistikItem[];
			}
		>();

		for (const item of filteredItems) {
			const kategori = byId.get(item.kategori_id) ?? null;
			const nama = kategori?.nama ?? "Tanpa Kategori";

			const color = getCategoryColor(nama) as keyof typeof colorClasses;
			const Icon = getCategoryIcon(nama);

			if (!grouped.has(item.kategori_id)) {
				grouped.set(item.kategori_id, { kategori, color, Icon, items: [] });
			}

			grouped.get(item.kategori_id)!.items.push(item);
		}

		// sorting kategori (opsional): tahun desc, lalu nama asc
		const arr = Array.from(grouped.values()).sort((a, b) => {
			const ta = a.kategori?.tahun ?? 0;
			const tb = b.kategori?.tahun ?? 0;
			if (tb !== ta) return tb - ta;
			return (a.kategori?.nama ?? "").localeCompare(b.kategori?.nama ?? "");
		});

		// sorting item di tiap kategori by order_index
		for (const g of arr) {
			g.items.sort((a, b) => a.order_index - b.order_index);
		}

		return arr;
	}, [filteredItems, byId]);

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
			{/* HERO SECTION */}
			<section className="relative overflow-hidden bg-white border-b">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
					{/* Breadcrumb */}
					<nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
						<Link href="/" className="hover:text-gray-700 transition-colors">Beranda</Link>
						<ChevronRight size={16} />
						<span className="text-gray-900 font-medium">Statistik</span>
					</nav>

					<div className="grid md:grid-cols-2 gap-8 items-center">
						{/* Left: Text Content */}
						<div>
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
								<BarChart3 className="w-4 h-4" />
								Data & Statistik
							</div>

							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-wide">
								Statistik <br /> Kelurahan Lumpue
							</h1>
							<p className="text-lg text-gray-600 mb-6">
								Data komprehensif tentang demografi, ekonomi, pendidikan, dan infrastruktur wilayah Kelurahan Lumpue.
							</p>

							{/* Quick Stats */}
							<div className="grid grid-cols-3 gap-4">
								<div className="text-center p-4 bg-linear-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
									<Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
									<div className="text-2xl font-bold text-gray-900">
										{typeof totalPenduduk === "number" ? formatNumberID(totalPenduduk) : "-"}
									</div>
									<div className="text-xs text-gray-600 mt-1">Jiwa</div>
								</div>

								<div className="text-center p-4 bg-linear-to-br from-green-50 to-white rounded-2xl border border-green-100">
									<Home className="w-6 h-6 text-green-600 mx-auto mb-2" />
									<div className="text-2xl font-bold text-gray-900">
										{typeof jumlahKeluarga === "number" ? formatNumberID(jumlahKeluarga) : "-"}
									</div>
									<div className="text-xs text-gray-600 mt-1">KK</div>
								</div>

								<div className="text-center p-4 bg-linear-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
									<MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
									<div className="text-2xl font-bold text-gray-900">
										{typeof luasWilayah === "number" ? formatNumberID(luasWilayah) : "-"}
									</div>
									<div className="text-xs text-gray-600 mt-1">km²</div>
								</div>
							</div>
						</div>

						{/* Right: Stats Card */}
						<div className="hidden md:block mt-6">
							<div className="bg-linear-to-br from-[#1E293B] to-[#2D3E56] rounded-3xl p-8 text-white shadow-2xl">
								<div className="space-y-7 py-4">
									<div className="flex items-center gap-4">
										<div className="p-3 bg-white/20 rounded-xl backdrop-blur">
											<TrendingUp className="w-6 h-6" />
										</div>
										<div>
											<div className="text-sm opacity-90">Total Kategori Data</div>
											<div className="text-3xl font-bold">{mockStatistikKategori.length}</div>
										</div>
									</div>

									<div className="flex items-center gap-4">
										<div className="p-3 bg-white/20 rounded-xl backdrop-blur">
											<FileText className="w-6 h-6" />
										</div>
										<div>
											<div className="text-sm opacity-90">Total Item Statistik</div>
											<div className="text-3xl font-bold">{mockStatistikItem.length}</div>
										</div>
									</div>

									<div className="pt-6 border-t border-white/20">
										<div className="text-sm opacity-90">Sumber Data</div>
										<div className="font-semibold mt-1">BPS & Kelurahan Lumpue</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FILTER & SEARCH SECTION */}
			<section className="bg-white border-b sticky top-0 z-10 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
						{/* Search */}
						<div className="relative flex-1 max-w-md">
							<Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
							<input
								type="text"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								placeholder="Cari data statistik..."
								className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
							/>
						</div>

						{/* View Mode Toggle */}
						<div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
							<button
								onClick={() => setViewMode("grid")}
								className={`px-5 py-3 rounded-lg text-sm font-medium transition-all ${
									viewMode === "grid"
										? "bg-white text-gray-900 shadow-sm cursor-not-allowed"
										: "text-gray-600 hover:text-gray-900 cursor-pointer"
								}`}
							>
								<Grid3x3 className="w-4 h-4 inline mr-2" />
								Grid
							</button>
							<button
								onClick={() => setViewMode("list")}
								className={`px-5 py-3 rounded-lg text-sm font-medium transition-all ${
									viewMode === "list"
										? "bg-white text-gray-900 shadow-sm cursor-not-allowed"
										: "text-gray-600 hover:text-gray-900 cursor-pointer"
								}`}
							>
								<List className="w-4 h-4 inline mr-2" />
								List
							</button>
						</div>
					</div>

					{/* Category Filter Pills */}
					<div className="flex flex-wrap items-center gap-2 mt-4">
						<button
							onClick={() => setActiveKategoriId("all")}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
								activeKategoriId === "all"
									? "bg-[#1E293B] text-white shadow-md cursor-not-allowed"
									: "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm cursor-pointer"
							}`}
						>
							Semua Kategori
						</button>

						{kategoriList.map((kategori) => {
							const Icon = getCategoryIcon(kategori.nama);
							const color = getCategoryColor(kategori.nama);
							const isActive = activeKategoriId === kategori.id;

							return (
								<button
									key={kategori.id}
									onClick={() => setActiveKategoriId(kategori.id)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 ${
										isActive
											? `${colorClasses[color].badge} shadow-md cursor-not-allowed`
											: "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm cursor-pointer"
									}`}
								>
									<Icon className="w-4 h-4" />
									{kategori.nama}
								</button>
							);
						})}
					</div>
				</div>
			</section>

			{/* MAIN CONTENT */}
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				{filteredItems.length === 0 ? (
					<div className="text-center py-32">
						<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<Search className="w-8 h-8 text-gray-400" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-2">
							Tidak ada data ditemukan
						</h3>
						<p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
					</div>
				) : viewMode === "grid" ? (
					/* GRID VIEW */
					<div className="space-y-8">
						{itemsByCategory.map((group) => {
							const kategoriName = group.kategori?.nama ?? "Tanpa Kategori";
							const tahun = group.kategori?.tahun ?? "-";
							const sumber = group.kategori?.sumber ?? "-";

							const colors = colorClasses[group.color];
							const Icon = group.Icon;
							const items = group.items;

							return (
								<div key={group.kategori?.id ?? kategoriName} className="space-y-4">
									{/* Category Header */}
									<div
										className={`flex items-center gap-3 p-4 rounded-2xl ${colors.bg} border ${colors.border}`}
									>
										<div className="p-3 bg-white rounded-xl shadow-sm">
											<Icon className={`w-6 h-6 ${colors.icon}`} />
										</div>

										<div className="flex-1">
											<h2 className="text-xl font-bold text-gray-900">{kategoriName}</h2>
											<div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
												<span>{tahun}</span>
												<span>•</span>
												<span>{sumber}</span>
												<span>•</span>
												<span>{items.length} item</span>
											</div>
										</div>
									</div>

									{/* Items Grid */}
									<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
										{items.map((item: StatistikItem) => (
											<div
												key={item.id}
												className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-gray-300 transition-all group"
											>
												<div className="text-sm text-gray-500 mb-2">{item.label}</div>

												<div
													className={`text-2xl font-bold ${colors.text} mb-2 `}
												>
													{formatValue(item)}
												</div>
											</div>
										))}
									</div>
								</div>
							);
						})}
					</div>
				) : (
					/* LIST VIEW */
					<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead className="bg-gray-50 border-b border-gray-200">
									<tr>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
											Kategori
										</th>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
											Label
										</th>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
											Nilai
										</th>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
											Key
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									{filteredItems.map((item: StatistikItem) => {
										const kategori = byId.get(item.kategori_id);
										const color = getCategoryColor(kategori?.nama ?? "") as keyof typeof colorClasses;
										const colors = colorClasses[color];

										return (
											<tr key={item.id} className="hover:bg-gray-50 transition-colors">
												<td className="px-6 py-4">
													<div className="flex items-center gap-3">
														<span
															className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
														>
															{kategori?.nama ?? "-"}
														</span>
													</div>
													<div className="text-xs text-gray-500 ml-2 mt-2">
														{kategori?.tahun} • {kategori?.sumber}
													</div>
												</td>
												<td className="px-6 py-4">
													<div className="text-sm font-medium text-gray-900">{item.label}</div>
												</td>
												<td className="px-6 py-4">
													<div className={`text-lg font-bold ${colors.text}`}>{formatValue(item)}</div>
												</td>
												<td className="px-6 py-4">
													<code className="px-2 py-1 bg-gray-50 rounded border border-gray-200 text-xs text-gray-600">
														{item.key}
													</code>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</main>

			{/* FOOTER INFO */}
			<section className="bg-white border-t">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-3 text-sm text-gray-600">
							<Info className="w-5 h-5" />
							<span>
								Data diperbarui secara berkala oleh{" "}
								<span className="font-semibold text-gray-900">
									Kelurahan Lumpue
								</span>
							</span>
						</div>
						<div className="text-sm text-gray-500">
							Menampilkan {filteredItems.length} dari {allItems.length} total data
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}