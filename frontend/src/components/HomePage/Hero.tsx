'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Play, Pause, Volume2, VolumeX, Landmark } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ onScrollToSambutan }: { onScrollToSambutan: () => void }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const [mounted, setMounted] = useState(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    const heroTexts = [
        'Selamat Datang di Situs Resmi Kelurahan Lumpue',
        'Kecamatan Bacukiki, Barat Kota Parepare',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [heroTexts.length]);

    const toggleVideo = () => {
        const video = document.querySelector('#hero-video') as HTMLVideoElement | null;
        if (!video) return;

        if (isVideoPlaying) {
            video.pause();
        } else {
            video.play();
        }

        setIsVideoPlaying(!isVideoPlaying);
    };

    const toggleMute = () => {
        const video = document.querySelector('#hero-video') as HTMLVideoElement | null;
        if (!video) return;

        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-linear-to-br from-[#1E293B] via-[#24344A] to-[#4D9AE1] mt-20">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    id="hero-video"
                    className="w-full h-full object-cover opacity-60"
                    autoPlay={mounted}
                    muted={isMuted}
                    loop
                    playsInline
                >
                    <source src="/video/makassar.mp4" type="video/mp4" />
                    Browser Anda tidak mendukung video.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#1E293B]/25 via-[#1E293B]/60 to-[#4D9AE1]/40" />

                <div className="absolute top-0 left-0 w-96 h-96 bg-[#4D9AE1]/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4D9AE1]/10 rounded-full translate-x-32 translate-y-32 blur-2xl" />
            </div>

            {/* Video Controls */}
            <div className="absolute top-6 right-6 z-40 flex gap-2">
                <button
                    onClick={toggleVideo}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                    {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <button
                    onClick={toggleMute}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
                >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20">
                {/* Left */}
                <div className="w-full lg:w-2/3 h-full flex flex-col lg:justify-center text-center lg:text-left pt-40 lg:pt-0">
                    {/* Badge */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-8 self-center lg:self-start">
                        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/25 tracking-wide">
                            <div className="w-2 h-2 bg-[#4D9AE1] rounded-full animate-pulse" />
                            Pemerintah Kota Parepare
                        </div>

                        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/25 tracking-wide">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            Mahasiswa KKNT Inovasi Daerah Gel. 115 Universitas Hasanuddin
                        </div>
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-4 min-h-48 lg:min-h-72">
                            <span className="block bg-linear-to-r from-white via-[#9CC9F0] to-[#4D9AE1] bg-clip-text text-transparent animate-pulse">
                                {heroTexts[currentTextIndex]}
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                            Melayani masyarakat dengan transparansi, inovasi, dan dedikasi
                            demi terwujudnya kelurahan yang maju dan sejahtera.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                        <Link
                            href="/profil/tentang"
                            className="px-8 py-4 bg-[#4D9AE1] text-white rounded-2xl font-semibold text-lg hover:bg-[#3D8AD1] transition-all duration-300 shadow-xl hover:-translate-y-1 text-center"
                        >
                            Tentang Kami
                        </Link>

                        <Link
                            href="/kontak-aspirasi"
                            className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-center"
                        >
                            Kontak Kami
                        </Link>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="hidden lg:flex w-1/3 h-full items-center justify-center relative">
                    <div className="w-96 h-96 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                        <div className="w-64 h-64 bg-[#4D9AE1]/20 rounded-full flex items-center justify-center animate-pulse">
                            <Landmark className="w-24 h-24 text-white/70" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll */}
            <div className="absolute bottom-36 lg:bottom-28 left-1/2 -translate-x-1/2 z-40 cursor-pointer">
                <button
                    onClick={onScrollToSambutan}
                    className="group p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 animate-bounce hover:animate-none cursor-pointer"
                >
                    <ChevronDown className="w-6 h-6 text-white group-hover:translate-y-1 transition-transform duration-600" />
                </button>
            </div>
        </div>
    );
}