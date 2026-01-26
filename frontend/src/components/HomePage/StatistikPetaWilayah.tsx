import { MapPin, Users, Home, Layers, Compass } from 'lucide-react';
import { mockStatistikItem } from '@/lib/mockData';

type StatKey = 'luas_wilayah' | 'jumlah_rt' | 'jumlah_rw' | 'jumlah_penduduk';

function formatNumberId(value: number): string {
	return new Intl.NumberFormat('id-ID').format(value);
}

function buildValueText(valueNumber?: number, valueText?: string, unit?: string): string {
	if (typeof valueNumber === 'number') {
		const formatted = formatNumberId(valueNumber);
		return unit ? `${formatted} ${unit}` : formatted;
	}

	if (typeof valueText === 'string' && valueText.trim().length > 0) {
		return unit ? `${valueText} ${unit}` : valueText;
	}

	return '-';
}

const statCards: Array<{
	key: StatKey;
	fallbackLabel: string;
	icon: React.ElementType;
}> = [
	{ key: 'luas_wilayah', fallbackLabel: 'Luas Wilayah', icon: MapPin },
	{ key: 'jumlah_rt', fallbackLabel: 'Jumlah RT', icon: Home },
	{ key: 'jumlah_rw', fallbackLabel: 'Jumlah RW', icon: Layers },
	{ key: 'jumlah_penduduk', fallbackLabel: 'Jumlah Penduduk', icon: Users }
];

export default function StatistikPetaWilayah() {
    const statistikUmum = mockStatistikItem.filter((x) => x.kategori_id === '2');
	const batasWilayah = mockStatistikItem
		.filter((x) => x.kategori_id === '3')
		.sort((a, b) => a.order_index - b.order_index);
    
    const statByKey = new Map(statistikUmum.map((x) => [x.key, x]));

    const mockStatistik = statCards.map((card) => {
		const item = statByKey.get(card.key);

		return {
			id: item?.id ?? card.key,
			label: item?.label ?? card.fallbackLabel,
			value: buildValueText(item?.value_number, item?.value_text, item?.unit),
			icon: card.icon
		};
	});

    return (
		<>
        {/* Statistik Kelurahan */}
        <section className="py-20 bg-linear-to-br from-[#1E293B] to-[#2D3E56]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Statistik Kelurahan</h2>
                    <div className="w-24 h-1 bg-[#4D9AE1] mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {mockStatistik.map((stat) => {
                        const IconComponent = stat.icon;

                        return (
                            <div
                                key={stat.id}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center"
                            >
                                <div className="w-16 h-16 bg-[#4D9AE1] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-gray-300 text-sm">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Peta Kelurahan */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Peta Wilayah</h2>
                    <div className="w-24 h-1 bg-[#4D9AE1] mx-auto mb-4"></div>
                    <p className="text-gray-600">Lokasi dan batas wilayah kelurahan Lumpue</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="relative aspect-video">
                        <iframe
                            title="Peta Kelurahan Lumpue"
                            src="https://www.google.com/maps?q=Kelurahan%20Lumpue%2C%20Bacukiki%20Barat%2C%20Parepare&output=embed"
                            className="absolute inset-0 h-full w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>

                    {/* Batas Wilayah */}
                    <div className="p-6 md:p-8 border-t bg-[#1E293B]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                                <Compass className="w-5 h-5 text-[#4D9AE1]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Batas Wilayah Kelurahan Lumpue</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {batasWilayah.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
                                    <p className="text-base font-semibold text-[#1E293B]">
                                        {buildValueText(item.value_number, item.value_text, item.unit)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
	);
}