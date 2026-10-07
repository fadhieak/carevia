import React from 'react';
import { Link } from 'react-router-dom';
import { LandingIcon } from './LandingIcon';

export const HeroSection: React.FC = () => (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#e6f4f2] via-[#eef8f6] to-white pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 mx-auto flex max-w-7xl justify-between px-4 opacity-40">
            {Array.from({ length: 12 }, (_, index) => <div key={index} className="h-full w-px bg-teal-200/30" />)}
        </div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="mb-6 inline-flex items-center rounded-full border border-teal-200 bg-teal-100/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-teal-800">
                Healthcare Management Platform
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Smarter Healthcare Management, <span className="text-teal-800">Simplified</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-xl">
                Carevia membantu rumah sakit mengelola operasional dan layanan kesehatan dalam satu platform yang terhubung.
            </p>
            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
                <Link to="/register" className="inline-flex w-full items-center justify-center rounded-full bg-teal-800 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-teal-900 sm:w-auto">
                    Get Started <LandingIcon name="arrow-right" size={17} className="ml-2" />
                </Link>
                <Link to="/login" className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto">
                    Login
                </Link>
            </div>
        </div>
    </section>
);
