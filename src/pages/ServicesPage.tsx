import React, { useState } from 'react';
import { SERVICES_DATA, PROJECTS_DATA, ServiceDetail } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { 
  Anchor, 
  Waves, 
  Activity, 
  Compass, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Cpu,
  FileCheck,
  Check
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: string) => void;
  onOpenRfp: () => void;
  onOpenProjectById: (projectId: string) => void;
  lang: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenRfp,
  onOpenProjectById,
  lang,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [selectedScopeItems, setSelectedScopeItems] = useState<string[]>([]);
  const [scopeGenerated, setScopeGenerated] = useState(false);
  const t = UI_STRINGS[lang];

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Anchor': return <Anchor className="w-5 h-5 text-[#009688]" />;
      case 'Waves': return <Waves className="w-5 h-5 text-[#009688]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#009688]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#009688]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#009688]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#009688]" />;
    }
  };

  const handleToggleScopeItem = (item: string) => {
    if (selectedScopeItems.includes(item)) {
      setSelectedScopeItems(selectedScopeItems.filter((i) => i !== item));
    } else {
      setSelectedScopeItems([...selectedScopeItems, item]);
    }
    setScopeGenerated(false);
  };

  const featuredProject = PROJECTS_DATA.find((p) => p.id === activeService.featuredProject);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00b4a0]">
            <span>{lang === 'FA' ? 'شاخه‌ها و دپارتمان‌های مهندسی' : 'Capabilities & Engineering Disciplines'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'FA' ? 'خدمات جامع از مطالعات پایه تا بهره‌برداری' : 'Comprehensive Solutions'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl text-balance">
            {lang === 'FA' ? 'خدمات تخصصی مهندسی برای پروژه‌های دریایی، بندری و عمرانی' : 'Specialized Engineering Services for Marine & Civil Projects'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            {lang === 'FA'
              ? 'از تدوین طرح‌های جامع بنادر و شبیه‌سازی‌های عددی امواج تا تهیه نقشه‌های اجرایی سازه‌های دریایی و نظارت مقیم کارگاهی در سواحل کشور.'
              : 'From initial master planning and numerical wave modeling to structural execution blueprints and resident site supervision, PTP Co offers an end-to-end technical continuum.'
            }
          </p>
        </div>
      </section>

      {/* 1. Interactive Service Explorer */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {SERVICES_DATA.map((srv) => {
              const isSelected = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-4 rounded-lg text-left rtl:text-right transition-all flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="w-8 h-8 rounded mb-3 flex items-center justify-center">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold block leading-snug line-clamp-2">
                      {lang === 'FA' ? srv.titleFa : srv.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Service Content Display */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 lg:p-10 space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Overview and Detailed Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009688]">
                    <span>{lang === 'FA' ? 'معرفی شاخه تخصصی' : 'Practice Area Overview'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {lang === 'FA' ? activeService.titleFa : activeService.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {lang === 'FA' ? activeService.subtitleFa : activeService.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {lang === 'FA' ? activeService.overviewFa : activeService.overview}
                </p>

                {/* Specific Capabilities List */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{lang === 'FA' ? 'محورهای اصلی خدمات و توانمندی‌ها' : 'Core Technical Capabilities'}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {(lang === 'FA' ? activeService.capabilitiesFa : activeService.capabilities).map((cap, i) => (
                      <div key={i} className="p-3 rounded bg-white border border-slate-200/80 flex items-start gap-2 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#009688] shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Standard Deliverables Produced */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{lang === 'FA' ? 'اسناد، نقشه‌ها و خروجی‌های تحویلی' : 'Typical Engineering Deliverables'}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {(lang === 'FA' ? activeService.deliverablesFa : activeService.deliverables).map((del, i) => (
                      <div key={i} className="p-2.5 rounded bg-white border border-slate-200/60 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Software Stack & Featured Case Study */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Software Stack */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <Cpu className="w-4 h-4 text-[#003366] shrink-0" />
                    <span>{lang === 'FA' ? 'مجموعه نرم‌افزارهای محاسباتی' : 'Engineering Software & Computation'}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {lang === 'FA' ? 'ابزارهای استاندارد مدل‌سازی مورد استفاده کارشناسان ارشد:' : 'Standardized modeling suites and analytical tools utilized by our senior engineers:'}
                  </p>
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {activeService.technologies.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Case Study Link */}
                {featuredProject && (
                  <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#009688]">
                      {lang === 'FA' ? 'پروژه نمونه مرتبط' : 'Featured Benchmark Project'}
                    </div>
                    <div className="relative aspect-video rounded overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {lang === 'FA' ? featuredProject.titleFa : featuredProject.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {lang === 'FA' ? featuredProject.summaryFa : featuredProject.summary}
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenProjectById(featuredProject.id)}
                      className="text-xs font-semibold text-[#003366] hover:text-[#009688] flex items-center gap-1 transition-colors pt-1"
                    >
                      <span>{lang === 'FA' ? 'مشاهده پرونده کامل پروژه' : 'Inspect Project Case Study'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}

                {/* Action button */}
                <button
                  onClick={onOpenRfp}
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>{lang === 'FA' ? 'درخواست استعلام برای این دپارتمان' : 'Request Proposal for this Discipline'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. Interactive Scope Configurator */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009688]">
              Client Scope Formulator
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Assemble Your Consulting Scope
            </h2>
            <p className="text-xs text-slate-600 max-w-xl mx-auto">
              Select key technical requirements relevant to your upcoming port, offshore, or civil project. 
              Our system will prepare your RFP brief.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                "Port Master Planning & Terminal Circulation",
                "Breakwater 2D/3D Rubblemound Stability",
                "Deepwater Jetty & Mooring Dolphin Design",
                "Industrial Seawater Intake & Outfall Plume",
                "Numerical Wave Penetration & Agitation (MIKE 21)",
                "Coastal Sediment Transport & Siltation Modeling",
                "Multibeam Bathymetric Survey & Sonar Profiling",
                "Marine Geotechnical Soil-Structure Verification",
                "Heavy Foundation & Intermodal Pavement Design",
                "Independent Structural Verification (Peer Review)",
                "Underwater Diver Inspection & Fender Rehab",
                "Resident Construction Supervision & QA/QC"
              ].map((item, idx) => {
                const isSelected = selectedScopeItems.includes(item);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleToggleScopeItem(item)}
                    className={`p-3 rounded-lg border text-left flex items-start gap-2.5 transition-all ${
                      isSelected
                        ? 'bg-sky-50 border-[#003366] text-[#003366] font-medium'
                        : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'bg-[#003366] border-[#003366] text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span className="leading-snug">{item}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-900">{selectedScopeItems.length}</span> disciplines selected for RFP package
              </div>

              <div className="flex items-center gap-3">
                {selectedScopeItems.length > 0 && (
                  <button
                    onClick={() => setSelectedScopeItems([])}
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={onOpenRfp}
                  disabled={selectedScopeItems.length === 0}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-all shadow-sm"
                >
                  Proceed with Selected Scope →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
