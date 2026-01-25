import { Profil, ProfilPejabat, Berita, UMKM, Galeri, Kontak, Aspirasi, StatistikKategori, StatistikItem, Role, Admin, AdminLog, Kelembagaan } from '@/types';

export const mockProfil: Profil[] = [
	{
		id: '1',
		judul: 'Tentang Kami',
		konten: 'Kami adalah instansi pemerintah yang berkomitmen untuk melayani masyarakat dengan sepenuh hati...',
		gambar_url: 'https://picsum.photos/800/600?random=1',
		gambar_size: 150000,
		gambar_type: 'image/jpeg',
		kategori: 'tentang',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	},
	{
		id: '2',
		judul: 'Sejarah',
		konten: 'Sejarah panjang organisasi kami dimulai sejak tahun 1950...',
		gambar_url: 'https://picsum.photos/800/600?random=2',
		gambar_size: 180000,
		gambar_type: 'image/jpeg',
		kategori: 'sejarah',
		created_at: new Date('2024-01-02'),
		updated_at: new Date('2024-01-02'),
		admin_id: '1'
	},
	{
		id: '3',
		judul: 'Visi, Misi, dan Sasaran',
		konten: 'Visi: Menjadi instansi terdepan dalam pelayanan publik.\nMisi: Memberikan pelayanan terbaik kepada masyarakat.',
		gambar_url: 'https://picsum.photos/800/600?random=3',
		gambar_size: 160000,
		gambar_type: 'image/jpeg',
		kategori: 'visi-misi-sasaran',
		created_at: new Date('2024-01-03'),
		updated_at: new Date('2024-01-03'),
		admin_id: '1'
	}
];

export const mockProfilPejabat: ProfilPejabat[] = [
	{
		id: '1',
		nama: 'Dr. Ahmad Santoso, S.T., M.Si.',
		gambar_url: 'https://i.pravatar.cc/300?img=1',
		gambar_size: 120000,
		gambar_type: 'image/jpeg',
		jabatan: 'Kepala Dinas',
		golongan: 'IV/d',
		pendidikan: 'S3 Administrasi Publik',
		riwayat_jabatan_file_url: '/files/riwayat-jabatan-1.pdf',
		riwayat_jabatan_size: 250000,
		riwayat_jabatan_type: 'application/pdf',
		riwayat_pendidikan_file_url: '/files/riwayat-pendidikan-1.pdf',
		riwayat_pendidikan_size: 300000,
		riwayat_pendidikan_type: 'application/pdf',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	},
	{
		id: '2',
		nama: 'Ir. Siti Nurhaliza, M.M.',
		gambar_url: 'https://i.pravatar.cc/300?img=5',
		gambar_size: 115000,
		gambar_type: 'image/jpeg',
		jabatan: 'Sekretaris Dinas',
		golongan: 'IV/c',
		pendidikan: 'S2 Manajemen',
		riwayat_jabatan_file_url: '/files/riwayat-jabatan-2.pdf',
		riwayat_jabatan_size: 240000,
		riwayat_jabatan_type: 'application/pdf',
		riwayat_pendidikan_file_url: '/files/riwayat-pendidikan-2.pdf',
		riwayat_pendidikan_size: 280000,
		riwayat_pendidikan_type: 'application/pdf',
		created_at: new Date('2024-01-02'),
		updated_at: new Date('2024-01-02'),
		admin_id: '1'
	}
];

export const mockKelembagaan: Kelembagaan[] = [
	{
		id: '1',
		judul: 'Struktur Organisasi',
		konten: 'Struktur organisasi kami terdiri dari beberapa bidang...',
		gambar_url: 'https://picsum.photos/1000/800?random=10',
		gambar_size: 200000,
		gambar_type: 'image/jpeg',
		kategori: 'struktur',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	}
];

export const mockBerita: Berita[] = [
	{
		id: '1',
		judul: 'Peluncuran Program Baru untuk UMKM',
		konten: 'Pemerintah meluncurkan program baru untuk mendukung UMKM lokal...',
		gambar_url: 'https://picsum.photos/800/600?random=4',
		gambar_size: 170000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-01-15'),
		penulis: 'Admin',
		kategori: 'berita',
		slug: 'peluncuran-program-baru-untuk-umkm',
		created_at: new Date('2024-01-15'),
		updated_at: new Date('2024-01-15'),
		admin_id: '1'
	},
	{
		id: '2',
		judul: 'Pengumuman: Libur Nasional',
		konten: 'Diberitahukan bahwa kantor akan tutup pada tanggal...',
		gambar_url: 'https://picsum.photos/800/600?random=5',
		gambar_size: 140000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-01-20'),
		penulis: 'Admin',
		kategori: 'pengumuman',
		slug: 'pengumuman-libur-nasional',
		created_at: new Date('2024-01-20'),
		updated_at: new Date('2024-01-20'),
		admin_id: '1'
	}
];

export const mockUMKM: UMKM[] = [
	{
		id: '1',
		nama: 'Warung Kopi Sederhana',
		owner: 'Budi Santoso',
		deskripsi: 'Warung kopi dengan berbagai varian kopi nusantara',
		alamat: 'Jl. Merdeka No. 123',
		kontak: '081234567890',
		instagram: '@warungkopisederhana',
		whatsapp: '6281234567890',
		lokasi: '-6.200000, 106.816666',
		gambar_url: 'https://picsum.photos/800/600?random=6',
		gambar_size: 190000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-10'),
		updated_at: new Date('2024-01-10'),
		admin_id: '1'
	},
	{
		id: '2',
		nama: 'Kerajinan Tangan Makmur',
		owner: 'Siti Aminah',
		deskripsi: 'Kerajinan tangan dari bahan daur ulang',
		alamat: 'Jl. Sejahtera No. 45',
		kontak: '081298765432',
		instagram: '@kerajinantanganmakmur',
		whatsapp: '6281298765432',
		lokasi: '-6.201000, 106.817666',
		gambar_url: 'https://picsum.photos/800/600?random=7',
		gambar_size: 185000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-11'),
		updated_at: new Date('2024-01-11'),
		admin_id: '1'
	}
];

export const mockGaleri: Galeri[] = [
	{
		id: '1',
		judul: 'Kunjungan Menteri',
		deskripsi: 'Kunjungan Menteri ke kantor kami',
		gambar_url: 'https://picsum.photos/800/600?random=8',
		gambar_size: 175000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-12'),
		updated_at: new Date('2024-01-12'),
		admin_id: '1'
	},
	{
		id: '2',
		judul: 'Pelatihan UMKM',
		deskripsi: 'Pelatihan pengembangan usaha untuk UMKM',
		gambar_url: 'https://picsum.photos/800/600?random=9',
		gambar_size: 165000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-13'),
		updated_at: new Date('2024-01-13'),
		admin_id: '1'
	}
];

export const mockKontak: Kontak = {
	id: '1',
	alamat: 'Jl. Raya Pemerintahan No. 1, Jakarta Pusat',
	telepon: '021-1234567',
	whatsapp: '628123456789',
	email: 'info@instansi.go.id',
	lokasi: '-6.200000, 106.816666',
	jam_kerja: 'Senin - Jumat: 08.00 - 16.00 WIB',
	created_at: new Date('2024-01-01'),
	updated_at: new Date('2024-01-25'),
	admin_id: '1'
};

export const mockAspirasi: Aspirasi[] = [
	{
		id: '1',
		judul: 'Perbaikan Jalan',
		nama: 'John Doe',
		email: 'john@example.com',
		isi: 'Mohon diperbaiki jalan di daerah kami yang rusak parah',
		status: 'diproses',
		created_at: new Date('2024-01-14'),
		updated_at: new Date('2024-01-15'),
		admin_id: '1'
	},
	{
		id: '2',
		judul: 'Bantuan UMKM',
		nama: 'Jane Smith',
		email: 'jane@example.com',
		isi: 'Mohon bantuan modal untuk mengembangkan usaha',
		status: 'baru',
		created_at: new Date('2024-01-16'),
		updated_at: new Date('2024-01-16'),
		admin_id: '1'
	}
];

export const mockStatistikKategori: StatistikKategori[] = [
	{
		id: '1',
		nama: 'BPS 2024',
		tahun: 2024,
		sumber: 'Badan Pusat Statistik',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	},
	{
		id: '2',
		nama: 'Data Umum',
		tahun: 2024,
		sumber: 'Internal',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	}
];

export const mockStatistikItem: StatistikItem[] = [
	{
		id: '1',
		kategori_id: '1',
		key: 'jumlah_penduduk',
		label: 'Jumlah Penduduk',
		value_number: 2500000,
		value_text: undefined,
		unit: 'jiwa',
		order_index: 1,
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	},
	{
		id: '2',
		kategori_id: '1',
		key: 'luas_wilayah',
		label: 'Luas Wilayah',
		value_number: 150.5,
		value_text: undefined,
		unit: 'km²',
		order_index: 2,
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01'),
		admin_id: '1'
	}
];

export const mockAdmin: Admin[] = [
	{
		id: '1',
		nama: 'Super Admin',
		email: 'admin@example.com',
		last_access: new Date('2024-01-25'),
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-25')
	}
];

export const mockRoles: Role[] = [
	{
		id: '1',
		nama: 'Super Admin',
		deskripsi: 'Akses penuh ke semua fitur',
		meta: '{}',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01')
	},
	{
		id: '2',
		nama: 'Editor',
		deskripsi: 'Dapat mengedit konten',
		meta: '{}',
		created_at: new Date('2024-01-01'),
		updated_at: new Date('2024-01-01')
	}
];

export const mockAdminLog: AdminLog[] = [
	{
		id: '1',
		admin_id: '1',
		entity_id: '1',
		entity_type: 'berita',
		action: 'create',
		created_at: new Date('2024-01-15')
	},
	{
		id: '2',
		admin_id: '1',
		entity_id: '2',
		entity_type: 'umkm',
		action: 'update',
		created_at: new Date('2024-01-16')
	}
];