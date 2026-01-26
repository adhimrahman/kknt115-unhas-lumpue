import Image from "next/image";

export default function SambutanLurah() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                        <Image 
                            src="/lurah2.jpg" 
                            alt="Lurah"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
                <div>
                    <span className="text-[#4D9AE1] font-semibold text-sm uppercase tracking-wide">Sambutan</span>
                    <h2 className="text-4xl font-bold text-[#1E293B] mt-2 mb-6">
                        Lurah Kelurahan Lumpue
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Assalamu&apos;alaikum Warahmatullahi Wabarakatuh, salam sejahtera untuk kita semua.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Selamat datang di website resmi Kelurahan kami. Website ini dibuat sebagai sarana informasi dan komunikasi antara pemerintah kelurahan dengan masyarakat.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Mari bersama-sama kita wujudkan kelurahan yang maju, sejahtera, dan bermartabat.
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                        <p className="font-bold text-[#1E293B] tracking-wider">H. Nur Akbar, SE.</p>
                        <p className="text-gray-500">Lurah Kelurahan Lumpue, Kecamat Bacukiki Barat, Kota Parepare</p>
                    </div>
                </div>
            </div>
        </div>
    )
}