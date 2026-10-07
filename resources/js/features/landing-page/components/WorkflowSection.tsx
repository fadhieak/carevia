import React from 'react';
import { WORKFLOW_STEPS } from '../data/workflow';
import { LandingIcon } from './LandingIcon';

export const WorkflowSection: React.FC = () => {
    return (
        <section id="workflow" className="py-20 md:py-28 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4 shadow-2xs">
                        <span>End-to-End Workflow</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
                        How Carevia Works
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                        Alur terpadu yang menghubungkan setiap tahap pelayanan pasien dari pendaftaran awal hingga kepulangan dalam satu koordinasi digital tanpa hambatan.
                    </p>
                </div>

                {/* 5-Step Connected Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                    {WORKFLOW_STEPS.map((step, index) => (
                        <div
                            key={step.stepNumber}
                            className="relative flex flex-col justify-between bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all group"
                        >
                            <div>
                                {/* Step Number & Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors">
                                        {step.stepNumber}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100 group-hover:bg-sky-700 group-hover:text-white transition-colors duration-200">
                                        <LandingIcon name={step.icon} size={20} />
                                    </div>
                                </div>

                                {/* Step Title & Subtitle */}
                                <h3 className="text-base font-bold text-slate-900 mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-xs font-semibold text-sky-700 mb-3">
                                    {step.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                                    {step.description}
                                </p>
                            </div>

                            {/* Bullet points for step */}
                            <div className="pt-3 border-t border-slate-100 mt-2">
                                <ul className="space-y-1.5">
                                    {step.details.map((point) => (
                                        <li key={point} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                                            <span className="text-sky-600 font-bold">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Connecting Indicator for larger screens (except last) */}
                            {index < WORKFLOW_STEPS.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Real-time sync guarantee */}
                <div className="mt-12 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Seluruh data diperbarui secara serempak di setiap stasiun kerja medis
                    </span>
                </div>

            </div>
        </section>
    );
};
