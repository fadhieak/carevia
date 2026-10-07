import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginCredentials, Role, ROLE_CONFIGS } from '../types/auth.types';

interface DemoAccount {
    role: Role;
    label: string;
    email: string;
    badgeClass: string;
}

const DEMO_ACCOUNTS: DemoAccount[] = [
    { role: 'super_admin', label: 'Super Admin', email: 'admin@carevia.id', badgeClass: 'bg-purple-100 text-purple-800 border-purple-200' },
    { role: 'receptionist', label: 'Receptionist', email: 'receptionist@carevia.id', badgeClass: 'bg-blue-100 text-blue-800 border-blue-200' },
    { role: 'doctor', label: 'Doctor', email: 'doctor@carevia.id', badgeClass: 'bg-teal-100 text-teal-800 border-teal-200' },
    { role: 'nurse', label: 'Nurse', email: 'nurse@carevia.id', badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { role: 'pharmacist', label: 'Pharmacist', email: 'pharmacist@carevia.id', badgeClass: 'bg-amber-100 text-amber-800 border-amber-200' },
    { role: 'cashier', label: 'Cashier', email: 'cashier@carevia.id', badgeClass: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
    { role: 'laboratory_staff', label: 'Lab Staff', email: 'lab@carevia.id', badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    { role: 'patient', label: 'Patient', email: 'patient@carevia.id', badgeClass: 'bg-rose-100 text-rose-800 border-rose-200' },
];

interface LoginFormProps {
    onSubmit: (credentials: LoginCredentials) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    onClearError: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
    isLoading,
    error,
    onClearError,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRoleDemo, setSelectedRoleDemo] = useState<Role | null>(null);

    const handleSelectDemo = (acc: DemoAccount) => {
        setEmail(acc.email);
        setPassword('password');
        setSelectedRoleDemo(acc.role);
        onClearError();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) return;
        await onSubmit({ email, password, remember });
    };

    return (
        <div className="space-y-6">
            {/* Quick Role Tester Pills for UKK Evaluation */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Pilih Cepat Akun Demo (8 Role)
                    </span>
                    <span className="text-[10px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                        Password: password
                    </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {DEMO_ACCOUNTS.map((acc) => (
                        <button
                            key={acc.role}
                            type="button"
                            onClick={() => handleSelectDemo(acc)}
                            className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                                selectedRoleDemo === acc.role
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs scale-102'
                                    : `${acc.badgeClass} hover:opacity-80`
                            }`}
                        >
                            {acc.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Error message alert */}
            {error && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-in fade-in">
                    <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="flex-1">
                        <p className="font-semibold">{error}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClearError}
                        className="text-rose-500 hover:text-rose-700 ml-1 font-bold"
                    >
                        ✕
                    </button>
                </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                        Alamat Email
                    </label>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error) onClearError();
                            }}
                            placeholder="nama@carevia.id atau email pasien"
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label
                            htmlFor="password"
                            className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                        >
                            Kata Sandi
                        </label>
                        <span className="text-xs text-slate-400">
                            Minimal 8 karakter
                        </span>
                    </div>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (error) onClearError();
                            }}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-hidden"
                            title={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
                        >
                            {showPassword ? (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            className="w-4 h-4 rounded-md text-teal-700 border-slate-300 focus:ring-teal-600 focus:outline-hidden"
                        />
                        <span className="text-xs text-slate-600 font-medium">Ingat sesi saya</span>
                    </label>

                    <span className="text-xs text-teal-700 font-semibold hover:underline cursor-pointer">
                        Bantuan Akses?
                    </span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-teal-800 hover:bg-teal-900 disabled:bg-teal-800/60 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span>Memverifikasi Akun...</span>
                            </>
                        ) : (
                            <>
                                <span>Masuk ke Dashboard</span>
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </form>

            {/* Register redirection */}
            <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                    Pasien baru belum terdaftar di Carevia?{' '}
                    <Link
                        to="/register"
                        className="font-bold text-teal-800 hover:text-teal-900 hover:underline"
                    >
                        Daftar Akun Pasien
                    </Link>
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                    *Akun tenaga medis dan staf dikonfigurasi melalui Administrator RS.
                </p>
            </div>
        </div>
    );
};
