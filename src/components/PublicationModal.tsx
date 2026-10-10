import React, { useState } from 'react';
import { Publication } from '../data/companyData';
import { Language } from '../data/translations';
import { X, Download, FileText, Check, Copy } from 'lucide-react';

interface PublicationModalProps {
  publication: Publication | null;
  onClose: () => void;
  lang: Language;
}

export const PublicationModal: React.FC<PublicationModalProps> = ({ publication, onClose, lang }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!publication) return null;

  const handleCopyCitation = () => {
    const citation = `${lang === 'FA' ? publication.authorsFa : publication.authors} (${publication.year}). "${lang === 'FA' ? publication.titleFa : publication.title}". ${publication.journal}${publication.doi ? `, DOI: ${publication.doi}` : ''}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Create text file blob download for technical abstract
    const element = document.createElement("a");
    const file = new Blob([
      `POUYA TARH PARS (PTP CO) TECHNICAL PUBLICATION ARCHIVE\n` +
      `Title: ${publication.title}\n` +
      `Authors: ${publication.authors}\n` +
      `Category: ${publication.category}\n` +
      `Journal / Proceeding: ${publication.journal} (${publication.year})\n` +
      `DOI: ${publication.doi || 'Internal Technical Report'}\n\n` +
      `EXECUTIVE ABSTRACT:\n${publication.abstract}\n\n` +
      `Tehran Headquarters: No. 6, Azadegan Blvd., Tehran, Iran\n` +
      `Website: https://ptpco.com | Email: info@ptpco.com`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${publication.id}-abstract.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="space-y-1 pr-6 rtl:pr-0 rtl:pl-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#009688]">
              <span>{lang === 'FA' ? publication.categoryFa : publication.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{publication.year}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 leading-snug">
              {lang === 'FA' ? publication.titleFa : publication.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-xs">
          
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
            <div>
              <span className="text-slate-400 font-medium block">{lang === 'FA' ? 'نویسندگان و وابستگی سازمانی:' : 'Authors & Affiliation:'}</span>
              <span className="font-semibold text-slate-800">{lang === 'FA' ? publication.authorsFa : publication.authors}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block">{lang === 'FA' ? 'محل انتشار / همایش:' : 'Published In:'}</span>
              <span className="text-slate-700 font-medium">{publication.journal}</span>
            </div>
            {publication.doi && (
              <div>
                <span className="text-slate-400 font-medium block">{lang === 'FA' ? 'شناسه دیجیتال مقاله (DOI):' : 'Digital Object Identifier (DOI):'}</span>
                <span className="font-mono text-[#003366]" dir="ltr">{publication.doi}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              {lang === 'FA' ? 'چکیده مقاله و یافته‌های کلیدی مهندسی' : 'Executive Abstract & Key Findings'}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
              {lang === 'FA' ? publication.abstractFa : publication.abstract}
            </p>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100 text-slate-600">
            <span>{lang === 'FA' ? 'استناد علمی جهت ارجاع به مقاله:' : 'Academic citation available for scientific reference:'}</span>
            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{lang === 'FA' ? 'کپی شد' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'FA' ? 'کپی رفرنس' : 'Copy Citation'}</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-slate-100 bg-slate-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            {lang === 'FA' ? 'بستن' : 'Close'}
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors shadow-sm"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'FA' ? 'چکیده دانلود شد' : 'Abstract Downloaded'}</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'FA' ? 'دانلود چکیده مقاله' : 'Download Executive Paper'}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
