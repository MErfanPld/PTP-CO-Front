import React, { useState } from 'react';
import { COMPANY_INFO, PROJECTS_DATA, SERVICES_DATA, CLIENT_LOGOS, Project } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { 
  ArrowRight, 
  Anchor, 
  Waves, 
  Activity, 
  Compass, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  BarChart3
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenProject: (project: Project) => void;
  onOpenRfp: () => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProject,
  onOpenRfp,
  lang,
}) => {
  const [projectFilter, setProjectFilter] = useState<'all' | 'coastal-port' | 'marine-structures' | 'environmental-studies'>('all');
  const t = UI_STRINGS[lang];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

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

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section: Asymmetric, authoritative, high-impact industrial photography */}
      <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        
        {/* Background Image Layer with gradient scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/ptp_hero_marine_port_1791622375662.jpg"
            alt="Deepwater Marine Port and Industrial Breakwater Engineered by PTP Co"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Quiet, unboxed kicker without static pills */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#00b4a0]">
                <span>{t.kicker}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">{t.grade1Badge}</span>
              </div>

              {/* Dominant Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] text-balance">
                {t.heroTitle}
              </h1>

              {/* Supporting Editorial Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                {t.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={onOpenRfp}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#009688] hover:bg-[#00897b] active:scale-[0.98] rounded-md transition-all shadow-md shadow-teal-900/20"
                >
                  <span>{t.submitTechnicalRfp}</span>
                  <ArrowRight className={`w-4 h-4 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-all backdrop-blur-xs"
                >
                  <span>{t.exploreProjects}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-400 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>

            {/* Right Column: Key Trust Signals & Accreditations Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 rounded-xl bg-slate-900/85 border border-slate-800/80 backdrop-blur-md space-y-5 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400 font-medium">{t.accreditationLabel}</span>
                  <span className="text-[#00b4a0] font-semibold">{t.verifiedGrade1}</span>
                </div>

                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00b4a0] shrink-0 mt-0.5" />
                    <span>{t.trust1}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00b4a0] shrink-0 mt-0.5" />
                    <span>{t.trust2}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00b4a0] shrink-0 mt-0.5" />
                    <span>{t.trust3}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00b4a0] shrink-0 mt-0.5" />
                    <span>{t.trust4}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{t.isceFull}</span>
                  <span className="text-white font-mono">{t.isceMember}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Quantitative Proof Ribbon: Sits directly below the hero split */}
        <div className="border-t border-slate-800/80 bg-slate-950/90 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left rtl:md:text-right divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-slate-800/80">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className={idx > 0 ? "pt-4 md:pt-0 md:px-6" : ""}>
                  <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
                    {lang === 'FA' ? stat.valueFa : stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#00b4a0] uppercase tracking-wider mt-0.5">
                    {lang === 'FA' ? stat.labelFa : stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 hidden sm:block">
                    {lang === 'FA' ? stat.detailFa : stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>


      {/* 3. Executive Overview & Institutional Authority */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003366]">
                {t.executiveKicker}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                {t.executiveTitle}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.executiveP1}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.executiveP2}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#003366] hover:text-[#009688] transition-colors"
                >
                  <span>{t.learnMoreAboutUs}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Asymmetric Highlights Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#003366] shrink-0" />
                  <span>{t.highlight1Title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.highlight1Desc}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#009688] shrink-0" />
                  <span>{t.highlight2Title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.highlight2Desc}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#009688] shrink-0" />
                  <span>{t.highlight3Title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.highlight3Desc}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#003366] shrink-0" />
                  <span>{t.highlight4Title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.highlight4Desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. Core Capabilities & Business Divisions */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009688]">
                {t.disciplinesKicker}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                {t.disciplinesTitle}
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#003366] hover:text-[#009688] transition-colors whitespace-nowrap"
            >
              <span>{t.viewAll6}</span>
              <ArrowRight className={`w-4 h-4 ${lang === 'FA' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv, index) => (
              <div
                key={srv.id}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors">
                      {lang === 'FA' ? srv.titleFa : srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {lang === 'FA' ? srv.subtitleFa : srv.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {lang === 'FA' ? srv.overviewFa : srv.overview}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      {t.keySoftware}
                    </div>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-600 font-mono" dir="ltr">
                      {srv.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#003366] group-hover:text-[#009688] flex items-center gap-1 transition-colors"
                  >
                    <span>{t.detailedCapabilities}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. Featured Projects Showcase with Filterable Controls */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003366]">
                {t.portfolioKicker}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                {t.portfolioTitle}
              </h2>
              <p className="text-xs text-slate-500">
                {t.portfolioSubtitle}
              </p>
            </div>

            {/* Interactive functional filter buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  projectFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.allFeatured}
              </button>
              <button
                onClick={() => setProjectFilter('coastal-port')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  projectFilter === 'coastal-port'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.filterPorts}
              </button>
              <button
                onClick={() => setProjectFilter('marine-structures')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  projectFilter === 'marine-structures'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.filterJetties}
              </button>
              <button
                onClick={() => setProjectFilter('environmental-studies')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  projectFilter === 'environmental-studies'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.filterEcology}
              </button>
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, 6).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onOpenProject(proj)}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer flex flex-col group"
              >
                {/* Image slot */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                    {lang === 'FA' ? proj.regionFa : proj.region}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata without pill boxes */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="font-semibold text-[#009688] uppercase">
                        {lang === 'FA' ? proj.regionFa : proj.category.replace('-', ' ')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{proj.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                      {lang === 'FA' ? proj.titleFa : proj.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {lang === 'FA' ? proj.summaryFa : proj.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium truncate max-w-[180px]">
                      {lang === 'FA' ? proj.clientFa : proj.client}
                    </span>
                    <span className="text-[#003366] group-hover:text-[#009688] font-semibold flex items-center gap-1 transition-colors">
                      <span>{t.viewCase}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors"
            >
              <span>{t.exploreAllProjects}</span>
              <ArrowRight className={`w-4 h-4 ${lang === 'FA' ? 'rotate-180' : ''}`} />
            </button>
          </div>

        </div>
      </section>


      {/* 6. High-Tech Spotlight: Numerical Modeling & Oceanography */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00b4a0]">
                  {t.hydroKicker}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
                  {t.hydroTitle}
                </h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.hydroDesc}
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00b4a0] shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-white block">{t.hydroPoint1Title}</strong>
                    {t.hydroPoint1Desc}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00b4a0] shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-white block">{t.hydroPoint2Title}</strong>
                    {t.hydroPoint2Desc}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00b4a0] shrink-0 mt-1.5" />
                  <div>
                    <strong className="text-white block">{t.hydroPoint3Title}</strong>
                    {t.hydroPoint3Desc}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('research')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] border border-slate-700 rounded-md transition-colors"
                >
                  <span>{t.reviewResearchBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950">
                <img
                  src="/src/assets/images/ptp_modeling_hydrodynamics_1791622399488.jpg"
                  alt="Hydrodynamic Wave Simulation Office at PTP Co"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-3 rounded-lg border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                  <span>{lang === 'FA' ? 'شبیه‌سازی سه‌بعدی امواج و جریانات هیدرودینامیک' : '3D Numerical Wave Simulation · Project Alpha'}</span>
                  <span className="text-[#00b4a0] font-mono font-semibold" dir="ltr">MIKE 21 / DELFT3D</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. Field Oceanographic Fleet & Data Collection */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src="/src/assets/images/ptp_coastal_survey_vessel_1791622411086.jpg"
                  alt="Specialized Marine Bathymetric Survey Vessel"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-slate-200 text-[11px] text-slate-700 flex items-center justify-between">
                  <span>{lang === 'FA' ? 'ناوگان هیدروگرافی چندپرتوی و جریان‌سنجی داپلر' : 'Acoustic Doppler & Multibeam Hydrographic Fleet'}</span>
                  <span className="text-[#003366] font-mono font-semibold" dir="ltr">IHO Class 1 Standards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009688]">
                  {t.surveyKicker}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                  {t.surveyTitle}
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {t.surveyDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{t.survey1Title}</div>
                  <div className="text-slate-500">{t.survey1Desc}</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{t.survey2Title}</div>
                  <div className="text-slate-500">{t.survey2Desc}</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{t.survey3Title}</div>
                  <div className="text-slate-500">{t.survey3Desc}</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{t.survey4Title}</div>
                  <div className="text-slate-500">{t.survey4Desc}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#003366] hover:text-[#009688] transition-colors"
                >
                  <span>{t.inquireSurveyBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 8. Verified Client Ecosystem & Strategic Alliances */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.partnersKicker}
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {t.partnersTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="text-xs font-bold text-slate-800">
                  {lang === 'FA' ? client.nameFa : client.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {lang === 'FA' ? client.typeFa : client.type}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 9. Strategic Call-to-Action Banner */}
      <section className="py-20 bg-[#003366] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00b4a0]">
            {t.ctaKicker}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            {t.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {t.ctaDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenRfp}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#003366] bg-white hover:bg-slate-100 rounded-md transition-all shadow-md active:scale-[0.98]"
            >
              {t.requestRfp}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all"
            >
              {t.contactHqBtn}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
