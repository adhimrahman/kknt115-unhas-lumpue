"use client";
import Link from "next/link";
import { MapPin, Clock, Mail, Phone, MessageSquare, Instagram } from "lucide-react";

export default function KontakInfo() {
	const kontak = {
		alamat: "Kantor Kelurahan Lumpue\nKecamatan Bacukiki Barat\nKota Parepare, Sulawesi Selatan",
		telepon: "(0421) 000000",
		email: "kelurahan.lumpue@example.go.id",
		jadwal: [
			{ hari: "Senin - Kamis", jam: "08.00 - 16.00" },
			{ hari: "Jumat", jam: "08.00 - 11.30" },
		],
		instagram: "https://instagram.com/adhimrahmann",
	};

	return (
		<div className="lg:col-span-2 space-y-4 sm:space-y-6">
			{/* Cards */}
			<div className="grid gap-3 sm:gap-4">
				{kontak?.alamat && (
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-red-100 rounded-lg sm:rounded-xl shrink-0">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Alamat Kantor</h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                                    {kontak.alamat}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

				{kontak?.telepon && (
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-purple-100 rounded-lg sm:rounded-xl shrink-0">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Telepon</h3>
                                <Link 
                                    href={`tel:${kontak.telepon}`} 
                                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors text-xs sm:text-sm"
                                >
                                    {kontak.telepon}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

				{kontak?.email && (
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl shrink-0">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Email</h3>
                                <Link 
                                    href={`mailto:${kontak.email}`} 
                                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-xs sm:text-sm break-all"
                                >
                                    {kontak.email}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

				{/* Jam Operasional */}
				<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
					<div className="flex items-start gap-4">
						<div className="p-3 bg-slate-100 rounded-xl">
							<Clock className="w-5 h-5 text-slate-700" />
						</div>
						<div className="flex-1">
							<h3 className="font-bold text-slate-900 mb-2">Jam Operasional</h3>
							<div className="space-y-1.5">
								{kontak.jadwal.map((x) => (
									<div key={x.hari} className="flex items-center justify-between text-sm">
										<span className="text-slate-600">{x.hari}</span>
										<span className="font-semibold text-slate-900">{x.jam}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Sosmed */}
				<div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 bg-pink-100 rounded-lg sm:rounded-xl shrink-0">
                                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Media Sosial</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {kontak.instagram && (
                                        <Link
                                            href={kontak.instagram.startsWith('http') ? kontak.instagram : `https://instagram.com/${kontak.instagram.replace('@', '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer"
                                        >
                                            <Instagram className="w-3.5 h-3.5" />
                                            Instagram
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
			</div>
		</div>
	);
}