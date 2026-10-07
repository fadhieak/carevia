import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, ROLE_CONFIGS, Role } from '../../auth';

export interface MenuItem {
    label: string;
    icon: React.ReactNode;
    active?: boolean;
    badge?: string;
}

interface DashboardLayoutProps {
    role: Role;
    menuItems: MenuItem[];
    activeMenuIndex?: number;
    onSelectMenu?: (index: number) => void;
    children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    role,
    menuItems,
    activeMenuIndex = 0,
    onSelectMenu,
    children,
}) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const roleConfig = ROLE_CONFIGS[role];

    const handleLogout = async () => {
        await logout();
        navigate('/login', { replace: true });
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 antialiased selection:bg-teal-600 selection:text-white">
            {/* Top Navbar */}
            <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Left: Brand & Mobile Sidebar Toggle */}
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                                className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
                                aria-label="Toggle sidebar"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <Link to="/" className="flex items-center gap-2.5 group">
                                <div className="w-9 h-9 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 6v12M6 12h12" />
                                        <circle cx="12" cy="12" r="9" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                                        Carevia
                                    </span>
                                    <span className="text-[9px] uppercase font-bold tracking-wider text-teal-700 leading-tight mt-0.5">
                                        Hospital Platform
                                    </span>
                                </div>
                            </Link>

                            <span className="hidden sm:inline-block text-slate-300">|</span>

                            {/* Active Role Badge in Header */}
                            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold shadow-2xs bg-teal-50 text-teal-800 border-teal-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                                <span>{roleConfig.title}</span>
                            </div>
                        </div>

                        {/* Right: User Profile & Logout Action */}
                        <div className="flex items-center gap-3">
                            {/* User details */}
                            <div className="flex items-center gap-2.5 pl-2">
                                <div className="w-9 h-9 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                                    {user?.name ? user.name.slice(0, 2).toUpperCase() : 'CV'}
                                </div>
                                <div className="hidden md:flex flex-col text-left">
                                    <span className="text-xs font-bold text-slate-900 leading-tight">
                                        {user?.name || 'Pengguna Carevia'}
                                    </span>
                                    <span className="text-[10px] text-slate-500 leading-tight mt-0.5">
                                        {user?.email}
                                    </span>
                                </div>
                            </div>

                            {/* Role Badge on Mobile */}
                            <div className={`sm:hidden px-2 py-0.5 rounded-md border text-[10px] font-bold ${roleConfig.badgeBg} ${roleConfig.badgeText} ${roleConfig.badgeBorder}`}>
                                {roleConfig.label}
                            </div>

                            {/* Logout Button */}
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-rose-700 hover:text-white bg-rose-50 hover:bg-rose-600 border border-rose-200 hover:border-rose-600 rounded-xl transition-all shadow-2xs focus:outline-hidden"
                                title="Keluar dari sistem"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* Dashboard Container: Sidebar + Content */}
            <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
                
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-64 shrink-0">
                    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sticky top-24">
                        
                        {/* Role Profile Box */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4 text-left">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                Otorisasi Akun
                            </span>
                            <p className="text-xs font-extrabold text-slate-900 leading-snug">
                                {roleConfig.label}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                                {roleConfig.description}
                            </p>
                        </div>

                        {/* Navigation Menu Links */}
                        <nav className="space-y-1 text-left">
                            {menuItems.map((item, idx) => {
                                const isActive = activeMenuIndex === idx;
                                return (
                                    <button
                                        key={item.label}
                                        type="button"
                                        onClick={() => onSelectMenu && onSelectMenu(idx)}
                                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                                            isActive
                                                ? 'bg-teal-800 text-white shadow-xs'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className={isActive ? 'text-white' : 'text-slate-400'}>
                                                {item.icon}
                                            </span>
                                            <span>{item.label}</span>
                                        </div>
                                        {item.badge && (
                                            <span
                                                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                                    isActive
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-teal-100 text-teal-800'
                                                }`}
                                            >
                                                {item.badge}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Quick System Badge */}
                        <div className="mt-6 pt-4 border-t border-slate-100 text-left">
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span>Sanctum Token: Terverifikasi</span>
                            </div>
                        </div>

                    </div>
                </aside>

                {/* Mobile Sidebar Overlay */}
                {isMobileSidebarOpen && (
                    <div className="lg:hidden fixed inset-0 z-50 flex">
                        <div
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
                            onClick={() => setIsMobileSidebarOpen(false)}
                        />
                        <div className="relative w-72 bg-white h-full shadow-2xl p-5 flex flex-col justify-between z-10">
                            <div>
                                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                                    <span className="font-extrabold text-slate-900 text-sm">Menu Navigasi</span>
                                    <button
                                        type="button"
                                        onClick={() => setIsMobileSidebarOpen(false)}
                                        className="text-slate-400 hover:text-slate-700 font-bold"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-left">
                                    <p className="text-xs font-bold text-slate-900">{roleConfig.label}</p>
                                    <p className="text-[10px] text-slate-500 mt-0.5">{roleConfig.title}</p>
                                </div>
                                <nav className="space-y-1 text-left">
                                    {menuItems.map((item, idx) => (
                                        <button
                                            key={item.label}
                                            type="button"
                                            onClick={() => {
                                                if (onSelectMenu) onSelectMenu(idx);
                                                setIsMobileSidebarOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold ${
                                                activeMenuIndex === idx
                                                    ? 'bg-teal-800 text-white'
                                                    : 'text-slate-600 hover:bg-slate-100'
                                            }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                            {item.badge && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 flex items-center justify-center gap-2"
                            >
                                <span>Logout Keluar Akun</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Main Dynamic Role View */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>

            </div>
        </div>
    );
};
