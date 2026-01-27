"use client";
import { MessageSquare } from "lucide-react";
import KontakInfo from "@/components/KontakAspirasi/KontakInfo";
import AspirasiForm from "@/components/KontakAspirasi/AspirasiForm";

export default function KontakAspirasiClient() {
	return (
		<div className="min-h-screen py-8 sm:py-12 lg:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center mb-8 sm:mb-12 lg:mb-16">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
							<div className="p-3 sm:p-4 bg-linear-to-br from-green-100 to-blue-100 rounded-2xl sm:rounded-3xl">
								<MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-[#4D9AE1]" />
							</div>
							<div className="text-center sm:text-left">
								<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
									Kontak & Aspirasi
								</h1>
								<p className="text-lg sm:text-xl text-blue-800 font-medium">
									Kelurahan Lumpue, Kota Parepare
								</p>
							</div>
						</div>

						<p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
							Sampaikan pertanyaan, masukan, atau aspirasi Anda. Kami akan menindaklanjuti sesuai prosedur layanan kelurahan.
						</p>
					</div>

					{/* Content */}
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
						<KontakInfo />
						<AspirasiForm />
					</div>

					<div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100 mt-9">
						<h3 className="font-bold text-slate-900 mb-3">Lokasi Kami</h3>
						<div className="rounded-xl overflow-hidden border border-slate-200">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9393666079964!2d119.406573!3d-5.133527099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf02af902bc323%3A0x3dabe01dae6ec980!2sKantor%20Wali%20Kota%20Makassar!5e0!3m2!1sid!2sid!4v1726381854321!5m2!1sid!2sid"
								width="100%"
								height="260"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Lokasi Kantor"
								className="sm:h-[320px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}