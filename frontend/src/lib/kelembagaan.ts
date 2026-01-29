export const KELEMBAGAAN = [
	'lpmk',
	'karang-taruna',
	'pkk',
	'rt',
	'rw',
	'lembaga-adat',
	'posyandu'
] as const;

export type KelembagaanSlug = typeof KELEMBAGAAN[number];

export const kelembagaanMeta: Record<KelembagaanSlug, { label: string }> = {
	lpmk: { label: 'LPMK' },
	'karang-taruna': { label: 'Karang Taruna' },
	pkk: { label: 'PKK' },
	rt: { label: 'RT' },
	rw: { label: 'RW' },
	'lembaga-adat': { label: 'Lembaga Adat' },
	posyandu: { label: 'Posyandu' }
};