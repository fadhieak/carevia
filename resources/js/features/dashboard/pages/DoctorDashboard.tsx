import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const DoctorDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const [activePatient, setActivePatient] = useState<string | null>('Anisa Maharani');
    const [soapS, setSoapS] = useState('Pasien mengeluhkan pusing berputar sejak 2 hari lalu, mual ringan tanpa muntah.');
    const [soapO, setSoapO] = useState('TD: 130/85 mmHg, HR: 82x/mnt, RR: 18x/mnt, Suhu: 36.8°C. Romberg test (+).');
    const [soapA, setSoapA] = useState('Vertigo Perifer (H81.3) susp. BPPV');
    const [soapP, setSoapP] = useState('Betahistine Mesilate 6mg 3x1 tab pc, Flunarizine 5mg 1x1 malam. Edukasi Brandt-Daroff.');
    const [savedNotification, setSavedNotification] = useState(false);

    const menuItems: MenuItem[] = [
        {
            label: 'Antrean Poliklinik',
            badge: '8 Pasien',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            label: 'Rekam Medis (EMR SOAP)',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            label: 'Resep Elektronik (e-Prescription)',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            label: 'Rujukan & Hasil Lab',
            badge: '4 Hasil Baru',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    const patientsInQueue = [
        { no: 'P-001', name: 'Anisa Maharani', rme: 'RM-2026-0891', age: '28 Thn', triase: 'Hijau (P1)', complaint: 'Pusing berputar, mual', status: 'Sedang Diperiksa' },
        { no: 'P-002', name: 'Hartono Salim', rme: 'RM-2026-0842', age: '54 Thn', triase: 'Kuning (P2)', complaint: 'Kontrol Hipertensi & DM Tipe 2', status: 'Menunggu' },
        { no: 'P-003', name: 'Suryadi Pratama', rme: 'RM-2026-0775', age: '41 Thn', triase: 'Hijau (P1)', complaint: 'Batuk berdahak 1 minggu', status: 'Menunggu' },
    ];

    const handleSaveRME = (e: React.FormEvent) => {
        e.preventDefault();
        setSavedNotification(true);
        setTimeout(() => setSavedNotification(false), 3000);
    };

    return (
        <DashboardLayout
            role="doctor"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                                Ruang Konsultasi Dokter Spesialis
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                {user?.name || 'dr. Farhan Pratama, Sp.PD'}
                            </h1>
                            <p className="text-sm text-teal-100 mt-1 max-w-xl">
                                Rekam Medis Elektronik Terintegrasi (RME SOAP), E-Resep terhubung ke instalasi farmasi, dan pemeriksaan laboratorium klinis.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-teal-200">
                                Poli Penyakit Dalam: Buka
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Doctor KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Pasien Menunggu</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">8</span>
                            <span className="text-xs font-bold text-slate-500">Antrean Poli</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">3 Pasien baru, 5 Kontrol</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Selesai Konsultasi</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-teal-700">16</span>
                            <span className="text-xs font-bold text-emerald-600">Pasien</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Waktu rata-rata: 14 menit</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Hasil Lab Siap Baca</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-700">4</span>
                            <span className="text-xs font-bold text-indigo-600">Terverifikasi</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Darah lengkap & Kimia darah</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">E-Resep Terkirim</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-teal-800">20</span>
                            <span className="text-xs font-bold text-teal-600">Resep</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Terkirim ke Farmasi</span>
                    </div>
                </div>

                {/* Consultation & EMR Workspace Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Queue List */}
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                            <h2 className="text-sm font-bold text-slate-900">Antrean Pasien Hari Ini</h2>
                            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                                8 Total
                            </span>
                        </div>

                        <div className="space-y-3">
                            {patientsInQueue.map((p) => {
                                const isSelected = activePatient === p.name;
                                return (
                                    <div
                                        key={p.rme}
                                        onClick={() => setActivePatient(p.name)}
                                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                                            isSelected
                                                ? 'bg-teal-50/80 border-teal-600 shadow-2xs'
                                                : 'bg-slate-50 border-slate-200 hover:bg-white'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-extrabold text-teal-800 text-xs font-mono">{p.no} • {p.rme}</span>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                                                {p.age}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm">{p.name}</h3>
                                        <p className="text-xs text-slate-500 mt-0.5">Keluhan: {p.complaint}</p>
                                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60">
                                            <span className="text-[10px] font-semibold text-emerald-700">{p.triase}</span>
                                            <span className={`text-[10px] font-bold ${isSelected ? 'text-teal-700' : 'text-slate-400'}`}>
                                                {p.status}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Electronic Medical Record (SOAP) Editor */}
                    <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">Lembar Rekam Medis SOAP</h2>
                                <p className="text-xs text-slate-500">Pasien: <span className="font-bold text-teal-800">{activePatient}</span></p>
                            </div>
                            <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                                Standar ICD-10
                            </span>
                        </div>

                        {savedNotification && (
                            <div className="p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold animate-in fade-in">
                                ✓ Rekam Medis SOAP & E-Resep berhasil disimpan ke sistem!
                            </div>
                        )}

                        <form onSubmit={handleSaveRME} className="space-y-3.5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    [S] Subjektif (Anamnesis & Keluhan Pasien)
                                </label>
                                <textarea
                                    rows={2}
                                    value={soapS}
                                    onChange={(e) => setSoapS(e.target.value)}
                                    className="w-full text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    [O] Objektif (Tanda Vital & Pemeriksaan Fisik)
                                </label>
                                <textarea
                                    rows={2}
                                    value={soapO}
                                    onChange={(e) => setSoapO(e.target.value)}
                                    className="w-full text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    [A] Asesmen / Diagnosis Kerja (ICD-10)
                                </label>
                                <input
                                    type="text"
                                    value={soapA}
                                    onChange={(e) => setSoapA(e.target.value)}
                                    className="w-full text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                    [P] Plan & E-Resep Terpadu (Terkirim Otomatis ke Farmasi)
                                </label>
                                <textarea
                                    rows={2}
                                    value={soapP}
                                    onChange={(e) => setSoapP(e.target.value)}
                                    className="w-full text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                                />
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <button
                                    type="button"
                                    className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                                >
                                    + Minta Uji Laboratorium
                                </button>

                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-xl transition-all shadow-md"
                                >
                                    Simpan SOAP & Terbitkan E-Resep
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DoctorDashboard;
