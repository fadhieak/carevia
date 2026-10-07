import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const CashierDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const [invoices, setInvoices] = useState([
        { no: 'INV-2026-0419', patient: 'Anisa Maharani', service: 'Poli Penyakit Dalam + Obat Vertigo', total: 'Rp 285.000', method: 'QRIS / Tunai', status: 'Menunggu Bayar' },
        { no: 'INV-2026-0418', patient: 'Bambang Supriyanto', service: 'Poli Anak + Obat Sirup', total: 'Rp 340.000', method: 'Debit BCA', status: 'Lunas' },
        { no: 'INV-2026-0417', patient: 'Siti Maryam', service: 'Rawat Inap Bangsal Melati (3 Hari)', total: 'Rp 4.250.000', method: 'Klaim BPJS Kelas 1', status: 'Verifikasi BPJS' },
        { no: 'INV-2026-0416', patient: 'Ratna Sulistiawati', service: 'Poli Kandungan + USG 4D', total: 'Rp 750.000', method: 'Asuransi Mandiri Inhealth', status: 'Lunas' },
    ]);

    const menuItems: MenuItem[] = [
        {
            label: 'Loket Pembayaran Kasir',
            badge: '1 Pending',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            label: 'Faktur Rawat Inap & Jalan',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            label: 'Verifikasi Klaim Asuransi / BPJS',
            badge: '38 Siap',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            label: 'Tutup Kasir & Laporan Harian',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    const markPaid = (no: string) => {
        setInvoices((prev) =>
            prev.map((i) => (i.no === no ? { ...i, status: 'Lunas' } : i))
        );
    };

    return (
        <DashboardLayout
            role="cashier"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-900 via-sky-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                                Kasir & Pelayanan Billing Terpadu
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                {user?.name || 'Rina Anggraini, S.E.'}
                            </h1>
                            <p className="text-sm text-cyan-100 mt-1 max-w-xl">
                                Pencatatan pembayaran rawat jalan & rawat inap, integrasi QRIS statis/dinamis, kartu debit/kredit, bridging BPJS e-Klaim, serta cetak bukti pembayaran resmi.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-cyan-200">
                                Counter Kasir 02 Aktif
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Cashier KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Penerimaan Hari Ini</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-xl sm:text-2xl font-extrabold text-cyan-800">Rp 42.850.000</span>
                        </div>
                        <span className="text-[11px] text-emerald-600 mt-1 block font-bold">+18% dari kemarin</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Faktur Menunggu</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">1</span>
                            <span className="text-xs font-bold text-slate-500">Antrean Loket</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Rata-rata transaksi: 2.1 mnt</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Klaim BPJS Terverifikasi</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-teal-700">38</span>
                            <span className="text-xs font-bold text-emerald-600">Klaim</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">e-Klaim INA-CBG siap kirim</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Transaksi Non-Tunai</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">85%</span>
                            <span className="text-xs font-bold text-cyan-700">QRIS/EDC</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Cashless settlement</span>
                    </div>
                </div>

                {/* Invoicing Table */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Antrean Pembayaran & Cetak Kuitansi</h2>
                            <p className="text-xs text-slate-500">Tagihan tersinkronisasi otomatis dari tindakan medis & resep obat.</p>
                        </div>
                        <button
                            type="button"
                            className="px-3.5 py-1.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl transition-all shadow-xs"
                        >
                            + Transaksi Manual
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">No. Faktur</th>
                                    <th className="py-3 px-4">Nama Pasien</th>
                                    <th className="py-3 px-4">Rincian Layanan</th>
                                    <th className="py-3 px-4">Total Biaya</th>
                                    <th className="py-3 px-4">Metode Bayar</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4 text-right">Aksi Kasir</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {invoices.map((inv) => (
                                    <tr key={inv.no} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3 px-4 font-mono font-bold text-cyan-900">{inv.no}</td>
                                        <td className="py-3 px-4 font-bold text-slate-900">{inv.patient}</td>
                                        <td className="py-3 px-4 text-slate-600 max-w-xs">{inv.service}</td>
                                        <td className="py-3 px-4 font-extrabold text-slate-900">{inv.total}</td>
                                        <td className="py-3 px-4 text-slate-700">{inv.method}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                                inv.status === 'Lunas'
                                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                    : inv.status.includes('BPJS')
                                                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                                            }`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            {inv.status !== 'Lunas' ? (
                                                <button
                                                    type="button"
                                                    onClick={() => markPaid(inv.no)}
                                                    className="px-3 py-1 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg font-bold text-xs shadow-2xs mr-2 transition-all"
                                                >
                                                    Proses Bayar
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-bold text-xs mr-2 transition-all"
                                                >
                                                    Cetak Bukti
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

export default CashierDashboard;
