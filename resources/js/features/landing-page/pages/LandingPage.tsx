import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ValueStrip } from '../components/ValueStrip';
import { AboutCarevia } from '../components/AboutCarevia';
import { ModulesSection } from '../components/ModulesSection';
import { WorkflowSection } from '../components/WorkflowSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white flex flex-col antialiased">
            {/* Sticky Navigation */}
            <Navbar />

            {/* Page Sections */}
            <main className="grow">
                {/* 1. Hero Section (with Perspective Dashboard) */}
                <HeroSection />

                {/* 2. Value Strip & Smarter Systems */}
                <ValueStrip />

                {/* 3. About Carevia */}
                <AboutCarevia />

                {/* 4. Features */}
                <ModulesSection />

                {/* 5. Workflow */}
                <WorkflowSection />

                {/* 6. CTA */}
                <CTASection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
