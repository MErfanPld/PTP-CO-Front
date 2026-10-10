import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { Search, Compass, ArrowRight, X } from 'lucide-react';

interface ProjectsPageProps {
  onOpenProject: (project: Project) => void;
  onOpenRfp: () => void;
  lang: Language;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenProject,
  onOpenRfp,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = UI_STRINGS[lang];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || p.region === selectedRegion;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.titleFa.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.clientFa.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.locationFa.toLowerCase().includes(query) ||
      p.summary.toLowerCase().includes(query) ||
      p.summaryFa.toLowerCase().includes(query);

    return matchesCategory && matchesRegion && matchesSearch;
  });

  const categoryOptions = [
    { id: 'all', label: t.filterSectorAll },
    { id: 'coastal-port', label: t.filterSectorCoastal },
    { id: 'marine-structures', label: t.filterSectorMarine },
    { id: 'environmental-studies', label: t.filterSectorEco },
    { id: 'civil-infrastructure', label: t.filterSectorCivil },
    { id: 'oil-gas', label: t.filterSectorOil },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00b4a0]">
            <span>{t.projectsArchiveKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.projectsArchiveSubtitle}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl text-balance">
            {t.projectsArchiveTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            {t.projectsArchiveDesc}
          </p>
        </div>
      </section>

      {/* 1. Interactive Geographic Regional Distribution */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003366]">
                <Compass className="w-4 h-4 text-[#009688]" />
                <span>{t.geoCoverageTitle}</span>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">{t.clickRegionToFilter}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <button
                onClick={() => setSelectedRegion(selectedRegion === 'Persian Gulf' ? 'all' : 'Persian Gulf')}
                className={`p-3.5 rounded-lg border text-left rtl:text-right transition-all ${
                  selectedRegion === 'Persian Gulf'
                    ? 'bg-sky-50 border-[#003366] text-[#003366] ring-1 ring-[#003366]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold">{t.persianGulfRegion}</div>
                <div className="text-[11px] text-slate-500 mt-1">{t.persianGulfDesc}</div>
              </button>

              <button
                onClick={() => setSelectedRegion(selectedRegion === 'Sea of Oman' ? 'all' : 'Sea of Oman')}
                className={`p-3.5 rounded-lg border text-left rtl:text-right transition-all ${
                  selectedRegion === 'Sea of Oman'
                    ? 'bg-sky-50 border-[#003366] text-[#003366] ring-1 ring-[#003366]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold">{t.seaOfOmanRegion}</div>
                <div className="text-[11px] text-slate-500 mt-1">{t.seaOfOmanDesc}</div>
              </button>

              <button
                onClick={() => setSelectedRegion(selectedRegion === 'Caspian Sea' ? 'all' : 'Caspian Sea')}
                className={`p-3.5 rounded-lg border text-left rtl:text-right transition-all ${
                  selectedRegion === 'Caspian Sea'
                    ? 'bg-sky-50 border-[#003366] text-[#003366] ring-1 ring-[#003366]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold">{t.caspianSeaRegion}</div>
                <div className="text-[11px] text-slate-500 mt-1">{t.caspianSeaDesc}</div>
              </button>

              <button
                onClick={() => setSelectedRegion(selectedRegion === 'Inland / Capital' ? 'all' : 'Inland / Capital')}
                className={`p-3.5 rounded-lg border text-left rtl:text-right transition-all ${
                  selectedRegion === 'Inland / Capital'
                    ? 'bg-sky-50 border-[#003366] text-[#003366] ring-1 ring-[#003366]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold">{t.inlandRegion}</div>
                <div className="text-[11px] text-slate-500 mt-1">{t.inlandDesc}</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchProjectsPlaceholder}
                className="w-full pl-9 pr-9 rtl:pr-9 rtl:pl-9 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              {categoryOptions.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Reset Filter Button if active */}
            {(selectedCategory !== 'all' || selectedRegion !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedRegion('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#009688] font-semibold hover:underline whitespace-nowrap self-center"
              >
                {t.resetFilters}
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500">
            {lang === 'FA' ? (
              <span>
                نمایش <span className="font-bold text-slate-800">{filteredProjects.length}</span> از مجموع {PROJECTS_DATA.length} پروژه ثبت‌شده
              </span>
            ) : (
              <span>
                Showing <span className="font-bold text-slate-800">{filteredProjects.length}</span> of {PROJECTS_DATA.length} verified projects
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 3. Project Cards Grid */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="text-sm font-semibold text-slate-700">{t.noProjectsMatch}</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedRegion('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#003366] rounded-md"
              >
                {t.resetFilters}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onOpenProject(proj)}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer flex flex-col group"
                >
                  {/* Image slot */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={lang === 'FA' ? proj.titleFa : proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                      {lang === 'FA' ? proj.regionFa : proj.region}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-[#009688] uppercase">
                          {lang === 'FA' ? proj.regionFa : proj.category.replace('-', ' ')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{proj.year}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#003366] transition-colors leading-snug">
                        {lang === 'FA' ? proj.titleFa : proj.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {lang === 'FA' ? proj.summaryFa : proj.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="text-slate-500 truncate max-w-[200px]">
                        <span className="text-slate-400 block text-[10px]">{t.client}:</span>
                        <span className="font-medium text-slate-700">{lang === 'FA' ? proj.clientFa : proj.client}</span>
                      </div>

                      <span className="text-[#003366] group-hover:text-[#009688] font-semibold flex items-center gap-1 transition-colors">
                        <span>{t.details}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Callout */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            {lang === 'FA'
              ? 'نیاز به سوابق فنی، مشخصات پروژه یا استعلام مهندسی خاص دارید؟'
              : 'Have a Specific Port, Marine, or Geotechnical Requirement?'}
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            {lang === 'FA'
              ? 'آرشیو اسناد پویا طرح پارس شامل ده‌ها گزارش تخصصی شبیه‌سازی عددی، نقشه‌های اجرایی و طرح‌های جامع است. جهت دریافت مدارک متناسب با پروژه خود اقدام نمایید.'
              : 'Our archive includes dozens of specialized studies, from wave refraction models to deep piling calculations. Request technical credentials for your specific scope.'}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenRfp}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors shadow-sm"
            >
              {t.requestRfp}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
