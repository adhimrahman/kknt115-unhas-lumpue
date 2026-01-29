import { Profil, ProfilPejabat, Berita, UMKM, Galeri, Kontak, Aspirasi, StatistikKategori, StatistikItem, Role, Admin, AdminLog, Kelembagaan, Potensi, PotensiGambar  } from '@/types';

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
	},
	{
		id: "4",
		judul: "Tugas dan Fungsi",
		konten: "Tugas kelurahan meliputi...\nFungsi kelurahan meliputi...",
		gambar_url: "https://picsum.photos/800/600?random=4",
		gambar_size: 160000,
		gambar_type: "image/jpeg",
		kategori: "tugas-dan-fungsi",
		created_at: new Date("2024-01-04"),
		updated_at: new Date("2024-01-04"),
		admin_id: "1"
	},
	{
		id: "5",
		judul: "Struktur Organisasi",
		konten: "Struktur organisasi kelurahan terdiri dari...\n(Lurah, Sekretaris, Kasi, dll)",
		gambar_url: "https://picsum.photos/800/600?random=5",
		gambar_size: 160000,
		gambar_type: "image/jpeg",
		kategori: "struktur-organisasi",
		created_at: new Date("2024-01-05"),
		updated_at: new Date("2024-01-05"),
		admin_id: "1"
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
		id: "1",
		judul: "Lembaga Pemberdayaan Masyarakat Kelurahan (LPMK)",
		konten: `
			LPMK merupakan lembaga kemasyarakatan yang berperan sebagai mitra kerja kelurahan
			dalam perencanaan, pelaksanaan, dan pengawasan pembangunan berbasis masyarakat.

			**Tugas LPMK antara lain:**
			- Menampung dan menyalurkan aspirasi masyarakat
			- Menggerakkan partisipasi masyarakat
			- Mengawal program pembangunan kelurahan
		`,
		kategori: "lpmk",
		gambar_url: "https://picsum.photos/1200/800?random=11",
		gambar_size: 240000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	},
	{
		id: "2",
		judul: "Karang Taruna",
		konten: `
			Karang Taruna adalah organisasi kepemudaan yang menjadi wadah pembinaan generasi muda
			dalam bidang sosial, ekonomi, dan kreativitas.

			**Fokus kegiatan:**
			- Kepemudaan & olahraga
			- Kegiatan sosial kemasyarakatan
			- Pemberdayaan ekonomi kreatif pemuda
		`,
		kategori: "karang-taruna",
		gambar_url: "https://picsum.photos/1200/800?random=12",
		gambar_size: 220000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	},
	{
		id: "3",
		judul: "Pemberdayaan Kesejahteraan Keluarga (PKK)",
		konten: `
			PKK merupakan lembaga yang berfokus pada peningkatan kesejahteraan keluarga
			melalui 10 Program Pokok PKK.

			**Bidang utama:**
			- Kesehatan keluarga
			- Pendidikan dan keterampilan
			- Ketahanan pangan keluarga
		`,
		kategori: "pkk",
		gambar_url: "https://picsum.photos/1200/800?random=13",
		gambar_size: 230000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	},
	{
		id: "4",
		judul: "Rukun Tetangga (RT)",
		konten: `
			RT merupakan unit organisasi kemasyarakatan paling dasar yang berperan
			dalam pelayanan administrasi dan koordinasi warga di tingkat lingkungan.

			**Peran RT:**
			- Pendataan penduduk
			- Pelayanan administrasi warga
			- Koordinasi kegiatan lingkungan
		`,
		kategori: "rt",
		gambar_url: "https://picsum.photos/1200/800?random=14",
		gambar_size: 210000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	},
	{
		id: "5",
		judul: "Rukun Warga (RW)",
		konten: `
			RW berfungsi sebagai penghubung antara RT dan pihak kelurahan
			dalam koordinasi pelayanan dan pembangunan lingkungan.

			**Tugas RW:**
			- Koordinasi antar RT
			- Penyampaian kebijakan kelurahan
			- Pembinaan kegiatan masyarakat
		`,
		kategori: "rw",
		gambar_url: "https://picsum.photos/1200/800?random=15",
		gambar_size: 215000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	},
	{
		id: "6",
		judul: "Pos Pelayanan Terpadu (Posyandu)",
		konten: `
			Posyandu merupakan layanan kesehatan berbasis masyarakat
			yang berfokus pada ibu dan anak.

			**Layanan utama:**
			- Penimbangan balita
			- Imunisasi
			- Edukasi gizi dan kesehatan
		`,
		kategori: "posyandu",
		gambar_url: "https://picsum.photos/1200/800?random=16",
		gambar_size: 225000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	},
	{
		id: "7",
		judul: "Lembaga Adat",
		konten: `
			Lembaga Adat merupakan lembaga kemasyarakatan yang berperan dalam menjaga,
			melestarikan, dan mengembangkan nilai-nilai adat, budaya, serta kearifan lokal
			yang hidup dan berkembang di tengah masyarakat kelurahan.

			Lembaga ini menjadi wadah musyawarah adat serta mitra pemerintah kelurahan
			dalam penyelesaian persoalan sosial berbasis nilai-nilai budaya setempat.

			**Peran dan fungsi Lembaga Adat:**
			- Melestarikan adat istiadat dan budaya lokal
			- Menjadi mediator dalam penyelesaian sengketa adat
			- Memberikan pertimbangan adat dalam kebijakan kemasyarakatan
			- Membina generasi muda agar memahami nilai budaya daerah

			**Ruang lingkup kegiatan:**
			- Upacara dan kegiatan adat
			- Edukasi budaya dan sejarah lokal
			- Pembinaan norma sosial berbasis adat
		`,
		kategori: "lembaga-adat",
		gambar_url: "https://picsum.photos/1200/800?random=17",
		gambar_size: 235000,
		gambar_type: "image/jpeg",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "1"
	}
];

export const mockPotensi: Potensi[] = [
	{
		id: 'pot-umkm',
		kategori: 'umkm',
		nama: 'UMKM & Kerajinan',
		slug: 'umkm-kerajinan',
		icon: 'Store',
		konten:
			'Potensi UMKM di kelurahan meliputi kerajinan tangan, olahan rumahan, dan usaha jasa. Dukungan pengembangan dapat dilakukan melalui pelatihan, pendampingan pemasaran, serta fasilitasi legalitas.',
		created_at: new Date('2024-01-05'),
		updated_at: new Date('2024-01-05'),
		admin_id: '1'
	},
	{
		id: 'pot-pertanian',
		kategori: 'pertanian',
		nama: 'Pertanian & Kebun',
		slug: 'pertanian-kebun',
		icon: 'Sprout',
		konten:
			'Potensi pertanian dan kebun warga dapat dikembangkan melalui budidaya komoditas unggulan, pemanfaatan pekarangan, serta penguatan rantai distribusi hasil panen.',
		created_at: new Date('2024-01-06'),
		updated_at: new Date('2024-01-06'),
		admin_id: '1'
	},
	{
		id: 'pot-perikanan',
		kategori: 'perikanan',
		nama: 'Perikanan & Hasil Laut',
		slug: 'perikanan-hasil-laut',
		icon: 'Fish',
		konten:
			'Potensi perikanan mencakup hasil tangkap dan olahan hasil laut. Pengembangan dapat diarahkan pada peningkatan kualitas produk, pengemasan, dan akses pasar.',
		created_at: new Date('2024-01-07'),
		updated_at: new Date('2024-01-07'),
		admin_id: '1'
	},
	{
		id: 'pot-wisata',
		kategori: 'wisata',
		nama: 'Wisata & Ruang Publik',
		slug: 'wisata-ruang-publik',
		icon: 'MapPinned',
		konten:
			'Potensi wisata dan ruang publik dapat dikembangkan melalui penataan kawasan, penyediaan informasi, kebersihan lingkungan, serta promosi kegiatan lokal.',
		created_at: new Date('2024-01-08'),
		updated_at: new Date('2024-01-08'),
		admin_id: '1'
	},
	{
		id: 'pot-kuliner',
		kategori: 'kuliner',
		nama: 'Kuliner Lokal',
		slug: 'kuliner-lokal',
		icon: 'UtensilsCrossed',
		konten:
			'Kuliner lokal memiliki daya tarik kuat. Penguatan dapat dilakukan lewat standarisasi kualitas, inovasi menu, dan promosi melalui media sosial.',
		created_at: new Date('2024-01-09'),
		updated_at: new Date('2024-01-09'),
		admin_id: '1'
	},
	{
		id: 'pot-sdm',
		kategori: 'sdm',
		nama: 'SDM & Komunitas',
		slug: 'sdm-komunitas',
		icon: 'Users',
		konten:
			'SDM produktif dan komunitas aktif menjadi kekuatan sosial. Pengembangan dapat dilakukan melalui program pelatihan, kegiatan kepemudaan, dan kolaborasi lintas komunitas.',
		created_at: new Date('2024-01-10'),
		updated_at: new Date('2024-01-10'),
		admin_id: '1'
	}
];

export const mockPotensiGambar: PotensiGambar[] = [
	{
		id: 'potg-1',
		potensi_id: 'pot-umkm',
		url: 'https://picsum.photos/1200/800?random=61',
		caption: 'Produk UMKM warga',
		order_index: 1,
		created_at: new Date('2024-01-05'),
		updated_at: new Date('2024-01-05'),
		admin_id: '1'
	},
	{
		id: 'potg-2',
		potensi_id: 'pot-umkm',
		url: 'https://picsum.photos/1200/800?random=62',
		caption: 'Kegiatan pelatihan',
		order_index: 2,
		created_at: new Date('2024-01-05'),
		updated_at: new Date('2024-01-05'),
		admin_id: '1'
	},
	{
		id: 'potg-3',
		potensi_id: 'pot-wisata',
		url: 'https://picsum.photos/1200/800?random=63',
		caption: 'Ruang publik',
		order_index: 1,
		created_at: new Date('2024-01-08'),
		updated_at: new Date('2024-01-08'),
		admin_id: '1'
	}
];

export const mockBerita: Berita[] = [
	{
		id: '1',
		judul: 'Peluncuran Program Baru untuk UMKM',
		konten: 'Pemerintah meluncurkan program baru untuk mendukung UMKM lokal melalui pendampingan usaha, pelatihan, dan akses pemasaran.',
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
		konten: 'Diberitahukan bahwa kantor kelurahan tutup pada tanggal yang ditetapkan sebagai libur nasional. Pelayanan kembali normal pada hari kerja berikutnya.',
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
	},
	{
		id: '3',
		judul: 'Gotong Royong Bersih Lingkungan RW 02',
		konten: 'Kegiatan gotong royong dilaksanakan bersama warga untuk membersihkan drainase dan area publik. Terima kasih atas partisipasi semua pihak.',
		gambar_url: 'https://picsum.photos/800/600?random=11',
		gambar_size: 165000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-01-18'),
		penulis: 'Admin',
		kategori: 'berita',
		slug: 'gotong-royong-bersih-lingkungan-rw-02',
		created_at: new Date('2024-01-18'),
		updated_at: new Date('2024-01-18'),
		admin_id: '1'
	},
	{
		id: '4',
		judul: 'Pengumuman: Jadwal Posyandu Bulan Januari',
		konten: 'Posyandu dilaksanakan sesuai jadwal yang telah ditentukan. Warga diharapkan membawa buku KIA/KMS dan datang sesuai jam layanan.',
		gambar_url: 'https://picsum.photos/800/600?random=12',
		gambar_size: 150000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-01-19'),
		penulis: 'Admin',
		kategori: 'pengumuman',
		slug: 'pengumuman-jadwal-posyandu-januari',
		created_at: new Date('2024-01-19'),
		updated_at: new Date('2024-01-19'),
		admin_id: '1'
	},
	{
		id: '5',
		judul: 'Pelatihan Digital Marketing untuk Pelaku UMKM',
		konten: 'Pelatihan membahas strategi promosi online, pembuatan konten, dan optimalisasi media sosial untuk meningkatkan penjualan.',
		gambar_url: 'https://picsum.photos/800/600?random=13',
		gambar_size: 175000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-01-25'),
		penulis: 'Admin',
		kategori: 'berita',
		slug: 'pelatihan-digital-marketing-untuk-pelaku-umkm',
		created_at: new Date('2024-01-25'),
		updated_at: new Date('2024-01-25'),
		admin_id: '1'
	},
	{
		id: '6',
		judul: 'Pengumuman: Perubahan Jam Pelayanan Kantor',
		konten: 'Mulai minggu ini, jam pelayanan administrasi mengalami penyesuaian. Silakan cek informasi jam terbaru pada bagian kontak.',
		gambar_url: 'https://picsum.photos/800/600?random=14',
		gambar_size: 160000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-01-26'),
		penulis: 'Admin',
		kategori: 'pengumuman',
		slug: 'pengumuman-perubahan-jam-pelayanan-kantor',
		created_at: new Date('2024-01-26'),
		updated_at: new Date('2024-01-26'),
		admin_id: '1'
	},
	{
		id: '7',
		judul: 'Sosialisasi Administrasi Kependudukan di Balai Warga',
		konten: 'Sosialisasi membahas layanan administrasi kependudukan seperti KK, KTP, akta kelahiran, serta alur pengurusan yang benar.',
		gambar_url: 'https://picsum.photos/800/600?random=15',
		gambar_size: 168000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-02-02'),
		penulis: 'Admin',
		kategori: 'berita',
		slug: 'sosialisasi-administrasi-kependudukan-di-balai-warga',
		created_at: new Date('2024-02-02'),
		updated_at: new Date('2024-02-02'),
		admin_id: '1'
	},
	{
		id: '8',
		judul: 'Pengumuman: Penutupan Sementara Layanan pada Hari Rapat',
		konten: 'Sehubungan dengan agenda rapat koordinasi, layanan administrasi ditutup sementara pada jam tertentu. Mohon pengertiannya.',
		gambar_url: 'https://picsum.photos/800/600?random=16',
		gambar_size: 155000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-02-05'),
		penulis: 'Admin',
		kategori: 'pengumuman',
		slug: 'pengumuman-penutupan-sementara-layanan-hari-rapat',
		created_at: new Date('2024-02-05'),
		updated_at: new Date('2024-02-05'),
		admin_id: '1'
	},
	{
		id: '9',
		judul: 'Program Bank Sampah: Setor Sampah Jadi Tabungan',
		konten: 'Warga dapat menyetor sampah anorganik terpilah untuk ditimbang dan dicatat sebagai tabungan. Jadwal setor rutin diumumkan berkala.',
		gambar_url: 'https://picsum.photos/800/600?random=17',
		gambar_size: 172000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-02-10'),
		penulis: 'Admin',
		kategori: 'berita',
		slug: 'program-bank-sampah-setor-sampah-jadi-tabungan',
		created_at: new Date('2024-02-10'),
		updated_at: new Date('2024-02-10'),
		admin_id: '1'
	},
	{
		id: '10',
		judul: 'Pengumuman: Verifikasi Data Warga',
		konten: 'Warga diminta melakukan verifikasi data untuk pembaruan administrasi. Siapkan dokumen pendukung sesuai kebutuhan.',
		gambar_url: 'https://picsum.photos/800/600?random=18',
		gambar_size: 150000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-02-12'),
		penulis: 'Admin',
		kategori: 'pengumuman',
		slug: 'pengumuman-verifikasi-data-warga',
		created_at: new Date('2024-02-12'),
		updated_at: new Date('2024-02-12'),
		admin_id: '1'
	},
	{
		id: '11',
		judul: 'Kocak',
		konten: 'Warga dapat menyetor sampah anorganik terpilah untuk ditimbang dan dicatat sebagai tabungan. Jadwal setor rutin diumumkan berkala.',
		gambar_url: 'https://picsum.photos/800/600?random=17',
		gambar_size: 172000,
		gambar_type: 'image/jpeg',
		tanggal: new Date('2024-02-10'),
		penulis: 'Admin',
		kategori: 'berita',
		slug: 'kocak',
		created_at: new Date('2024-02-10'),
		updated_at: new Date('2024-02-10'),
		admin_id: '1'
	},
];

export const mockUMKM: UMKM[] = [
	{
		id: '1',
		nama: 'Posko KKNT Gel. 115 Universitas Hasanuddin Lumpue',
		owner: 'adhim rahman',
		deskripsi: 'kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang kanjul ome imang paok kocak gimang',
		alamat: 'Jl. S. Abdul Rasyid No. 12A',
		kontak: '082269257873',
		instagram: '@warungkopisederhana',
		whatsapp: '6282269257873',
		lokasi: '-4.0571608, 119.6249339',
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
		deskripsi: 'Kunjungan Menteri ke kantor kelurahan',
		gambar_url: 'https://picsum.photos/800/600?random=1',
		gambar_size: 175000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-05'),
		updated_at: new Date('2024-01-05'),
		admin_id: '1'
	},
	{
		id: '2',
		judul: 'Pelatihan UMKM',
		deskripsi: 'Pelatihan pengembangan usaha untuk UMKM lokal',
		gambar_url: 'https://picsum.photos/800/600?random=2',
		gambar_size: 165000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-08'),
		updated_at: new Date('2024-01-08'),
		admin_id: '1'
	},
	{
		id: '3',
		judul: 'Gotong Royong Warga',
		deskripsi: 'Kegiatan gotong royong membersihkan lingkungan',
		gambar_url: 'https://picsum.photos/800/600?random=3',
		gambar_size: 168000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-10'),
		updated_at: new Date('2024-01-10'),
		admin_id: '1'
	},
	{
		id: '4',
		judul: 'Musyawarah Kelurahan',
		deskripsi: 'Rapat koordinasi bersama tokoh masyarakat',
		gambar_url: 'https://picsum.photos/800/600?random=4',
		gambar_size: 170000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-12'),
		updated_at: new Date('2024-01-12'),
		admin_id: '1'
	},
	{
		id: '5',
		judul: 'Perayaan HUT RI',
		deskripsi: 'Lomba dan kegiatan 17 Agustus',
		gambar_url: 'https://picsum.photos/800/600?random=5',
		gambar_size: 180000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-15'),
		updated_at: new Date('2024-01-15'),
		admin_id: '1'
	},
	{
		id: '6',
		judul: 'Vaksinasi Massal',
		deskripsi: 'Program vaksinasi untuk warga',
		gambar_url: 'https://picsum.photos/800/600?random=6',
		gambar_size: 172000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-18'),
		updated_at: new Date('2024-01-18'),
		admin_id: '1'
	},
	{
		id: '7',
		judul: 'Sosialisasi Administrasi',
		deskripsi: 'Sosialisasi layanan administrasi kependudukan',
		gambar_url: 'https://picsum.photos/800/600?random=7',
		gambar_size: 169000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-20'),
		updated_at: new Date('2024-01-20'),
		admin_id: '1'
	},
	{
		id: '8',
		judul: 'Bimbingan Teknis RT/RW',
		deskripsi: 'Pelatihan administrasi RT dan RW',
		gambar_url: 'https://picsum.photos/800/600?random=8',
		gambar_size: 174000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-22'),
		updated_at: new Date('2024-01-22'),
		admin_id: '1'
	},
	{
		id: '9',
		judul: 'Penyaluran Bantuan Sosial',
		deskripsi: 'Penyaluran bantuan kepada warga kurang mampu',
		gambar_url: 'https://picsum.photos/800/600?random=9',
		gambar_size: 176000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-25'),
		updated_at: new Date('2024-01-25'),
		admin_id: '1'
	},
	{
		id: '10',
		judul: 'Kerja Bakti Drainase',
		deskripsi: 'Pembersihan saluran air lingkungan',
		gambar_url: 'https://picsum.photos/800/600?random=10',
		gambar_size: 171000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-01-28'),
		updated_at: new Date('2024-01-28'),
		admin_id: '1'
	},
	{
		id: '11',
		judul: 'Pelatihan Digital Marketing',
		deskripsi: 'Pelatihan pemasaran digital untuk pelaku UMKM',
		gambar_url: 'https://picsum.photos/800/600?random=11',
		gambar_size: 178000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-02-01'),
		updated_at: new Date('2024-02-01'),
		admin_id: '1'
	},
	{
		id: '12',
		judul: 'Lomba Kebersihan Lingkungan',
		deskripsi: 'Penilaian kebersihan antar RT',
		gambar_url: 'https://picsum.photos/800/600?random=12',
		gambar_size: 173000,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-02-05'),
		updated_at: new Date('2024-02-05'),
		admin_id: '1'
	},
	{
		id: '13',
		judul: 'Rapat Evaluasi Program',
		deskripsi: 'Evaluasi program kerja kelurahan',
		gambar_url: 'https://picsum.photos/800/600?random=13',
		gambar_size: 170500,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-02-08'),
		updated_at: new Date('2024-02-08'),
		admin_id: '1'
	},
	{
		id: '14',
		judul: 'Kegiatan PKK',
		deskripsi: 'Pemberdayaan dan pembinaan keluarga',
		gambar_url: 'https://picsum.photos/800/600?random=14',
		gambar_size: 168500,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-02-12'),
		updated_at: new Date('2024-02-12'),
		admin_id: '1'
	},
	{
		id: '15',
		judul: 'Senam Bersama Warga',
		deskripsi: 'Kegiatan senam pagi bersama warga',
		gambar_url: 'https://picsum.photos/800/600?random=15',
		gambar_size: 172500,
		gambar_type: 'image/jpeg',
		created_at: new Date('2024-02-15'),
		updated_at: new Date('2024-02-15'),
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
	instagram: 'https://instagram.com/adhimrahmann',
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
		id: "sk-1",
		nama: "BPS 2024",
		tahun: 2024,
		sumber: "BPS",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "sk-2",
		nama: "Data Umum",
		tahun: 2024,
		sumber: "Kelurahan Lumpue",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "sk-3",
		nama: "Orbitasi",
		tahun: 2024,
		sumber: "Kelurahan Lumpue",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "sk-4",
		nama: "Data Personil",
		tahun: 2024,
		sumber: "Kelurahan Lumpue",
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	}
];

export const mockStatistikItem: StatistikItem[] = [
	// =========================
	// BPS 2024 (Penduduk)
	// =========================
	{
		id: "si-1",
		kategori_id: "sk-1",
		key: "total_penduduk",
		label: "Total Penduduk",
		value_number: 10164,
		unit: "jiwa",
		order_index: 1,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-2",
		kategori_id: "sk-1",
		key: "jumlah_keluarga",
		label: "Jumlah Keluarga",
		value_number: 3122,
		unit: "KK",
		order_index: 2,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-3",
		kategori_id: "sk-1",
		key: "jumlah_keluarga_pertanian",
		label: "Jumlah Keluarga Pertanian",
		value_number: 503,
		unit: "KK",
		order_index: 3,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-4",
		kategori_id: "sk-1",
		key: "penduduk_laki_laki_persen",
		label: "Penduduk Laki-laki",
		value_number: 49,
		unit: "%",
		order_index: 4,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-5",
		kategori_id: "sk-1",
		key: "penduduk_perempuan_persen",
		label: "Penduduk Perempuan",
		value_number: 51,
		unit: "%",
		order_index: 5,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},

	// =========================
	// BPS 2024 (Sarana Pendidikan)
	// =========================
	{
		id: "si-10",
		kategori_id: "sk-1",
		key: "pendidikan_tk",
		label: "Jumlah Sarana Pendidikan - TK",
		value_number: 6,
		unit: "unit",
		order_index: 10,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-11",
		kategori_id: "sk-1",
		key: "pendidikan_sd",
		label: "Jumlah Sarana Pendidikan - SD",
		value_number: 6,
		unit: "unit",
		order_index: 11,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-12",
		kategori_id: "sk-1",
		key: "pendidikan_smp",
		label: "Jumlah Sarana Pendidikan - SMP",
		value_number: 2,
		unit: "unit",
		order_index: 12,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-13",
		kategori_id: "sk-1",
		key: "pendidikan_sma",
		label: "Jumlah Sarana Pendidikan - SMA",
		value_number: 1,
		unit: "unit",
		order_index: 13,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},

	// =========================
	// BPS 2024 (Sarana Ekonomi)
	// =========================
	{
		id: "si-20",
		kategori_id: "sk-1",
		key: "ekonomi_minimarket",
		label: "Jumlah Sarana Ekonomi - Minimarket",
		value_number: 5,
		unit: "unit",
		order_index: 20,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-21",
		kategori_id: "sk-1",
		key: "ekonomi_restoran",
		label: "Jumlah Sarana Ekonomi - Restoran",
		value_number: 5,
		unit: "unit",
		order_index: 21,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-22",
		kategori_id: "sk-1",
		key: "ekonomi_hotel",
		label: "Jumlah Sarana Ekonomi - Hotel",
		value_number: 2,
		unit: "unit",
		order_index: 22,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-23",
		kategori_id: "sk-1",
		key: "ekonomi_penginapan",
		label: "Jumlah Sarana Ekonomi - Penginapan",
		value_number: 1,
		unit: "unit",
		order_index: 23,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-24",
		kategori_id: "sk-1",
		key: "ekonomi_kedai_makanan",
		label: "Jumlah Sarana Ekonomi - Kedai Makanan",
		value_number: 15,
		unit: "unit",
		order_index: 24,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-25",
		kategori_id: "sk-1",
		key: "ekonomi_toko_kelontong",
		label: "Jumlah Sarana Ekonomi - Toko Kelontong",
		value_number: 230,
		unit: "unit",
		order_index: 25,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},

	// =========================
	// BPS 2024 (Industri Mikro Kecil)
	// =========================
	{
		id: "si-30",
		kategori_id: "sk-1",
		key: "imk_furnitur",
		label: "Industri Mikro Kecil - Furnitur",
		value_number: 5,
		unit: "unit",
		order_index: 30,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-31",
		kategori_id: "sk-1",
		key: "imk_logam",
		label: "Industri Mikro Kecil - Logam",
		value_number: 8,
		unit: "unit",
		order_index: 31,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-32",
		kategori_id: "sk-1",
		key: "imk_kayu_rotan",
		label: "Industri Mikro Kecil - Kayu/Rotan",
		value_number: 3,
		unit: "unit",
		order_index: 32,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-33",
		kategori_id: "sk-1",
		key: "imk_makanan",
		label: "Industri Mikro Kecil - Makanan",
		value_number: 27,
		unit: "unit",
		order_index: 33,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-34",
		kategori_id: "sk-1",
		key: "imk_pakaian_jadi",
		label: "Industri Mikro Kecil - Pakaian Jadi",
		value_number: 10,
		unit: "unit",
		order_index: 34,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-35",
		kategori_id: "sk-1",
		key: "imk_minuman",
		label: "Industri Mikro Kecil - Minuman",
		value_number: 6,
		unit: "unit",
		order_index: 35,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},

	// =========================
	// Data Umum
	// =========================
	{
		id: "si-100",
		kategori_id: "sk-2",
		key: "tipologi_kelurahan",
		label: "Tipologi Kelurahan",
		value_text: "Pesisir / Nelayan",
		order_index: 1,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-101",
		kategori_id: "sk-2",
		key: "luas_wilayah",
		label: "Luas Wilayah",
		value_number: 488,
		unit: "km²",
		order_index: 2,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-102",
		kategori_id: "sk-2",
		key: "batas_utara",
		label: "Batas Wilayah - Utara",
		value_text: "Kelurahan Sumpang Minangae",
		order_index: 10,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-103",
		kategori_id: "sk-2",
		key: "batas_selatan",
		label: "Batas Wilayah - Selatan",
		value_text: "Kabupaten Barru",
		order_index: 11,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-104",
		kategori_id: "sk-2",
		key: "batas_barat",
		label: "Batas Wilayah - Barat",
		value_text: "Selat Makassar",
		order_index: 12,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-105",
		kategori_id: "sk-2",
		key: "batas_timur",
		label: "Batas Wilayah - Timur",
		value_text: "Kelurahan Watang Bacukiki",
		order_index: 13,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-106",
		kategori_id: "sk-2",
		key: "mayoritas_pekerjaan",
		label: "Mayoritas Pekerjaan",
		value_text: "Wiraswasta",
		order_index: 20,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-107",
		kategori_id: "sk-2",
		key: "jumlah_rt",
		label: "Jumlah RT",
		value_number: 19,
		unit: "RT",
		order_index: 3,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-108",
		kategori_id: "sk-2",
		key: "jumlah_rw",
		label: "Jumlah RW",
		value_number: 9,
		unit: "RW",
		order_index: 4,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},

	// =========================
	// Orbitasi
	// =========================
	{
		id: "si-200",
		kategori_id: "sk-3",
		key: "jarak_kecamatan",
		label: "Jarak dari Pusat Pemerintahan Kecamatan",
		value_number: 2,
		unit: "km",
		order_index: 1,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-201",
		kategori_id: "sk-3",
		key: "jarak_kota",
		label: "Jarak dari Pusat Pemerintahan Kota",
		value_number: 4,
		unit: "km",
		order_index: 2,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-202",
		kategori_id: "sk-3",
		key: "jarak_provinsi",
		label: "Jarak dari Ibukota Provinsi",
		value_number: 146,
		unit: "km",
		order_index: 3,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},

	// =========================
	// Data Personil
	// =========================
	{
		id: "si-300",
		kategori_id: "sk-4",
		key: "nama_lurah",
		label: "Nama Lurah",
		value_text: "-",
		order_index: 1,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
	},
	{
		id: "si-301",
		kategori_id: "sk-4",
		key: "nama_sekretaris",
		label: "Nama Sekretaris Kelurahan",
		value_text: "-",
		order_index: 2,
		created_at: new Date("2024-01-01"),
		updated_at: new Date("2024-01-01"),
		admin_id: "admin-1"
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