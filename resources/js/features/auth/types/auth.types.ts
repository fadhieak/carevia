export type Role =
    | 'super_admin'
    | 'receptionist'
    | 'doctor'
    | 'nurse'
    | 'pharmacist'
    | 'cashier'
    | 'laboratory_staff'
    | 'patient';

export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    phone?: string | null;
    status: 'active' | 'suspended' | 'inactive';
    dashboard_route: string;
    avatar?: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
    remember?: boolean;
}

export interface RegisterData {
    name: string;
    email: string;
    phone?: string;
    password: string;
    password_confirmation: string;
}

export interface AuthSuccessData {
    token: string;
    user: User;
}

export interface ApiResponse<T = any> {
    status: 'success' | 'error';
    message?: string;
    data?: T;
    errors?: Record<string, string[]>;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

export interface RoleConfig {
    role: Role;
    label: string;
    title: string;
    dashboardRoute: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    description: string;
    icon: string;
}

export const ROLE_CONFIGS: Record<Role, RoleConfig> = {
    super_admin: {
        role: 'super_admin',
        label: 'Super Admin',
        title: 'Administrator Utama',
        dashboardRoute: '/admin/dashboard',
        badgeBg: 'bg-purple-50',
        badgeText: 'text-purple-700',
        badgeBorder: 'border-purple-200',
        description: 'Kontrol penuh sistem, otorisasi pengguna, audit trail & konfigurasi rumah sakit.',
        icon: 'shield',
    },
    receptionist: {
        role: 'receptionist',
        label: 'Admin / Receptionist',
        title: 'Front Desk & Admisi',
        dashboardRoute: '/receptionist/dashboard',
        badgeBg: 'bg-blue-50',
        badgeText: 'text-blue-700',
        badgeBorder: 'border-blue-200',
        description: 'Registrasi pasien, antrean poliklinik, admisi rawat inap & verifikasi asuransi.',
        icon: 'clipboard',
    },
    doctor: {
        role: 'doctor',
        label: 'Doctor',
        title: 'Dokter Spesialis / Klinisi',
        dashboardRoute: '/doctor/dashboard',
        badgeBg: 'bg-teal-50',
        badgeText: 'text-teal-700',
        badgeBorder: 'border-teal-200',
        description: 'Pemeriksaan SOAP RME, antrean konsultasi, e-resep farmasi & rujukan diagnostik.',
        icon: 'activity',
    },
    nurse: {
        role: 'nurse',
        label: 'Nurse',
        title: 'Perawat & Asuhan Medis',
        dashboardRoute: '/nurse/dashboard',
        badgeBg: 'bg-emerald-50',
        badgeText: 'text-emerald-700',
        badgeBorder: 'border-emerald-200',
        description: 'Pencatatan tanda vital (TTV), triase, asuhan keperawatan & manajemen bangsal.',
        icon: 'heart-pulse',
    },
    pharmacist: {
        role: 'pharmacist',
        label: 'Pharmacist',
        title: 'Kepala & Staf Farmasi',
        dashboardRoute: '/pharmacy/dashboard',
        badgeBg: 'bg-amber-50',
        badgeText: 'text-amber-800',
        badgeBorder: 'border-amber-200',
        description: 'Verifikasi e-resep, peracikan obat, monitoring stok & masa kadaluarsa.',
        icon: 'pill',
    },
    cashier: {
        role: 'cashier',
        label: 'Cashier',
        title: 'Kasir & Billing Keuangan',
        dashboardRoute: '/cashier/dashboard',
        badgeBg: 'bg-cyan-50',
        badgeText: 'text-cyan-800',
        badgeBorder: 'border-cyan-200',
        description: 'Kasir pos, penagihan rawat jalan/inap, klaim BPJS & pelunasan faktur.',
        icon: 'credit-card',
    },
    laboratory_staff: {
        role: 'laboratory_staff',
        label: 'Laboratory Staff',
        title: 'Analis Laboratorium',
        dashboardRoute: '/laboratory/dashboard',
        badgeBg: 'bg-indigo-50',
        badgeText: 'text-indigo-700',
        badgeBorder: 'border-indigo-200',
        description: 'Pemeriksaan spesimen darah/urin, validasi hasil lab & pelaporan nilai kritis.',
        icon: 'microscope',
    },
    patient: {
        role: 'patient',
        label: 'Patient',
        title: 'Portal Pasien Carevia',
        dashboardRoute: '/patient/dashboard',
        badgeBg: 'bg-rose-50',
        badgeText: 'text-rose-700',
        badgeBorder: 'border-rose-200',
        description: 'Riwayat rekam medis pribadi, jadwal temu dokter, e-resep & hasil laboratorium.',
        icon: 'user',
    },
};
