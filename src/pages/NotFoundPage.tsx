import React from 'react';
import { Compass, Home, Layers } from 'lucide-react';
import { Language, UI_STRINGS } from '../data/translations';

interface NotFoundPageProps {
  onNavigate: (tab: string) => void;
  lang: Language;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, lang }) => {
  const t = UI_STRINGS[lang];

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-xl border border-slate-200 p-8 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-[#003366] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#009688]">{t.notFoundKicker}</span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{t.notFoundTitle}</h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            {t.notFoundDesc}
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t.returnToHome}</span>
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.browseAllProjects}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
