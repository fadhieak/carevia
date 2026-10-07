import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../data/navigation';
import { useNavbarScroll } from '../hooks/useNavbarScroll';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { useScrollTo } from '../hooks/useScrollTo';
import { LandingIcon } from './LandingIcon';

export const Navbar: React.FC = () => {
    const { isScrolled } = useNavbarScroll(20);
    const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();
    const { scrollToSection } = useScrollTo();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        closeMobileMenu();
        scrollToSection(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
                    : 'bg-transparent py-4 sm:py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Floating pill styled container */}
                <div className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="flex items-center gap-2.5 group focus:outline-hidden"
                    >
                        <LandingIcon name="logo" size={34} className="rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-200" />
                        <div className="flex flex-col text-left">
                            <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                                Carevia
                            </span>~
                            <span className="text-[10px] uppercase font-bold tracking-wider text-teal-700">
                                Healthcare Platform
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links (Pill-inspired) */}
                    <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-slate-200/90 rounded-full px-4 py-1.5 shadow-2xs backdrop-blur-xs">
                        {NAV_ITEMS.map((item, idx) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                                    idx === 0
                                        ? 'text-teal-800 hover:text-teal-900'
                                        : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                                }`}
                            >
                                {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />}
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Buttons: Login & Register */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-bold text-slate-800 hover:text-teal-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full shadow-xs hover:shadow-sm transition-all focus:outline-hidden"
                        >
                            <span>Login</span>
                        </Link>

                        <Link
                            to="/register"
                            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-full shadow-xs hover:shadow-sm transition-all focus:outline-hidden"
                        >
                            <span>Register</span>
                        </Link>

                        {/* Hamburger Button for Mobile */}
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
                    <div className="flex flex-col space-y-2">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-3 grid grid-cols-2 gap-2">
                            <Link
                                to="/login"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-center px-4 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl"
                            >
                                <span>Login</span>
                            </Link>

                            <Link
                                to="/register"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-xl shadow-xs"
                            >
                                <span>Register</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};
