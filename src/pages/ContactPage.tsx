import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, Printer, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const t = UI_STRINGS[lang];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = lang === 'FA' ? 'تکمیل نام و نام خانوادگی الزامی است' : 'Name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = lang === 'FA' ? 'آدرس ایمیل معتبر الزامی است' : 'Valid email is required';
    }
    if (!formData.subject.trim()) {
      errs.subject = lang === 'FA' ? 'موضوع پیام الزامی است' : 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = lang === 'FA' ? 'متن پیام باید حداقل ۱۰ نویسه باشد' : 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setTicketId(`PTP-MSG-${Math.floor(10000 + Math.random() * 90000)}`);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00b4a0]">
            <span>{t.contactKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.contactBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl text-balance">
            {t.contactTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            {t.contactDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Directory & Offices */}
            <div className="lg:col-span-5 space-y-8">
              {/* Tehran HQ Box */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003366]">
                  <Building className="w-4 h-4 text-[#009688]" />
                  <span>{lang === 'FA' ? 'دفتر مرکزی تهران' : 'Tehran Central Headquarters'}</span>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {lang === 'FA' ? COMPANY_INFO.headquarters.addressFa : COMPANY_INFO.headquarters.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <div dir="ltr" className="text-left rtl:text-right">
                      <span className="font-mono text-slate-800 font-semibold">{COMPANY_INFO.headquarters.phone}</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span className="font-mono text-slate-800 font-semibold">{COMPANY_INFO.headquarters.altPhone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Printer className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-slate-500">{lang === 'FA' ? 'نمابر: ' : 'Fax: '}</span>
                      <span dir="ltr" className="font-mono text-slate-800 font-semibold">
                        {COMPANY_INFO.headquarters.fax}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-slate-800 font-medium font-mono">{COMPANY_INFO.headquarters.email}</span>
                  </div>

                  <div className="flex items-center gap-3 pt-1 border-t border-slate-200/60">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-slate-500">
                      {lang === 'FA' ? COMPANY_INFO.headquarters.hoursFa : COMPANY_INFO.headquarters.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coastal Field Stations */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {lang === 'FA' ? 'دفاتر نظارت مقیم کارگاهی در بنادر' : 'Coastal Supervisory Stations & Field Offices'}
                </h3>
                <div className="space-y-2.5">
                  {COMPANY_INFO.branches.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-white border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">
                          {lang === 'FA' ? `${b.nameFa} (${b.cityFa})` : `${b.name} (${b.city})`}
                        </span>
                        <span className="text-[11px] text-[#009688] font-mono" dir="ltr">{b.contact}</span>
                      </div>
                      <p className="text-slate-500 text-[11px] leading-relaxed">
                        {lang === 'FA' ? b.focusFa : b.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Message Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#009688]">
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.sendUsMessage}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {lang === 'FA' ? 'ارسال مکاتبه رسمی به پویا طرح پارس' : 'Send an Official Message to PTP Co'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {lang === 'FA'
                      ? 'پیام شما مستقیماً به دپارتمان تخصصی مربوطه ارجاع خواهد شد.'
                      : 'Your correspondence will be routed directly to the appropriate technical department.'}
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4 bg-white rounded-lg p-6 border border-slate-200">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900">
                        {t.messageSentTitle}
                      </h3>
                      <p className="text-xs text-slate-600 max-w-md mx-auto">
                        {lang === 'FA'
                          ? `با تشکر، ${formData.name}. پیام شما در دبیرخانه دیجیتال ثبت گردید:`
                          : `Thank you, ${formData.name}. Your inquiry has been registered under reference:`}
                      </p>
                      <div className="font-mono text-sm font-bold text-[#003366] pt-1" dir="ltr">
                        {ticketId}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          department: 'General Inquiries',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="px-5 py-2 text-xs font-semibold text-white bg-[#003366] rounded-md"
                    >
                      {lang === 'FA' ? 'ارسال پیام جدید' : 'Send Another Message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">
                          {t.fullNameLabel} *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={lang === 'FA' ? 'نام و نام خانوادگی' : 'Your Name'}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                        />
                        {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">
                          {t.emailLabel} *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@organization.com"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                        />
                        {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">
                          {t.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={lang === 'FA' ? '۰۲۱۰۰۰۰۰۰۰۰' : '+98 21 0000 0000'}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">
                          {t.departmentSelect}
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                        >
                          <option value="General Inquiries">{t.deptGeneral}</option>
                          <option value="Ports & Coastal Engineering">{t.deptCoastal}</option>
                          <option value="Marine Structures & Jetties">{t.deptMarine}</option>
                          <option value="Hydrodynamic Modeling & Waves">{t.deptHydro}</option>
                          <option value="Supervision & Inspection">{t.deptSupervision}</option>
                          <option value="Commercial & Tenders">{t.deptTenders}</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        {t.subjectLabel} *
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={
                          lang === 'FA'
                            ? 'مثال: استعلام خدمات امکان‌سنجی بندر تجاری یا بازبینی سازه'
                            : 'Inquiry regarding Port Master Plan or Structural Review'
                        }
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                      />
                      {errors.subject && <p className="text-[11px] text-rose-500">{errors.subject}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        {t.messageLabel} *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          lang === 'FA'
                            ? 'لطفاً شرح درخواست، مشخصات فنی یا سوالات خود را مرقوم فرمایید...'
                            : 'Please write your detailed message or inquiry here...'
                        }
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] bg-white"
                      />
                      {errors.message && <p className="text-[11px] text-rose-500">{errors.message}</p>}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors shadow-sm"
                      >
                        <Send className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                        <span>{lang === 'FA' ? 'ارسال پیام رسمی' : 'Send Message'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
