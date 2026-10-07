import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const PatientDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const menuItems: MenuItem[] = [
        {
            label: 'Ringkasan Pasien',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            label: 'Janji Temu Dokter',
            badge: '1 Jadwal',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: 'Resep Obat Saya',
            badge: '2 Obat',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            label: 'Hasil Tes Laboratorium',
            badge: '1 Siap',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            label: 'Riwayat Kunjungan Medis',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    const activePrescriptions = [
        { name: 'Betahistine Mesilate 6mg', dosage: '3x1 tablet sesudah makan', indication: 'Meredakan pusing berputar & vertigo', duration: '10 Hari (Sisa 8 Hari)' },
        { name: 'Flunarizine 5mg', dosage: '1x1 tablet malam sebelum tidur', indication: 'Pencegahan pusing dan gangguan vaskular', duration: '10 Hari (Sisa 8 Hari)' },
    ];

    return (
        <DashboardLayout
            role="patient"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-900 via-pink-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
                                Portal Pasien Digital Carevia
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                Halo, {user?.name || 'Anisa Maharani'}
                            </h1>
                            <p className="text-sm text-rose-100 mt-1 max-w-xl">
                                Akses mandiri rekam medis Anda, pantau jadwal konsultasi dokter, cek petunjuk minum obat aktif, serta unduh hasil pemeriksaan laboratorium resmi.
                            </p>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="px-4 py-2 text-xs font-bold bg-white text-rose-900 hover:bg-rose-50 rounded-xl transition-all shadow-md"
                            >
                                + Buat Janji Temu Dokter
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4 Patient KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Jadwal Temu Mendatang</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">1</span>
                            <span className="text-xs font-bold text-teal-600">Poli Penyakit Dalam</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">dr. Farhan Pratama, Sp.PD</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Resep Obat Aktif</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">2</span>
                            <span className="text-xs font-bold text-amber-600">Obat Sedang Dikonsumsi</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Pengingat minum aktif</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Hasil Lab Tersedia</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">1</span>
                            <span className="text-xs font-bold text-emerald-600">PDF Terverifikasi</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Darah Lengkap (Hematologi)</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Total Kunjungan Medis</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">4</span>
                            <span className="text-xs font-bold text-slate-500">Kunjungan</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Rekam medis tersimpan aman</span>
                    </div>
                </div>

                {/* Patient Information & Prescriptions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Upcoming Appointment Card */}
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
                        <h2 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-100 mb-4">
                            Jadwal Janji Temu Terdekat
                        </h2>

                        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-left">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-white px-2.5 py-0.5 rounded-full border border-teal-300">
                                    No. Antrean: A-012
                                </span>
                                <span className="text-xs font-bold text-teal-700">Hari ini, 10:30 WIB</span>
                            </div>

                            <h3 className="font-bold text-slate-900 text-base">dr. Farhan Pratama, Sp.PD</h3>
                            <p className="text-xs text-slate-600 font-medium">Spesialis Penyakit Dalam • Poliklinik lt. 2</p>

                            <div className="mt-4 pt-3 border-t border-teal-200/80 flex items-center justify-between text-xs">
                                <span className="text-teal-900 font-semibold">Penjamin: BPJS Kesehatan</span>
                                <span className="text-emerald-700 font-bold">Terkonfirmasi</span>
                            </div>
                        </div>

                        {/* Recent Laboratory Download card */}
                        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900">Hasil Tes Hematologi Lengkap</h4>
                                    <p className="text-[11px] text-slate-500 mt-0.5">Divalidasi oleh Lab Patologi Klinik</p>
                                </div>
                                <button
                                    type="button"
                                    className="px-3 py-1 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-xs shadow-2xs transition-all"
                                >
                                    Unduh PDF
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Active Prescriptions Instructions */}
                    <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                            <h2 className="text-sm font-bold text-slate-900">Petunjuk Minum Obat Aktif Anda</h2>
                            <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                                Disiapkan oleh Instalasi Farmasi
                            </span>
                        </div>

                        <div className="space-y-3">
                            {activePrescriptions.map((med) => (
                                <div key={med.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-bold text-slate-900 text-sm">{med.name}</h3>
                                        <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                                            {med.duration}
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-800 mt-1 flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                                        Aturan Pakai: {med.dosage}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">Indikasi: {med.indication}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
                            💡 <span className="font-bold">Catatan Pasien:</span> Konsultasikan kembali jika pusing tidak berkurang setelah 3 hari atau timbul reaksi alergi.
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PatientDashboard;
