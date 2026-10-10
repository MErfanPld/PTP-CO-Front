import React, { useState } from 'react';
import { Language } from '../data/translations';
import { X, Send, CheckCircle2, FileText, Building2, User, Mail, Phone, Calendar, MapPin } from 'lucide-react';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const RfpModal: React.FC<RfpModalProps> = ({ isOpen, onClose, lang }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    discipline: 'coastal-port',
    region: 'Persian Gulf',
    stage: 'Detailed Design',
    scopeDetails: '',
    targetStartDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = lang === 'FA' ? 'نام و نام خانوادگی الزامی است' : 'Full name is required';
    }
    if (!formData.organization.trim()) {
      errs.organization = lang === 'FA' ? 'نام سازمان یا شرکت الزامی است' : 'Organization name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = lang === 'FA' ? 'ایمیل سازمانی معتبر الزامی است' : 'Valid corporate email is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = lang === 'FA' ? 'شماره تماس الزامی است' : 'Phone number is required';
    }
    if (!formData.scopeDetails.trim() || formData.scopeDetails.length < 15) {
      errs.scopeDetails = lang === 'FA' 
        ? 'لطفاً شرح مشخصات فنی و اهداف پروژه را حداقل در ۱۵ نویسه بنویسید' 
        : 'Please provide at least 15 characters describing project scope';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate realistic RFP reference code
    const generatedRef = `PTP-RFP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNumber(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      discipline: 'coastal-port',
      region: 'Persian Gulf',
      stage: 'Detailed Design',
      scopeDetails: '',
      targetStartDate: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-[#003366] text-white">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00b4a0]">
              {lang === 'FA' ? 'استعلام رسمی و درخواست خدمات مهندسی مشاور' : 'Official Engineering Tender & Consulting Inquiry'}
            </span>
            <h2 className="text-xl font-bold tracking-tight">
              {lang === 'FA' ? 'درخواست پیشنهاد فنی و مالی (RFP)' : 'Request Technical Proposal (RFP)'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'FA' ? 'درخواست استعلام با موفقیت ثبت شد' : 'RFP Submission Received'}
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  {lang === 'FA' 
                    ? `جناب آقای / سرکار خانم ${formData.fullName}، درخواست فنی شما در سامانه مهندسی پویا طرح پارس ثبت گردید. کارشناسان ارشد فنی در اسرع وقت مستندات را بررسی و جهت هماهنگی جلسه با شما تماس خواهند گرفت.`
                    : `Thank you, ${formData.fullName}. Your technical dossier has been logged into PTP Co’s engineering evaluation queue. Our Chief Technical Officer and senior project directors will review your parameters within 24 business hours.`
                  }
                </p>
              </div>

              <div className="inline-block p-4 rounded-lg bg-slate-50 border border-slate-200 text-left rtl:text-right text-xs space-y-1">
                <div className="text-slate-400 font-medium">{lang === 'FA' ? 'کد رهگیری استعلام:' : 'Tracking Reference Number:'}</div>
                <div className="font-mono text-base font-bold text-[#003366]">{refNumber}</div>
                <div className="text-[11px] text-slate-500 pt-1">
                  {lang === 'FA' ? 'دپارتمان بررسی‌کننده:' : 'Assigned Department:'} <span className="text-slate-800 font-medium">{formData.discipline}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors"
                >
                  {lang === 'FA' ? 'تایید و بستن' : 'Done'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'FA' ? 'نام و نام خانوادگی نماینده *' : 'Contact Person *'}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={lang === 'FA' ? 'مثال: دکتر آرش مرادی' : 'e.g. Dr. Arash Moradi'}
                    className={`w-full px-3 py-2 text-xs border rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-500">{errors.fullName}</p>}
                </div>

                {/* Organization */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'FA' ? 'سازمان / کارفرما / شرکت *' : 'Company / Authority *'}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={lang === 'FA' ? 'مثال: سازمان بنادر و دریانوردی' : 'e.g. Maritime Port Authority'}
                    className={`w-full px-3 py-2 text-xs border rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] ${
                      errors.organization ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.organization && <p className="text-[11px] text-rose-500">{errors.organization}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'FA' ? 'ایمیل سازمانی معتبر *' : 'Corporate Email *'}</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className={`w-full px-3 py-2 text-xs border rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'FA' ? 'شماره تماس مستقیم / همراه *' : 'Direct Phone / Mobile *'}</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+98 912 000 0000"
                    dir="ltr"
                    className={`w-full px-3 py-2 text-xs border rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
                </div>

              </div>

              {/* Engineering Scope Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    {lang === 'FA' ? 'دپارتمان تخصصی' : 'Discipline'}
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                  >
                    <option value="coastal-port">{lang === 'FA' ? 'مهندسی بنادر و سواحل' : 'Coastal & Port Engineering'}</option>
                    <option value="marine-structures">{lang === 'FA' ? 'سازه‌های دریایی و اسکله‌ها' : 'Marine Structures & Jetties'}</option>
                    <option value="numerical-modeling">{lang === 'FA' ? 'مدلسازی هیدرودینامیک و امواج' : 'Numerical Hydrodynamics & Wave'}</option>
                    <option value="field-data-gis">{lang === 'FA' ? 'هیدروگرافی، داده‌های میدانی و GIS' : 'Oceanographic Survey & GIS'}</option>
                    <option value="civil-infrastructure">{lang === 'FA' ? 'ابنیه سنگین و پل‌ها' : 'Heavy Civil & Bridge Engineering'}</option>
                    <option value="project-supervision">{lang === 'FA' ? 'نظارت مقیم و کنترل کیفیت' : 'Construction Supervision & QA'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{lang === 'FA' ? 'منطقه جغرافیایی' : 'Project Region'}</span>
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                  >
                    <option value="Persian Gulf">{lang === 'FA' ? 'خلیج فارس' : 'Persian Gulf'}</option>
                    <option value="Sea of Oman">{lang === 'FA' ? 'دریای عمان و مکران' : 'Sea of Oman / Makran'}</option>
                    <option value="Caspian Sea">{lang === 'FA' ? 'دریای خزر' : 'Caspian Sea Basin'}</option>
                    <option value="Inland / Capital">{lang === 'FA' ? 'تهران و درون‌سرزمینی' : 'Tehran / Inland Iran'}</option>
                    <option value="International">{lang === 'FA' ? 'بین‌المللی و فرامرزی' : 'International / Cross-Border'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{lang === 'FA' ? 'مرحله مطالعاتی' : 'Consulting Phase'}</span>
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                  >
                    <option value="Master Plan / Feasibility">{lang === 'FA' ? 'طرح جامع / امکان‌سنجی اولیه' : 'Master Plan / Feasibility'}</option>
                    <option value="Basic Engineering (FEED)">{lang === 'FA' ? 'طراحی پایه (FEED)' : 'Basic Engineering (FEED)'}</option>
                    <option value="Detailed Design">{lang === 'FA' ? 'طراحی تفصیلی و اسناد مناقصه' : 'Detailed Design & Tender'}</option>
                    <option value="Independent Structural Verification">{lang === 'FA' ? 'محاسبات کنترلی و بازبینی مستقل' : 'Peer Review / Structural Check'}</option>
                    <option value="Construction Supervision">{lang === 'FA' ? 'نظارت عالیه و مقیم کارگاهی' : 'Construction Supervision'}</option>
                  </select>
                </div>
              </div>

              {/* Scope Description */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>{lang === 'FA' ? 'شرح مختصر اهداف و مشخصات فنی پروژه *' : 'Technical Scope & Site Details *'}</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.scopeDetails}
                  onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                  placeholder={lang === 'FA' 
                    ? 'اهداف کلیدی پروژه، ابعاد اسکله یا آبگیر، عمق پای اسکله، مشخصات امواج یا زمان‌بندی مد نظر را شرح دهید...' 
                    : 'Outline key project objectives, water depths, berth capacities, bathymetric requirements, or timeline constraints...'
                  }
                  className={`w-full px-3 py-2 text-xs border rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] ${
                    errors.scopeDetails ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.scopeDetails && <p className="text-[11px] text-rose-500">{errors.scopeDetails}</p>}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors"
                >
                  {lang === 'FA' ? 'انصراف' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors shadow-sm"
                >
                  <Send className={`w-3.5 h-3.5 ${lang === 'FA' ? '-scale-x-100' : ''}`} />
                  <span>{lang === 'FA' ? 'ارسال رسمی پرونده استعلام' : 'Transmit RFP Dossier'}</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
