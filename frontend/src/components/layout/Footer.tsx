import Link from "next/link";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t bg-white">
			<div className="container mx-auto px-4 py-10">
				<div className="grid gap-8 md:grid-cols-3">
					<div>
						<p className="font-semibold text-gray-900">Kelurahan Lumpue</p>
						<p className="mt-2 text-sm text-gray-600">
							Website Profil & Sistem Informasi Kelurahan Lumpue, Kecamatan Bacukiki Barat,
							Kota Parepare, Sulawesi Selatan.
						</p>
					</div>

					<div>
						<p className="font-semibold text-gray-900">Menu</p>
						<div className="mt-2 grid gap-2 text-sm">
							<Link className="text-gray-600 hover:text-gray-900" href="/profil">
								Profil
							</Link>
							<Link className="text-gray-600 hover:text-gray-900" href="/berita">
								Berita
							</Link>
							<Link className="text-gray-600 hover:text-gray-900" href="/umkm">
								UMKM
							</Link>
							<Link className="text-gray-600 hover:text-gray-900" href="/kontak-dan-aspirasi">
								Kontak & Aspirasi
							</Link>
						</div>
					</div>

					<div>
						<p className="font-semibold text-gray-900">Admin</p>
						<p className="mt-2 text-sm text-gray-600">
							Akses pengelolaan konten melalui dashboard.
						</p>
						<Link href="/login" className="mt-3 inline-flex rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90">
							Masuk Dashboard
						</Link>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-2 border-t pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
					<p>© {year} Kelurahan Lumpue. All rights reserved.</p>
					<p className="text-gray-500">Dibangun dengan Next.js & Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
}