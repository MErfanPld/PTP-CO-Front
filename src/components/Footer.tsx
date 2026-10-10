import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { MapPin, Phone, Mail, ArrowUpRight, ChevronUp, Shield, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenRfp: () => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRfp, lang }) => {
  const t = UI_STRINGS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Upper strategic band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Lockup & Authority */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#003366] flex items-center justify-center text-white border border-slate-700 shrink-0">
                <svg viewBox="0 0 40 40" fill="none" className="w-5 h-5">
                  <path d="M8 28C14 20 26 20 32 28" stroke="#00b4a0" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M12 22C16 16 24 16 28 22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="12" r="3" fill="#00b4a0" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {lang === 'FA' ? COMPANY_INFO.nameFa : COMPANY_INFO.name}
                </span>
                <span className="text-xs text-slate-400 block font-normal">
                  {lang === 'FA' ? 'پویا طرح پارس (PTP Co)' : 'Consulting Engineers (PTP Co)'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              {t.footerDesc}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#00b4a0]" />
                <span>{lang === 'FA' ? 'پایه یک بندرسازی و سازه‌های دریایی' : 'Grade 1 Port & Marine Structures'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-[#00b4a0]" />
                <span>{lang === 'FA' ? 'مشاور سازمان بنادر (PMO)' : 'PMO Accredited Partner'}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Engineering Divisions */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footerDisciplinesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'مهندسی بنادر و سواحل' : 'Coastal & Port Engineering'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'سازه‌های دریایی و اسکله‌ها' : 'Marine Structures & Jetties'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'مدلسازی عددی هیدرودینامیک' : 'Numerical Hydrodynamics'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'داده‌های اقیانوس‌شناسی و GIS' : 'Oceanographic Data & GIS'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'ابنیه سنگین و پل‌ها' : 'Heavy Civil & Bridge Engineering'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'نظارت مقیم و کنترل کیفیت' : 'Field Construction Supervision'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footerCompanyTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'درباره سابقه ۳۵ ساله شرکت' : 'About Our 35-Year Heritage'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'پروژه‌ها و تجارب شاخص' : 'Projects & Case Studies'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'مقالات علمی و اطلس سواحل' : 'Scientific Papers & Coastal GIS'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'FA' ? 'فرصت‌های شغلی و همکاری' : 'Careers & Multi-Disciplinary Team'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRfp}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-[#00b4a0]"
                >
                  <span>{t.requestRfp}</span>
                  <ArrowUpRight className={`w-3 h-3 ${lang === 'FA' ? '-scale-x-100' : ''}`} />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footerContactTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {lang === 'FA' ? COMPANY_INFO.headquarters.addressFa : COMPANY_INFO.headquarters.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="tabular-nums font-mono text-slate-300" dir="ltr">{COMPANY_INFO.headquarters.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-slate-300 font-mono" dir="ltr">{COMPANY_INFO.headquarters.email}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900">
              <span className="text-[11px] text-slate-500 block">{t.fieldStationsLabel}</span>
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'FA' ? 'بندرعباس · بوشهر · امیرآباد و انزلی' : 'Bandar Abbas · Bushehr · Amirabad'}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} {lang === 'FA' ? COMPANY_INFO.nameFa : COMPANY_INFO.name}. {t.allRightsReserved}</span>
            <span aria-hidden="true">·</span>
            <span>ISO 9001:2015 & ISO 14001:2015</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              {lang === 'FA' ? 'اطلاعات تماس' : 'Contact Directory'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>{t.backToTop}</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
