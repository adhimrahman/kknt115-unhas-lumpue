type Props = {
	totalData: number;
	filteredData: number;
	searchTerm: string;
	onClearSearch: () => void;
};

export default function GaleriStats({ totalData, filteredData, searchTerm, onClearSearch }: Props) {
	return (
		<div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
			<div className="flex flex-col sm:flex-row sm:items-center gap-4">
				<div className="flex-1">
					<p className="text-sm text-slate-600">
						{searchTerm ? (
							<>
								Menampilkan <span className="font-semibold text-[#4D9AE1]">{filteredData}</span> dari{" "}
								<span className="font-semibold text-slate-900">{totalData}</span> foto
								<span>
									{" "}
									untuk &ldquo;<span className="font-semibold text-slate-900">{searchTerm}</span>&rdquo;
								</span>
							</>
						) : (
							<>
								Total <span className="font-semibold text-[#4D9AE1]">{totalData}</span> foto tersedia
							</>
						)}
					</p>
				</div>

				{searchTerm && (
					<button
						onClick={onClearSearch}
						className="text-sm text-slate-600 hover:text-slate-900 font-semibold px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors duration-200"
					>
						Hapus filter
					</button>
				)}
			</div>
		</div>
	);
}