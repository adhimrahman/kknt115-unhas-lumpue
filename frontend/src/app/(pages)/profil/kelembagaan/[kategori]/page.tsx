import { notFound } from "next/navigation";
import { mockKelembagaan } from "@/lib/mockData";
import { KelembagaanSlug, kelembagaanMeta } from "@/lib/kelembagaan";

export default async function KelembagaanDetailPage({ params }: { params: Promise<{ kategori: KelembagaanSlug }> }) {
	const { kategori } = await params;

	const data = mockKelembagaan.find((x) => x.kategori === kategori);
	if (!data) return notFound();

	return (
		<div className="w-full space-y-8">
			<div className="bg-white rounded-2xl border shadow-sm">
				<div className="p-8 pb-6 border-b">
					<h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
						{data.judul}
					</h1>

					<div className="w-32 h-1 bg-[#4D9AE1] rounded-full" />

					<p className="text-slate-600 mt-4">
						{kelembagaanMeta[kategori].label}
					</p>
				</div>

				<div className="px-8 pb-8">
					<div
						className="prose prose-slate max-w-none
							prose-headings:text-slate-900 prose-headings:font-semibold
							prose-h1:text-2xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-slate-200
							prose-h2:text-xl prose-h2:mb-4 prose-h2:mt-8
							prose-h3:text-lg prose-h3:mb-3 prose-h3:mt-6
							prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
							prose-strong:text-slate-900
							prose-ul:my-6 prose-ul:space-y-2
							prose-ol:my-6 prose-ol:space-y-2
							prose-li:text-slate-700
							prose-blockquote:border-l-4 prose-blockquote:border-[#4D9AE1]
							prose-blockquote:bg-[#4D9AE1]/5
							prose-blockquote:px-6 prose-blockquote:py-4
							prose-blockquote:rounded-r-lg
							prose-table:my-6 prose-table:border-collapse
							prose-th:bg-slate-50 prose-th:border prose-th:border-slate-300 prose-th:px-4 prose-th:py-3
							prose-td:border prose-td:border-slate-300 prose-td:px-4 prose-td:py-3
							prose-a:text-[#4D9AE1] prose-a:no-underline hover:prose-a:underline
							wrap-break-words whitespace-pre-line"
					>
						{data.konten}
					</div>
				</div>
			</div>
		</div>
	);
}