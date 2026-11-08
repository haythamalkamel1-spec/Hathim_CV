/**
 * Site content (English / Arabic / Turkish). Add, remove or edit entries here —
 * the page renders everything automatically.
 * `icon` values refer to the <symbol id="i-…"> sprite in index.html.
 */
window.SITE_DATA = {
  // Words floating on the interactive 3D sphere in the hero
  sphere: {
    en: ['HTML', 'CSS', 'JavaScript', 'Excel', 'UI / UX', 'Web Systems', 'Data', 'Responsive', 'SEO', 'Logic',
      'Software Eng.', 'Problem Solving', 'Organization', 'Accounts', 'Automation', 'Clean Code', 'Analysis', 'Design'],
    ar: ['HTML', 'CSS', 'JavaScript', 'Excel', 'UI / UX', 'أنظمة ويب', 'البيانات', 'تصميم متجاوب', 'SEO', 'المنطق',
      'هندسة البرمجيات', 'حل المشكلات', 'التنظيم', 'الحسابات', 'الأتمتة', 'كود نظيف', 'التحليل', 'التصميم'],
    tr: ['HTML', 'CSS', 'JavaScript', 'Excel', 'UI / UX', 'Web Sistemleri', 'Veri', 'Duyarlı Tasarım', 'SEO', 'Mantık',
      'Yazılım Müh.', 'Problem Çözme', 'Organizasyon', 'Hesaplar', 'Otomasyon', 'Temiz Kod', 'Analiz', 'Tasarım']
  },

  // Words in the scrolling gradient band
  marquee: {
    en: ['Web Design', 'Web Development', 'Electronic Systems', 'Microsoft Excel', 'Data Management', 'Problem Solving', 'Organization'],
    ar: ['تصميم المواقع', 'تطوير المواقع', 'الأنظمة الإلكترونية', 'Microsoft Excel', 'إدارة البيانات', 'حل المشكلات', 'التنظيم'],
    tr: ['Web Tasarımı', 'Web Geliştirme', 'Elektronik Sistemler', 'Microsoft Excel', 'Veri Yönetimi', 'Problem Çözme', 'Organizasyon']
  },

  // Spoken languages: `value` is the bar fill (0–100)
  languages: [
    { name: { en: 'Arabic', ar: 'العربية', tr: 'Arapça' }, level: { en: 'Native', ar: 'اللغة الأم', tr: 'Ana dil' }, value: 100 },
    { name: { en: 'Turkish', ar: 'التركية', tr: 'Türkçe' }, level: { en: 'Excellent', ar: 'ممتازة جدًا', tr: 'Çok iyi' }, value: 90 },
    { name: { en: 'English', ar: 'الإنجليزية', tr: 'İngilizce' }, level: { en: 'Good', ar: 'جيدة', tr: 'İyi' }, value: 70 }
  ],

  skills: [
    {
      icon: 'layout',
      name: { en: 'Website Design & Development', ar: 'تصميم وتطوير المواقع الإلكترونية', tr: 'Web Sitesi Tasarımı ve Geliştirme' },
      desc: {
        en: 'Designing and building modern, responsive websites with clean code and a focus on user experience.',
        ar: 'تصميم وبناء مواقع عصرية ومتجاوبة بكود نظيف وتركيز على تجربة المستخدم.',
        tr: 'Temiz kod ve kullanıcı deneyimi odağıyla modern, duyarlı web siteleri tasarlayıp geliştirme.'
      },
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', { en: 'Responsive', ar: 'Responsive', tr: 'Duyarlı' }]
    },
    {
      icon: 'cpu',
      name: { en: 'Building Electronic Systems', ar: 'إنشاء وتطوير الأنظمة الإلكترونية', tr: 'Elektronik Sistem Geliştirme' },
      desc: {
        en: 'Creating and developing web-based systems that organize workflows and automate everyday tasks.',
        ar: 'إنشاء وتطوير أنظمة إلكترونية تنظّم سير العمل وتؤتمت المهام اليومية.',
        tr: 'İş akışlarını düzenleyen ve günlük görevleri otomatikleştiren web tabanlı sistemler oluşturma ve geliştirme.'
      },
      tags: [{ en: 'Web Systems', ar: 'أنظمة ويب', tr: 'Web Sistemleri' }, { en: 'Automation', ar: 'أتمتة', tr: 'Otomasyon' }]
    },
    {
      icon: 'table',
      name: { en: 'Microsoft Excel', ar: 'Microsoft Excel', tr: 'Microsoft Excel' },
      desc: {
        en: 'Building structured spreadsheets, formulas, reports and tables that turn raw data into clear insights.',
        ar: 'إعداد جداول منظمة ومعادلات وتقارير تحوّل البيانات الخام إلى معلومات واضحة.',
        tr: 'Ham veriyi anlaşılır bilgilere dönüştüren düzenli tablolar, formüller ve raporlar hazırlama.'
      },
      tags: [{ en: 'Formulas', ar: 'المعادلات', tr: 'Formüller' }, { en: 'Reports', ar: 'التقارير', tr: 'Raporlar' }, { en: 'Data Analysis', ar: 'تحليل البيانات', tr: 'Veri Analizi' }]
    },
    {
      icon: 'database',
      name: { en: 'Data & Accounts Management', ar: 'إدارة البيانات والحسابات', tr: 'Veri ve Hesap Yönetimi' },
      desc: {
        en: 'Organizing, maintaining and tracking data and accounts accurately and reliably.',
        ar: 'تنظيم البيانات والحسابات ومتابعتها وحفظها بدقة وموثوقية.',
        tr: 'Veri ve hesapları doğru ve güvenilir şekilde düzenleme, sürdürme ve takip etme.'
      },
      tags: [{ en: 'Data Entry', ar: 'إدخال البيانات', tr: 'Veri Girişi' }, { en: 'Accuracy', ar: 'الدقة', tr: 'Doğruluk' }, { en: 'Records', ar: 'السجلات', tr: 'Kayıtlar' }]
    },
    {
      icon: 'users',
      name: { en: 'Administration & Organization', ar: 'الإدارة والتنظيم', tr: 'Yönetim ve Organizasyon' },
      desc: {
        en: 'Planning, prioritizing and organizing tasks and resources to keep work running smoothly.',
        ar: 'التخطيط وترتيب الأولويات وتنظيم المهام والموارد لضمان سير العمل بسلاسة.',
        tr: 'İşlerin sorunsuz yürümesi için görevleri ve kaynakları planlama, önceliklendirme ve düzenleme.'
      },
      tags: [{ en: 'Planning', ar: 'التخطيط', tr: 'Planlama' }, { en: 'Organization', ar: 'التنظيم', tr: 'Organizasyon' }]
    },
    {
      icon: 'bulb',
      name: { en: 'Problem Solving & Logical Thinking', ar: 'تحليل المشكلات والتفكير المنطقي', tr: 'Problem Çözme ve Mantıksal Düşünme' },
      desc: {
        en: 'Analyzing problems, breaking them into steps and finding practical, efficient solutions.',
        ar: 'تحليل المشكلات وتقسيمها إلى خطوات والوصول إلى حلول عملية وفعّالة.',
        tr: 'Problemleri analiz etme, adımlara bölme ve pratik, verimli çözümler bulma.'
      },
      tags: [{ en: 'Analysis', ar: 'التحليل', tr: 'Analiz' }, { en: 'Logic', ar: 'المنطق', tr: 'Mantık' }]
    },
    {
      icon: 'terminal',
      name: { en: 'Technical & Programming Skills', ar: 'المهارات التقنية والبرمجية', tr: 'Teknik ve Programlama Becerileri' },
      desc: {
        en: 'A solid software engineering foundation and the ability to learn and apply new technologies quickly.',
        ar: 'أساس متين في هندسة البرمجيات وقدرة على تعلّم التقنيات الجديدة وتطبيقها بسرعة.',
        tr: 'Sağlam bir yazılım mühendisliği temeli ve yeni teknolojileri hızla öğrenip uygulama yeteneği.'
      },
      tags: [{ en: 'Software Engineering', ar: 'هندسة البرمجيات', tr: 'Yazılım Mühendisliği' }, { en: 'Programming', ar: 'البرمجة', tr: 'Programlama' }]
    }
  ],

  services: [
    {
      icon: 'layout',
      title: { en: 'Website Design & Development', ar: 'تصميم وتطوير المواقع', tr: 'Web Sitesi Tasarımı ve Geliştirme' },
      desc: {
        en: 'Personal, business and landing-page websites that look professional and work on every device.',
        ar: 'مواقع شخصية وتجارية وصفحات تعريفية باحترافية عالية وتعمل على جميع الأجهزة.',
        tr: 'Profesyonel görünen ve her cihazda çalışan kişisel, kurumsal ve tanıtım web siteleri.'
      },
      points: {
        en: ['Responsive, modern design', 'Fast loading & SEO-friendly', 'Multilingual support'],
        ar: ['تصميم عصري ومتجاوب', 'سرعة تحميل وتهيئة لمحركات البحث', 'دعم تعدد اللغات'],
        tr: ['Duyarlı, modern tasarım', 'Hızlı yükleme ve SEO uyumu', 'Çok dilli destek']
      }
    },
    {
      icon: 'cpu',
      title: { en: 'Web-based Systems', ar: 'الأنظمة الإلكترونية', tr: 'Web Tabanlı Sistemler' },
      desc: {
        en: 'Custom systems that organize your data, workflows and day-to-day operations in one place.',
        ar: 'أنظمة مخصّصة تجمع بياناتك وسير عملك وعملياتك اليومية في مكان واحد.',
        tr: 'Verilerinizi, iş akışlarınızı ve günlük operasyonlarınızı tek yerde toplayan özel sistemler.'
      },
      points: {
        en: ['Built around your needs', 'Clean, maintainable code', 'Ready to scale'],
        ar: ['مبنية حسب احتياجك', 'كود نظيف وسهل الصيانة', 'قابلة للتوسّع'],
        tr: ['İhtiyaçlarınıza göre', 'Temiz, bakımı kolay kod', 'Büyümeye hazır']
      }
    },
    {
      icon: 'table',
      title: { en: 'Excel & Data Solutions', ar: 'حلول Excel والبيانات', tr: 'Excel ve Veri Çözümleri' },
      desc: {
        en: 'Well-structured spreadsheets, reports and data organization for clearer decisions.',
        ar: 'جداول وتقارير منظمة وتنظيم للبيانات يساعدك على اتخاذ قرارات أوضح.',
        tr: 'Daha net kararlar için düzenli tablolar, raporlar ve veri organizasyonu.'
      },
      points: {
        en: ['Spreadsheets & formulas', 'Reports & summaries', 'Data & accounts organization'],
        ar: ['جداول ومعادلات', 'تقارير وملخصات', 'تنظيم البيانات والحسابات'],
        tr: ['Tablolar ve formüller', 'Raporlar ve özetler', 'Veri ve hesap düzenleme']
      }
    }
  ],

  // Only real projects. Add new ones to this list as they are completed.
  // Optional fields: image (path), live (URL), code (URL).
  // `private: true` shows a locked "Private project" badge instead of links.
  projects: [
    {
      icon: 'wallet',
      private: true,
      type: { en: 'Web app', ar: 'تطبيق ويب', tr: 'Web uygulaması' },
      title: { en: 'Mizaniyati — Personal Budget', ar: 'ميزانيتي — إدارة الميزانية', tr: 'Mizaniyati — Kişisel Bütçe' },
      desc: {
        en: 'Arabic web app for personal expenses and monthly budgets: record income and spending, set a budget per month and see where your money goes in charts.',
        ar: 'تطبيق ويب عربي لإدارة المصاريف الشخصية والميزانية الشهرية: سجّل دخلك ومصاريفك، حدّد ميزانية لكل شهر، واعرف أين تذهب أموالك عبر رسوم بيانية.',
        tr: 'Kişisel harcamalar ve aylık bütçe için Arapça web uygulaması: gelir ve giderleri kaydet, her ay için bütçe belirle ve paranın nereye gittiğini grafiklerle gör.'
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Recharts']
    },
    {
      icon: 'calendar',
      private: true,
      type: { en: 'System', ar: 'نظام', tr: 'Sistem' },
      title: { en: 'Hajozati — Booking System', ar: 'حجوزاتي — نظام الحجوزات', tr: 'Hajozati — Rezervasyon Sistemi' },
      desc: {
        en: 'Booking and appointment system for small businesses, starting with salons: customers pick a service, staff member and time slot; owners manage everything from one dashboard.',
        ar: 'نظام حجوزات ومواعيد للأعمال الصغيرة، يبدأ بالصالونات: يختار العميل الخدمة والموظف والوقت المتاح، ويدير صاحب النشاط كل شيء من لوحة واحدة.',
        tr: 'Küçük işletmeler için randevu sistemi, kuaförlerle başlıyor: müşteri hizmeti, personeli ve saati seçer; işletme sahibi her şeyi tek panelden yönetir.'
      },
      tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zod']
    },
    {
      icon: 'file',
      private: true,
      type: { en: 'Web app', ar: 'تطبيق ويب', tr: 'Web uygulaması' },
      title: { en: 'Seerati — CV Builder', ar: 'سيرتي — منشئ السيرة الذاتية', tr: 'Seerati — CV Oluşturucu' },
      desc: {
        en: 'CV builder with an Arabic interface: fill a simple form, watch the CV update live in Arabic or English, then export it as a ready PDF.',
        ar: 'منشئ سير ذاتية بواجهة عربية: يملأ المستخدم نموذجًا بسيطًا، ويشاهد سيرته تتحدث مباشرة بالعربية أو الإنجليزية، ثم يحمّلها PDF جاهزة.',
        tr: 'Arapça arayüzlü CV oluşturucu: basit bir formu doldur, CV’nin Arapça veya İngilizce olarak anında güncellendiğini gör ve hazır PDF olarak indir.'
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PDF']
    },
    {
      icon: 'code',
      type: { en: 'Website', ar: 'موقع', tr: 'Web sitesi' },
      title: { en: 'Personal Portfolio Website', ar: 'الموقع الشخصي (Portfolio)', tr: 'Kişisel Portfolyo Web Sitesi' },
      desc: {
        en: 'This website: a fast, multilingual (English/Arabic/Turkish) portfolio with light & dark themes, interactive 3D graphics, smooth animations, a working contact form and SEO optimization — built with clean, modular code.',
        ar: 'هذا الموقع: Portfolio سريع متعدد اللغات (إنجليزي/عربي/تركي) يدعم الوضعين الفاتح والداكن، برسوم تفاعلية ثلاثية الأبعاد وحركات ناعمة ونموذج تواصل فعّال وتهيئة لمحركات البحث — مبني بكود نظيف ومنظم.',
        tr: 'Bu web sitesi: açık ve koyu tema, etkileşimli 3D grafikler, akıcı animasyonlar, çalışan iletişim formu ve SEO optimizasyonu içeren hızlı, çok dilli (İngilizce/Arapça/Türkçe) bir portfolyo — temiz ve modüler kodla geliştirildi.'
      },
      tags: ['HTML5', 'CSS3', 'JavaScript', 'i18n', 'SEO'],
      live: 'https://haythamalkamel1-spec.github.io/Hathim_CV/',
      code: 'https://github.com/haythamalkamel1-spec/Hathim_CV'
    }
  ],

  education: [
    {
      icon: 'grad',
      title: { en: 'Software Engineering', ar: 'هندسة البرمجيات', tr: 'Yazılım Mühendisliği' },
      org: { en: 'Nişantaşı University — Istanbul, Türkiye', ar: 'جامعة نيشانتاشي — إسطنبول، تركيا', tr: 'Nişantaşı Üniversitesi — İstanbul, Türkiye' },
      period: '',
      desc: {
        en: 'Studying the principles of software engineering, including programming, software design and development, and building reliable software systems.',
        ar: 'دراسة أسس هندسة البرمجيات، بما في ذلك البرمجة وتصميم البرمجيات وتطويرها وبناء أنظمة برمجية موثوقة.',
        tr: 'Programlama, yazılım tasarımı ve geliştirme ile güvenilir yazılım sistemleri oluşturma dahil yazılım mühendisliğinin temel ilkelerini öğreniyorum.'
      }
    }
  ],

  // Practical experience areas. Replace or extend with specific roles (title, org, period) when available.
  experience: [
    {
      icon: 'code',
      title: { en: 'Software & Web Development', ar: 'تطوير البرمجيات والمواقع', tr: 'Yazılım ve Web Geliştirme' },
      org: { en: 'Personal & academic projects', ar: 'مشاريع شخصية وأكاديمية', tr: 'Kişisel ve akademik projeler' },
      period: '',
      points: {
        en: ['Designing and developing websites and web interfaces', 'Building web-based systems and tools', 'Writing clean, organized and maintainable code'],
        ar: ['تصميم وتطوير المواقع والواجهات', 'بناء أنظمة وأدوات إلكترونية', 'كتابة كود نظيف ومنظم وسهل الصيانة'],
        tr: ['Web siteleri ve arayüzler tasarlama ve geliştirme', 'Web tabanlı sistemler ve araçlar oluşturma', 'Temiz, düzenli ve bakımı kolay kod yazma']
      }
    },
    {
      icon: 'database',
      title: { en: 'Data & Accounts Management', ar: 'إدارة البيانات والحسابات', tr: 'Veri ve Hesap Yönetimi' },
      org: { en: 'Microsoft Excel · Data organization', ar: 'Microsoft Excel · تنظيم البيانات', tr: 'Microsoft Excel · Veri düzenleme' },
      period: '',
      points: {
        en: ['Organizing and maintaining data and accounts', 'Preparing spreadsheets and reports in Excel', 'Ensuring accuracy and consistency of records'],
        ar: ['تنظيم البيانات والحسابات ومتابعتها', 'إعداد الجداول والتقارير باستخدام Excel', 'ضمان دقة السجلات واتساقها'],
        tr: ['Veri ve hesapları düzenleme ve takip etme', "Excel'de tablo ve rapor hazırlama", 'Kayıtların doğruluğunu ve tutarlılığını sağlama']
      }
    },
    {
      icon: 'users',
      title: { en: 'Administration & Organization', ar: 'الإدارة والتنظيم', tr: 'Yönetim ve Organizasyon' },
      org: { en: 'Planning · Coordination · Problem solving', ar: 'التخطيط · التنسيق · حل المشكلات', tr: 'Planlama · Koordinasyon · Problem çözme' },
      period: '',
      points: {
        en: ['Planning and organizing tasks and priorities', 'Analyzing problems and proposing practical solutions'],
        ar: ['تخطيط المهام وتنظيم الأولويات', 'تحليل المشكلات واقتراح حلول عملية'],
        tr: ['Görevleri ve öncelikleri planlama ve düzenleme', 'Problemleri analiz edip pratik çözümler önerme']
      }
    }
  ]
};
