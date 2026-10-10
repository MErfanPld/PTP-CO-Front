export interface Project {
  id: string;
  title: string;
  titleFa: string;
  category: 'coastal-port' | 'marine-structures' | 'environmental-studies' | 'civil-infrastructure' | 'oil-gas';
  client: string;
  clientFa: string;
  location: string;
  locationFa: string;
  region: 'Persian Gulf' | 'Sea of Oman' | 'Caspian Sea' | 'Inland / Capital';
  regionFa: string;
  year: string;
  summary: string;
  summaryFa: string;
  description: string;
  descriptionFa: string;
  challenges: string[];
  challengesFa: string[];
  solutions: string[];
  solutionsFa: string[];
  deliverables: string[];
  deliverablesFa: string[];
  image: string;
  featured?: boolean;
  metrics?: { label: string; labelFa: string; value: string }[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  titleFa: string;
  subtitle: string;
  subtitleFa: string;
  overview: string;
  overviewFa: string;
  capabilities: string[];
  capabilitiesFa: string[];
  technologies: string[];
  deliverables: string[];
  deliverablesFa: string[];
  featuredProject: string;
  iconName: string;
}

export interface Publication {
  id: string;
  title: string;
  titleFa: string;
  authors: string;
  authorsFa: string;
  category: 'Oceanography' | 'Hydrodynamics' | 'Coastal Ecology' | 'Structural Engineering';
  categoryFa: string;
  year: string;
  journal: string;
  abstract: string;
  abstractFa: string;
  doi?: string;
  downloadsCount: number;
}

export interface JobOpening {
  id: string;
  title: string;
  titleFa: string;
  department: string;
  departmentFa: string;
  location: string;
  locationFa: string;
  type: string;
  typeFa: string;
  experience: string;
  experienceFa: string;
  description: string;
  descriptionFa: string;
  requirements: string[];
  requirementsFa: string[];
}

export const COMPANY_INFO = {
  name: "Pouya Tarh Pars Consulting Engineers",
  nameFa: "مهندسین مشاور پویا طرح پارس",
  shortName: "PTP Co",
  shortNameFa: "پویا طرح پارس",
  tagline: "Precision Engineering for Coastal, Port & Maritime Infrastructure",
  taglineFa: "مهندسی دقیق بنادر، سازه‌های دریایی و زیرساخت‌های ساحلی",
  established: 1989,
  yearsOfExperience: 37,
  headquarters: {
    address: "No. 6, Azadegan Boulevard, Sheikh-Bahaee Jonoubi Ave., Kordestan Highway, Tehran 1437615613, Iran",
    addressFa: "تهران، بزرگراه کردستان، خیابان شیخ بهایی جنوبی، بلوار آزادگان، نبش کوچه زره‌پوش، پلاک ۶، طبقه دوم، کدپستی ۱۴۳۷۶۱۵۶۱۳",
    phone: "+98 (21) 88015058",
    altPhone: "+98 (21) 88015060",
    fax: "+98 (21) 88029956",
    email: "info@ptpco.com",
    hours: "Saturday – Wednesday: 08:00 – 17:00 (GMT+3:30)",
    hoursFa: "شنبه تا چهارشنبه: ۸:۰۰ الی ۱۷:۰۰"
  },
  branches: [
    {
      city: "Bandar Abbas",
      cityFa: "بندرعباس",
      name: "Southern Maritime Supervision Office",
      nameFa: "دفتر نظارت مقیم حوزه جنوب و خلیج فارس",
      focus: "Shahid Rajaee Port Complex & Persian Gulf Operations",
      focusFa: "مجتمع بندری شهید رجایی و پروژه‌های هرمزگان و قشم",
      contact: "bandar.abbas@ptpco.com"
    },
    {
      city: "Bushehr",
      cityFa: "بوشهر",
      name: "Gulf Field Station",
      nameFa: "ایستگاه نظارت و بازرسی بندر بوشهر",
      focus: "Commercial Docks & Marine Repair Supervisions",
      focusFa: "اسکله‌های تجاری، مروارید و پایانه صادراتی",
      contact: "bushehr@ptpco.com"
    },
    {
      city: "Amirabad & Anzali",
      cityFa: "امیرآباد و انزلی",
      name: "Northern Caspian Operations",
      nameFa: "دفتر مطالعات و نظارت سواحل شمال و دریای خزر",
      focus: "Caspian Sea Morphological Stations & Gorgan Bay Survey",
      focusFa: "مطالعات هیدرودینامیک خزر و طرح نجات خلیج گرگان",
      contact: "caspian@ptpco.com"
    }
  ],
  stats: [
    { value: "200+", valueFa: "۲۰۰+", label: "Completed Projects", labelFa: "پروژه تکمیل‌شده", detail: "Spanning major national ports and waterways", detailFa: "در بنادر و آبراه‌های استراتژیک شمال و جنوب" },
    { value: "1,800+", valueFa: "۱,۸۰۰+", unit: "km", label: "Coastlines Analyzed", labelFa: "کیلومتر پایش سواحل", detail: "Comprehensive bathymetric & hydrodynamic surveys", detailFa: "مدلسازی هیدروگرافی و ژئومورفولوژی ساحلی" },
    { value: "35+", valueFa: "۳۵+", label: "Port Terminals & Quays", labelFa: "پایانه و اسکله تخصصی", detail: "Engineered from master plan to commissioning", detailFa: "طراحی از طرح جامع تا نظارت بر احداث و بهره‌برداری" },
    { value: "25+", valueFa: "۲۵+", unit: "yrs", label: "Specialized Heritage", labelFa: "سال صلاحیت رتبه یک", detail: "Grade 1 Accredited Consulting Engineers", detailFa: "پایه یک بندرسازی و سازه‌های دریایی سازمان برنامه و بودجه" }
  ],
  certifications: [
    "Grade 1 Consulting Qualification in Port & Marine Structures (PBO / MPO)",
    "Ports and Maritime Organization (PMO) Approved Technical Partner",
    "ISO 9001:2015 Quality Management Systems Certified",
    "ISO 14001:2015 Environmental Management Standard",
    "ISO 45001:2018 Occupational Health and Safety Standard",
    "Member of Iranian Society of Consulting Engineers (ISCE)"
  ],
  certificationsFa: [
    "گواهینامه صلاحیت خدمات مشاوره پایه یک در تخصص بندرسازی و سازه‌های دریایی (سازمان برنامه و بودجه)",
    "مشاور مورد تایید سازمان بنادر و دریانوردی کشور (PMO)",
    "دارنده گواهینامه بین‌المللی مدیریت کیفیت ISO 9001:2015",
    "استاندارد بین‌المللی مدیریت زیست‌محیطی ISO 14001:2015",
    "استاندارد ایمنی و بهداشت حرفه‌ای ISO 45001:2018",
    "عضو رسمی جامعه مهندسان مشاور ایران"
  ]
};

// Verified Projects from ptpco.com
export const PROJECTS_DATA: Project[] = [
  {
    id: "qfpc-jetty-qeshm",
    title: "QFPC Deepwater Marine Jetty & Intake",
    titleFa: "طراحی جانمایی و اسکله عمیق قشم (QFPC)",
    category: "marine-structures",
    client: "Qeshm Fish Protein Company (QFPC)",
    clientFa: "شرکت پروتئین دریایی قشم",
    location: "Qeshm Island, Persian Gulf",
    locationFa: "جزیره قشم، خلیج فارس",
    region: "Persian Gulf",
    regionFa: "خلیج فارس",
    year: "2021",
    featured: true,
    summary: "Site selection, hydrodynamic optimization, and structural layout design for specialized offshore fish pumping jetty and seawater intake.",
    summaryFa: "مکان‌یابی، بهینه‌سازی هیدرودینامیکی و طراحی سازه‌ای اسکله تخلیه و خطوط آبگیر عمیق در جزیره قشم.",
    description: "Comprehensive engineering consultancy including site selection, marine geotechnical evaluation, wave refraction modeling, and complete structural design for the QFPC Jetty. Engineered to safely dock vessels and pump lantern fish through specialized suction conduits directly to processing facilities without interrupting coastal sediment transport.",
    descriptionFa: "خدمات کامل مهندسی شامل مکان‌یابی، تحلیل‌های ژئوتکنیک دریایی، مدلسازی انکسار امواج و طراحی سازه‌ای کامل اسکله QFPC به منظور پهلوگیری ایمن شناورها و پمپاژ ماهیان میکتوفیده (فانوس‌ماهی) بدون آسیب به تبادل رسوب نوار ساحلی.",
    challenges: [
      "Severe tidal currents and complex bathymetry off the southern cliffs of Qeshm Island.",
      "High salinity corrosive marine atmosphere requiring specialized concrete cover and cathodic protection.",
      "Strict environmental constraints regarding local coral colonies and sea turtle nesting zones."
    ],
    challengesFa: [
      "جریان‌های شدید جزرومدی و توپوگرافی پیچیده بستر در سواحل جنوبی قشم.",
      "محیط بسیار خورنده با شوری بالا نیازمند بتن مقاوم به کلرید و حفاظت کاتدی پیشرفته.",
      "ملاحظات سخت‌گیرانه زیست‌محیطی درباره کلنی‌های مرجانی و تخم‌گذاری لاک‌پشت‌های دریایی."
    ],
    solutions: [
      "Conducted 3D MIKE 21 hydrodynamic simulations to optimize jetty orientation against prevailing swells.",
      "Engineered high-durability prestressed concrete piling with sacrificial anode cathodic protection.",
      "Integrated eco-friendly low-velocity seawater intake screen to prevent marine life entrainment."
    ],
    solutionsFa: [
      "شبیه‌سازی سه‌بعدی هیدرودینامیک با MIKE 21 جهت تعیین زاویه بهینه اسکله نسبت به امواج غالب.",
      "طراحی شمع‌های بتنی پیش‌تنیده پرمقاومت مجهز به حفاظت کاتدی آند فداشونده.",
      "طراحی توری‌های آبگیر با سرعت مکش کنترل‌شده برای جلوگیری از ورود موجودات دریایی."
    ],
    deliverables: [
      "Detailed civil & structural calculations and construction drawings",
      "Hydrodynamic wave penetration & downtime analysis report",
      "Marine geotechnical baseline and scour prevention design",
      "Environmental monitoring and mitigation plan"
    ],
    deliverablesFa: [
      "دفترچه محاسبات کامل سازه دریایی و نقشه‌های اجرایی",
      "گزارش تحلیلی نفوذ امواج و توقف عملیات پهلوگیری (Downtime Analysis)",
      "طراحی محافظت در برابر آبشستگی بستر و مبانی ژئوتکنیک دریایی",
      "برنامه پایش و کاهش اثرات زیست‌محیطی (EMP)"
    ],
    image: "/src/assets/images/ptp_project_jetty_intake_1791622387563.jpg",
    metrics: [
      { label: "Water Depth", labelFa: "عمق پای اسکله", value: "-14.5m CD" },
      { label: "Berth Capacity", labelFa: "ظرفیت شناور", value: "3,500 DWT" },
      { label: "Intake Flow", labelFa: "دبی آبگیری", value: "4.2 m³/s" }
    ]
  },
  {
    id: "shahid-rajaee-masterplan",
    title: "Shahid Rajaee Port 200-Hectare Logistics Master Plan",
    titleFa: "طرح جامع اراضی پشتیبانی و لجستیک ۲۰۰ هکتاری بندر شهید رجایی",
    category: "coastal-port",
    client: "Ports & Maritime Organization (PMO)",
    clientFa: "سازمان بنادر و دریانوردی",
    location: "Bandar Abbas, Hormozgan",
    locationFa: "بندرعباس، استان هرمزگان",
    region: "Persian Gulf",
    regionFa: "خلیج فارس",
    year: "2020",
    featured: true,
    summary: "Master planning, heavy logistics pavement design, and open storage infrastructure for 200 hectares at Iran's premier container hub.",
    summaryFa: "تهیه طرح جامع، طراحی روسازی‌های فوق‌سنگین کانتینری و شبکه جمع‌آوری آب‌های سطحی اراضی ۲۰۰ هکتاری بندر شهید رجایی.",
    description: "Pouya Tarh Pars prepared the comprehensive master plan, storm drainage network, heavy-duty intermodal pavement design, and logistics zoning for 200 hectares of container and bulk open storage facilities at Shahid Rajaee Port Complex. The project integrates state-of-the-art terminal operating logistics with extreme climatic durability.",
    descriptionFa: "مهندسین مشاور پویا طرح پارس مسئولیت تهیه طرح جامع تفصیلی، زون‌بندی پایانه‌های کانتینری و فله، طراحی روسازی بتنی سنگین ویژه ریچ‌استکرها و جرثقیل‌های RTG و شبکه هدایت آب‌های سطحی ۲۰۰ هکتار از اراضی توسعه مجتمع بندری شهید رجایی را بر عهده داشته است.",
    challenges: [
      "High ground water table with hyper-saline subsoil requiring specialized ground improvement.",
      "Massive surface wheel loads from 45-tonne reach stackers and RTG container cranes.",
      "Intense flash flood risks requiring rapid gravity storm drainage outfall design."
    ],
    challengesFa: [
      "بالا بودن سطح آب زیرزمینی با خاک‌های فوق‌شور نیازمند بهسازی ژئوتکنیکی عمیق.",
      "بارهای متمرکز چرخ فوق‌سنگین ریچ‌استکرهای ۴۵ تنی و ترافیک فشرده کانتینری.",
      "ریسک سیلاب‌های ناگهانی اقلیم بندرعباس و ضرورت زهکشی ثقلی پرسرعت به دریا."
    ],
    solutions: [
      "Designed dynamic compaction and prefabricated vertical drains (PVD) foundation treatment.",
      "Formulated fiber-reinforced concrete block paving with high sulfate-resistant cement.",
      "Engineered automated retention basin system mitigating peak storm surges."
    ],
    solutionsFa: [
      "طراحی سیستم تراکم دینامیکی و زه‌کش‌های نواری قائم پیش‌ساخته (PVD) برای تحکیم خاک.",
      "فرمولاسیون دال‌های بتنی الیافی با سیمان ضدسولفات مقاوم در برابر خوردگی نمکی.",
      "طراحی حوضچه‌های آرامش و کانال‌های هیدرولیکی انتقال سریع سیلاب به دریا."
    ],
    deliverables: [
      "Comprehensive 200-hectare Master Zoning and Circulation Plan",
      "Heavy-duty pavement structural designs and loading specs",
      "Underground utilities, fire hydrants, and electrical duct networks",
      "Environmental impact assessment and PMO executive approvals"
    ],
    deliverablesFa: [
      "دفترچه کامل طرح جامع ۲۰۰ هکتاری و جریان ترافیک لجستیکی",
      "نقشه‌ها و محاسبات سازه‌ای روسازی فوق‌سنگین کانتینری",
      "طراحی شبکه تاسیسات زیربنایی، اطفا حریق و کانال‌های برق",
      "تاییدیه رسمی مطالعات زیست‌محیطی از مراجع ذی‌ربط سازمان بنادر"
    ],
    image: "/src/assets/images/ptp_hero_marine_port_1791622375662.jpg",
    metrics: [
      { label: "Total Area", labelFa: "مساحت کل اراضی", value: "2,000,000 m²" },
      { label: "Container Capacity", labelFa: "ظرفیت کانتینری", value: "450,000 TEU" },
      { label: "Heavy Pavement", labelFa: "سطح روسازی سنگین", value: "1.4M m²" }
    ]
  },
  {
    id: "caspian-gorgan-bay-study",
    title: "Caspian Sea Dynamics & Gorgan Bay Preservation Strategic Study",
    titleFa: "مطالعات راهبردی هیدرودینامیک دریای خزر و نجات خلیج گرگان",
    category: "environmental-studies",
    client: "National Department of Environment & PMO",
    clientFa: "سازمان حفاظت محیط زیست و سازمان بنادر و دریانوردی",
    location: "Gorgan Bay / Miankaleh Peninsula, Golestan",
    locationFa: "خلیج گرگان و شبه‌جزیره میانکاله، استان گلستان",
    region: "Caspian Sea",
    regionFa: "دریای خزر",
    year: "2022",
    featured: true,
    summary: "National scientific modeling of rapid Caspian Sea water level fluctuations and ecological restoration channels for Gorgan Bay.",
    summaryFa: "مدلسازی علمی کاهش تراز آب دریای خزر و طراحی کانال‌های هیدرودینامیکی احیای اکولوژیک خلیج گرگان.",
    description: "A monumental strategic study assessing the rapid decline of Caspian Sea water levels and the imminent desiccation of Gorgan Bay. PTP Co deployed comprehensive hydrodynamic, sediment transport, and salinity exchange models (DELFT3D & SWAN) to evaluate channel dredging alternatives, tidal exchange efficiency, and ecological preservation of the Miankaleh Biosphere Reserve.",
    descriptionFa: "پروژه ملی و راهبردی ارزیابی پیامدهای افت تراز آب خزر و خطر خشکیدن خلیج گرگان. پویا طرح پارس با بهره‌گیری از مدلسازی‌های پیشرفته هیدرودینامیک و انتقال رسوب، سناریوهای لایروبی کانال‌های آشوراده و چپقلی و احیای تبادل آب و شوری را تحلیل و طرح مهندسی بهینه را تدوین کرد.",
    challenges: [
      "Long-term cyclical and climate-driven drop of over 1.5 meters in Caspian water levels.",
      "Hypersalinization and stagnation threatening unique sturgeon spawning habitats.",
      "Complex longshore sand transport continuously silting the natural inlet channels."
    ],
    challengesFa: [
      "افت مداوم و بیش از ۱.۵ متری تراز آب خزر بر اثر تغییرات اقلیمی و کاهش آورد رودخانه‌ها.",
      "افزایش شدید شوری و رکود آب که زیستگاه ماهیان خاویاری میانکاله را تهدید می‌کرد.",
      "حرکت رسوبات ساحلی ناشی از امواج که دهانه کانال‌های تبادل آب را مسدود می‌نمود."
    ],
    solutions: [
      "Developed 10-year calibrated numerical models simulating hydrodynamic exchange across Ashuradeh inlet.",
      "Formulated sustainable dredging geometries with training dikes to prevent littoral sand re-entry.",
      "Designed real-time water quality monitoring network across Gorgan Bay."
    ],
    solutionsFa: [
      "توسعه مدل کالیبره‌شده هیدرودینامیک ۱۰ ساله برای پیش‌بینی دقیق تبادل جزرومدی کانال آشوراده.",
      "طراحی مقاطع بهینه لایروبی همراه با دایک‌های هادی رسوب جهت پایداری طولانی‌مدت بازگشایی.",
      "تدوین شبکه ایستگاه‌های آنلاین پایش شوری، اکسیژن و تبادل بیوشیمیایی آب."
    ],
    deliverables: [
      "National Hydrodynamic & Morphological Feasibility Report",
      "Executive dredging & channel alignment engineering blueprints",
      "Biochemical exchange and salinity balance forecasts",
      "Cabinet-level strategic recommendations for international Caspian policy"
    ],
    deliverablesFa: [
      "گزارش جامع ملی امکان‌سنجی هیدرودینامیک و مورفولوژی خلیج گرگان",
      "نقشه‌ها و مقاطع اجرایی لایروبی و تثبیت کانال آشوراده",
      "شبیه‌سازی بیلان شوری و اکسیژن‌رسانی به تالاب میانکاله",
      "ارائه راهکارهای سیاستی به کارگروه ملی نجات خلیج گرگان در هیئت دولت"
    ],
    image: "/src/assets/images/ptp_modeling_hydrodynamics_1791622399488.jpg",
    metrics: [
      { label: "Waterbody Modeled", labelFa: "مساحت پهنه آبی مدلسازی", value: "400 km²" },
      { label: "Dredging Volume", labelFa: "حجم لایروبی طراحی‌شده", value: "1.2M m³" },
      { label: "Flow Exchange", labelFa: "بهبود تبادل هیدرولیکی", value: "+38% Salinity Renewal" }
    ]
  },
  {
    id: "tabiat-bridge-structural-calculations",
    title: "Tabiat Bridge Structural Analysis & Engineering Verification",
    titleFa: "محاسبات کنترلی و تدقیق سازه‌ای پل طبیعت تهران",
    category: "civil-infrastructure",
    client: "Tehran Renovation Organization",
    clientFa: "سازمان نوسازی عباس‌آباد / شهرداری تهران",
    location: "Ab-o-Atash to Taleghani Park, Tehran",
    locationFa: "اراضی عباس‌آباد، تهران",
    region: "Inland / Capital",
    regionFa: "پایتخت و درون‌سرزمینی",
    year: "2019",
    featured: true,
    summary: "Independent 3D finite element structural calculation review and dynamic wind/seismic verification for Tehran's iconic pedestrian bridge.",
    summaryFa: "انجام محاسبات کنترلی مستقل، تحلیل سه‌بعدی اجزای محدود، ارتعاشات دینامیکی باد و زلزله برای پل نمادین طبیعت.",
    description: "Pouya Tarh Pars was entrusted with independent structural checking calculations for the world-renowned 270-meter multi-level three-dimensional steel truss Tabiat Bridge. The study evaluated complex spatial joints, aerodynamic vortex shedding under prevailing Tehran mountain winds, and high-intensity seismic spectral behavior across multiple fault lines.",
    descriptionFa: "انجام بررسی‌های تخصصی و محاسبات کنترلی مستقل سازه فولادی خرپایی سه‌بعدی پل طبیعت به طول ۲۷۰ متر در سه طبقه. این مطالعات شامل تحلیل گره‌های فضایی ریخته‌گری‌شده، پدیده تاوه‌ریزی بادهای دامنه البرز و پاسخ لرزه‌ای غیرخطی بر روی گسل‌های تهران بود.",
    challenges: [
      "Complex curved 3D tubular lattice steel structure spanning two major urban highways.",
      "Stringent pedestrian footfall comfort criteria requiring micro-vibration analysis.",
      "Zone 1 high seismic hazard classification with non-uniform ground motion across bridge piers."
    ],
    challengesFa: [
      "هندسه پیچیده قوسی سه‌بعدی بر روی بزرگراه‌های پرتردد مدرس و حقانی.",
      "معیارهای سخت‌گیرانه آسایش ارتعاشی عابران پیاده در بارهای فشرده جمعیتی.",
      "قرارگیری در پهنه با خطر لرزه‌خیزی خیلی زیاد و جنبش غیریکنواخت پایه‌ها."
    ],
    solutions: [
      "Built multi-degree-of-freedom non-linear time history models in SAP2000 and ANSYS.",
      "Verified tuned mass damper (TMD) damping requirements for human-induced resonance.",
      "Validated cast-steel node stress concentrations through solid element mesh discretization."
    ],
    solutionsFa: [
      "مدلسازی تاریخچه زمانی غیرخطی در نرم‌افزارهای SAP2000 و ANSYS با درجه آزادی بالا.",
      "محاسبه و تدقیق رفتار میراگرهای جرمی تنظیم‌پذیر (TMD) جهت حذف رزونانس گام‌های عابران.",
      "تحلیل تمرکز تنش گره‌های ریخته‌گری‌شده با مش‌بندی المان‌های سه‌بعدی سالید."
    ],
    deliverables: [
      "Independent Structural Safety Certification Report",
      "Aerodynamic flutter and vortex shedding validation matrix",
      "Seismic displacement and joint stress verification dossiers",
      "Technical approval submission to municipal oversight committee"
    ],
    deliverablesFa: [
      "گزارش رسمی تاییدیه و صحت‌سنجی محاسبات سازه‌ای پل",
      "ماتریس ارزیابی آیرودینامیک فلاتر و پدیده ریزش گردابه‌ای",
      "دفترچه محاسبات تغییر مکان‌های نسبی و تنش‌های بحرانی اتصالات",
      "تاییدیه رسمی کمیته عالی فنی و نظارتی شهرداری تهران"
    ],
    image: "/src/assets/images/ptp_hero_marine_port_1791622375662.jpg",
    metrics: [
      { label: "Total Length", labelFa: "طول کلی پل", value: "270 meters" },
      { label: "Steel Weight", labelFa: "وزن سازه فولادی", value: "2,000 tonnes" },
      { label: "Deck Levels", labelFa: "تعداد طبقات عرشه", value: "3 Levels" }
    ]
  },
  {
    id: "ramsar-green-port",
    title: "Ramsar Green Port & Marine Eco-Terminal",
    titleFa: "طراحی بندر سبز و پایانه گردشگری دریایی رامسر",
    category: "coastal-port",
    client: "Tourism & Maritime Infrastructure Development Authority",
    clientFa: "سازمان بنادر و شرکت توسعه گردشگری دریایی",
    location: "Ramsar, Mazandaran Province",
    locationFa: "رامسر، استان مازندران",
    region: "Caspian Sea",
    regionFa: "دریای خزر",
    year: "2023",
    featured: true,
    summary: "Integrated green engineering study for an environmentally sensitive passenger marina and coastal protection barrier in Ramsar.",
    summaryFa: "مطالعات امکان‌سنجی، ارزیابی زیست‌محیطی و طراحی پایانه مدرن مارینا و موج‌شکن‌های اکولوژیک رامسر.",
    description: "PTP Co developed the feasibility, environmental impact assessment (EIA), and architectural-marine layout for Ramsar Green Port. Designed to harmonize with the delicate Hyrcanian coastal foothills, the facility incorporates permeable rubblemound breakwaters, solar-powered marina pontoons, and zero-discharge sanitary outfall systems.",
    descriptionFa: "پویا طرح پارس مطالعات امکان‌سنجی، ارزیابی اثرات زیست‌محیطی (EIA) و طراحی جانمایی ساحلی بندر سبز رامسر را تدوین نمود. طراحی سازگار با بوم‌سازگان ساحلی جنگل‌های هیرکانی با موج‌شکن‌های نفوذپذیر سنگی و اسکله‌های شناور مارینا با انرژی خورشیدی.",
    challenges: [
      "Steep bathymetric drop-offs nearshore and severe Caspian winter storm surges.",
      "Strict forestry and UNESCO eco-preservation buffer zones along Ramsar coastline.",
      "Balancing commercial tourist ferry berths with public beach access and coastal aesthetics."
    ],
    challengesFa: [
      "شیب تند بستر در نزدیکی ساحل و طوفان‌های سهمگین زمستانه خزر.",
      "حرائم حساس جنگل‌های هیرکانی و ممنوعیت تخریب منظر طبیعی نوار ساحلی.",
      "تلفیق پهلوگیری شناورهای مسافری با حفظ پلاژهای عمومی و پیاده‌راه‌های ساحلی."
    ],
    solutions: [
      "Designed curved submerged breakwater segments to dampen wave energy while preserving vistas.",
      "Implemented modular eco-concrete armor units fostering local aquatic flora settlement.",
      "Configured solar microgrid power supplies for all floating berths and docking pontoons."
    ],
    solutionsFa: [
      "طراحی قطعات موج‌شکن مستغرق قوسی جهت استهلاک انرژی امواج بدون سد کردن دید دریا.",
      "به‌کارگیری آرمورهای بتنی اکولوژیک ویژه تسهیل رشد جلبک‌ها و زیستگاه آبزیان.",
      "تغذیه برق اسکله‌های شناور از طریق میکروگریدهای خورشیدی و سیستم تصفیه فاضلاب بسته."
    ],
    deliverables: [
      "Full Architectural and Coastal Civil Engineering Drawings",
      "Comprehensive Marine Environmental Baseline & EIA Approval",
      "Marina berthing layouts and floating pontoon anchoring calculations",
      "Sediment bypass mechanism to prevent downdrift beach erosion"
    ],
    deliverablesFa: [
      "آلبوم کامل نقشه‌های معماری بندری و ابنیه ساحلی",
      "گزارش ارزیابی جامع اثرات زیست‌محیطی و اخذ تاییدیه از سازمان حفاظت محیط زیست",
      "دفترچه محاسبات مهاری و هیدرودینامیکی پانتون‌های شناور",
      "طراحی سازوکار بای‌پاس رسوب برای پیشگیری از فرسایش سواحل مجاور"
    ],
    image: "/src/assets/images/ptp_coastal_survey_vessel_1791622411086.jpg",
    metrics: [
      { label: "Berth Capacity", labelFa: "ظرفیت پهلوگیری شناور", value: "85 Leisure/Ferry" },
      { label: "Breakwater Length", labelFa: "طول موج‌شکن", value: "420 meters" },
      { label: "Eco-Footprint", labelFa: "استاندارد زیست‌محیطی", value: "LEED Gold Target" }
    ]
  },
  {
    id: "bushehr-commercial-berth-rehab",
    title: "Bushehr Commercial Port Berth Repair & Fender Renovation",
    titleFa: "طراحی بهسازی سازه‌ای و نوسازی سیستم فندرهای اسکله‌های تجاری بوشهر",
    category: "marine-structures",
    client: "Bushehr Port Authority / PMO",
    clientFa: "اداره کل بنادر و دریانوردی استان بوشهر",
    location: "Bushehr Port, Persian Gulf",
    locationFa: "بندر بوشهر، خلیج فارس",
    region: "Persian Gulf",
    regionFa: "خلیج فارس",
    year: "2021",
    featured: false,
    summary: "Structural health inspection, underwater acoustic scanning, and rehabilitation engineering for damaged quay walls and high-energy fender systems.",
    summaryFa: "بازرسی غواصی اولتراسونیک، پایش سلامت سازه و طراحی مقاوم‌سازی دیوارهای اسکله و فندرهای ضربه‌گیر بوشهر.",
    description: "Specialized engineering investigation and structural rehabilitation design for historic and modern commercial quays at Bushehr Port. Included commercial diver ultrasonic inspection, coring, chloride penetration testing, and retrofitting high-capacity cone fender arrays to handle 20,000+ DWT container vessels.",
    descriptionFa: "پایش فنی و طراحی بهسازی سازه‌ای اسکله‌های تجاری بندر بوشهر با استفاده از آزمون‌های غیرمخرب غواصی، مغزه‌گیری بتن و طراحی سیستم‌های مدرن ضربه‌گیر مخروطی سوپرکون جهت ارتقای ایمنی پهلوگیری کشتی‌های ۲۰ هزار تنی.",
    challenges: [
      "Severe chloride-induced rebar corrosion in older reinforced concrete quay decks.",
      "Damaged elastomeric fender assemblies caused by oblique vessel impacts.",
      "Continuous port operations requiring phased repair without shutting down active berths."
    ],
    challengesFa: [
      "خوردگی شدید آرماتورها در بتن‌های قدیمی ناشی از یون کلرید خلیج فارس.",
      "تخریب سامانه‌های لاستیکی فندرها در اثر پهلوگیری‌های زاویه‌دار شناورهای باری.",
      "ترافیک بالای بندر و ضرورت اجرای تعمیرات بدون توقف در عملیات تخلیه و بارگیری."
    ],
    solutions: [
      "Specified carbon fiber reinforced polymer (CFRP) wrapping and impressed current cathodic protection.",
      "Redesigned heavy fender backplates with high-tensile anchor studs and shear chains.",
      "Formulated 24-hour rapid curing underwater repair mortars."
    ],
    solutionsFa: [
      "به‌کارگیری الیاف پلیمری کربنی (CFRP) و سیستم حفاظت کاتدی با جریان اعمالی.",
      "طراحی صفحات فولادی پشتیبان با انکربولت‌های آلیاژی ضدخوردگی و زنجیرهای برشی.",
      "استفاده از ملات‌های ترمیمی پرمقاومت زیرآبی با گیرش سریع ۲۴ ساعته."
    ],
    deliverables: [
      "Quay Structural Condition Assessment and Residual Life Calculation",
      "Detailed Fender System Replacement Specifications",
      "Tender dossiers and construction supervision guidelines",
      "Underwater inspection documentation archive"
    ],
    deliverablesFa: [
      "گزارش جامع ارزیابی عمر باقیمانده سازه اسکله",
      "مشخصات فنی و نقشه‌های اجرایی تعویض فندرهای مخروطی",
      "اسناد مناقصه و راهنمای بازرسی‌های دوره‌ای مقیم",
      "آرشیو ویدئویی و گزارش‌های تصویری بازرسی غواصی زیر آب"
    ],
    image: "/src/assets/images/ptp_project_jetty_intake_1791622387563.jpg",
    metrics: [
      { label: "Berth Length", labelFa: "طول پیشانی اسکله", value: "580 meters" },
      { label: "Design Vessel", labelFa: "شناور مبنای طراحی", value: "25,000 DWT" },
      { label: "Fender Energy", labelFa: "جذب انرژی فندر", value: "320 kNm" }
    ]
  },
  {
    id: "amirabad-breakwater-expansion",
    title: "Amirabad Port Breakwater Extension & Navigability Study",
    titleFa: "مطالعات توسعه موج‌شکن و رفع رسوب‌گذاری کانال دسترسی بندر امیرآباد",
    category: "coastal-port",
    client: "Special Economic Zone of Amirabad Port",
    clientFa: "منطقه ویژه اقتصادی بندر امیرآباد",
    location: "Behshahr, Mazandaran",
    locationFa: "بهشهر، استان مازندران",
    region: "Caspian Sea",
    regionFa: "دریای خزر",
    year: "2020",
    featured: false,
    summary: "2D & 3D physical and numerical modeling for 650m breakwater expansion to eliminate entrance shoaling and siltation in the port fairway.",
    summaryFa: "مدلسازی دوبعدی و سه‌بعدی امواج و انتقال رسوب جهت افزایش ۶۵۰ متری طول موج‌شکن و حذف رسوب‌گذاری دهانه بندر.",
    description: "PTP Co was selected to solve chronic siltation issues in the access channel of Amirabad Port—the largest port on the southern coast of the Caspian Sea. Through rigorous hydrodynamic and littoral drift simulations, our team redesigned the main breakwater head geometry and navigation entrance channel.",
    descriptionFa: "مطالعه حل مشکل رسوب‌گذاری مداوم کانال دسترسی بزرگ‌ترین بندر شمال کشور در امیرآباد. با مدلسازی عددی حرکت رسوبات موازی ساحل، هندسه دماغک موج‌شکن اصلاح شد و آرامش حوضچه جهت پهلوگیری کشتی‌های رو-رو قطار افزایش یافت.",
    challenges: [
      "Massive eastward littoral sediment transport accumulating 300,000 m³ of sand annually at port mouth.",
      "Wave agitation in the inner harbor basin causing downtime for Ro-Ro railway ferry vessels."
    ],
    challengesFa: [
      "حرکت سالانه ۳۰۰ هزار متر مکعب رسوب ماسه‌ای به سمت شرق و مسدودسازی کانال کشتیرانی.",
      "اضطراب امواج در حوضچه داخلی که مانع پهلوگیری ایمن کشتی‌های ریل‌بر می‌شد."
    ],
    solutions: [
      "Optimized curved breakwater head spur using SWAN wave refraction modeling.",
      "Engineered spur groin creating a controlled sand trap for cost-effective maintenance dredging.",
      "Reduced basin wave height by 42% under peak 100-year storm conditions."
    ],
    solutionsFa: [
      "بهینه‌سازی انحنای سر موج‌شکن با مدلسازی طیفی امواج SWAN.",
      "طراحی تله رسوبگیر کنترل‌شده جهت بهینه‌سازی هزینه‌های لایروبی نگهداری.",
      "کاهش ۴۲ درصدی ارتفاع موج در حوضچه تحت شرایط طوفان ۱۰۰ ساله."
    ],
    deliverables: [
      "Hydrodynamic & sediment transport numerical reports",
      "Armor rock grading and concrete Accropode II placement plans",
      "Fairway navigation markers and lighthouse foundation blueprints"
    ],
    deliverablesFa: [
      "دفترچه مدلسازی هیدرودینامیک و انتقال رسوب ساحلی",
      "نقشه‌های دانه‌بندی سنگ‌های آرمور و چیدمان قطعات بتنی آکروپود ۲",
      "طراحی علائم کمک‌ناوبری و فونداسیون چراغ دریایی ورودی"
    ],
    image: "/src/assets/images/ptp_hero_marine_port_1791622375662.jpg",
    metrics: [
      { label: "Breakwater Ext.", labelFa: "افزایش طول موج‌شکن", value: "650 meters" },
      { label: "Dredging Savings", labelFa: "کاهش هزینه لایروبی", value: "35% Annually" },
      { label: "Basin Calmness", labelFa: "آرامش حوضچه", value: "Hs < 0.6m (98%)" }
    ]
  },
  {
    id: "assaluyeh-intake-thermal-modeling",
    title: "Assaluyeh Petrochemical Seawater Intake & Thermal Dispersion",
    titleFa: "شبیه‌سازی سه‌بعدی پخش حرارتی پساب و بهینه‌سازی آبگیر پتروشیمی عسلویه",
    category: "oil-gas",
    client: "Pars Special Economic Energy Zone (PSEEZ)",
    clientFa: "سازمان منطقه ویژه اقتصادی انرژی پارس (عسلویه)",
    location: "Assaluyeh, Bushehr Province",
    locationFa: "عسلویه، استان بوشهر",
    region: "Persian Gulf",
    regionFa: "خلیج فارس",
    year: "2022",
    featured: false,
    summary: "3D thermo-hydrodynamic numerical modeling of thermal cooling water outfall dispersion to prevent recirculating heated water into cooling intakes.",
    summaryFa: "مدلسازی سه‌بعدی ترمو-هیدرودینامیک خروجی آب خنک‌کننده جهت جلوگیری از بازچرخش آب گرم به دهانه‌های آبگیر مجتمع‌های پتروشیمی.",
    description: "Multi-layered thermal discharge study for giant petrochemical processing units in Assaluyeh. Using 3D baroclinic hydrodynamic models (DELFT3D-FLOW), PTP Co evaluated thermal plume buoyancy, tidal dispersion, and ambient temperature rises to locate outfall diffusers safely away from desalination plant intakes.",
    descriptionFa: "مطالعات پخش لکه حرارتی و املاح شور تخلیه پساب خنک‌کننده واحدهای عظیم پتروشیمی در عسلویه. با مدلسازی عددی سه‌بعدی باروکلینیک، فاصله بهینه دهانه‌های دیفیوزر از آبگیرهای آب‌شیرین‌کن تعیین شد تا راندمان خنک‌کاری حفظ گردد.",
    challenges: [
      "Extremely high ambient summer water temperatures reaching 34°C in shallow Persian Gulf waters.",
      "High cooling discharge rate exceeding 85 m³/s from multiple adjacent petrochemical complexes.",
      "Strict environmental limits preventing water temperature rise > 3°C above baseline at 100m radius."
    ],
    challengesFa: [
      "دمای طبیعی بسیار بالای آب دریا در تابستان‌های عسلویه (تا ۳۴ درجه سانتی‌گراد).",
      "دبی بسیار حجیم تخلیه پساب گرم بیش از ۸۵ مترمکعب بر ثانیه.",
      "استانداردهای سخت‌گیرانه محیط زیست مبنی بر عدم افزایش دما بیش از ۳ درجه در شعاع ۱۰۰ متری."
    ],
    solutions: [
      "Configured multiport rosette diffusers positioned along deep bottom contours.",
      "Integrated meteorological wind shear and tidal current data from offshore metocean buoys.",
      "Optimized intake head spacing saving millions in cooling efficiency penalties."
    ],
    solutionsFa: [
      "طراحی نازل‌های خروجی رُزت چنددهانه در اعماق بستر دریا جهت بیشینه‌سازی اختلاط اولیه.",
      "ورود داده‌های بویه هواشناسی دریایی، تنش باد و جریان‌های جزرومدی به مدل عددی.",
      "اصلاح فاصله خطوط آبگیر و تخلیه که سالانه از هدررفت راندمان توربین‌ها جلوگیری می‌کند."
    ],
    deliverables: [
      "3D Thermal dispersion & brine dilution computational simulation reports",
      "Outfall diffuser nozzle alignment and hydraulic head loss calculations",
      "Baseline Persian Gulf marine ecosystem compliance documentation"
    ],
    deliverablesFa: [
      "دفترچه محاسبات مدلسازی سه‌بعدی پخش حرارتی و رقیق‌سازی شوری",
      "نقشه‌ها و محاسبات افت هیدرولیکی نازل‌های دیفیوزر زیرآبی",
      "اسناد انطباق با ضوابط سازمان حفاظت محیط زیست دریایی خلیج فارس"
    ],
    image: "/src/assets/images/ptp_modeling_hydrodynamics_1791622399488.jpg",
    metrics: [
      { label: "Discharge Volume", labelFa: "دبی کل تخلیه", value: "85 m³/s" },
      { label: "Outfall Diffusers", labelFa: "تعداد نازل‌های تخلیه", value: "24 Nozzles" },
      { label: "Thermal Delta", labelFa: "اختلاف دمای مجاز", value: "< 2.8°C at 100m" }
    ]
  },
  {
    id: "chabahar-coastal-monitoring",
    title: "Chabahar Oceanic Coastline Monitoring & Oceanographic Atlas",
    titleFa: "پایش اقیانوس‌شناسی و تدوین اطلس مورفولوژی سواحل مکران و چابهار",
    category: "environmental-studies",
    client: "Ports & Maritime Organization (PMO)",
    clientFa: "سازمان بنادر و دریانوردی",
    location: "Makran Coast, Sea of Oman / Indian Ocean",
    locationFa: "سواحل مکران، دریای عمان و اقیانوس هند",
    region: "Sea of Oman",
    regionFa: "دریای عمان و مکران",
    year: "2023",
    featured: false,
    summary: "High-resolution acoustic Doppler current profiling, deep ocean bathymetry, and coastal morphology survey along 300km of the Makran oceanic coastline.",
    summaryFa: "پایش جامع جریانات با پروفایلر صوتی داپلر (ADCP)، عمق‌سنجی اقیانوسی و تدوین بانک اطلاعات مکانی ۳۰۰ کیلومتر از سواحل مکران.",
    description: "As part of the National Coastal Monitoring Program, PTP Co deployed oceanographic survey vessels, acoustic wave and current profilers (AWAC), side-scan sonars, and satellite remote sensing to establish the first high-resolution oceanographic atlas of the high-energy Makran coast facing the Indian Ocean.",
    descriptionFa: "در قالب طرح ملی پایش سواحل کشور، تیم تخصصی پویا طرح پارس با استقرار شناورهای تحقیقاتی، کارگذاری ایستگاه‌های بسترنشین AWAC و پردازش تصاویر ماهواره‌ای، جامع‌ترین اطلس اقیانوس‌شناسی سواحل اقیانوسی مکران را تهیه نمود.",
    challenges: [
      "Extreme oceanic swell conditions generated by Indian Ocean summer monsoons.",
      "Deep tectonic subduction zone prone to seismic tsunami hazards.",
      "Rugged cliff coastlines with scarce shore access."
    ],
    challengesFa: [
      "امواج پرانرژی اقیانوسی (Swell) با دوره‌های تناوب بلند ناشی از مانسون اقیانوس هند.",
      "منطقه فرورانش زمین‌ساختی مکران و ریسک امواج سونامی ناشی از زلزله‌های دریایی.",
      "پرتگاه‌های صخره‌ای و دسترسی محدود ساحلی جهت نقشه‌برداری زمینی."
    ],
    solutions: [
      "Maintained autonomous seafloor bottom-mounted ADCP stations recording 18 months of continuous waves.",
      "Generated detailed GIS coastal morphology database identifying erosion hotspots.",
      "Simulated tsunami wave run-up and inundation mapping for coastal cities."
    ],
    solutionsFa: [
      "استقرار تجهیزات ثبت داده امواج و جریان در بستر دریا به مدت ۱۸ ماه متوالی.",
      "ایجاد پایگاه داده مکانی GIS جهت شناسایی کانون‌های فرسایش و رسوب‌گذاری ساحلی.",
      "شبیه‌سازی عددی پیشروی امواج سونامی و نقشه‌های پهنه‌بندی خطر غرقابی شهر چابهار."
    ],
    deliverables: [
      "Makran Oceanic Coastal Atlas & Metocean Baseline Archive",
      "High-resolution digital elevation models (DEM) of coastline",
      "Tsunami risk vulnerability maps and early warning benchmarks"
    ],
    deliverablesFa: [
      "اطلس اقیانوس‌شناسی و پایگاه داده هواشناسی دریایی سواحل مکران",
      "مدل‌های رقومی ارتفاعی با رزولوشن بالا (DEM) از نوار ساحلی",
      "نقشه‌های پهنه‌بندی ریسک سونامی و مبانی هشدار سریع مخاطرات ساحلی"
    ],
    image: "/src/assets/images/ptp_coastal_survey_vessel_1791622411086.jpg",
    metrics: [
      { label: "Survey Length", labelFa: "طول نوار ساحلی پایش", value: "310 km" },
      { label: "Water Depths", labelFa: "عمق برداشت هیدروگرافی", value: "Up to -120m" },
      { label: "Data Records", labelFa: "نقاط داده‌ای ثبتی", value: "1.4 Billion pts" }
    ]
  }
];

// Core 6 Engineering Services
export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "coastal-port-engineering",
    slug: "coastal-port-engineering",
    title: "Coastal & Port Engineering",
    titleFa: "مهندسی بنادر و سواحل",
    subtitle: "From master planning to deepwater quays, breakwaters, and harbor logistics",
    subtitleFa: "طراحی جامع بنادر، موج‌شکن‌ها، اسکله‌های عمیق، لایروبی و پایانه‌های لجستیکی",
    overview: "PTP Co provides comprehensive port engineering from inception to commissioning. We evaluate navigational access, design rubblemound and caisson breakwaters, optimize container terminals, and engineer resilient coastal protection structures built to endure extreme hydrodynamic events.",
    overviewFa: "مهندسین مشاور پویا طرح پارس کلیه مراحل مهندسی بندر را از تدوین طرح جامع تا نظارت بر احداث پوشش می‌دهد؛ شامل ارزیابی کانال‌های ناوبری، طراحی موج‌شکن‌های سنگی و کیسونی، پایانه‌های کانتینری و سازه‌های حفاظت ساحلی در برابر طوفان‌های شدید.",
    capabilities: [
      "Port & Harbor Master Planning and Terminal Layout Optimization",
      "Breakwaters, Groins, Revetments & Rubblemound Armor Stability Design",
      "Commercial Quay Walls (Gravity, Caisson, Sheet Pile & Piled Decks)",
      "Navigational Fairways, Turning Basins & Maintenance Dredging Strategy",
      "Container Terminal Yard Circulation & Intermodal Logistics Pavements",
      "Marina & Fisheries Harbor Architectural Integration"
    ],
    capabilitiesFa: [
      "تهیه طرح جامع بنادر و بهینه‌سازی زون‌بندی پایانه‌ها",
      "طراحی موج‌شکن‌ها، دایک‌ها، بازودارها و پایداری سنگ‌چین‌های آرمور",
      "طراحی دیوارهای اسکله تجاری (وزنی، کیسونی، شیت‌پایل و شمع و عرشه)",
      "طراحی کانال‌های دسترسی، حوضچه‌های چرخش و استراتژی لایروبی نگهداری",
      "طراحی روسازی‌های فوق‌سنگین محوطه‌های کانتینری و لجستیک بندری",
      "طراحی بنادر صیادی و ماریناهای مدرن گردشگری دریایی"
    ],
    technologies: ["SWAN", "MIKE 21 BW / HD", "GEO5", "PLAXIS 2D/3D", "AutoCAD Civil 3D", "Bentley MicroStation"],
    deliverables: [
      "Complete Port Master Plans & Zoning Frameworks",
      "Civil & Marine Structural Calculation Notes",
      "Full Tender Documents, Technical Specifications & BOQs",
      "Navigational Simulation and Fairway Alignment Studies"
    ],
    deliverablesFa: [
      "اسناد جامع طرح تفصیلی و پهنه‌بندی بندر",
      "دفترچه محاسبات کامل ژئوتکنیک و سازه موج‌شکن و اسکله",
      "اسناد کامل مناقصه، مشخصات فنی عمومی و خصوصی و برآورد احجام",
      "شبیه‌سازی مانور شناورها و هندسه کانال‌های ناوبری"
    ],
    featuredProject: "shahid-rajaee-masterplan",
    iconName: "Anchor"
  },
  {
    id: "marine-structures-hydrodynamics",
    slug: "marine-structures-hydrodynamics",
    title: "Marine Structures & Offshore Facilities",
    titleFa: "سازه‌های دریایی و تأسیسات فراساحلی",
    subtitle: "Specialized design for jetties, deep-sea intakes, outfalls, and offshore berths",
    subtitleFa: "طراحی اسکله‌های پایه‌دار، آبگیرها و تخلیه‌گاه‌های عمیق و دلفین‌های پهلوگیری",
    overview: "Our structural engineering division designs complex marine structures exposed to severe dynamic waves, mooring impacts, and aggressive marine environments. We combine finite element analysis with hydrodynamic wave pressure modeling to produce durable, constructible offshore assets.",
    overviewFa: "بخش سازه‌های دریایی پویا طرح پارس سازه‌هایی را مهندسی می‌کند که تحت بارهای دینامیکی امواج سهمگین، ضربات پهلوگیری شناورها و محیط‌های فوق‌العاده خورنده خلیج فارس و خزر قرار دارند؛ با تلفیق مدلسازی اجزای محدود و مبانی پایداری درازمدت بتن و فولاد.",
    capabilities: [
      "Deepwater Marine Jetties, Trestles & Loading Platforms",
      "Industrial Seawater Intakes, Submerged Outfall Diffusers & Pump Basins",
      "Mooring Dolphins, Breasting Dolphins & High-Energy Fender Arrays",
      "Offshore Pipeline Landfalls & Shore Crossings",
      "Cathodic Protection & Durability Design for Hyper-Saline Waters",
      "Structural Health Inspection, Rebar Corrosion & Underwater Repairs"
    ],
    capabilitiesFa: [
      "اسکله‌های عمیق بارگیری نفت، فرآورده و مواد معدنی به همراه پل‌های دسترسی",
      "خطوط آبگیر صنعتی، نازل‌های تخلیه زیرآبی و حوضچه‌های مکش پمپ",
      "دلفین‌های پهلوگیری و مهار و سیستم‌های ضربه‌گیر پرانرژی (Fender)",
      "تقاطع‌های لوله‌گذاری ساحلی و خطوط انتقال زیردریایی",
      "طراحی حفاظت کاتدی و دوام سازه‌های بتنی در محیط‌های مهاجم شور",
      "پایش سلامت سازه‌ای، تعیین عمق نفوذ کلرید و طرح‌های ترمیم زیرآبی"
    ],
    technologies: ["SACS Offshore", "STAAD.Pro", "ANSYS Marine", "SAP2000", "OpenFOAM", "Abaqus FEA"],
    deliverables: [
      "3D Finite Element Structural Models & Dynamic Response Spectra",
      "Vessel Mooring & Berthing Energy Analysis Reports",
      "Corrosion Protection & Cathodic Anode Calculation Blueprints",
      "Marine Structural Repair & Retrofit Dossiers"
    ],
    deliverablesFa: [
      "مدل‌های سه‌بعدی اجزای محدود و طیف پاسخ دینامیکی سازه دریایی",
      "محاسبات تحلیل مهار و انرژی برخورد شناورها به اسکله",
      "دفترچه محاسبات حفاظت کاتدی و ضخامت‌های پوشش مقاوم بتن",
      "دستورالعمل‌ها و نقشه‌های اجرایی ترمیم و مقاوم‌سازی سازه‌ها"
    ],
    featuredProject: "qfpc-jetty-qeshm",
    iconName: "Waves"
  },
  {
    id: "numerical-modeling-oceanography",
    slug: "numerical-modeling-oceanography",
    title: "Numerical Modeling & Oceanography",
    titleFa: "مدلسازی عددی و اقیانوس‌شناسی",
    subtitle: "Scientific hydrodynamic simulations, wave transformation, and sediment transport",
    subtitleFa: "شبیه‌سازی‌های هیدرودینامیک امواج، پویایی جریانات جزرومدی و رسوب‌گذاری",
    overview: "PTP Co is internationally recognized for advanced numerical modeling. We simulate complex coastal phenomena including wave propagation, tidal current hydrodynamics, thermal plume dispersion, sediment transport, and morphological evolution using cutting-edge computational engines.",
    overviewFa: "پویا طرح پارس از مراجع پیشرو در مدلسازی ریاضی پدیده‌های پیچیده دریایی است؛ شامل شبیه‌سازی انتشار و انکسار امواج، جریانات ناشی از باد و جزرومد، لکه‌های حرارتی و شوری و فرآیندهای فرسایش و رسوب‌گذاری با موتورهای محاسباتی تراز اول دنیا.",
    capabilities: [
      "Spectral Wave Transformation & Harbor Agitation Modeling (SWAN / MIKE21)",
      "2D & 3D Tidal Current & Circulation Hydrodynamics",
      "Littoral Drift & Longshore Coastal Sediment Transport Simulation",
      "Thermal Discharge & Brine Dispersion Plume Computations",
      "Extreme Wave & Storm Surge Return Period Statistical Forecasting",
      "Tsunami Wave Propagation & Coastal Inundation Risk Modeling"
    ],
    capabilitiesFa: [
      "مدلسازی طیفی امواج و آرامش حوضچه بنادر (SWAN و MIKE 21 BW)",
      "شبیه‌سازی دوبعدی و سه‌بعدی جریانات جزرومدی و الگوی چرخش آب",
      "مدلسازی عددی انتقال رسوب موازی ساحل و تغییرات خط کرانه",
      "محاسبات پخش پساب‌های حرارتی نیروگاه‌ها و خروجی آب‌شیرین‌کن‌ها",
      "تحلیل‌های آماری امواج حدی با دوره‌های بازگشت ۱۰۰ ساله و طوفان",
      "شبیه‌سازی سونامی و تعیین عمق پیشروی آب در سواحل مکران"
    ],
    technologies: ["MIKE 21 / MIKE 3 (DHI)", "Delft3D (Deltares)", "SWAN", "CORMIX", "Telemac-Mascaret", "MATLAB"],
    deliverables: [
      "Calibrated 2D/3D Hydrodynamic Computational Reports",
      "Harbor Downtime & Agitation Risk Matrices",
      "Sediment Shoaling Forecasts & Dredging Optimization Studies",
      "Thermal & Environmental Diffusion Dispersion Contours"
    ],
    deliverablesFa: [
      "گزارش‌های مدلسازی کالیبره‌شده هیدرودینامیک با داده‌های واقعی",
      "ماتریس‌های آرامش حوضچه و زمان توقف عملیات پهلوگیری (Downtime)",
      "پیش‌بینی حجم و الگوی رسوب‌گذاری و بهینه‌سازی مقاطع لایروبی",
      "کانتورهای پراکنش حرارتی و استانداردهای تخلیه زیست‌محیطی"
    ],
    featuredProject: "caspian-gorgan-bay-study",
    iconName: "Activity"
  },
  {
    id: "field-data-gis",
    slug: "field-data-gis",
    title: "Field Oceanographic Data & Coastal GIS",
    titleFa: "داده‌های میدانی اقیانوس‌شناسی و GIS ساحلی",
    subtitle: "Hydrographic surveys, multibeam bathymetry, current meters, and remote sensing",
    subtitleFa: "برداشت‌های هیدروگرافی چندپرتوی، اندازه‌گیری جریانات، سونار و سنجش از دور",
    overview: "Engineering accuracy begins with pristine empirical data. PTP Co maintains specialized oceanographic instrumentation and hydrographic survey vessels to collect high-precision bathymetric, metocean, and geotechnical data across coastal zones.",
    overviewFa: "صحت طراحی‌های مهندسی بر پایه داده‌های دقیق میدانی بنا می‌شود. پویا طرح پارس با تجهیزات پیشرفته اقیانوس‌شناسی، عمق‌سنجی چندپرتوی، نمونه‌برداری رسوب و سامانه‌های اطلاعات جغرافیایی (GIS)، جامع‌ترین پایش‌های میدانی را به انجام می‌رساند.",
    capabilities: [
      "Single-beam & High-Resolution Multibeam Bathymetric Surveying",
      "Acoustic Doppler Current Profiler (ADCP) & Wave Gauge Deployments",
      "CTD (Conductivity, Temperature, Depth) & Salinity Water Column Profiling",
      "Marine Sub-Bottom Profiling & Side-Scan Sonar Geophysical Surveys",
      "Satellite Remote Sensing & Shoreline Change Detection (Landsat/Sentinel)",
      "Coastal GIS Geodatabases & Interactive Spatial Web Portals"
    ],
    capabilitiesFa: [
      "عمق‌سنجی هیدروگرافی تک‌پرتوی و چندپرتوی با استانداردهای IHO",
      "استقرار دستگاه‌های ADCP و موج‌نگارهای بسترنشین (AWAC)",
      "پروفیل‌برداری قائم شوری، دما و هدایت الکتریکی آب (دستگاه CTD)",
      "لرزه‌نگاری زیربستر (Sub-Bottom) و سونار روبش جانبی (Side-Scan)",
      "پردازش تصاویر ماهواره‌ای و پایش تغییرات خط ساحلی در ۳۰ سال اخیر",
      "ایجاد پایگاه داده‌های مکانی GIS و اطلس‌های آسیب‌پذیری نوار ساحلی"
    ],
    technologies: ["Teledyne RDI ADCP", "EdgeTech Sonar", "ArcGIS Pro / QGIS", "Hypack Navigation", "Trimble RTK DGPS"],
    deliverables: [
      "Calibrated Hydrographic Charts (IHO Standards)",
      "Metocean Baseline Measurements & Time-Series Datasets",
      "Geophysical Sub-bottom Geological Cross-Sections",
      "Coastal GIS Spatial Atlases & Vulnerability Maps"
    ],
    deliverablesFa: [
      "نقشه‌های کالیبره‌شده ناوبری و هیدروگرافی دریایی",
      "سری‌های زمانی داده‌های موج، جریان و بادهای ساحلی",
      "پروفیل‌های ژئوفیزیک لایه‌های زمین‌شناسی و سنگ بستر دریا",
      "اطلس‌های تحلیلی GIS و نقشه‌های پهنه‌بندی خطر پیشروی آب"
    ],
    featuredProject: "chabahar-coastal-monitoring",
    iconName: "Compass"
  },
  {
    id: "civil-infrastructure-architecture",
    slug: "civil-infrastructure-architecture",
    title: "Civil, Structural & Industrial Infrastructure",
    titleFa: "ابنیه سنگین، سیویل، پل و تأسیسات صنعتی",
    subtitle: "Heavy foundations, industrial facilities, bridges, and administrative complexes",
    subtitleFa: "طراحی فونداسیون‌های عمیق، سازه‌های صنعتی، پل‌های خاص و ساختمان‌های بندری",
    overview: "Extending our maritime expertise inland, PTP Co delivers civil and structural engineering for heavy industrial plants, open storage facilities, highway bridges, and administrative port architecture. We specialize in deep foundations on challenging coastal soils.",
    overviewFa: "با تکیه بر تخصص‌های بنیادی مهندسی عمران، پویا طرح پارس طراحی سازه‌های سنگین صنعتی، فونداسیون‌های عمیق بر روی لایه‌های ضعیف ساحلی، پل‌های خاص شهری و بین‌شهری و ابنیه اداری و پشتیبانی بنادر را به سرانجام می‌رساند.",
    capabilities: [
      "Deep Foundation Engineering on Soft Coastal Silts & Marine Clays",
      "Complex Steel & Reinforced Concrete Industrial Buildings",
      "Specialty Pedestrian & Highway Bridges Independent Verification",
      "Stormwater Drainage Networks, Retention Ponds & Coastal Outlets",
      "Industrial Warehouses, Maintenance Shops & CFS Facilities",
      "Port Terminal Administration Buildings & Gate Complex Architecture"
    ],
    capabilitiesFa: [
      "مهندسی پی‌های عمیق و شمع‌کوبی در خاک‌های سست رس و لای ساحلی",
      "طراحی ساختمان‌های صنعتی بتنی و فولادی کارخانجات مجاور دریا",
      "محاسبات کنترلی و تدقیق سازه‌ای پل‌های کابلی، خرپایی و خاص",
      "شبکه‌های جمع‌آوری و هدایت آب‌های سطحی و حوضچه‌های آرامش",
      "طراحی انبارها، پایانه‌های تفکیک بار (CFS) و کارگاه‌های تعمیرات",
      "معماری ساختمان‌های اداری پایانه و گیت‌های ورودی و توزین بندر"
    ],
    technologies: ["ETABS", "SAFE", "SAP2000", "Revit BIM", "Plaxis 3D", "Tekla Structures"],
    deliverables: [
      "Comprehensive BIM Architectural & Structural Models",
      "Soil-Structure Interaction & Settlement Calculations",
      "Heavy Industrial Civil Works Specifications",
      "Independent Peer Review & Engineering Verification Reports"
    ],
    deliverablesFa: [
      "مدل‌های یکپارچه معماری و سازه در محیط نرم‌افزاری BIM",
      "دفترچه محاسبات اندرکنش خاک و سازه و تحکیم لایه‌ها",
      "مشخصات فنی و اجرایی سازه‌های سنگین صنعتی",
      "گزارش‌های ارزیابی فنی و بازبینی مستقل محاسبات (Peer Review)"
    ],
    featuredProject: "tabiat-bridge-structural-calculations",
    iconName: "Building2"
  },
  {
    id: "project-supervision-inspection",
    slug: "project-supervision-inspection",
    title: "Project Supervision & Technical Inspection",
    titleFa: "نظارت عالیه و مقیم و بازرسی فنی",
    subtitle: "Resident engineering, quality control, underwater inspection, and commissioning",
    subtitleFa: "حضور مداوم مهندسان مقیم، کنترل کیفیت بتن و مصالح، بازرسی غواصی و تحویل موقت",
    overview: "A great design requires flawless field execution. PTP Co provides experienced resident engineer teams and specialized inspectors to oversee coastal and marine construction, ensuring compliance with international codes, environmental safeguards, and safety standards.",
    overviewFa: "تحقق نقشه‌های طراحی در گرو نظارت دقیق کارگاهی است. تیم‌های مهندسی نظارت مقیم پویا طرح پارس در بنادر جنوبی و شمالی کشور بر اجرای استاندارد شمع‌کوبی، بتن‌ریزی‌های زیرآبی و چیدمان آرمورهای سنگین نظارت مستمر دارند.",
    capabilities: [
      "Resident Engineering & Field Construction Supervision",
      "Marine Works Quality Assurance / Quality Control (QA/QC)",
      "Underwater Dive Inspections, Concrete Non-Destructive Testing (NDT)",
      "Geotechnical Pile Driving Monitoring & Dynamic Pile Testing (PDA)",
      "Contract Administration, Schedule Control (Primavera P6) & Claims Review",
      "Pre-Commissioning & Operational Handover Verification"
    ],
    capabilitiesFa: [
      "استقرار تیم‌های نظارت مقیم و عالیه در کارگاه‌های دریایی و بندری",
      "اجرا و تدوین برنامه‌های تضمین و کنترل کیفیت (QA/QC)",
      "بازرسی‌های غواصی، التراسونیک و آزمون‌های غیرمخرب بتن و فولاد",
      "پایش عملیات شمع‌کوبی و آزمون‌های دینامیکی باربری شمع (PDA)",
      "مدیریت پیمان، کنترل زمان‌بندی (Primavera P6) و رسیدگی به ادعاها",
      "نظارت بر تست‌های راه‌اندازی و مراحل تحویل موقت و قطعی"
    ],
    technologies: ["Primavera P6", "MS Project", "Pile Driving Analyzer (PDA)", "Underwater NDT Ultrasonic", "Field BIM"],
    deliverables: [
      "Monthly Resident Engineering Progress & QA/QC Reports",
      "Non-Conformance Reports (NCR) & Corrective Action Plans",
      "As-Built Survey Verifications & Handover Certifications",
      "Diver Inspection Video Logs & Structural Integrity Dossiers"
    ],
    deliverablesFa: [
      "گزارش‌های ماهانه پیشرفت فیزیکی، ریالی و کنترل کیفیت پروژه",
      "ثبت گزارش‌های عدم انطباق (NCR) و پیگیری اقدامات اصلاحی",
      "بررسی و تایید نقشه‌های چون‌ساخت (As-Built) و صورت‌جلسات کارگاهی",
      "گزارش‌های تصویری غواصی و تاییدیه‌های ایمنی سازه"
    ],
    featuredProject: "bushehr-commercial-berth-rehab",
    iconName: "ShieldCheck"
  }
];

// Publications & Research
export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "pub-caspian-2023",
    title: "Long-term Hydrodynamic Response of Gorgan Bay to Rapid Caspian Sea Level Recession",
    titleFa: "پاسخ هیدرودینامیکی درازمدت خلیج گرگان به پسروی سریع تراز آب دریای خزر",
    authors: "PTP Co Coastal Research Group in collaboration with University of Tehran",
    authorsFa: "گروه پژوهش‌های ساحلی پویا طرح پارس با همکاری دانشگاه تهران",
    category: "Hydrodynamics",
    categoryFa: "هیدرودینامیک دریایی",
    year: "2023",
    journal: "Journal of Coastal Research & Marine Hydrology",
    abstract: "This study quantifies the hydrodynamic water exchange rate across Ashuradeh Channel under scenarios of 1.0m to 2.5m water level drop in the Caspian Sea. Calibrated 2D DELFT3D-FLOW simulations demonstrate that channel deepening coupled with sand-trap groins restores 42% of tidal flushing.",
    abstractFa: "این پژوهش به بررسی نرخ تبادل آب در کانال آشوراده تحت سناریوهای افت ۱ الی ۲.۵ متری تراز خزر می‌پردازد. شبیه‌سازی‌های کالیبره‌شده در Delft3D نشان می‌دهد که لایروبی اصولی به همراه ساخت دایک‌های هادی رسوب، ۴۲ درصد از تبادل جزرومدی موردنیاز را احیا می‌کند.",
    doi: "10.1016/j.jher.2023.08.012",
    downloadsCount: 1420
  },
  {
    id: "pub-thermal-plume-2022",
    title: "Three-Dimensional Simulation of Buoyant Thermal Effluent in Shallow Macro-Tidal Waters",
    titleFa: "شبیه‌سازی سه‌بعدی پخش لکه حرارتی شناور پساب در آب‌های کم‌عمق با جزرومد شدید",
    authors: "Pouya Tarh Pars Oceanographic Division",
    authorsFa: "دپارتمان اقیانوس‌شناسی مهندسین مشاور پویا طرح پارس",
    category: "Oceanography",
    categoryFa: "اقیانوس‌شناسی فیزیکی",
    year: "2022",
    journal: "Marine Environmental Research Bulletin",
    abstract: "Field validation of 3D baroclinic simulation for high-temperature industrial cooling discharges in the Persian Gulf. Examines stratification breakdown during neap-spring tidal transitions and establishes optimum diffuser spacing.",
    abstractFa: "صحت‌سنجی میدانی شبیه‌سازی سه‌بعدی تخلیه آب خنک‌کننده داغ صنعتی در خلیج فارس. این مطالعه شکست لایه‌بندی حرارتی در گذار جزرومد و فاصله بهینه دهانه‌های دیفیوزر برای حفظ کیفیت آب را تحلیل می‌نماید.",
    doi: "10.1016/j.marenvres.2022.105677",
    downloadsCount: 980
  },
  {
    id: "pub-breakwater-armor-2021",
    title: "Stability and Overtopping of Single-Layer Concrete Armor Units on Deepwater Rubblemound Breakwaters",
    titleFa: "پایداری و روگذری آرمورهای تک‌لایه بتنی در موج‌شکن‌های سنگی عمیق",
    authors: "Structural & Coastal Engineering Council, PTP Co",
    authorsFa: "شورای مهندسی سواحل و سازه پویا طرح پارس",
    category: "Structural Engineering",
    categoryFa: "سازه‌های دریایی",
    year: "2021",
    journal: "International Conference on Coastal Engineering (ICCE)",
    abstract: "Comprehensive physical model testing and numerical comparison of modified interlocking armor units subjected to multi-directional storm wave spectra in the southern Caspian Sea.",
    abstractFa: "آزمایش‌های مدل هیدرولیکی فیزیکی و مقایسه عددی رفتار بلوک‌های بتنی قفل‌شونده در برابر طیف امواج طوفانی چندجهته در جنوب دریای خزر.",
    doi: "10.9753/icce.v36.papers.44",
    downloadsCount: 1250
  },
  {
    id: "pub-makran-atlas-2020",
    title: "GIS-Based Morphodynamic Sensitivity and Wave Climate Characterization of the Makran Oceanic Coast",
    titleFa: "حساسیت مورفودینامیک و ویژگی‌های اقلیم امواج سواحل مکران بر پایه GIS",
    authors: "PTP Co GIS & Metocean Department",
    authorsFa: "دپارتمان GIS و هواشناسی دریایی پویا طرح پارس",
    category: "Coastal Ecology",
    categoryFa: "ژئومورفولوژی و GIS ساحلی",
    year: "2020",
    journal: "Ocean & Coastal Management Journal",
    abstract: "Development of a unified spatial decision support atlas integrating 15 years of satellite altimetry and bottom-mounted ADCP records to classify cliff erosion vulnerability along the Sea of Oman.",
    abstractFa: "تدوین اطلس تصمیم‌گیری مکانی با تلفیق ۱۵ سال داده‌های ارتفاع‌سنجی ماهواره‌ای و رکوردهای ADCP جهت طبقه‌بندی آسیب‌پذیری فرسایش صخره‌های ساحلی دریای عمان.",
    doi: "10.1016/j.ocecoaman.2020.105312",
    downloadsCount: 1890
  }
];

// Open Careers
export const CAREERS_DATA: JobOpening[] = [
  {
    id: "sr-coastal-modeler",
    title: "Senior Coastal & Hydrodynamic Modeler",
    titleFa: "کارشناس ارشد مدلسازی هیدرودینامیک و سواحل",
    department: "Numerical Modeling & Oceanography",
    departmentFa: "دپارتمان مدلسازی عددی و اقیانوس‌شناسی",
    location: "Tehran HQ (with periodic coastal field trips)",
    locationFa: "دفتر مرکزی تهران (با ماموریت‌های ادواری ساحلی)",
    type: "Full-Time",
    typeFa: "تمام وقت",
    experience: "5+ years",
    experienceFa: "حداقل ۵ سال سابقه مرتبط",
    description: "Lead numerical simulations for wave transformation, littoral sediment transport, and harbor resonance using MIKE 21, DELFT3D, and SWAN for major international port clients.",
    descriptionFa: "هدایت پروژه‌های شبیه‌سازی انتشار امواج، انتقال رسوب و آرامش حوضچه بنادر با نرم‌افزارهای MIKE 21 و Delft3D برای پروژه‌های بندری کشور.",
    requirements: [
      "M.Sc. or Ph.D. in Coastal, Marine, or Civil Engineering",
      "Demonstrated mastery of MIKE 21 (HD, SW, ST) or DELFT3D suite",
      "Strong Python/MATLAB skills for metocean data analysis",
      "Experience writing clear technical calculation reports"
    ],
    requirementsFa: [
      "کارشناسی ارشد یا دکتری مهندسی سواحل، سازه‌های دریایی یا آب",
      "تسلط عملی بر نرم‌افزارهای MIKE 21 یا مجموعه Delft3D",
      "توانایی تحلیل آماری داده‌های هواشناسی دریایی با Python یا MATLAB",
      "تجربه تدوین گزارش‌های فنی و هیدرودینامیکی مستند"
    ]
  },
  {
    id: "marine-structural-engineer",
    title: "Lead Marine Structural Design Engineer",
    titleFa: "سرپرست طراحی سازه‌های دریایی و اسکله",
    department: "Marine Structures & Offshore Facilities",
    departmentFa: "دپارتمان سازه‌های دریایی و فراساحل",
    location: "Tehran HQ",
    locationFa: "دفتر مرکزی تهران",
    type: "Full-Time",
    typeFa: "تمام وقت",
    experience: "6+ years",
    experienceFa: "حداقل ۶ سال سابقه طراحی",
    description: "Responsible for structural modeling, detailed design, and drafting of heavy marine jetties, caisson quays, intake structures, and berthing dolphins in compliance with BS 6349, PIANC, and API RP 2A.",
    descriptionFa: "مسئول مدلسازی سازه‌ای و طراحی تفصیلی اسکله‌های عمیق، آبگیرها، دلفین‌ها و دیوارهای ساحلی مطابق استانداردهای BS 6349 و PIANC.",
    requirements: [
      "B.Sc. or M.Sc. in Civil / Structural / Ocean Engineering",
      "Proficiency with SACS, STAAD.Pro, and SAP2000",
      "Familiarity with cathodic protection and marine durability standards",
      "Ability to coordinate with geotechnical and hydrodynamic disciplines"
    ],
    requirementsFa: [
      "کارشناسی یا کارشناسی ارشد مهندسی عمران / سازه / سازه‌های دریایی",
      "تسلط بر نرم‌افزارهای SACS، STAAD.Pro و SAP2000",
      "آشنایی با مبانی دوام بتن در شرایط مهاجم دریایی و حفاظت کاتدی",
      "توانایی هماهنگی با تیم‌های ژئوتکنیک و هیدرودینامیک"
    ]
  },
  {
    id: "resident-inspection-engineer",
    title: "Resident Port Construction Supervision Engineer",
    titleFa: "مهندس ناظر مقیم کارگاه پروژه‌های بندری",
    department: "Project Supervision & QA/QC",
    departmentFa: "دپارتمان نظارت کارگاهی و کنترل کیفیت",
    location: "Bandar Abbas / Bushehr Field Offices",
    locationFa: "دفاتر نظارت بندرعباس / بوشهر",
    type: "Full-Time (Rotational)",
    typeFa: "تمام وقت (اقماری)",
    experience: "4+ years",
    experienceFa: "حداقل ۴ سال سابقه نظارت کارگاهی",
    description: "On-site quality assurance and client representation for breakwater armor placement, marine pile driving, underwater concrete casting, and heavy pavement construction.",
    descriptionFa: "کنترل کیفیت عملیات شمع‌کوبی، بتن‌ریزی‌های دریایی، چیدمان آرمورهای موج‌شکن و روسازی‌های سنگین محوطه‌های بندری.",
    requirements: [
      "B.Sc. in Civil Engineering",
      "Hands-on experience on active port or breakwater construction sites",
      "Knowledge of FIDIC contracts, QA/QC standards, and non-destructive testing",
      "Strong communication and contractor management skills"
    ],
    requirementsFa: [
      "کارشناسی مهندسی عمران",
      "سابقه فعالیت مقیم در پروژه‌های موج‌شکن، اسکله یا ابنیه سنگین ساحلی",
      "آشنایی با شرایط عمومی پیمان، استانداردهای آزمایشگاهی و کنترل کیفیت",
      "دقت بالا و توانایی تعامل فنی موثر با پیمانکاران"
    ]
  },
  {
    id: "gis-remote-sensing-specialist",
    title: "Coastal GIS & Oceanographic Data Analyst",
    titleFa: "کارشناس ارشد GIS ساحلی و سنجش از دور",
    department: "Field Oceanographic Data & GIS",
    departmentFa: "دپارتمان داده‌های میدانی و GIS ساحلی",
    location: "Tehran HQ",
    locationFa: "دفتر مرکزی تهران",
    type: "Full-Time",
    typeFa: "تمام وقت",
    experience: "3+ years",
    experienceFa: "حداقل ۳ سال سابقه کار",
    description: "Analyze hydrographic survey points, satellite radar imagery, and multibeam sonar datasets to construct coastal morphodynamic databases and hazard maps.",
    descriptionFa: "پردازش ابر نقاط هیدروگرافی، تصاویر راداری و نوری ماهواره‌ای جهت ایجاد پایگاه داده‌های مکانی تغییرات خط ساحلی و اطلس‌های دریایی.",
    requirements: [
      "Degree in Geomatics, Geoinformatics, or Marine Geology",
      "Advanced ArcGIS Pro, QGIS, and spatial database experience",
      "Experience with HYPACK or multibeam post-processing is an asset",
      "Solid understanding of coastal datum and coordinate systems"
    ],
    requirementsFa: [
      "کارشناسی یا کارشناسی ارشد مهندسی نقشه‌برداری، GIS یا زمین‌شناسی دریایی",
      "تسلط کامل بر ArcGIS Pro، QGIS و پایگاه‌های داده مکانی (PostGIS)",
      "آشنایی با پردازش داده‌های هیدروگرافی نرم‌افزار HYPACK امتیاز محسوب می‌شود",
      "درک دقیق سطوح مبنای ارتفاعی دریایی (Chart Datum) و سیستم‌های تصویر"
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "Ports & Maritime Organization (PMO)", nameFa: "سازمان بنادر و دریانوردی کشور", type: "Government Maritime Authority", typeFa: "مرجع عالی حاکمیت دریایی و بندری" },
  { name: "National Iranian Oil Company (NIOC)", nameFa: "شرکت ملی نفت ایران", type: "Energy & Offshore Terminals", typeFa: "پایانه‌های صادراتی و فراساحلی نفت" },
  { name: "National Petrochemical Company (NPC)", nameFa: "شرکت ملی صنایع پتروشیمی", type: "Industrial Coastal Intakes", typeFa: "تأسیسات آبگیر و اسکله‌های تخصصی" },
  { name: "Ministry of Energy (Water Resources)", nameFa: "وزارت نیرو (مدیریت منابع آب)", type: "Coastal Water Infrastructure", typeFa: "زیرساخت‌های منابع آب و خطوط انتقال ساحلی" },
  { name: "Tehran Municipality / Renovation Org", nameFa: "سازمان نوسازی اراضی عباس‌آباد", type: "Civic Infrastructure", typeFa: "ابنیه خاص و سازه‌های نمادین شهری" },
  { name: "Pars Oil and Gas Company (POGC)", nameFa: "شرکت نفت و گاز پارس", type: "Offshore Gas Terminals", typeFa: "پایانه‌ها و بارگیری گاز پارس جنوبی" },
  { name: "Qeshm Free Zone Organization", nameFa: "سازمان منطقه آزاد قشم", type: "Island Commercial Ports", typeFa: "توسعه بنادر تجاری و شیلاتی جزیره" },
  { name: "Chabahar Free Trade-Industrial Zone", nameFa: "منطقه آزاد تجاری-صنعتی چابهار", type: "Oceanic Deepwater Facilities", typeFa: "پایانه‌های اقیانوسی و ترانزیت بین‌المللی" }
];
