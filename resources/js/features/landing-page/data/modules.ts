import { ModuleItem } from '../types/landing-page.types';

export const HEALTHCARE_MODULES: ModuleItem[] = [
    { id: 'patients', name: 'Patient Management', description: 'Kelola pendaftaran dan informasi pasien dalam satu tempat.', icon: 'users' },
    { id: 'appointments', name: 'Appointment & Queue', description: 'Atur jadwal kunjungan dan alur antrean pasien.', icon: 'calendar' },
    { id: 'medical-records', name: 'Medical Records', description: 'Catat dan akses informasi rekam medis secara terstruktur.', icon: 'clipboard-list' },
    { id: 'pharmacy', name: 'Pharmacy', description: 'Kelola resep, layanan farmasi, dan persediaan obat.', icon: 'package' },
    { id: 'laboratory', name: 'Laboratory', description: 'Kelola permintaan pemeriksaan dan hasil laboratorium.', icon: 'activity' },
    { id: 'inpatient', name: 'Inpatient', description: 'Kelola proses layanan dan informasi rawat inap.', icon: 'home' },
    { id: 'billing', name: 'Billing & Payment', description: 'Catat biaya layanan dan proses pembayaran pasien.', icon: 'credit-card' },
    { id: 'reports', name: 'Reports', description: 'Lihat ringkasan data operasional untuk mendukung pengelolaan.', icon: 'bar-chart' },
];
