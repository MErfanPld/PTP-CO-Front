import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Globe, FileText } from 'lucide-react';
import { Language, UI_STRINGS } from '../data/translations';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenRfp: () => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenRfp,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[lang];

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'services', label: t.navServices },
    { id: 'projects', label: t.navProjects },
    { id: 'research', label: t.navResearch },
    { id: 'contact', label: t.navContact },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone top bar contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand wordmark / mark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left rtl:text-right group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
            >
              {/* Distinctive PTP geometric mark using brand colors */}
              <div className="w-10 h-10 rounded-lg bg-[#003366] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <path d="M8 28C14 20 26 20 32 28" stroke="#00b4a0" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M12 22C16 16 24 16 28 22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="12" r="3" fill="#00b4a0" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#003366] transition-colors whitespace-nowrap">
                  {lang === 'FA' ? COMPANY_INFO.shortNameFa : COMPANY_INFO.shortName}
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 whitespace-nowrap">
                  {lang === 'FA' ? 'مهندسین مشاور' : 'Pouya Tarh Pars'}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-medium tracking-normal transition-colors py-1 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#003366] font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary action + Language toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language toggle indicator */}
            <button
              onClick={onToggleLang}
              title="Toggle Language Display"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 rounded-md transition-colors whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'EN' ? 'EN' : 'FA'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenRfp}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] active:scale-[0.98] rounded-md transition-all shadow-sm whitespace-nowrap shrink-0"
            >
              <span>{t.requestRfp}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${lang === 'FA' ? '-scale-x-100' : ''}`} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left rtl:text-right px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#003366] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRfp();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] rounded-md shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>{t.submitTechnicalRfp}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
