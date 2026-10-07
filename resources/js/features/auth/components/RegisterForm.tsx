import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterData } from '../types/auth.types';

interface RegisterFormProps {
    onSubmit: (data: RegisterData) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    onClearError: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
    onSubmit,
    isLoading,
    error,
    onClearError,
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationError(null);

        if (!name.trim() || !email.trim() || !password.trim()) {
            setValidationError('Harap isi seluruh kolom yang wajib diisi.');
            return;
        }

        if (password.length < 8) {
            setValidationError('Kata sandi harus terdiri dari minimal 8 karakter.');
            return;
        }

        if (password !== passwordConfirmation) {
            setValidationError('Konfirmasi kata sandi tidak cocok.');
            return;
        }

        if (!agreeTerms) {
            setValidationError('Harap setujui syarat ketentuan dan privasi data medis.');
            return;
        }

        await onSubmit({
            name,
            email,
            phone: phone.trim() ? phone : undefined,
            password,
            password_confirmation: passwordConfirmation,
        });
    };

    const activeError = error || validationError;

    return (
        <div className="space-y-5">
            {/* Security Policy Information Card */}
            <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 text-left">
                <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-teal-800 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        i
                    </div>
                    <div>
                        <p className="text-xs font-bold text-teal-900">
                            Registrasi Portal Pasien Carevia
                        </p>
                        <p className="text-[11px] text-teal-800 leading-normal mt-0.5">
                            Formulir ini khusus untuk pendaftaran pasien rawat jalan/inap. Hak akses staf klinis (Dokter, Perawat, Farmasi, Kasir, Lab, Admisi, Admin) dikonfigurasi langsung oleh Administrator Rumah Sakit untuk kepatuhan tata kelola medis.
                        </p>
                    </div>
                </div>
            </div>

            {/* Error Message Banner */}
            {activeError && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-in fade-in text-left">
                    <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="flex-1">
                        <p className="font-semibold">{activeError}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            setValidationError(null);
                            onClearError();
                        }}
                        className="text-rose-500 hover:text-rose-700 ml-1 font-bold"
                    >
                        ✕
                    </button>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                {/* Full Name */}
                <div>
                    <label htmlFor="reg-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nama Lengkap Pasien *
                    </label>
                    <input
                        id="reg-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setValidationError(null);
                            onClearError();
                        }}
                        placeholder="contoh: Anisa Maharani"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                    />
                </div>

                {/* Email Address */}
                <div>
                    <label htmlFor="reg-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Alamat Email Aktif *
                    </label>
                    <input
                        id="reg-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setValidationError(null);
                            onClearError();
                        }}
                        placeholder="pasien@email.com"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                    />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                    <label htmlFor="reg-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nomor Handphone / WhatsApp
                    </label>
                    <input
                        id="reg-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="contoh: 081234567890"
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                    />
                </div>

                {/* Password & Confirm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label htmlFor="reg-pwd" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Kata Sandi *
                            </label>
                        </div>
                        <input
                            id="reg-pwd"
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setValidationError(null);
                                onClearError();
                            }}
                            placeholder="Min. 8 karakter"
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label htmlFor="reg-confirm" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Konfirmasi Sandi *
                            </label>
                        </div>
                        <input
                            id="reg-confirm"
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={passwordConfirmation}
                            onChange={(e) => {
                                setPasswordConfirmation(e.target.value);
                                setValidationError(null);
                                onClearError();
                            }}
                            placeholder="Ulangi kata sandi"
                            className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all"
                        />
                    </div>
                </div>

                {/* Show password and agreement */}
                <div className="flex items-center justify-between pt-1">
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-xs text-slate-500 hover:text-slate-700 font-medium"
                    >
                        {showPassword ? 'Sembunyikan Kata Sandi' : 'Lihat Kata Sandi'}
                    </button>
                </div>

                {/* Terms agreement checkbox */}
                <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="w-4 h-4 rounded-md text-teal-700 border-slate-300 focus:ring-teal-600 focus:outline-hidden mt-0.5"
                    />
                    <span className="text-[11px] text-slate-600 leading-tight">
                        Saya menyetujui pengolahan rekam medis dan syarat ketentuan layanan kesehatan digital Carevia.
                    </span>
                </label>

                {/* Submit button */}
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
                                <span>Mendaftarkan Akun Pasien...</span>
                            </>
                        ) : (
                            <>
                                <span>Daftar Sebagai Pasien</span>
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </form>

            {/* Back to Login link */}
            <div className="pt-2 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                    Sudah memiliki akun Carevia?{' '}
                    <Link
                        to="/login"
                        className="font-bold text-teal-800 hover:text-teal-900 hover:underline"
                    >
                        Masuk di Sini
                    </Link>
                </p>
            </div>
        </div>
    );
};
