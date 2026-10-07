import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const LaboratoryDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const [tests, setTests] = useState([
        { id: 'LAB-5501', patient: 'Anisa Maharani', testType: 'Darah Lengkap (Hematologi Rutin)', doctor: 'dr. Farhan Pratama, Sp.PD', sample: 'Whole Blood EDTA', status: 'Selesai Divalidasi' },
        { id: 'LAB-5502', patient: 'Hartono Salim', testType: 'HbA1c & Glukosa Puasa + 2 Jam PP', doctor: 'dr. Farhan Pratama, Sp.PD', sample: 'Serum & Plasma NaF', status: 'Sedang Diuji' },
        { id: 'LAB-5503', patient: 'Siti Maryam (Bed 201-A)', testType: 'Elektrolit Serum (Na, K, Cl) & Ureum/Kreatinin', doctor: 'dr. Agus Triyono, Sp.B', sample: 'Serum Darah', status: 'Menunggu Sampel' },
        { id: 'LAB-5504', patient: 'Dedi Kurniawan', testType: 'Urinalisis Lengkap (Sedimen & Kimia)', doctor: 'dr. Hendra Wijaya, Sp.A', sample: 'Urine Pagi', status: 'Menunggu Sampel' },
    ]);

    const menuItems: MenuItem[] = [
        {
            label: 'Permintaan Uji Laboratorium',
            badge: '4 Uji',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            label: 'Pengambilan Spesimen & Barcode',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
            ),
        },
        {
            label: 'Validasi Hasil & Nilai Kritis',
            badge: '1 Kritis',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Kontrol Kualitas (QC Alat)',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const markValidated = (id: string) => {
        setTests((prev) =>
            prev.map((t) => (t.id === id ? { ...t, status: 'Selesai Divalidasi' } : t))
        );
    };

    return (
        <DashboardLayout
            role="laboratory_staff"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                                Laboratorium Patologi Klinik Carevia
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                {user?.name || 'Ahmad Fauzi, A.Md.AK'}
                            </h1>
                            <p className="text-sm text-indigo-100 mt-1 max-w-xl">
                                Penerimaan tabung sampel darah/urin, pemindaian barcode LIS, verifikasi parameter hematologi, kimia klinik, dan peringatan nilai kritis otomatis ke dokter pengirim.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-indigo-200">
                                Analyzer Sysmex & Cobas: Ready
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Laboratory KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Sampel Menunggu</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-700">19</span>
                            <span className="text-xs font-bold text-slate-500">Spesimen</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Dari IGD, Poli, & Rawat Inap</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Sedang Dianalisis</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">7</span>
                            <span className="text-xs font-bold text-amber-600">Alat Run</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Rata-rata TAT: 35 menit</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Hasil Divalidasi</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">42</span>
                            <span className="text-xs font-bold text-emerald-600">Laporan</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Hari ini</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Nilai Kritis Flagged</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-rose-600">1</span>
                            <span className="text-xs font-bold text-rose-600">Notifikasi</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Trombosit &lt; 20.000 /µL (Notified)</span>
                    </div>
                </div>

                {/* Laboratory Specimen Queue Table */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Worklist Permintaan Pemeriksaan Laboratorium</h2>
                            <p className="text-xs text-slate-500">Order masuk terintegrasi langsung dari poliklinik dan rawat inap.</p>
                        </div>
                        <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                            Barcode Scanner Aktif
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">No. Order Lab</th>
                                    <th className="py-3 px-4">Nama Pasien</th>
                                    <th className="py-3 px-4">Parameter Uji</th>
                                    <th className="py-3 px-4">Dokter Pengirim</th>
                                    <th className="py-3 px-4">Tipe Spesimen</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4 text-right">Aksi Lab</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {tests.map((t) => (
                                    <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3 px-4 font-mono font-bold text-indigo-900">{t.id}</td>
                                        <td className="py-3 px-4 font-bold text-slate-900">{t.patient}</td>
                                        <td className="py-3 px-4 text-slate-700 font-semibold">{t.testType}</td>
                                        <td className="py-3 px-4 text-slate-600">{t.doctor}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                                                {t.sample}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                                t.status === 'Selesai Divalidasi'
                                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                    : t.status === 'Sedang Diuji'
                                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                    : 'bg-slate-100 text-slate-700'
                                            }`}>
                                                {t.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            {t.status !== 'Selesai Divalidasi' ? (
                                                <button
                                                    type="button"
                                                    onClick={() => markValidated(t.id)}
                                                    className="px-3 py-1 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg font-bold text-xs shadow-2xs transition-all"
                                                >
                                                    Validasi Hasil
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-bold text-xs transition-all"
                                                >
                                                    Cetak PDF
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LaboratoryDashboard;
