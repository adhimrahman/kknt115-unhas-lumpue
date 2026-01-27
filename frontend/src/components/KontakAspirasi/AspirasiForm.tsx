"use client";
import { useState } from "react";
import { Send, User, AtSign, MessageSquare } from "lucide-react";
import Link from "next/link";

type FormState = {
	nama: string;
	email: string;
	judul: string;
	isi: string;
	kategori: "Aspirasi" | "Pengaduan" | "Pertanyaan";
};

export default function AspirasiForm() {
	const [form, setForm] = useState<FormState>({
		nama: "",
		email: "",
		judul: "",
		isi: "",
		kategori: "Aspirasi",
	});

	return (
		<div className="lg:col-span-3">
			<div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
				<div className="mb-6">
					<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
						Kirim Aspirasi
					</h2>
				</div>

				<form className="space-y-6">
					{/* Nama & Email */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-semibold text-slate-900 mb-2">
								Nama Lengkap <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
									<User className="w-5 h-5 text-slate-400" />
								</div>
								<input
									value={form.nama}
									onChange={(e) => setForm((p) => ({ ...p, nama: e.target.value }))}
									placeholder="Masukkan nama lengkap"
									className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-[#4D9AE1]/15 focus:border-[#4D9AE1] transition"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-semibold text-slate-900 mb-2">
								Email <span className="text-red-500">*</span>
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
									<AtSign className="w-5 h-5 text-slate-400" />
								</div>
								<input
									type="email"
									value={form.email}
									onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
									placeholder="nama@email.com"
									className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-[#4D9AE1]/15 focus:border-[#4D9AE1] transition"
								/>
							</div>
						</div>
					</div>

					{/* Judul */}
					<div>
						<label className="block text-sm font-semibold text-slate-900 mb-2">
							Subjek <span className="text-red-500">*</span>
						</label>
						<input
							value={form.judul}
							onChange={(e) => setForm((p) => ({ ...p, judul: e.target.value }))}
							placeholder="Contoh: Saran perbaikan layanan administrasi"
							className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-[#4D9AE1]/15 focus:border-[#4D9AE1] transition"
						/>
					</div>

					{/* Isi */}
					<div>
						<label className="block text-sm font-semibold text-slate-900 mb-2">
							Pesan <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<div className="absolute top-3 left-4 pointer-events-none">
								<MessageSquare className="w-5 h-5 text-slate-400" />
							</div>
							<textarea
								value={form.isi}
								onChange={(e) => setForm((p) => ({ ...p, isi: e.target.value }))}
								placeholder="Tulis aspirasi/keluhan/pertanyaan Anda..."
								rows={6}
								className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-[#4D9AE1]/15 focus:border-[#4D9AE1] transition resize-none"
							/>
						</div>
						<p className="text-xs text-slate-500 mt-2">
							Hindari data sensitif (NIK, password, nomor kartu, dsb).
						</p>
					</div>

					{/* Actions */}
					<div className="pt-2">
						<button
							type="button"
							className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-[#4D9AE1] hover:brightness-95 transition shadow-sm cursor-pointer"
						>
							<Send className="w-5 h-5" />
							Kirim
						</button>

					</div>
					<div className="text-xs text-gray-500 text-center leading-relaxed pt-1 sm:pt-2 px-2">
						Situs ini dilindungi oleh reCAPTCHA dan berlaku{' '}
						<Link
							href="https://policies.google.com/privacy"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-700 underline transition-colors"
						>
							Kebijakan Privasi
						</Link>{' '}
						serta{' '}
						<Link
							href="https://policies.google.com/terms"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:text-blue-700 underline transition-colors"
						>
							Persyaratan Layanan
						</Link>{' '}
						Google.
					</div>
				</form>
			</div>
		</div>
	);
}