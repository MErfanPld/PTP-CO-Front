import React from 'react';
import { Project } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { X, MapPin, Calendar, Building, CheckCircle2, AlertCircle, Layers, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenRfp: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenRfp, lang }) => {
  if (!project) return null;
  const t = UI_STRINGS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="space-y-1 pr-6 rtl:pr-0 rtl:pl-6">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="uppercase tracking-wider text-[#009688] font-semibold">
                {lang === 'FA' ? project.regionFa : project.category.replace('-', ' ')}
              </span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'FA' ? project.locationFa : project.region}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.year}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {lang === 'FA' ? project.titleFa : project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 divide-y divide-slate-100">
          
          {/* Hero Media + Quick Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-0">
            <div className="lg:col-span-2 relative aspect-video rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback container
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
            </div>

            {/* Project Metadata Card */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">{t.client}</span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{lang === 'FA' ? project.clientFa : project.client}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">{t.location}</span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{lang === 'FA' ? project.locationFa : project.location}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">{t.yearCompleted}</span>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="font-mono tabular-nums">{project.year}</span>
                  </div>
                </div>
              </div>

              {project.metrics && (
                <div className="pt-3 border-t border-slate-200 grid grid-cols-1 gap-2">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{lang === 'FA' ? m.labelFa : m.label}:</span>
                      <span className="font-mono font-bold text-slate-900 tabular-nums">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Detailed Description */}
          <div className="pt-6 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              {lang === 'FA' ? 'شرح جامع و محدوده تعهدات مهندسی پروژه' : 'Project Overview & Engineering Scope'}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {lang === 'FA' ? project.descriptionFa : project.description}
            </p>
          </div>

          {/* Challenges vs Solutions */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.challengesTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {(lang === 'FA' ? project.challengesFa : project.challenges).map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009688]">
                <CheckCircle2 className="w-4 h-4 text-[#009688] shrink-0" />
                <span>{t.solutionsTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {(lang === 'FA' ? project.solutionsFa : project.solutions).map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#009688] font-bold shrink-0 mt-0.5">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deliverables */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              <Layers className="w-4 h-4 text-slate-500 shrink-0" />
              <span>{t.keyDeliverables}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {(lang === 'FA' ? project.deliverablesFa : project.deliverables).map((d, i) => (
                <div key={i} className="p-2.5 rounded bg-slate-50 border border-slate-200/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-slate-100 bg-slate-50/80">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            {t.close}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenRfp();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors shadow-sm"
          >
            <span>{t.inquireScope}</span>
            <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
};
