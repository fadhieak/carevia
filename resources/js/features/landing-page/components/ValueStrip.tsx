import React from 'react';
import { VALUE_STRIP_ITEMS } from '../data/navigation';
import { LandingIcon } from './LandingIcon';

export const ValueStrip: React.FC = () => (
    <section aria-labelledby="value-heading" className="border-y border-slate-200/80 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-700">Core advantages</p>
                <h2 id="value-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Operasional layanan kesehatan dalam satu sistem
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {VALUE_STRIP_ITEMS.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                            <LandingIcon name={item.icon} size={20} />
                        </div>
                        <h3 className="mb-1.5 text-base font-bold text-slate-900">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
