import React, { useState } from 'react';
import { DashboardLayout, MenuItem } from '../components/DashboardLayout';
import { useAuth } from '../../auth';

export const SuperAdminDashboard: React.FC = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState(0);

    const menuItems: MenuItem[] = [
        {
            label: 'Ringkasan Sistem',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ),
        },
        {
            label: 'Manajemen Staf & User',
            badge: '8 User',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            label: 'Audit Trail & Log',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
        },
        {
            label: 'Konfigurasi RS & Hak Akses',
            icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    const usersList = [
        { name: 'Dr. Ir. Hendra Wijaya, Sp.A', email: 'admin@carevia.id', role: 'Super Admin', status: 'Aktif', lastLogin: 'Hari ini, 09:25' },
        { name: 'Siti Rahma, S.Kom', email: 'receptionist@carevia.id', role: 'Receptionist', status: 'Aktif', lastLogin: 'Hari ini, 08:00' },
        { name: 'dr. Farhan Pratama, Sp.PD', email: 'doctor@carevia.id', role: 'Doctor', status: 'Aktif', lastLogin: 'Hari ini, 08:15' },
        { name: 'Ns. Dewi Lestari, S.Kep', email: 'nurse@carevia.id', role: 'Nurse', status: 'Aktif', lastLogin: 'Hari ini, 07:45' },
        { name: 'apt. Budi Santoso, S.Farm', email: 'pharmacist@carevia.id', role: 'Pharmacist', status: 'Aktif', lastLogin: 'Hari ini, 08:30' },
        { name: 'Rina Anggraini, S.E.', email: 'cashier@carevia.id', role: 'Cashier', status: 'Aktif', lastLogin: 'Hari ini, 08:10' },
        { name: 'Ahmad Fauzi, A.Md.AK', email: 'lab@carevia.id', role: 'Laboratory Staff', status: 'Aktif', lastLogin: 'Hari ini, 08:20' },
        { name: 'Anisa Maharani', email: 'patient@carevia.id', role: 'Patient', status: 'Aktif', lastLogin: 'Kemarin, 14:10' },
    ];

    return (
        <DashboardLayout
            role="super_admin"
            menuItems={menuItems}
            activeMenuIndex={activeTab}
            onSelectMenu={setActiveTab}
        >
            <div className="space-y-6 text-left">
                {/* Header Welcome banner */}
                <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                                Pusat Kontrol Administrasi Utama
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-extrabold mt-1">
                                Selamat Datang, {user?.name || 'Super Admin'}
                            </h1>
                            <p className="text-sm text-purple-200 mt-1 max-w-xl">
                                Monitoring tata kelola hak akses 8 divisi rumah sakit, keamanan token Sanctum, dan ketersediaan database carevia secara terpadu.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold">
                                Sistem: 100% Online
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Metric KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Total Staf & User</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">8</span>
                            <span className="text-xs font-bold text-emerald-600">8 Role Aktif</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Tercatat di Database</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">System Uptime</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">99.98%</span>
                            <span className="text-xs font-bold text-emerald-600">Stabil</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Latency: 28ms</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Otorisasi Sanctum</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">Aktif</span>
                            <span className="text-xs font-bold text-purple-600">RBAC Enforced</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Bearer Token Guard</span>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-semibold text-slate-500 block">Integrasi SatuSehat</span>
                        <div className="flex items-baseline gap-2 mt-2">
                            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">Terkoneksi</span>
                            <span className="text-xs font-bold text-teal-600">FHIR Ready</span>
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Bridging Kemenkes RI</span>
                    </div>
                </div>

                {/* Main Table: User Role Registry */}
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Daftar Akun & Matriks Hak Akses Carevia</h2>
                            <p className="text-xs text-slate-500">8 Role operasional rumah sakit dengan pembagian wewenang ketat.</p>
                        </div>
                        <button
                            type="button"
                            className="px-3.5 py-1.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-xl transition-all shadow-xs"
                        >
                            + Tambah Staf Baru
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4">Nama Pengguna</th>
                                    <th className="py-3 px-4">Alamat Email</th>
                                    <th className="py-3 px-4">Role Sistem</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Login Terakhir</th>
                                    <th className="py-3 px-4 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {usersList.map((u) => (
                                    <tr key={u.email} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="py-3 px-4 font-bold text-slate-900">{u.name}</td>
                                        <td className="py-3 px-4 text-slate-600">{u.email}</td>
                                        <td className="py-3 px-4">
                                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                {u.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-slate-500">{u.lastLogin}</td>
                                        <td className="py-3 px-4 text-right">
                                            <button type="button" className="text-purple-700 hover:text-purple-900 font-bold mr-2">
                                                Edit
                                            </button>
                                            <button type="button" className="text-slate-400 hover:text-slate-600">
                                                Log
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Audit Trail Log Strip */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                    <h3 className="text-sm font-bold text-slate-900 mb-3">Audit Trail Keamanan Terkini</h3>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                            <span className="font-medium text-slate-700">Autentikasi sesi berhasil untuk Dr. Ir. Hendra Wijaya via Sanctum Token</span>
                            <span className="text-[10px] text-slate-400 font-mono">10:00:12 WIB</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                            <span className="font-medium text-slate-700">Pemeriksaan integritas basis data SQLite / MySQL selesai — 0 anomali</span>
                            <span className="text-[10px] text-slate-400 font-mono">09:45:00 WIB</span>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default SuperAdminDashboard;
