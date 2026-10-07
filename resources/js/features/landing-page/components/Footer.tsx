import React from 'react';
import { FOOTER_NAVIGATION } from '../data/navigation';
import { useScrollTo } from '../hooks/useScrollTo';
import { LandingIcon } from './LandingIcon';

export const Footer: React.FC = () => {
    const { scrollToSection } = useScrollTo();

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            event.preventDefault();
            scrollToSection(href);
        }
    };

    return (
        <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 sm:pt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4 lg:col-span-2">
                        <div className="flex items-center gap-2.5">
                            <LandingIcon name="logo" size={32} className="rounded-lg" />
                            <div>
                                <p className="text-xl font-bold tracking-tight text-white">Carevia</p>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Healthcare Management Platform</p>
                            </div>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed">Software platform untuk membantu rumah sakit mengelola operasional dan layanan kesehatan dalam satu sistem.</p>
                    </div>
                    {FOOTER_NAVIGATION.map((group) => (
                        <div key={group.title}>
                            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">{group.title}</h2>
                            <ul className="space-y-2.5 text-sm">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} onClick={(event) => handleLinkClick(event, link.href)} className="transition-colors hover:text-white">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-slate-500 sm:flex-row">
                    <p>© 2026 Carevia. All rights reserved.</p>
                    <p>Carevia — Healthcare Management Platform</p>
                </div>
            </div>
        </footer>
    );
};
