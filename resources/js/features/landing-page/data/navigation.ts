import { FooterLinkGroup, NavItem, ValueStripItem } from '../types/landing-page.types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Contact', href: '#contact' },
];

export const VALUE_STRIP_ITEMS: ValueStripItem[] = [
    { id: 'centralized', title: 'Centralized Management', description: 'Informasi operasional dan layanan pasien dikelola dalam satu sistem.', icon: 'database' },
    { id: 'workflow', title: 'Connected Workflow', description: 'Hubungkan alur kerja lintas unit dalam proses yang lebih teratur.', icon: 'git-merge' },
    { id: 'visibility', title: 'Operational Visibility', description: 'Akses ringkasan informasi untuk membantu koordinasi sehari-hari.', icon: 'activity' },
    { id: 'patient-centered', title: 'Patient Services', description: 'Dukung pengelolaan layanan pasien dari pendaftaran hingga pembayaran.', icon: 'heart-pulse' },
];

export const FOOTER_NAVIGATION: FooterLinkGroup[] = [
    {
        title: 'Platform',
        links: [
            { label: 'Home', href: '#home' },
            { label: 'About Carevia', href: '#about' },
            { label: 'Features & Modules', href: '#features' },
            { label: 'Workflow', href: '#workflow' },
            { label: 'Contact', href: '#contact' },
        ],
    },
    {
        title: 'Modules',
        links: [
            { label: 'Patient Management', href: '#modules' },
            { label: 'Appointment & Queue', href: '#modules' },
            { label: 'Medical Records', href: '#modules' },
            { label: 'Pharmacy', href: '#modules' },
            { label: 'Laboratory', href: '#modules' },
            { label: 'Inpatient', href: '#modules' },
            { label: 'Billing & Payment', href: '#modules' },
            { label: 'Reports', href: '#modules' },
        ],
    },
];
