import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const ReceptionistDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const [queueList, setQueueList] = useState([
        { no: 'A-012', patient: 'Anisa Maharani', nik: '3201************', poli: 'Poli Penyakit Dalam', doctor: 'dr. Farhan Pratama, Sp.PD', type: 'BPJS Kesehatan', status: 'Menunggu' },
        { no: 'A-013', patient: 'Bambang Supriyanto', nik: '3275************', poli: 'Poli Anak', doctor: 'dr. Hendra Wijaya, Sp.A', type: 'Umum', status: 'Sedang Dilayani' },
        { no: 'A-014', patient: 'Ratna Sulistiawati', nik: '3171************', poli: 'Poli Kandungan (Obgyn)', doctor: 'dr. Maya Sartika, Sp.OG', type: 'Asuransi Swasta', status: 'Menunggu' },
        { no: 'A-015', patient: 'Ahmad Syahrir', nik: '3273************', poli: 'Poli Bedah', doctor: 'dr. Agus Triyono, Sp.B', type: 'BPJS Kesehatan', status: 'Menunggu' },
    ]);

    const menuItems: MenuItem[] = [
        {
            label: 'Antrean & Loket Admisi',
            badge: '4 Antrean',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            label: 'Registrasi Pasien Baru',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
        },
        {
            label: 'Ketersediaan Kamar Inap',
            badge: '18 Bed Kosong',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            label: 'Jadwal Dokter Hari Ini',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    const callPatient = (no: string) => {
        setQueueList((prev) =>
            prev.map((item) =>
                item.no === no ? { ...item, status: 'Sedang Dilayani' } : item
            )
        );
    };

    return (
        <DashboardLayout
            role="receptionist"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-sky-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                                Meja Pelayanan Admisi & Front Desk
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                Selamat Pagi, {user?.name || 'Siti Rahma'}
                            </h1>
                            <p className="text-sm text-sky-200 mt-1 max-w-xl">
                                Kelola pendaftaran pasien baru, penerbitan tiket antrean poliklinik, dan verifikasi kepesertaan BPJS / asuransi secara real-time.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="px-4 py-2 text-xs font-bold bg-white text-blue-900 hover:bg-sky-50 rounded-xl transition-all shadow-md"
                            >
                                + Pasien Baru
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4 Receptionist KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Antrean Admisi Hari Ini</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">142</span>
                            <span className="text-xs font-bold text-sky-600">Tiket Terbit</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Rata-rata respon: 3.2 mnt</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Menunggu Pemanggilan</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">18</span>
                            <span className="text-xs font-bold text-slate-500">Pasien</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Loket 1 & Loket 2 Siap</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Kamar Inap Tersedia</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">18</span>
                            <span className="text-xs font-bold text-emerald-600">Kosong</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">BOR Terisi: 78.5%</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Dokter Praktek Aktif</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-teal-800">12</span>
                            <span className="text-xs font-bold text-teal-600">Poli Buka</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Semua poliklinik on time</span>
                    </div>
                </div>

                {/* Patient Queue Management Table */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Antrean Aktif Loket Pendaftaran & Admisi</h2>
                            <p className="text-xs text-slate-500">Panggil pasien menuju loket verifikasi dokumen.</p>
                        </div>
                        <span className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                            Loket Anda: Loket Admisi 01
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">No. Antrean</th>
                                    <th className="py-3 px-4">Nama Pasien</th>
                                    <th className="py-3 px-4">Poliklinik Tujuan</th>
                                    <th className="py-3 px-4">Dokter Bertugas</th>
                                    <th className="py-3 px-4">Jenis Penjamin</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4 text-right">Aksi Loket</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {queueList.map((q) => (
                                    <tr key={q.no} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3 px-4 font-extrabold text-blue-900 font-mono text-sm">{q.no}</td>
                                        <td className="py-3 px-4">
                                            <p className="font-bold text-slate-900">{q.patient}</p>
                                            <p className="text-[10px] text-slate-400 font-mono">NIK: {q.nik}</p>
                                        </td>
                                        <td className="py-3 px-4 text-slate-700 font-semibold">{q.poli}</td>
                                        <td className="py-3 px-4 text-slate-600">{q.doctor}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                                                {q.type}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                                q.status === 'Sedang Dilayani'
                                                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                    : 'bg-slate-100 text-slate-600'
                                            }`}>
                                                {q.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-right">
                                            <button
                                                type="button"
                                                onClick={() => callPatient(q.no)}
                                                className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold text-xs shadow-2xs mr-2 transition-all"
                                            >
                                                Panggil Loket
                                            </button>
                                            <button type="button" className="text-slate-500 hover:text-slate-800 font-medium">
                                                Cetak Tiket
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

export default ReceptionistDashboard;
