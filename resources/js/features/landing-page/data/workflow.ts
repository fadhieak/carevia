import { WorkflowStep } from '../types/landing-page.types';

export const WORKFLOW_STEPS: WorkflowStep[] = [
    {
        stepNumber: '01',
        title: 'Patient Registration',
        subtitle: 'Pendaftaran & Verifikasi',
        description: 'Pasien mendaftar melalui admisi atau sistem mandiri. Data demografi, rekam medis sebelumnya, dan jaminan diverifikasi.',
        icon: 'user-plus',
        details: [
            'Pencarian data pasien via NIK atau No. RM',
            'Pencatatan keluhan awal & poli tujuan',
            'Verifikasi status penjamin atau umum',
        ],
    },
    {
        stepNumber: '02',
        title: 'Appointment & Queue',
        subtitle: 'Penjadwalan & Antrean Poli',
        description: 'Sistem menetapkan nomor antrean poliklinik dan jadwal dokter secara otomatis dengan display monitor ruang tunggu.',
        icon: 'clock',
        details: [
            'Nomor antrean berurutan per spesialisasi',
            'Monitor display terhubung di ruang tunggu',
            'Status antrean real-time & estimasi panggil',
        ],
    },
    {
        stepNumber: '03',
        title: 'Medical Examination',
        subtitle: 'Pemeriksaan Klinis Dokter',
        description: 'Dokter memeriksa pasien, memasukkan anamnesis, tanda vital, asesmen klinis, dan diagnosis langsung ke dalam lembar rekam medis elektronik.',
        icon: 'clipboard-check',
        details: [
            'Pencatatan SOAP dan diagnosis ICD-10',
            'Akses cepat riwayat alergi & pemeriksaan lama',
            'Penetapan rencana terapi medis secara terukur',
        ],
    },
    {
        stepNumber: '04',
        title: 'Treatment, Prescription & Lab',
        subtitle: 'Layanan Penunjang Terpadu',
        description: 'Instruksi dokter diteruskan secara digital ke instalasi farmasi untuk peracikan obat, dan ke laboratorium untuk pemeriksaan sampel darah/radiologi.',
        icon: 'file-plus',
        details: [
            'E-resep otomatis terkirim ke bagian farmasi',
            'Permintaan uji lab terbit dengan barcode sampel',
            'Opsi instruksi rujukan rawat inap jika diperlukan',
        ],
    },
    {
        stepNumber: '05',
        title: 'Billing & Follow-up',
        subtitle: 'Konsolidasi Tagihan & Pasca Layanan',
        description: 'Seluruh komponen tindakan, obat, dan penunjang dikalkulasikan ke kasir secara transparan dan akurat beserta jadwal kontrol selanjutnya.',
        icon: 'check-circle-2',
        details: [
            'Faktur tagihan otomatis tanpa penghitungan manual',
            'Pilihan pembayaran tunai, non-tunai, atau asuransi',
            'Pencetakan surat kontrol atau edukasi kepulangan',
        ],
    },
];
