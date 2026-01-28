'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

type MenuItem = {
    title: string;
    href?: string;
    customDropdown?: boolean;
    dropdownPosition?: string;
    items?: { title: string; href: string; ket: string }[];
};

const menuItems: MenuItem[] = [
    { title: 'Beranda', href: '/' },
    {
        title: 'Profil',
        customDropdown: true,
        dropdownPosition: 'center',
        items: [
            { title: 'Tentang Kelurahan', href: '/profil/tentang', ket: 'Informasi Mengenai Kelurahan Lumpue' },
            { title: 'Sejarah', href: '/profil/sejarah', ket: 'Sejarah Kelurahan Lumpue' },
            { title: 'Visi, Misi, dan Sasaran', href: '/profil/visi-misi-sasaran', ket: 'Visi, Misi, dan Sasaran Kelurahan Lumpue' },
            { title: 'Tugas dan Fungsi', href: '/profil/tugas-dan-fungsi', ket: 'Tugas dan Fungsi Kelurahan Lumpue' },
            { title: 'Struktur Organisasi', href: '/profil/struktur-organisasi', ket: 'Struktur Organisasi Kelurahan Lumpue' },
            { title: 'Profil Pejabat', href: '/profil/profil-pejabat', ket: 'Profil-profil Pejabat Kelurahan Lumpue' },
            { title: 'Kelembagaan', href: '/profil/kelembagaan', ket: 'Lembaga-lembaga di Kelurahan Lumpue' },
            { title: 'Potensi', href: '/profil/potensi', ket: 'Potensi Kelurahan Lumpue' },
        ],
    },
    { title: 'Berita', href: '/berita' },
    { title: 'UMKM', href: '/umkm' },
    { title: 'Galeri', href: '/galeri' },
    { title: 'Statistik', href: '/statistik' },
    { title: 'Kontak & Aspirasi', href: '/kontak-aspirasi' },
];

export default function Navbar() {
    const [open, setOpen] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const navRef = useRef<HTMLElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const allRoutes = new Set<string>();
        
        menuItems.forEach(item => {
            if (item.href) {
                allRoutes.add(item.href);
            }
            if (item.items) {
                item.items.forEach(subItem => {
                    allRoutes.add(subItem.href);
                });
            }
        });

        const timeoutId = setTimeout(() => {
            allRoutes.forEach(route => {
                router.prefetch(route);
            });
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [router]);

    const prefetchOne = useCallback((href?: string) => {
        if (!href) return;
        router.prefetch(href);
    }, [router]);

    const prefetchMany = useCallback((hrefs: (string | undefined)[] = []) => {
        hrefs.forEach(h => { 
            if (h) router.prefetch(h);
        });
    }, [router]);

    const handleNavigation = useCallback((href: string) => {
        setMobileOpen(false);
        setMobileDropdownOpen(null);
        setOpen(null);
        router.push(href);
    }, [router]);

    const handleMobileDropdownToggle = (title: string, items?: { href: string }[]) => {
        const next = mobileDropdownOpen === title ? null : title;
        setMobileDropdownOpen(next);
        if (next && items?.length) prefetchMany(items.map(i => i.href));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileOpen(false);
                setMobileDropdownOpen(null);
                setOpen(null);
            }
        };

        if (mobileOpen || open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileOpen, open]);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileOpen(false);
                setMobileDropdownOpen(null);
                setOpen(null);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    const handleDesktopToggle = useCallback(
        (title: string, items?: { href: string }[]) => {
            setOpen((prev) => {
                const next = prev === title ? null : title;
                if (next && items?.length) {
                    prefetchMany(items.map((i) => i.href));
                }
                return next;
            });
        },
        [prefetchMany]
    );

    const handleDesktopKey = (e: React.KeyboardEvent<HTMLButtonElement>, title: string, items?: { href: string }[]) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDesktopToggle(title, items);
        }
    };

    const isActive = (href?: string) => {
        if (!href) return false;
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-[#1E293B] to-[#2D3E56] shadow-lg">
            {/* Main navbar container */}
            <div className="px-4 lg:px-20">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4 shrink-0">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg p-2">
                            <Image 
                                src="/logos/logo.png" 
                                alt="Logo DKP" 
                                fill 
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="text-white tracking-wider">
                            <h1 className="text-sm md:text-lg lg:text-xl font-bold leading-tight tracking-wider">
                                KELURAHAN LUMPUE
                            </h1>
                            <p className="text-xs md:text-sm font-medium text-blue-200 opacity-90">
                                KOTA PAREPARE
                            </p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center space-x-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative">
                                {item.href ? (
                                    <button
                                        onClick={() => handleNavigation(item.href!)}
                                        onMouseEnter={() => prefetchOne(item.href)}
                                        className={`px-4 py-2 text-white rounded-lg transition-all duration-200 font-medium text-sm whitespace-nowrap cursor-pointer flex items-center space-x-1 ${
                                            isActive(item.href)
                                                ? 'bg-[#4D9AE1] text-white'
                                                : 'hover:text-blue-200 hover:bg-white/10'
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="cursor-pointer px-4 py-2 text-white hover:text-blue-200 hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm whitespace-nowrap flex items-center space-x-1"
                                        onClick={() => handleDesktopToggle(item.title, item.items)}
                                        onKeyDown={(e) => handleDesktopKey(e, item.title, item.items)}
                                        aria-haspopup="true"
                                        aria-expanded={open === item.title}
                                    >
                                        <span>{item.title}</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${open === item.title ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                )}

                                {/* Desktop Dropdown */}
                                {item.customDropdown && open === item.title && item.items && (
                                    <div className={`
                                        absolute top-full mt-2 w-150 max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden
                                        transform transition-all duration-200 ease-out 
                                        ${item.dropdownPosition === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
                                        ${item.dropdownPosition === 'right' ? 'right-0' : ''}
                                        ${item.dropdownPosition === 'left' ? 'left-0' : ''}
                                    `}>
                                        <div className="p-6 grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                                            {item.items.map((sub, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleNavigation(sub.href)}
                                                    onMouseEnter={() => prefetchOne(sub.href)}
                                                    className={`group p-4 rounded-lg transition-all duration-200 hover:shadow-md text-left w-full cursor-pointer ${
                                                        isActive(sub.href)
                                                            ? 'bg-linear-to-br from-blue-50 to-[#4D9AE1]/10 border border-[#4D9AE1]'
                                                            : 'bg-gray-50 hover:bg-linear-to-br hover:from-blue-50 hover:to-[#4D9AE1]/10 border hover:border-[#4D9AE1]'
                                                    }`}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <h3 className={`font-semibold text-sm mb-2 line-clamp-2 flex-1 ${
                                                            isActive(sub.href)
                                                                ? 'text-[#4D9AE1]'
                                                                : 'text-gray-800 group-hover:text-[#4D9AE1]'
                                                        }`}>
                                                            {sub.title}
                                                        </h3>
                                                    </div>
                                                    <p className={`text-xs line-clamp-2 leading-relaxed ${
                                                        isActive(sub.href)
                                                            ? 'text-[#4D9AE1]/80'
                                                            : 'text-gray-600 group-hover:text-[#4D9AE1]'
                                                    }`}>
                                                        {sub.ket}
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                                mobileOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`} />
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                                mobileOpen ? 'opacity-0' : ''
                            }`} />
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                                mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden" style={{ top: '80px' }} />
            )}

            {/* Mobile Menu */}
            <div className={`
                lg:hidden fixed left-0 right-0 bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden 
                ${mobileOpen ? 'max-h-[calc(100vh-80px)] opacity-100' : 'max-h-0 opacity-0'}
            `} style={{ top: '80px' }}>
                <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
                    <ul className="p-4 space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className="border-b border-gray-100 last:border-b-0">
                                {item.href ? (
                                    <button 
                                        onClick={() => handleNavigation(item.href!)}
                                        onMouseEnter={() => prefetchOne(item.href)}
                                        className={`flex items-center justify-between w-full text-left py-4 px-4 rounded-lg transition-colors font-medium cursor-pointer ${
                                            isActive(item.href)
                                                ? 'bg-[#4D9AE1]/10 text-[#4D9AE1]'
                                                : 'text-gray-800 hover:bg-blue-50 hover:text-[#4D9AE1]'
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="cursor-pointer w-full text-left py-4 px-4 text-gray-800 hover:bg-blue-50 hover:text-[#4D9AE1] rounded-lg transition-colors font-medium flex justify-between items-center"
                                            onClick={() => handleMobileDropdownToggle(item.title, item.items)}
                                        >
                                            <span>{item.title}</span>
                                            <svg 
                                                className={`w-5 h-5 transition-transform duration-200 ${
                                                    mobileDropdownOpen === item.title ? 'rotate-180' : ''
                                                }`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Mobile Dropdown */}
                                        {item.customDropdown && item.items && (
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                mobileDropdownOpen === item.title ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                                <div className="ml-4 space-y-2 pb-4">
                                                    {item.items.map((sub, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleNavigation(sub.href)}
                                                            onMouseEnter={() => prefetchOne(sub.href)}
                                                            className={`block w-full text-left p-4 rounded-lg transition-colors border-l-4 cursor-pointer ${
                                                                isActive(sub.href)
                                                                    ? 'bg-[#4D9AE1]/10 border-[#4D9AE1] text-[#4D9AE1]'
                                                                    : 'bg-gray-50 hover:bg-blue-50 border-transparent hover:border-[#4D9AE1]'
                                                            }`}
                                                        >
                                                            <div className="flex items-start justify-between">
                                                                <div className="flex-1">
                                                                    <div className={`font-medium text-sm mb-1 ${
                                                                        isActive(sub.href) ? 'text-[#4D9AE1]' : 'text-gray-800'
                                                                    }`}>
                                                                        {sub.title}
                                                                    </div>
                                                                    <div className={`text-xs line-clamp-2 ${
                                                                        isActive(sub.href) ? 'text-[#4D9AE1]/80' : 'text-gray-600'
                                                                    }`}>
                                                                        {sub.ket}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}