import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const NurseDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const [vitalRecords, setVitalRecords] = useState([
        { bed: 'Bed 201-A', patient: 'Siti Maryam (45 Thn)', td: '120/80', hr: '78 bpm', temp: '36.6 °C', spo2: '98%', status: 'Normal' },
        { bed: 'Bed 201-B', patient: 'Budi Santoso (62 Thn)', td: '145/95', hr: '92 bpm', temp: '38.2 °C', spo2: '95%', status: 'Demam & Hipertensi' },
        { bed: 'Bed 202-A', patient: 'Kartini Wati (33 Thn)', td: '110/70', hr: '72 bpm', temp: '36.5 °C', spo2: '99%', status: 'Normal (Post-Op H+1)' },
        { bed: 'Bed 203-A', patient: 'Dedi Kurniawan (50 Thn)', td: '130/85', hr: '84 bpm', temp: '37.0 °C', spo2: '97%', status: 'Observasi' },
    ]);

    const menuItems: MenuItem[] = [
        {
            label: 'Pemantauan Rawat Inap',
            badge: '4 Pasien',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            label: 'Input Tanda Vital (TTV)',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            label: 'Jadwal Obat Pasien (e-MAR)',
            badge: '11 Dosis',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Catatan Operan Jaga (Handover)',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
    ];

    return (
        <DashboardLayout
            role="nurse"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                                Stasiun Keperawatan Bangsal Melati
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                Selamat Bertugas, {user?.name || 'Ns. Dewi Lestari'}
                            </h1>
                            <p className="text-sm text-emerald-100 mt-1 max-w-xl">
                                Monitoring tanda-tanda vital (TTV), jadwal pemberian obat intravena & oral (e-MAR), dan catatan asuhan keperawatan bangsal rawat inap.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold">
                                Shift Pagi: 07.00 - 14.00 WIB
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Nurse KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Pasien Bangsal Aktif</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">34</span>
                            <span className="text-xs font-bold text-emerald-600">Terpantau</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Bangsal Melati lt. 2</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">TTV Jatuh Tempo</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">6</span>
                            <span className="text-xs font-bold text-slate-500">Pasien</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Jadwal pemeriksaan pukul 10:00</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Obat e-MAR Jam Ini</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-teal-800">11</span>
                            <span className="text-xs font-bold text-teal-600">Dosis Siap</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Verifikasi gelang identitas</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Observasi Khusus</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-rose-600">2</span>
                            <span className="text-xs font-bold text-rose-600">Perhatian</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Bed 201-B (Demam 38.2°C)</span>
                    </div>
                </div>

                {/* Vital Signs (TTV) Monitoring Table */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Monitoring Tanda Vital (TTV) Pasien Bangsal</h2>
                            <p className="text-xs text-slate-500">Pembaruan berkala parameter fisiologis pasien rawat inap.</p>
                        </div>
                        <button
                            type="button"
                            className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-all shadow-xs"
                        >
                            + Catat TTV Baru
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">Nomor Kamar/Bed</th>
                                    <th className="py-3 px-4">Nama Pasien</th>
                                    <th className="py-3 px-4">Tekanan Darah</th>
                                    <th className="py-3 px-4">Denyut Nadi</th>
                                    <th className="py-3 px-4">Suhu Tubuh</th>
                                    <th className="py-3 px-4">Saturasi O2</th>
                                    <th className="py-3 px-4">Status Klinis</th>
                                    <th className="py-3 px-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {vitalRecords.map((r) => (
                                    <tr key={r.bed} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3 px-4 font-mono font-bold text-emerald-900">{r.bed}</td>
                                        <td className="py-3 px-4 font-bold text-slate-900">{r.patient}</td>
                                        <td className="py-3 px-4 text-slate-700">{r.td} mmHg</td>
                                        <td className="py-3 px-4 text-slate-700">{r.hr}</td>
                                        <td className="py-3 px-4 text-slate-700">{r.temp}</td>
                                        <td className="py-3 px-4 text-slate-700">{r.spo2}</td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                                r.status.includes('Demam')
                                                    ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                            }`}>
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <button type="button" className="text-emerald-700 hover:text-emerald-900 font-bold mr-2">
                                                Update
                                            </button>
                                            <button type="button" className="text-slate-400 hover:text-slate-600">
                                                Grafik
                                            </button>
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

export default NurseDashboard;
