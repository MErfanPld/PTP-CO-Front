import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language, UI_STRINGS } from '../data/translations';
import { 
  Award, 
  Shield, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Building,
  Target,
  Sparkles,
  TreePine
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: string) => void;
  onOpenRfp: () => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenRfp, lang }) => {
  const t = UI_STRINGS[lang];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00b4a0]">
            <span>{lang === 'FA' ? 'شناسنامه و تاریخچه شرکت' : 'Corporate Profile'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'FA' ? 'بیش از ۳۵ سال سابقه مهندسی' : 'Over 35 Years of Excellence'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl text-balance">
            {lang === 'FA' ? COMPANY_INFO.nameFa : COMPANY_INFO.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            {lang === 'FA' 
              ? 'تأسیس در اواخر دهه ۱۳۶۰ توسط چهار تن از مهندسان شاخص عمران و سازه؛ پویا طرح پارس طی سه دهه فعالیت به یکی از مراجع معتبر مهندسی بنادر، سازه‌های دریایی و زیرساخت‌های ساحلی بدل شده است.'
              : 'Established in the late 1980s by four pioneering civil engineers, PTP Co has evolved into one of the region’s premier consulting engineering practices dedicated to coastal dynamics, port engineering, and complex marine infrastructure.'
            }
          </p>
        </div>
      </section>

      {/* 1. History & Evolution */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003366]">
                {lang === 'FA' ? 'ریشه‌ها و پیشینه شکل‌گیری' : 'Our Founding & Heritage'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                {lang === 'FA' ? 'از یک هسته تخصصی تا مرجع مهندسی بنادر کشور' : 'From a Specialized Boutique to a National Maritime Authority'}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'مهندسین مشاور پویا طرح پارس بر این باور بنیان نهاده شد که حل مسائل سواحل و بنادر نیازمند پیوند ناگسستنی میان مدل‌های ریاضی پیشرفته، سنجش‌های دقیق میدانی و شناخت عمیق از مصالح بادوام در اقلیم‌های خورنده جنوب و شمال ایران است.'
                  : 'Pouya Tarh Pars was founded with a singular conviction: that coastal and maritime engineering demands an uncompromising fusion of advanced mathematical modeling, empirical field oceanography, and structural durability in harsh saline environments.'
                }
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'امروزه با گذشت بیش از ۳۵ سال، این مجموعه با بهره‌گیری از ۵۰ نفر از مهندسان ارشد، متخصصان هیدرودینامیک و ناظران مقیم، در مهم‌ترین پروژه‌های بنادر شهید رجایی، بوشهر، امیرآباد، چابهار و خلیج گرگان نقشی تعیین‌کننده ایفا نموده است.'
                  : 'Over the past three and a half decades, our practice has grown to approximately fifty specialized engineers, oceanographers, and project directors. We have actively designed and supervised basic national maritime projects spanning the Persian Gulf, the Sea of Oman, and the Caspian Sea.'
                }
              </p>

              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="font-mono text-xl font-bold text-[#003366]">{lang === 'FA' ? '۱۳۶۸' : '1989'}</div>
                  <div className="text-slate-500 font-medium">{lang === 'FA' ? 'سال تأسیس رسمی' : 'Founding Year'}</div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-[#003366]">{lang === 'FA' ? '۵۰+' : '50+'}</div>
                  <div className="text-slate-500 font-medium">{lang === 'FA' ? 'کادر مهندسی و نظارتی' : 'Multidisciplinary Engineers'}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <img
                  src="/images/modeling_hydrodynamics.jpg"
                  alt="PTP Co Senior Engineering Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission, Vision & Core Values */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009688]">
              {lang === 'FA' ? 'اصول بنیادین حرفه‌ای' : 'Principles of Operation'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'FA' ? 'ماموریت سازمانی، چشم‌انداز علمی و اخلاق مهندسی' : 'Mission, Scientific Vision & Professional Ethics'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-md bg-sky-50 flex items-center justify-center text-[#003366]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{lang === 'FA' ? 'ماموریت ما' : 'Our Mission'}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'ارائه خدمات مهندسی و مشاوره‌ای در بالاترین تراز علمی و فناوری، جلب اعتماد کارفرمایان و پایبندی به اصالت محاسبات و قابلیت اجرای عملی سازه‌ها.'
                  : 'To provide engineering and consulting services at the highest scientific and technological levels, cultivating lasting client trust through rigorous calculation, empirical data verification, and practical constructability.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-md bg-teal-50 flex items-center justify-center text-[#009688]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{lang === 'FA' ? 'دقت و ضریب اطمینان' : 'Engineering Rigor'}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'بدون مصالحه بر سر ایمنی؛ طراحی سازه‌هایی که در برابر امواج ۱۰۰ ساله، شدیدترین زلزله‌ها و نفوذ یون‌های مهاجم کلرید دهه‌ها استوار می‌مانند.'
                  : 'Zero compromise on safety factors or durability. We design structures that withstand 100-year return period waves, severe seismic spectra, and aggressive marine chloride penetration.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-3 shadow-2xs">
              <div className="w-10 h-10 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-700">
                <TreePine className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{lang === 'FA' ? 'حفاظت از بوم‌سازگان سواحل' : 'Environmental Stewardship'}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA'
                  ? 'مهندسی پایدار در توازن با طبیعت؛ نجات تالاب‌ها، حفظ بستر زیستی خلیج گرگان و پاسداری از مرجان‌های خلیج فارس بخش جدانشدنی از طرح‌های ماست.'
                  : 'We believe marine engineering must protect sensitive ecosystems. From preserving the Gorgan Bay biosphere to safeguarding Persian Gulf coral reefs, environmental balance is integral to every design.'
                }
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Official Accreditations, Certificates & Quality Standards */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#003366]">
              {lang === 'FA' ? 'صلاحیت‌های قانونی' : 'Verified Credentials'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'FA' ? 'گواهینامه‌های رسمی و رتبه‌بندی سازمان برنامه و بودجه' : 'Certifications & Official Qualifications'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'FA' ? 'پویا طرح پارس دارای عالی‌ترین رتبه خدمات مهندسی مشاور و گواهینامه‌های معتبر ایزو است.' : 'PTP Co holds top-tier government qualifications and international ISO certifications.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(lang === 'FA' ? COMPANY_INFO.certificationsFa : COMPANY_INFO.certifications).map((cert, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-[#009688] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-snug">{cert}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === 'FA' ? 'رسماً ممیزی و تمدید دوره‌ای شده' : 'Officially audited and continuously renewed'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Organizational Structure & Divisions */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009688]">
              {lang === 'FA' ? 'ساختار سازمانی' : 'Multidisciplinary Synergy'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'FA' ? 'چهار دپارتمان تخصصی مستقل' : 'Four Core Specialized Departments'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-2">
              <span className="text-xs font-mono text-slate-400">01</span>
              <h4 className="text-sm font-bold text-slate-900">{lang === 'FA' ? 'مهندسی بنادر و سواحل' : 'Ports & Coastal Engineering'}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA' ? 'موج‌شکن‌ها، طرح‌های جامع بندری، لایروبی، کانال‌های ناوبری و سازه‌های حفاظت ساحلی.' : 'Breakwaters, terminal planning, navigability channels, and coastal protection works.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-2">
              <span className="text-xs font-mono text-slate-400">02</span>
              <h4 className="text-sm font-bold text-slate-900">{lang === 'FA' ? 'سازه‌های دریایی و فراساحل' : 'Marine Structures & Offshore'}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA' ? 'اسکله‌های پایه‌دار، خطوط آبگیر، دلفین‌های مهار و تحلیل تنش اجزای محدود.' : 'Deepwater jetties, intake/outfall structures, berthing dolphins, and finite element stress analysis.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-2">
              <span className="text-xs font-mono text-slate-400">03</span>
              <h4 className="text-sm font-bold text-slate-900">{lang === 'FA' ? 'اقیانوس‌شناسی، GIS و مدلسازی' : 'Oceanography, GIS & Modeling'}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA' ? 'عمق‌سنجی چندپرتوی، جریان‌سنجی ADCP، سنجش از دور و شبیه‌سازی MIKE و Delft3D.' : 'Multibeam bathymetry, ADCP surveys, satellite remote sensing, and MIKE/Delft3D simulations.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-2">
              <span className="text-xs font-mono text-slate-400">04</span>
              <h4 className="text-sm font-bold text-slate-900">{lang === 'FA' ? 'نظارت کارگاهی و کنترل کیفیت' : 'Project Supervision & QA/QC'}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'FA' ? 'استقرار مهندسان ناظر مقیم در بنادر شهید رجایی، بوشهر و امیرآباد جهت تضمین کیفیت.' : 'Resident site engineers in Bandar Abbas, Bushehr, and Amirabad ensuring construction compliance.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Ecological & Coastal Preservation Initiative */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#003366] text-white rounded-2xl p-8 lg:p-12 overflow-hidden relative">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00b4a0]">
                {lang === 'FA' ? 'مسئولیت زیست‌محیطی' : 'Environmental Commitment'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {lang === 'FA' ? 'حفاظت از پهنه‌های حساس آبی: نجات خلیج گرگان و زیستگاه‌های خلیج فارس' : 'Protecting Sensitive Waterbodies: The Gorgan Bay & Persian Gulf Initiatives'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === 'FA'
                  ? 'مهندسین مشاور پویا طرح پارس مطالعات بنیادین نجات خلیج گرگان را بر عهده داشتند؛ با شبیه‌سازی‌های هیدرودینامیکی اثبات شد که بازگشایی هدفمند کانال آشوراده مانع از پیشروی شوری و مرگ تالاب بین‌المللی میانکاله می‌شود.'
                  : 'PTP Co has spearheaded strategic investigations to remediate critical environmental hotspots. Our hydrodynamic numerical models for Gorgan Bay demonstrated viable dredging alignments that revitalize water exchange without inducing destructive siltation in the Miankaleh Biosphere.'
                }
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('research')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#003366] bg-white hover:bg-slate-100 rounded-md transition-colors"
                >
                  <span>{lang === 'FA' ? 'مشاهده مقالات زیست‌محیطی' : 'Explore Environmental Studies'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'FA' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            {lang === 'FA' ? 'همکاری با پویا طرح پارس در پروژه‌های پیش رو' : 'Partner with PTP Co for Your Next Project'}
          </h3>
          <p className="text-xs text-slate-600">
            {lang === 'FA' 
              ? 'تیم مدیران و مهندسان ارشد شرکت آماده برگزاری جلسات فنی و دریافت اسناد استعلام و مناقصات هستند.' 
              : 'Our senior directors and discipline heads are available for exploratory meetings and technical RFPs.'}
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
