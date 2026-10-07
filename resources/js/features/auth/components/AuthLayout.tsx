import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    badgeText?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    title,
    subtitle,
    badgeText = 'Healthcare Management Platform',
}) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-teal-600 selection:text-white">
            {/* Top Bar with brand and back link */}
            <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-3 group focus:outline-hidden"
                >
                    <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform duration-200">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 6v12M6 12h12" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Carevia
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-teal-700">
                            Hospital Information System
                        </span>
                    </div>
                </Link>

                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-teal-700 bg-white hover:bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-2xs transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Kembali ke Beranda</span>
                </Link>
            </header>

            {/* Main Content Showcase */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Auth Card */}
                    <div className="lg:col-span-6 xl:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
                        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-9 transition-all">
                            
                            {/* Eyebrow badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-bold tracking-wide mb-4">
                                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                                <span>{badgeText}</span>
                            </div>

                            {/* Header */}
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                                {title}
                            </h1>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                {subtitle}
                            </p>

                            {/* Dynamic Form Presentation */}
                            {children}
                        </div>
                    </div>

                    {/* Right Column: Hospital Infrastructure Banner (Hidden on Mobile) */}
                    <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pl-4 xl:pl-8">
                        <div className="relative rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white p-8 xl:p-10 shadow-2xl border border-teal-800/40 overflow-hidden">
                            
                            {/* Glow decorations */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                {/* Header badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-semibold mb-6 backdrop-blur-xs">
                                    <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span>Enterprise Hospital Grade Security</span>
                                </div>

                                <h2 className="text-2xl xl:text-3xl font-extrabold tracking-tight mb-4 leading-snug">
                                    Sistem Informasi Manajemen Rumah Sakit Terpadu
                                </h2>

                                <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-xl font-normal">
                                    Menghubungkan 8 divisi fungsional rumah sakit: Manajemen Eksekutif, Front Desk Admisi, Rekam Medis Dokter, Keperawatan, Farmasi Obat, Kasir Pembayaran, Laboratorium, dan Portal Layanan Pasien secara tersinkronisasi.
                                </p>

                                {/* Feature checklist grid */}
                                <div className="grid grid-cols-2 gap-3.5 mb-8">
                                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Role-Based Access</p>
                                            <p className="text-[10px] text-slate-400">8 Hak Akses Spesifik</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">SatuSehat Ready</p>
                                            <p className="text-[10px] text-slate-400">Standar HL7 FHIR</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Sanctum Protection</p>
                                            <p className="text-[10px] text-slate-400">Token Terenkripsi</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Realtime Workflow</p>
                                            <p className="text-[10px] text-slate-400">Integrasi Rawat Jalan/Inap</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Quote */}
                                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-3.5">
                                    <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                                        HW
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs italic text-slate-200">
                                            "Carevia mempercepat validasi resep farmasi dan integrasi rekam medis rawat inap tanpa kendala duplikasi data."
                                        </p>
                                        <p className="text-[11px] font-bold text-teal-300 mt-1">
                                            dr. Farhan Pratama, Sp.PD — Dokter Spesialis Penyakit Dalam
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Simple Footer */}
            <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center text-xs text-slate-400">
                <p>© 2026 Carevia Healthcare Management Platform. Seluruh hak cipta dilindungi.</p>
            </footer>
        </div>
    );
};
