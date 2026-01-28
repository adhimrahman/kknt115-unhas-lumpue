type PaginationProps = {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
};

export default function Pagination({
	currentPage,
	totalPages,
	totalItems,
	itemsPerPage,
	onPageChange
}: PaginationProps) {
	const displayTotalPages = Math.max(totalPages, 1);
	const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
	const endItem = totalItems === 0 ? 0 : Math.min(currentPage * itemsPerPage, totalItems);

	const getPageNumbers = () => {
		const pages: Array<number | "..."> = [];
		const showPages = 5;

		if (displayTotalPages <= showPages) {
			for (let i = 1; i <= displayTotalPages; i++) pages.push(i);
			return pages;
		}

		if (currentPage <= 3) {
			for (let i = 1; i <= showPages; i++) pages.push(i);
			pages.push("...");
			pages.push(displayTotalPages);
			return pages;
		}

		if (currentPage >= displayTotalPages - 2) {
			pages.push(1);
			pages.push("...");
			for (let i = displayTotalPages - showPages + 1; i <= displayTotalPages; i++) pages.push(i);
			return pages;
		}

		pages.push(1);
		pages.push("...");
		for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
		pages.push("...");
		pages.push(displayTotalPages);
		return pages;
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
				<div className="text-sm text-slate-600 text-center lg:text-left">
					{totalItems === 0 ? (
						<span>Tidak ada hasil yang ditampilkan</span>
					) : (
						<>
							Menampilkan <span className="font-semibold text-slate-900">{startItem}</span> -{" "}
							<span className="font-semibold text-slate-900">{endItem}</span> dari{" "}
							<span className="font-semibold text-[#4D9AE1]">{totalItems}</span> foto
						</>
					)}
				</div>

				<div className="flex items-center justify-center gap-2">
					<button
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200
							${currentPage === 1 ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md cursor-pointer"}`}
					>
						<span>←</span>
						<span className="hidden sm:inline">Sebelumnya</span>
					</button>

					<div className="flex items-center gap-1">
						{pageNumbers.map((page, idx) => {
							if (page === "...") {
								return (
									<span key={`dots-${idx}`} className="px-3 py-2 text-slate-400">
										...
									</span>
								);
							}

							return (
								<button
									key={page}
									onClick={() => onPageChange(page)}
									className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all duration-200
										${currentPage === page ? "bg-[#4D9AE1] text-white shadow-sm scale-105 cursor-not-allowed" : "bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-[#4D9AE1] cursor-pointer"}`}
								>
									{page}
								</button>
							);
						})}
					</div>

					<button
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === displayTotalPages || displayTotalPages <= 1}
						className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 curp
							${currentPage === displayTotalPages || displayTotalPages <= 1 ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md cursor-pointer"}`}
					>
						<span className="hidden sm:inline">Selanjutnya</span>
						<span>→</span>
					</button>
				</div>
			</div>
		</div>
	);
}