import React from 'react';
import { LandingIcon } from './LandingIcon';

const platformAreas = [
    { icon: 'users', title: 'Patient services', detail: 'Pendaftaran, jadwal, dan antrean' },
    { icon: 'clipboard-list', title: 'Clinical services', detail: 'Rekam medis, laboratorium, dan farmasi' },
    { icon: 'credit-card', title: 'Operations', detail: 'Rawat inap, pembayaran, dan laporan' },
];

export const AboutCarevia: React.FC = () => (
    <section id="about" className="bg-slate-50/70 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-600" /> About Carevia
                </div>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    One platform for connected healthcare operations
                </h2>
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    Carevia adalah software platform yang membantu rumah sakit mengelola operasional dan layanan kesehatan dalam satu sistem. Informasi dan alur kerja dari berbagai unit dapat dikelola melalui satu platform.
                </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-wider text-teal-700">Satu platform, beberapa area layanan</p>
                <div className="divide-y divide-slate-100">
                    {platformAreas.map((area) => (
                        <div key={area.title} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                                <LandingIcon name={area.icon} size={21} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">{area.title}</h3>
                                <p className="mt-1 text-sm text-slate-500">{area.detail}</p>
                            </div>
                            <LandingIcon name="check" size={16} className="ml-auto text-teal-700" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
