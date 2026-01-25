export type ProfilKategori = 
    | 'tentang'
    | 'sejarah'
    | 'visi-misi-sasaran'
    | 'tugas-dan-fungsi'
    | 'potensi'
    | 'struktur-organisasi';

export type BeritaKategori = 'berita' | 'pengumuman';

export type AspirasiStatus = 'baru' | 'diproses' | 'selesai' | 'ditolak';

export type AdminLogAction = 'create' | 'update' | 'delete' | 'login';

export interface Admin {
    id: string;
    nama: string;
    email: string;
    password?: string;
    last_access: Date;
    created_at: Date;
    updated_at: Date;
}

export interface Profil {
    id: string;
    judul: string;
    konten: string;
    gambar_url?: string;
    gambar_size?: number;
    gambar_type?: string;
    kategori: ProfilKategori;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface ProfilPejabat {
    id: string;
    nama: string;
    jabatan: string;
    golongan: string;
    pendidikan: string;
    gambar_url?: string;
    gambar_size?: number;
    gambar_type?: string;
    riwayat_jabatan_file_url?: string;
    riwayat_jabatan_size?: number;
    riwayat_jabatan_type?: string;
    riwayat_pendidikan_file_url?: string;
    riwayat_pendidikan_size?: number;
    riwayat_pendidikan_type?: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface Kelembagaan {
    id: string;
    judul: string;
    konten: string;
    kategori?: string;
    gambar_url?: string;
    gambar_size?: number;
    gambar_type?: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface Berita {
    id: string;
    judul: string;
    konten: string;
    tanggal: Date;
    penulis: string;
    kategori: BeritaKategori;
    slug: string;
    gambar_url?: string;
    gambar_size?: number;
    gambar_type?: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface UMKM {
    id: string;
    nama: string;
    owner: string;
    deskripsi: string;
    alamat: string;
    kontak: string;
    instagram?: string;
    whatsapp?: string;
    lokasi?: string;
    gambar_url?: string;
    gambar_size?: number;
    gambar_type?: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface Galeri {
    id: string;
    judul: string;
    deskripsi: string;
    gambar_url?: string;
    gambar_size?: number;
    gambar_type?: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface Kontak {
    id: string;
    alamat: string;
    telepon: string;
    whatsapp: string;
    email: string;
    lokasi: string;
    jam_kerja: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
}

export interface Aspirasi {
    id: string;
    judul: string;
    nama: string;
    email: string;
    isi: string;
    status: AspirasiStatus;
    created_at: Date;
    updated_at: Date;
    admin_id?: string;
    admin?: Admin;
}

export interface Role {
    id: string;
    nama: string;
    deskripsi: string;
    meta?: string;
    created_at: Date;
    updated_at: Date;
}

export interface Permission {
    id: string;
    kode: string;
    deskripsi: string;
}

export interface RolePermission {
    role_id: string;
    permission_id: string;
    role?: Role;
    permission?: Permission;
}

export interface AdminRole {
    admin_id: string;
    role_id: string;
    admin?: Admin;
    role?: Role;
}

export interface AdminLog {
    id: string;
    admin_id: string;
    entity_id: string;
    entity_type: string;
    action: AdminLogAction;
    created_at: Date;
    admin?: Admin;
}

export interface StatistikKategori {
    id: string;
    nama: string;
    tahun: number;
    sumber: string;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
    items?: StatistikItem[];
}

export interface StatistikItem {
    id: string;
    kategori_id: string;
    key: string;
    label: string;
    value_number?: number;
    value_text?: string;
    unit?: string;
    order_index: number;
    created_at: Date;
    updated_at: Date;
    admin_id: string;
    admin?: Admin;
    kategori?: StatistikKategori;
}