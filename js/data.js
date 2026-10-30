/**
 * Site content (bilingual). Add, remove or edit entries here —
 * the page renders everything automatically.
 * `icon` values refer to the <symbol id="i-…"> sprite in index.html.
 */
window.SITE_DATA = {
  // Words floating on the interactive 3D sphere in the hero
  sphere: {
    en: ['HTML', 'CSS', 'JavaScript', 'Excel', 'UI / UX', 'Web Systems', 'Data', 'Responsive', 'SEO', 'Logic',
      'Software Eng.', 'Problem Solving', 'Organization', 'Accounts', 'Automation', 'Clean Code', 'Analysis', 'Design'],
    ar: ['HTML', 'CSS', 'JavaScript', 'Excel', 'UI / UX', 'أنظمة ويب', 'البيانات', 'تصميم متجاوب', 'SEO', 'المنطق',
      'هندسة البرمجيات', 'حل المشكلات', 'التنظيم', 'الحسابات', 'الأتمتة', 'كود نظيف', 'التحليل', 'التصميم']
  },

  // Words in the scrolling gradient band
  marquee: {
    en: ['Web Design', 'Web Development', 'Electronic Systems', 'Microsoft Excel', 'Data Management', 'Problem Solving', 'Organization'],
    ar: ['تصميم المواقع', 'تطوير المواقع', 'الأنظمة الإلكترونية', 'Microsoft Excel', 'إدارة البيانات', 'حل المشكلات', 'التنظيم']
  },

  skills: [
    {
      icon: 'layout',
      name: { en: 'Website Design & Development', ar: 'تصميم وتطوير المواقع الإلكترونية' },
      desc: {
        en: 'Designing and building modern, responsive websites with clean code and a focus on user experience.',
        ar: 'تصميم وبناء مواقع عصرية ومتجاوبة بكود نظيف وتركيز على تجربة المستخدم.'
      },
      tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsive']
    },
    {
      icon: 'cpu',
      name: { en: 'Building Electronic Systems', ar: 'إنشاء وتطوير الأنظمة الإلكترونية' },
      desc: {
        en: 'Creating and developing web-based systems that organize workflows and automate everyday tasks.',
        ar: 'إنشاء وتطوير أنظمة إلكترونية تنظّم سير العمل وتؤتمت المهام اليومية.'
      },
      tags: [{ en: 'Web Systems', ar: 'أنظمة ويب' }, { en: 'Automation', ar: 'أتمتة' }]
    },
    {
      icon: 'table',
      name: { en: 'Microsoft Excel', ar: 'Microsoft Excel' },
      desc: {
        en: 'Building structured spreadsheets, formulas, reports and tables that turn raw data into clear insights.',
        ar: 'إعداد جداول منظمة ومعادلات وتقارير تحوّل البيانات الخام إلى معلومات واضحة.'
      },
      tags: [{ en: 'Formulas', ar: 'المعادلات' }, { en: 'Reports', ar: 'التقارير' }, { en: 'Data Analysis', ar: 'تحليل البيانات' }]
    },
    {
      icon: 'database',
      name: { en: 'Data & Accounts Management', ar: 'إدارة البيانات والحسابات' },
      desc: {
        en: 'Organizing, maintaining and tracking data and accounts accurately and reliably.',
        ar: 'تنظيم البيانات والحسابات ومتابعتها وحفظها بدقة وموثوقية.'
      },
      tags: [{ en: 'Data Entry', ar: 'إدخال البيانات' }, { en: 'Accuracy', ar: 'الدقة' }, { en: 'Records', ar: 'السجلات' }]
    },
    {
      icon: 'users',
      name: { en: 'Administration & Organization', ar: 'الإدارة والتنظيم' },
      desc: {
        en: 'Planning, prioritizing and organizing tasks and resources to keep work running smoothly.',
        ar: 'التخطيط وترتيب الأولويات وتنظيم المهام والموارد لضمان سير العمل بسلاسة.'
      },
      tags: [{ en: 'Planning', ar: 'التخطيط' }, { en: 'Organization', ar: 'التنظيم' }]
    },
    {
      icon: 'bulb',
      name: { en: 'Problem Solving & Logical Thinking', ar: 'تحليل المشكلات والتفكير المنطقي' },
      desc: {
        en: 'Analyzing problems, breaking them into steps and finding practical, efficient solutions.',
        ar: 'تحليل المشكلات وتقسيمها إلى خطوات والوصول إلى حلول عملية وفعّالة.'
      },
      tags: [{ en: 'Analysis', ar: 'التحليل' }, { en: 'Logic', ar: 'المنطق' }]
    },
    {
      icon: 'terminal',
      name: { en: 'Technical & Programming Skills', ar: 'المهارات التقنية والبرمجية' },
      desc: {
        en: 'A solid software engineering foundation and the ability to learn and apply new technologies quickly.',
        ar: 'أساس متين في هندسة البرمجيات وقدرة على تعلّم التقنيات الجديدة وتطبيقها بسرعة.'
      },
      tags: [{ en: 'Software Engineering', ar: 'هندسة البرمجيات' }, { en: 'Programming', ar: 'البرمجة' }]
    }
  ],

  services: [
    {
      icon: 'layout',
      title: { en: 'Website Design & Development', ar: 'تصميم وتطوير المواقع' },
      desc: {
        en: 'Personal, business and landing-page websites that look professional and work on every device.',
        ar: 'مواقع شخصية وتجارية وصفحات تعريفية باحترافية عالية وتعمل على جميع الأجهزة.'
      },
      points: {
        en: ['Responsive, modern design', 'Fast loading & SEO-friendly', 'Arabic & English support'],
        ar: ['تصميم عصري ومتجاوب', 'سرعة تحميل وتهيئة لمحركات البحث', 'دعم العربية والإنجليزية']
      }
    },
    {
      icon: 'cpu',
      title: { en: 'Web-based Systems', ar: 'الأنظمة الإلكترونية' },
      desc: {
        en: 'Custom systems that organize your data, workflows and day-to-day operations in one place.',
        ar: 'أنظمة مخصّصة تجمع بياناتك وسير عملك وعملياتك اليومية في مكان واحد.'
      },
      points: {
        en: ['Built around your needs', 'Clean, maintainable code', 'Ready to scale'],
        ar: ['مبنية حسب احتياجك', 'كود نظيف وسهل الصيانة', 'قابلة للتوسّع']
      }
    },
    {
      icon: 'table',
      title: { en: 'Excel & Data Solutions', ar: 'حلول Excel والبيانات' },
      desc: {
        en: 'Well-structured spreadsheets, reports and data organization for clearer decisions.',
        ar: 'جداول وتقارير منظمة وتنظيم للبيانات يساعدك على اتخاذ قرارات أوضح.'
      },
      points: {
        en: ['Spreadsheets & formulas', 'Reports & summaries', 'Data & accounts organization'],
        ar: ['جداول ومعادلات', 'تقارير وملخصات', 'تنظيم البيانات والحسابات']
      }
    }
  ],

  // Only real projects. Add new ones to this list as they are completed.
  // Optional fields: image (path), live (URL), code (URL).
  projects: [
    {
      icon: 'code',
      status: { en: 'Live', ar: 'مكتمل' },
      title: { en: 'Personal Portfolio Website', ar: 'الموقع الشخصي (Portfolio)' },
      desc: {
        en: 'This website: a fast, bilingual (Arabic/English) portfolio with light & dark themes, responsive layout, smooth animations, a working contact form and SEO optimization — built with clean, modular code.',
        ar: 'هذا الموقع: Portfolio سريع ثنائي اللغة (عربي/إنجليزي) يدعم الوضعين الفاتح والداكن، بتصميم متجاوب وحركات ناعمة ونموذج تواصل فعّال وتهيئة لمحركات البحث — مبني بكود نظيف ومنظم.'
      },
      tags: ['HTML5', 'CSS3', 'JavaScript', 'i18n', 'SEO'],
      live: '',
      code: ''
    }
  ],

  education: [
    {
      icon: 'grad',
      title: { en: 'Software Engineering', ar: 'هندسة البرمجيات' },
      org: { en: 'Nişantaşı University — Istanbul, Türkiye', ar: 'جامعة نيشانتاشي — إسطنبول، تركيا' },
      period: '',
      desc: {
        en: 'Studying the principles of software engineering, including programming, software design and development, and building reliable software systems.',
        ar: 'دراسة أسس هندسة البرمجيات، بما في ذلك البرمجة وتصميم البرمجيات وتطويرها وبناء أنظمة برمجية موثوقة.'
      }
    }
  ],

  // Practical experience areas. Replace or extend with specific roles (title, org, period) when available.
  experience: [
    {
      icon: 'code',
      title: { en: 'Software & Web Development', ar: 'تطوير البرمجيات والمواقع' },
      org: { en: 'Personal & academic projects', ar: 'مشاريع شخصية وأكاديمية' },
      period: '',
      points: {
        en: ['Designing and developing websites and web interfaces', 'Building web-based systems and tools', 'Writing clean, organized and maintainable code'],
        ar: ['تصميم وتطوير المواقع والواجهات', 'بناء أنظمة وأدوات إلكترونية', 'كتابة كود نظيف ومنظم وسهل الصيانة']
      }
    },
    {
      icon: 'database',
      title: { en: 'Data & Accounts Management', ar: 'إدارة البيانات والحسابات' },
      org: { en: 'Microsoft Excel · Data organization', ar: 'Microsoft Excel · تنظيم البيانات' },
      period: '',
      points: {
        en: ['Organizing and maintaining data and accounts', 'Preparing spreadsheets and reports in Excel', 'Ensuring accuracy and consistency of records'],
        ar: ['تنظيم البيانات والحسابات ومتابعتها', 'إعداد الجداول والتقارير باستخدام Excel', 'ضمان دقة السجلات واتساقها']
      }
    },
    {
      icon: 'users',
      title: { en: 'Administration & Organization', ar: 'الإدارة والتنظيم' },
      org: { en: 'Planning · Coordination · Problem solving', ar: 'التخطيط · التنسيق · حل المشكلات' },
      period: '',
      points: {
        en: ['Planning and organizing tasks and priorities', 'Analyzing problems and proposing practical solutions'],
        ar: ['تخطيط المهام وتنظيم الأولويات', 'تحليل المشكلات واقتراح حلول عملية']
      }
    }
  ]
};
