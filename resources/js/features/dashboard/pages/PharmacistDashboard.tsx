import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const PharmacistDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const [prescriptions, setPrescriptions] = useState([
        { id: 'RX-8841', patient: 'Anisa Maharani', doctor: 'dr. Farhan Pratama, Sp.PD', medicines: 'Betahistine 6mg (x30), Flunarizine 5mg (x10)', type: 'Rawat Jalan', status: 'Menunggu Peracikan' },
        { id: 'RX-8842', patient: 'Bambang Supriyanto', doctor: 'dr. Hendra Wijaya, Sp.A', medicines: 'Amoxicillin Sirup 125mg/5ml (x1), Paracetamol Syr (x1)', type: 'Rawat Jalan', status: 'Sedang Diramu' },
        { id: 'RX-8843', patient: 'Siti Maryam (Bed 201-A)', doctor: 'dr. Agus Triyono, Sp.B', medicines: 'Ceftriaxone Inj 1g (x2 vial), Ketorolac Inj (x3 ampul)', type: 'Rawat Inap', status: 'Siap Diserahkan' },
    ]);

    const menuItems: MenuItem[] = [
        {
            label: 'Antrean Dispensing Resep',
            badge: '3 Resep',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            label: 'Stok Obat & Depo Farmasi',
            badge: '3 Kritis',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
        },
        {
            label: 'Peringatan Kadaluarsa (<60 Hari)',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
        },
        {
            label: 'Penerimaan & Stock Opname',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
        },
    ];

    const markDispensed = (id: string) => {
        setPrescriptions((prev) =>
            prev.map((p) => (p.id === id ? { ...p, status: 'Selesai Diserahkan' } : p))
        );
    };

    return (
        <DashboardLayout
            role="pharmacist"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-900 via-yellow-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                                Instalasi Farmasi & Gudang Obat Carevia
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                {user?.name || 'apt. Budi Santoso, S.Farm'}
                            </h1>
                            <p className="text-sm text-amber-100 mt-1 max-w-xl">
                                Verifikasi legalitas resep digital, peracikan obat puyer/kapsul, pengawasan interaksi obat, dan pelacakan persediaan obat kritis.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-amber-200">
                                Depo Farmasi 24 Jam
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Pharmacist KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">E-Resep Masuk</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-700">24</span>
                            <span className="text-xs font-bold text-slate-500">Resep</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Dari Poli & Rawat Inap</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Sedang Diramu</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">5</span>
                            <span className="text-xs font-bold text-amber-600">Proses Racik</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Rata-rata selesai: 8 menit</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Selesai Diserahkan</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">78</span>
                            <span className="text-xs font-bold text-emerald-600">Pasien</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Hari ini</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Stok Obat Menipis</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-rose-600">3</span>
                            <span className="text-xs font-bold text-rose-600">Item Kritis</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">&lt; 10 Box di gudang</span>
                    </div>
                </div>

                {/* Prescription Dispensing Queue */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Antrean Peracikan & Penyerahan E-Resep</h2>
                            <p className="text-xs text-slate-500">Resep diteruskan secara instan dari dokter pemeriksa.</p>
                        </div>
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                            Loket Penyerahan Obat 01 & 02
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">No. E-Resep</th>
                                    <th className="py-3 px-4">Nama Pasien</th>
                                    <th className="py-3 px-4">Dokter Peresep</th>
                                    <th className="py-3 px-4">Daftar Obat & Dosis</th>
                                    <th className="py-3 px-4">Tipe Layanan</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4 text-right">Aksi Dispensing</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {prescriptions.map((rx) => (
                                    <tr key={rx.id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3 px-4 font-mono font-bold text-amber-900">{rx.id}</td>
                                        <td className="py-3 px-4 font-bold text-slate-900">{rx.patient}</td>
                                        <td className="py-3 px-4 text-slate-600">{rx.doctor}</td>
                                        <td className="py-3 px-4 text-slate-700 font-medium max-w-xs">{rx.medicines}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                                                {rx.type}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                                rx.status === 'Selesai Diserahkan'
                                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                    : rx.status === 'Sedang Diramu'
                                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                    : 'bg-slate-100 text-slate-700'
                                            }`}>
                                                {rx.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            {rx.status !== 'Selesai Diserahkan' ? (
                                                <button
                                                    type="button"
                                                    onClick={() => markDispensed(rx.id)}
                                                    className="px-3 py-1 bg-amber-700 hover:bg-amber-800 text-white rounded-lg font-bold text-xs shadow-2xs transition-all"
                                                >
                                                    Serahkan Obat
                                                </button>
                                            ) : (
                                                <span className="text-emerald-600 font-bold text-xs">✓ Selesai</span>
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

export default PharmacistDashboard;
