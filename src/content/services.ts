export const SERVICES_LIST_TR = [
  {
    name: "Frontend Developer - Kaft",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "Vue.js",
      "Figma",
    ],
    img: "/images/abstract-1.png",
    url: "https://www.kaft.com/",
    description:
      "Firmanın e-ticaret websitesinin tüm ön yüz geliştirme ve güncellemelerinden sorumlu oldum. Vue.js tabanlı yönetim paneli ile ön yüz arasında dinamik bağlantılar kurdum. Kullanıcı deneyimini geliştirmek ve işlevselliği artırmak amacıyla temel backend düzenlemeleri ve entegrasyonlara katkıda bulundum..",
  },
  {
    name: "Frontend Developer - Ideasoft",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
    ],
    img: "/images/abstract-2.png",
    url: "https://www.ideasoft.com.tr/",
    description:
      "Tasarım departmanı tarafından proje bazında çizilen eticaret arayüzlerinin (Adobe XD ve Figma) Html5, CSS3, SCSS, Bootstrap 4, Javascript ve JQuery teknolojilerini kullanarak front‑end geliştirmelerini ve operasyonlarını gerçekleştiriyorum. (Responsive Design) Perfect Pixel ve Clean Code kullanarak 175+ eticaret sitesini tamamladım.",
  },
  {
    name: "Frontend Developer - NeTürk",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "Figma",
    ],
    img: "/images/abstract-3.png",
    url: "https://www.neturk.com/",
    description:
      "Web sitelerini müşterilerinin istekleri doğrultusunda ve özgün bir şekilde Adobe Photoshop CC'de tasarladıktan sonra HTML, JavaScript, CSS ve Bootstrap kullanıp responsive olarak tasarıma uygun hale getiriyordum. Siteyi müşteri onayladıktan sonra C# ve MySQL kullanarak müşterinin rahat ürün yükleyebilmesi için panele bağlayıp yayınlarken Google'da öne çıkması için SEO işlemlerini yapıyordum.",
  },
];

export const SERVICES_LIST_EN = [
  {
    name: "Frontend Developer - Kaft",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "Vue.js",
      "Figma",
    ],
    img: "/images/abstract-1.png",
    url: "https://www.kaft.com/",
    description:
      "Responsible for all frontend development and updates of the company’s e-commerce website. Built dynamic integrations between the Vue.js-based admin panel and the frontend. Contributed to backend adjustments and integrations to enhance functionality and user experience.",
  },
  {
    name: "Frontend Developer - Ideasoft",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
    ],
    img: "/images/abstract-2.png",
    url: "https://www.ideasoft.com.tr/",
    description:
      "I developed and sustained the front-end of e-commerce interfaces designed by the creative team (Adobe XD & Figma), using HTML5, CSS3, SCSS, Bootstrap 4, JavaScript, and jQuery. I completed over 175 responsive, pixel-perfect, and clean-coded e-commerce websites.",
  },
  {
    name: "Frontend Developer - NeTürk",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL",
      "Figma",
    ],
    img: "/images/abstract-3.png",
    url: "https://www.neturk.com/",
    description:
      "Designed custom websites in Adobe Photoshop CC based on client requests, then developed responsive layouts using HTML, CSS, JavaScript, and Bootstrap. Integrated with a C# + MySQL panel for easy product management and performed SEO before publishing.",
  },
];

// Function to get services based on language
export const getServicesList = (language: 'tr' | 'en') => {
  return language === 'tr' ? SERVICES_LIST_TR : SERVICES_LIST_EN;
};

// Default export for backward compatibility
export const SERVICES_LIST = SERVICES_LIST_TR;
