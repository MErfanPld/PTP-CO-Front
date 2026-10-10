import React, { useState } from 'react';
import { CAREERS_DATA, JobOpening } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { MapPin, Clock, ArrowRight, CheckCircle2, Upload, X } from 'lucide-react';

interface CareersPageProps {
  lang: Language;
}

export const CareersPage: React.FC<CareersPageProps> = ({ lang }) => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    phone: '',
    coverNote: '',
    fileName: '',
  });
  const [applySubmitted, setApplySubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const t = UI_STRINGS[lang];

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setApplySubmitted(false);
    setApplicantData({ name: '', email: '', phone: '', coverNote: '', fileName: '' });
    setErrors({});
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicantData({ ...applicantData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!applicantData.name.trim()) {
      errs.name = lang === 'FA' ? 'تکمیل نام و نام خانوادگی الزامی است' : 'Full name is required';
    }
    if (!applicantData.email.trim() || !applicantData.email.includes('@')) {
      errs.email = lang === 'FA' ? 'آدرس ایمیل معتبر الزامی است' : 'Valid email is required';
    }
    if (!applicantData.phone.trim()) {
      errs.phone = lang === 'FA' ? 'شماره تماس الزامی است' : 'Phone number is required';
    }
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setApplySubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00b4a0]">
            <span>{t.careersKicker}</span>
            <span aria-hidden="true">·</span>
            <span>{t.careersBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl text-balance">
            {t.careersTitle}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            {t.careersDesc}
          </p>
        </div>
      </section>

      {/* 1. Culture & Working at PTP Co */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#003366]">
              {lang === 'FA' ? 'فرهنگ سازمانی پویا طرح پارس' : 'Engineering Culture'}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {t.engineeringCultureTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-md bg-sky-100 text-[#003366] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'FA' ? 'پروژه‌های کلان و استراتژیک ملی' : 'National-Scale Challenges'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'فرصت طراحی و محاسبات مهندسی در بنادر عمیق تجاری، پایانه‌های صادرات نفت و گاز، و اسکله‌های اصلی کریدورهای ترانزیتی شمال و جنوب کشور.'
                  : "Work on deepwater ports, strategic breakwaters, and ecological recovery studies that shape our country's economic and coastal future."}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-md bg-teal-100 text-[#009688] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'FA' ? 'رشد علمی مستمر و آموزش تخصصی' : 'Continuous Scientific Growth'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'همکاری با اساتید برجسته اقیانوس‌شناسی، انتشار مقالات در مجلات معتبر ISI و تسلط بر جدیدترین بسته‌های نرم‌افزاری DHI MIKE و Delft3D.'
                  : 'Collaborate with top oceanographers, publish peer-reviewed papers, and receive training in the latest hydrodynamic simulation suites.'}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-md bg-slate-200 text-slate-800 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'FA' ? 'تجربه میدانی و نظارت ساحلی' : 'Empirical & Field Exposure'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'ارتباط مستقیم میان مدل‌های محاسباتی رایانه‌ای و رفتار واقعی امواج در محیط دریا از طریق بازدیدهای کارگاهی و حضور در ایستگاه‌های نظارت مقیم.'
                  : 'Connect computational design to real ocean environments through site visits and field supervision in Bandar Abbas, Bushehr, and the Caspian.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Current Openings */}
      <section className="py-20 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.activeVacanciesTitle}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'FA'
                ? 'فهرست فرصت‌های شغلی فعال در دفتر مرکزی تهران و دفاتر نظارت مقیم کارگاهی در بنادر جنوب و شمال'
                : 'Review current vacancies across our Tehran Headquarters and coastal supervision field offices.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREERS_DATA.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#009688] uppercase">
                      {lang === 'FA' ? job.departmentFa : job.department}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{lang === 'FA' ? job.typeFa : job.type}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {lang === 'FA' ? job.titleFa : job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lang === 'FA' ? job.locationFa : job.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lang === 'FA' ? job.experienceFa : job.experience}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'FA' ? job.descriptionFa : job.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      {lang === 'FA' ? 'شرایط و مهارت‌های مورد نیاز:' : 'Key Qualifications:'}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {(lang === 'FA' ? job.requirementsFa : job.requirements).map((req, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#009688] font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded transition-colors shadow-2xs"
                  >
                    <span>{t.applyNow}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#009688]">
                  {lang === 'FA' ? 'فرم درخواست استخدام مهندسی' : 'Job Application'}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'FA' ? selectedJob.titleFa : selectedJob.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'FA' ? selectedJob.locationFa : selectedJob.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {applySubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {t.applicationSentTitle}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    {lang === 'FA'
                      ? `با تشکر از شما، ${applicantData.name}. رزومه و اطلاعات ارسالی شما برای بررسی در اختیار شورای فنی و منابع انسانی پویا طرح پارس قرار گرفت.`
                      : `Thank you, ${applicantData.name}. Your resume and credentials have been forwarded to PTP Co's HR & Technical Council.`}
                  </p>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#003366] rounded"
                  >
                    {t.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      {t.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      placeholder={lang === 'FA' ? 'نام و نام خانوادگی متقاضی' : "Engineer's Full Name"}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-[#003366] focus:outline-none"
                    />
                    {errors.name && <p className="text-[11px] text-rose-500">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        {t.emailLabel} *
                      </label>
                      <input
                        type="email"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                        placeholder="engineer@domain.com"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-[#003366] focus:outline-none"
                      />
                      {errors.email && <p className="text-[11px] text-rose-500">{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                        placeholder={lang === 'FA' ? '۰۹۱۲۰۰۰۰۰۰۰' : '+98 912 000 0000'}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-[#003366] focus:outline-none"
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      {t.resumeUploadLabel}
                    </label>
                    <div className="border border-dashed border-slate-300 rounded-md p-4 text-center bg-slate-50 cursor-pointer relative hover:bg-slate-100 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <span className="text-xs text-slate-600 block">
                        {applicantData.fileName ? (
                          <strong className="text-[#003366]">{applicantData.fileName}</strong>
                        ) : lang === 'FA' ? (
                          'جهت بارگذاری فایل رزومه اینجا کلیک کنید یا فایل را بکشید'
                        ) : (
                          'Click or drag your CV file here'
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      {t.coverNoteLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={applicantData.coverNote}
                      onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}
                      placeholder={
                        lang === 'FA'
                          ? 'تسلط بر نرم‌افزارهای مهندسی (مانند MIKE 21، SACS، PLAXIS) یا سوابق شاخص مرتبط...'
                          : 'Highlight relevant software expertise (e.g. MIKE 21, SACS, PLAXIS) or notable coastal projects...'
                      }
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-[#003366] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
                    >
                      {lang === 'FA' ? 'انصراف' : 'Cancel'}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003366] hover:bg-[#002244] rounded shadow-sm"
                    >
                      {t.applyNow}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
