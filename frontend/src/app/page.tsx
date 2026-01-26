'use client';
import { useRef } from 'react';
import HeroSection from '@/components/HomePage/Hero';
import Navbar from '@/components/layout/SiteNavbar';
import SambutanLurah from '@/components/HomePage/SambutanLurah';
import StatistikPetaWilayah from '@/components/HomePage/StatistikPetaWilayah';
import BeritaPengumuman from '@/components/HomePage/BeritaPengumuman';
import PotensiKelurahan from '@/components/HomePage/PotensiKelurahan';
import GaleriPage from '@/components/HomePage/Galeri';
import Footer from '@/components/layout/Footer';
import KKNTributeSection from '@/components/HomePage/KKNTributeSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function HomePage() {
    const sambutanRef = useRef<HTMLElement>(null);

    const scrollToSambutan = () => {
        if (sambutanRef.current) {
            const y = sambutanRef.current.offsetTop;
            window.scrollTo({ top: y - 80, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="hero w-full h-screen flex relative overflow-hidden">
                <HeroSection onScrollToSambutan={() => {
                    scrollToSambutan()
                }} />
            </section>

            <section ref={sambutanRef}  className="py-20 bg-white">
                <SambutanLurah />
            </section>

            <StatistikPetaWilayah />
            <BeritaPengumuman />
            <PotensiKelurahan />
            <GaleriPage />
            <KKNTributeSection />
            <Footer />
            <ScrollToTop />
        </div>
    );
}