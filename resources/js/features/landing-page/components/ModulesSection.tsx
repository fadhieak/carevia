import React from 'react';
import { HEALTHCARE_MODULES } from '../data/modules';
import { LandingIcon } from './LandingIcon';

export const ModulesSection: React.FC = () => (
    <section id="features" className="bg-white py-20 md:py-24">
        <span id="modules" className="relative -top-20 block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-700">FEATURES</p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Tools for every step of care</h2>
                <p className="text-base leading-relaxed text-slate-600">Modul utama Carevia membantu menghubungkan layanan pasien dan proses operasional rumah sakit.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {HEALTHCARE_MODULES.map((module) => (
                    <article key={module.id} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 transition-colors hover:border-teal-300">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                            <LandingIcon name={module.icon} size={21} />
                        </div>
                        <h3 className="mb-2 text-base font-bold text-slate-900">{module.name}</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{module.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
