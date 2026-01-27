import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col items-center justify-center py-16">
                    <AlertCircle className="w-16 h-16 text-amber-500 mb-6" />
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        Berita Tidak Ditemukan
                    </h1>
                    <p className="text-slate-600 text-center mb-8">
                        Berita yang Anda cari tidak tersedia atau telah dihapus.
                    </p>

                    <Link
                        href="/berita"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#4D9AE1] text-white font-semibold hover:brightness-95 transition shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Halaman Berita
                    </Link>
                </div>
            </div>
        </div>
    )
}