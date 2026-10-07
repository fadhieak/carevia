import React from 'react';
import { Link } from 'react-router-dom';
import { LandingIcon } from './LandingIcon';

export const CTASection: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* CTA Card Container */}
                <div className="relative rounded-3xl bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
                    {/* Decorative ambient background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-semibold mb-6 backdrop-blur-xs">
                            <LandingIcon name="shield-check" size={15} />
                            <span>Healthcare Management Platform</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                            Kelola layanan kesehatan dalam satu platform
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
                            Kenali Carevia dan lihat bagaimana modul-modulnya membantu menghubungkan proses operasional rumah sakit.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/register"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all focus:outline-hidden"
                            >
                                <span>Get Started</span>
                                <LandingIcon name="arrow-right" size={18} className="ml-2 text-slate-900" />
                            </Link>

                            <Link
                                to="/login"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-full transition-all focus:outline-hidden"
                            >
                                <span>Login</span>
                            </Link>
                        </div>

                        {/* Bottom note */}
                        <p className="mt-8 text-xs text-slate-400 font-medium">
                            Platform terintegrasi untuk rumah sakit modern & fasilitas pelayanan kesehatan
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
