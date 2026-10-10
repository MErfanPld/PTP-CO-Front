import React, { useState } from 'react';
import { PUBLICATIONS_DATA, Publication } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { BookOpen, Compass, Eye, Database, Search, X } from 'lucide-react';

interface ResearchGisPageProps {
  onOpenPublication: (pub: Publication) => void;
  onOpenRfp: () => void;
  lang: Language;
}

export const ResearchGisPage: React.FC<ResearchGisPageProps> = ({
  onOpenPublication,
  onOpenRfp,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'publications' | 'gis-atlas'>('publications');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = UI_STRINGS[lang];

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'Hydrodynamics', label: lang === 'FA' ? 'هیدرودینامیک و امواج' : 'Hydrodynamics' },
    { id: 'Oceanography', label: lang === 'FA' ? 'اقیانوس‌شناسی' : 'Oceanography' },
    { id: 'Coastal Ecology', label: lang === 'FA' ? 'محیط زیست و سواحل' : 'Coastal Ecology' },
    { id: 'Structural Engineering', label: lang === 'FA' ? 'مهندسی سازه' : 'Structural Engineering' },
  ];

  const filteredPubs = PUBLICATIONS_DATA.filter((pub) => {
    const matchesCat = selectedCategory === 'all' || pub.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      pub.title.toLowerCase().includes(q) ||
      pub.titleFa.toLowerCase().includes(q) ||
      pub.abstract.toLowerCase().includes(q) ||
      pub.abstractFa.toLowerCase().includes(q) ||
      pub.authors.toLowerCase().includes(q) ||
      pub.authorsFa.toLowerCase().includes(q) ||
      pub.journal.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00b4a0]">
            <span>{t.researchKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.researchBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl text-balance">
            {t.researchTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            {t.researchDesc}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('publications')}
              className={`py-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'publications'
                  ? 'border-[#003366] text-[#003366]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.tabPapers}</span>
            </button>
            <button
              onClick={() => setActiveTab('gis-atlas')}
              className={`py-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'gis-atlas'
                  ? 'border-[#003366] text-[#003366]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{t.tabGis}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab 1: Publications */}
      {activeTab === 'publications' && (
        <section className="py-16 bg-slate-50 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-1">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {lang === 'FA'
                    ? 'مقالات علمی داوری‌شده و دستاوردهای پژوهشی'
                    : 'Peer-Reviewed Articles & Engineering Conference Papers'}
                </h2>
                <p className="text-xs text-slate-500">
                  {lang === 'FA'
                    ? 'تالیف و تدوین شده توسط اعضای هیئت علمی و کارشناسان ارشد پویا طرح پارس'
                    : "Researched and authored by senior specialists from PTP Co's Oceanographic & Structural Councils."}
                </p>
              </div>

              {/* Search & Category Filter */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPapersPlaceholder}
                    className="w-full sm:w-64 pl-9 pr-8 rtl:pr-9 rtl:pl-8 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1 overflow-x-auto p-1 bg-slate-100 rounded-lg">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                        selectedCategory === c.id
                          ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPubs.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#009688] uppercase tracking-wider">
                        {lang === 'FA' ? pub.categoryFa : pub.category}
                      </span>
                      <span className="font-mono text-slate-400 tabular-nums">{pub.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {lang === 'FA' ? pub.titleFa : pub.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium">
                      {pub.journal}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {lang === 'FA' ? pub.abstractFa : pub.abstract}
                    </p>

                    <div className="text-[11px] text-slate-400">
                      {lang === 'FA' ? 'نویسندگان:' : 'Authors:'}{' '}
                      <span className="text-slate-600">
                        {lang === 'FA' ? pub.authorsFa : pub.authors}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {pub.downloadsCount} {lang === 'FA' ? 'ارجاع و دانلود' : 'citations / downloads'}
                    </span>

                    <button
                      onClick={() => onOpenPublication(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#003366] bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#009688]" />
                      <span>{t.readAbstract}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: GIS Atlas & Spatial Databases */}
      {activeTab === 'gis-atlas' && (
        <section className="py-16 bg-white flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003366]">
                  {lang === 'FA' ? 'داده‌های مکانی و انفورماتیک سواحل' : 'Spatial Oceanographic Informatics'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {t.gisAtlasTitle}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.gisAtlasDesc}
                </p>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-[#009688] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">
                        {lang === 'FA'
                          ? 'پایش چند دهه‌ای نوسانات خط ساحلی:'
                          : 'Multi-Decadal Shoreline Change Detection:'}
                      </strong>
                      <span className="text-slate-600">
                        {lang === 'FA'
                          ? 'تحلیل روندهای فرسایش و رسوب‌گذاری از سال ۱۳۶۳ تا ۱۴۰۳ با بهره‌گیری از تصاویر ماهواره‌ای لندست و سنتینل-۲.'
                          : 'Tracking erosion and accretion trends from 1984 to 2026 using Landsat and Sentinel-2 optical imagery.'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-[#009688] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">
                        {lang === 'FA'
                          ? 'نقشه‌برداری پهنه‌بندی خطر سونامی و خیزاب طوفان:'
                          : 'Tsunami & Storm Surge Vulnerability Mapping:'}
                      </strong>
                      <span className="text-slate-600">
                        {lang === 'FA'
                          ? 'شبیه‌سازی حریم پیشروی امواج ناشی از زمین‌لرزه‌های گسل مکران و طوفان‌های حاره‌ای بر بنادر چابهار و جاسک.'
                          : 'High-resolution inundation run-up overlays for coastal cities and critical port logistics assets.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
                  <img
                    src="/images/modeling_hydrodynamics.jpg"
                    alt="GIS Coastal Spatial Mapping"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white text-xs space-y-1">
                      <div className="font-bold">
                        {lang === 'FA'
                          ? 'سامانه یکپارچه پایگاه داده مکانی سواحل شمال و جنوب'
                          : 'Makran & Persian Gulf Coastal GIS Layer'}
                      </div>
                      <div className="text-slate-300 text-[11px]">
                        {lang === 'FA'
                          ? 'تلفیق داده‌های هیدروگرافی، نقشه‌های عمق‌سنجی و شبکه‌های عددی MIKE'
                          : 'Integrated ArcMap / QGIS Hydrographic Data Mesh'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquire */}
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'FA'
                  ? 'نیاز به داده‌های هیدروگرافی سفارشی، داده‌های موج یا تحلیل GIS دارید؟'
                  : 'Need Customized Coastal GIS or Metocean Data Extraction?'}
              </h3>
              <p className="text-xs text-slate-600 max-w-xl mx-auto">
                {lang === 'FA'
                  ? 'پویا طرح پارس آماده همکاری با سازمان‌ها، بنادر تجاری و نهادهای دانشگاهی جهت تامین داده‌های مکانی اعتبارسنجی‌شده است.'
                  : 'We supply government authorities, port developers, and academic institutions with validated spatial datasets.'}
              </p>
              <button
                onClick={onOpenRfp}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors"
              >
                {lang === 'FA' ? 'استعلام خدمات GIS و مطالعات پایه' : 'Inquire About Metocean & GIS Services'}
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
