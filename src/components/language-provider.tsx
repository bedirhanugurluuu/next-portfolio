"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.portfolio": "Portfolyo",
    
    // Hero Section
    "hero.title": "Frontend Developer",
    "hero.subtitle": "Merhaba! Ben Bedirhan Uğurlu. Modern web teknolojileri ile kullanıcı dostu ve etkileyici dijital deneyimler yaratıyorum.",
    
    // About Section
    "about.title": "Hakkımda",
    "about.description": "Merhaba! Ben Bedirhan Uğurlu, tutkulu bir Frontend Developer'ım. Modern web teknolojileri kullanarak kullanıcı dostu ve etkileyici dijital deneyimler yaratmaya odaklanıyorum. Her projede yaratıcılık ve teknik mükemmelliği bir araya getiriyorum.",
    "about.skills.frontend": "Frontend Development",
    "about.skills.frontend.desc": "Modern web teknolojileri ile responsive ve performanslı kullanıcı arayüzleri geliştiriyorum.",
    "about.skills.uiux": "UI/UX Design",
    "about.skills.uiux.desc": "Kullanıcı deneyimini ön planda tutarak, estetik ve kullanışlı tasarımlar oluşturuyorum.",
    "about.skills.tech": "Modern Technologies",
    "about.skills.tech.desc": "React, Next.js, TypeScript gibi güncel teknolojileri kullanarak projeler geliştiriyorum.",
    "about.skills.problem": "Problem Solving",
    "about.skills.problem.desc": "Karmaşık problemleri analiz edip, etkili ve sürdürülebilir çözümler üretiyorum.",
    
    // Experience Section
    "experience.title": "Çalışma Deneyimlerim",
    "experience.description": "Farklı şirketlerde edindiğim deneyimler ve geliştirdiğim projeler. Her pozisyonda yeni teknolojiler öğrendim ve kendimi sürekli geliştirdim.",
    "experience.view": "Detaylar",
    
    // Portfolio Section
    "portfolio.title": "Yaptığım projeler",
    "portfolio.description": "Yaptığım web sitesi projelerimi sizlerle paylaşıyorum. Yapım aşamalarını ve içeriklerini merak ediyorsanız tıklayın.",
    "portfolio.explore": "Projeleri Keşfet",
    
    // Portfolio Projects
    "portfolio.projects.nextjs.name": "Portfolio Next.js",
    "portfolio.projects.nextjs.description": "Modern web teknolojileri kullanılarak geliştirilmiş, tam dinamik admin paneli bulunan, SSG/CSR teknolojisi ile SEO optimize edilmiş kişisel portfolio sitesi.",
    "portfolio.projects.nextjs.overview": "Bu proje, modern web geliştirme pratiklerini sergileyen kapsamlı bir portfolio sitesidir. Next.js 15'in en son özelliklerini kullanarak, hem performans hem de kullanıcı deneyimi odaklı bir platform oluşturdum. Tam dinamik admin paneli ile içerik yönetimi, Supabase entegrasyonu ile veri saklama ve Vercel ile hızlı deploy imkanı sunuyor.",
    "portfolio.projects.nextjs.challenges": "Projenin en büyük zorluklarından biri, admin paneli ile frontend arasında gerçek zamanlı senkronizasyon sağlamaktı. Supabase'in real-time özelliklerini kullanarak bu sorunu çözdüm. Ayrıca SSG ve CSR teknolojilerini hibrit olarak kullanarak hem SEO performansını hem de dinamik içerik güncellemelerini optimize ettim.",
    "portfolio.projects.nextjs.results": "Proje sonucunda, Google PageSpeed'de 95+ skor alan, SEO açısından tam optimize edilmiş ve admin paneli ile kolayca yönetilebilen bir portfolio sitesi elde ettim. Vercel'de deploy edilen site, global CDN sayesinde dünya çapında hızlı erişim sağlıyor.",
    
    // Portfolio Next.js Features
    "portfolio.nextjs.features.admin": "Tam Dinamik Admin Paneli",
    "portfolio.nextjs.features.ssg": "SSG/CSR Hibrit Teknolojisi",
    "portfolio.nextjs.features.seo": "SEO Optimizasyonu",
    "portfolio.nextjs.features.supabase": "Supabase Entegrasyonu",
    "portfolio.nextjs.features.vercel": "Vercel Deploy",
    "portfolio.nextjs.features.responsive": "Responsive Tasarım",
    "portfolio.nextjs.features.sitemap": "Dinamik Sitemap",
    "portfolio.nextjs.features.canonical": "Canonical URL'ler",
    "portfolio.projects.starlight.name": "Starlight Prom Nights",
    "portfolio.projects.starlight.description": "Lise mezuniyet baloları için canlı promosyon sayfası, bilet rezervasyonu, fotoğraf galerisi ve tema seçimi özellikleri ile.",
    "portfolio.projects.prestige.name": "Prestige College of Arts",
    "portfolio.projects.prestige.description": "Program vurguları, sanal kampüs turları ve başvuru portalları ile zarif akademik landing page.",
    "portfolio.projects.cyclespot.name": "CycleSpot Rentals",
    "portfolio.projects.cyclespot.description": "Konum tabanlı müsaitlik, fiyat hesaplayıcıları ve güvenli online rezervasyonlar ile bisiklet kiralama platformu.",
    "portfolio.projects.bella.name": "Bella Cucina Restaurant",
    "portfolio.projects.bella.description": "Menü görüntüleme, rezervasyon sistemi ve şef özel yemekleri vurguları ile iştah açıcı restoran landing page.",
    "portfolio.projects.serenemind.name": "SereneMind Meditation",
    "portfolio.projects.serenemind.description": "Rehberli seans zamanlayıcıları, ilerleme takibi ve rahatlama müziği entegrasyonu ile sakinleştirici meditasyon uygulaması arayüzü.",
    
    // Kardeş Yapı Project
    "portfolio.projects.kardes.name": "Kardeş Yapı",
    "portfolio.projects.kardes.description": "PHP ile geliştirilmiş, tam dinamik admin paneli bulunan inşaat şirketi web sitesi. Modern tasarım ve kullanıcı dostu arayüz ile proje yönetimi ve müşteri iletişimi sağlıyor.",
    "portfolio.projects.kardes.overview": "Kardeş Yapı, inşaat sektöründe faaliyet gösteren bir şirket için geliştirilmiş kapsamlı bir web sitesidir. PHP backend teknolojisi kullanılarak, tam dinamik admin paneli ile içerik yönetimi, proje galerisi, hizmetler ve iletişim formları entegre edilmiştir. Responsive tasarım ile tüm cihazlarda mükemmel kullanıcı deneyimi sunar.",
    "portfolio.projects.kardes.challenges": "Projenin en büyük zorluklarından biri, PHP ile modern ve güvenli bir admin paneli oluşturmaktı. SQL injection koruması, XSS güvenliği ve dosya yükleme güvenliği gibi güvenlik önlemlerini uyguladım. Ayrıca responsive tasarım ile mobil uyumluluğu sağladım ve SEO optimizasyonu gerçekleştirdim.",
    "portfolio.projects.kardes.results": "Proje sonucunda, güvenli ve kullanıcı dostu bir inşaat şirketi web sitesi elde ettim. Admin paneli ile kolayca içerik yönetimi yapılabilen, proje galerisi ile portfolyo sergilenen ve iletişim formları ile müşteri geri bildirimi alınan profesyonel bir platform oluşturdum.",
    
    // Kardeş Yapı Features
    "portfolio.kardes.features.admin": "PHP Admin Paneli",
    "portfolio.kardes.features.projects": "Proje Galerisi",
    "portfolio.kardes.features.services": "Hizmetler Sayfası",
    "portfolio.kardes.features.contact": "İletişim Formu",
    "portfolio.kardes.features.responsive": "Responsive Tasarım",
    "portfolio.kardes.features.seo": "SEO Optimizasyonu",
    "portfolio.kardes.features.security": "Güvenlik Önlemleri",
    "portfolio.kardes.features.gallery": "Dinamik Galeri",
    
    // Umut Endüstriyel Project
    "portfolio.projects.umut.name": "Umut Endüstriyel",
    "portfolio.projects.umut.description": "WordPress ile geliştirilmiş endüstriyel şirket web sitesi. Modern tasarım ve kullanıcı dostu arayüz ile ürün kataloğu ve hizmet tanıtımı sağlıyor.",
    "portfolio.projects.umut.overview": "Umut Endüstriyel, endüstriyel sektörde faaliyet gösteren bir şirket için WordPress CMS kullanılarak geliştirilmiş profesyonel bir web sitesidir. Özel tema tasarımı ve eklenti entegrasyonları ile ürün kataloğu, hizmetler, referanslar ve iletişim bölümleri oluşturulmuştur. Responsive tasarım ile tüm cihazlarda mükemmel kullanıcı deneyimi sunar.",
    "portfolio.projects.umut.challenges": "Projenin en büyük zorluklarından biri, WordPress'in esnek yapısını kullanarak endüstriyel sektöre uygun özel bir tema oluşturmaktı. Ürün kataloğu için özel post type'lar, custom field'lar ve görsel galeri sistemleri geliştirdim. Ayrıca SEO optimizasyonu ve performans iyileştirmeleri gerçekleştirdim.",
    "portfolio.projects.umut.results": "Proje sonucunda, endüstriyel şirket için profesyonel ve kullanıcı dostu bir WordPress web sitesi elde ettim. Kolay içerik yönetimi, ürün kataloğu sistemi ve responsive tasarım ile müşteri memnuniyeti sağlayan bir platform oluşturdum.",
    
    // Umut Endüstriyel Features
    "portfolio.umut.features.wordpress": "WordPress CMS",
    "portfolio.umut.features.custom": "Özel Tema Tasarımı",
    "portfolio.umut.features.catalog": "Ürün Kataloğu",
    "portfolio.umut.features.services": "Hizmetler Sayfası",
    "portfolio.umut.features.contact": "İletişim Formu",
    "portfolio.umut.features.responsive": "Responsive Tasarım",
    "portfolio.umut.features.seo": "SEO Optimizasyonu",
    
    // Çinar Et Pide Project
    "portfolio.projects.cinar.name": "Çinar Et Pide",
    "portfolio.projects.cinar.description": "WordPress ile geliştirilmiş restoran web sitesi. Modern tasarım ve kullanıcı dostu arayüz ile menü tanıtımı ve online sipariş sistemi sağlıyor.",
    "portfolio.projects.cinar.overview": "Çinar Et Pide, geleneksel Türk mutfağı sunan bir restoran için WordPress CMS kullanılarak geliştirilmiş profesyonel bir web sitesidir. Özel tema tasarımı ve eklenti entegrasyonları ile menü sistemi, galeri, hakkımızda ve iletişim bölümleri oluşturulmuştur. Responsive tasarım ile tüm cihazlarda mükemmel kullanıcı deneyimi sunar.",
    "portfolio.projects.cinar.challenges": "Projenin en büyük zorluklarından biri, restoran sektörüne uygun özel bir WordPress teması oluşturmaktı. Menü sistemi için özel post type'lar, fiyat gösterimi ve kategori filtreleme sistemleri geliştirdim. Ayrıca görsel galeri ve online rezervasyon sistemi entegrasyonu gerçekleştirdim.",
    "portfolio.projects.cinar.results": "Proje sonucunda, restoran için profesyonel ve kullanıcı dostu bir WordPress web sitesi elde ettim. Kolay menü yönetimi, görsel galeri sistemi ve responsive tasarım ile müşteri deneyimini artıran bir platform oluşturdum.",
    
    // Çinar Et Pide Features
    "portfolio.cinar.features.wordpress": "WordPress CMS",
    "portfolio.cinar.features.custom": "Özel Tema Tasarımı",
    "portfolio.cinar.features.menu": "Menü Sistemi",
    "portfolio.cinar.features.gallery": "Görsel Galeri",
    "portfolio.cinar.features.about": "Hakkımızda Sayfası",
    "portfolio.cinar.features.contact": "İletişim Formu",
    "portfolio.cinar.features.responsive": "Responsive Tasarım",
    "portfolio.cinar.features.seo": "SEO Optimizasyonu",
    
    // Portfolio Detail Page
    "portfolio.detail.back": "Portfolyoya Dön",
    "portfolio.detail.liveDemo": "Canlı Demo",
    "portfolio.detail.viewCode": "Kodu Görüntüle",
    "portfolio.detail.gallery": "Proje Galerisi",
    "portfolio.detail.technologies": "Kullanılan Teknolojiler",
    "portfolio.detail.features": "Ana Özellikler",
    "portfolio.detail.overview": "Proje Genel Bakış",
    "portfolio.detail.challenges": "Zorluklar ve Çözümler",
    "portfolio.detail.results": "Sonuçlar ve Etki",
    "portfolio.detail.otherProjects": "Diğer Projeler",
    
    // Footer
    "footer.home": "Ana Sayfa",
    "footer.about": "Hakkımda",
    "footer.experience": "Deneyim",
    "footer.portfolio": "Portfolyo",
    
    // Language Switcher
    "language.switch": "Dil Değiştir",
    
    // Technologies Section
    "technologies.title": "Kullandığım Teknolojiler",
    
    // Contact Page
    "contact.title": "İletişime Geçin",
    "contact.description": "Projeleriniz için birlikte çalışmak isterim! Web geliştirme konularında herhangi bir sorunuz varsa veya bir proje hakkında konuşmak istiyorsanız, benimle iletişime geçmekten çekinmeyin.",
    "contact.formTitle": "Birlikte Çalışalım",
    "contact.formDescription": "Projeniz hakkında konuşmak için bana ulaşın! Web geliştirme, tasarım veya teknik danışmanlık konularında size yardımcı olmaktan mutluluk duyarım.",
    "contact.fullName": "Ad Soyad",
    "contact.email": "E-posta Adresi",
    "contact.message": "Mesaj",
    "contact.submit": "Gönder",
    "contact.sending": "Gönderiliyor...",
    "contact.success": "✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.",
    "contact.error": "❌ Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan benimle iletişime geçin.",
    "contact.location": "İstanbul/Maltepe, Türkiye",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.portfolio": "Portfolio",
    
    // Hero Section
    "hero.title": "Frontend Developer",
    "hero.subtitle": "Hello! I'm Bedirhan Uğurlu. I create user-friendly and impressive digital experiences with modern web technologies.",
    
    // About Section
    "about.title": "About Me",
    "about.description": "Hello! I'm Bedirhan Uğurlu, a passionate Frontend Developer. I focus on creating user-friendly and impressive digital experiences using modern web technologies. I combine creativity and technical excellence in every project.",
    "about.skills.frontend": "Frontend Development",
    "about.skills.frontend.desc": "I develop responsive and performant user interfaces with modern web technologies.",
    "about.skills.uiux": "UI/UX Design",
    "about.skills.uiux.desc": "I create aesthetic and useful designs by prioritizing user experience.",
    "about.skills.tech": "Modern Technologies",
    "about.skills.tech.desc": "I develop projects using current technologies like React, Next.js, and TypeScript.",
    "about.skills.problem": "Problem Solving",
    "about.skills.problem.desc": "I analyze complex problems and produce effective and sustainable solutions.",
    
    // Experience Section
    "experience.title": "Work Experience",
    "experience.description": "My experiences at different companies and projects I've developed. I learned new technologies in every position and continuously improved myself. I worked in a wide range from frontend development to full-stack.",
    "experience.view": "Details",
    
    // Portfolio Section
    "portfolio.title": "My Projects",
    "portfolio.description": "I share my web site projects with you. If you want to know about the projects, click on the projects.",
    "portfolio.explore": "Explore Projects",
    
    // Portfolio Projects
    "portfolio.projects.nextjs.name": "Portfolio Next.js",
    "portfolio.projects.nextjs.description": "Personal portfolio website developed with modern web technologies, featuring a fully dynamic admin panel, SSG/CSR technology, and SEO optimization.",
    "portfolio.projects.nextjs.overview": "This project is a comprehensive portfolio website that showcases modern web development practices. Using the latest features of Next.js 14, I created a platform focused on both performance and user experience. It offers content management through a fully dynamic admin panel, data storage through Supabase integration, and fast deployment through Vercel.",
    "portfolio.projects.nextjs.challenges": "One of the biggest challenges of the project was ensuring real-time synchronization between the admin panel and frontend. I solved this problem using Supabase's real-time features. Additionally, I optimized both SEO performance and dynamic content updates by using SSG and CSR technologies in a hybrid approach.",
    "portfolio.projects.nextjs.results": "As a result of the project, I obtained a portfolio website that scores 95+ on Google PageSpeed, is fully optimized for SEO, and can be easily managed through an admin panel. The site deployed on Vercel provides fast access worldwide thanks to the global CDN.",
    
    // Portfolio Next.js Features
    "portfolio.nextjs.features.admin": "Fully Dynamic Admin Panel",
    "portfolio.nextjs.features.ssg": "SSG/CSR Hybrid Technology",
    "portfolio.nextjs.features.seo": "SEO Optimization",
    "portfolio.nextjs.features.supabase": "Supabase Integration",
    "portfolio.nextjs.features.vercel": "Vercel Deploy",
    "portfolio.nextjs.features.responsive": "Responsive Design",
    "portfolio.nextjs.features.sitemap": "Dynamic Sitemap",
    "portfolio.nextjs.features.canonical": "Canonical URLs",
    "portfolio.projects.starlight.name": "Starlight Prom Nights",
    "portfolio.projects.starlight.description": "Vibrant promotional page for high school prom parties with ticket booking, photo galleries, and theme selection.",
    "portfolio.projects.prestige.name": "Prestige College of Arts",
    "portfolio.projects.prestige.description": "Elegant academic landing page with program highlights, virtual campus tours, and application portals.",
    "portfolio.projects.cyclespot.name": "CycleSpot Rentals",
    "portfolio.projects.cyclespot.description": "Bike rental platform with location-based availability, pricing calculators, and secure online bookings.",
    "portfolio.projects.bella.name": "Bella Cucina Restaurant",
    "portfolio.projects.bella.description": "Appetizing restaurant landing page with menu displays, reservation system, and chef's specials highlights.",
    "portfolio.projects.serenemind.name": "SereneMind Meditation",
    "portfolio.projects.serenemind.description": "Calming meditation app interface with guided session timers, progress tracking, and relaxation music integration.",
    
    // Kardeş Yapı Project
    "portfolio.projects.kardes.name": "Kardeş Yapı",
    "portfolio.projects.kardes.description": "Construction company website developed with PHP, featuring a fully dynamic admin panel. Provides project management and customer communication with modern design and user-friendly interface.",
    "portfolio.projects.kardes.overview": "Kardeş Yapı is a comprehensive website developed for a company operating in the construction sector. Using PHP backend technology, content management with a fully dynamic admin panel, project gallery, services, and contact forms have been integrated. It provides an excellent user experience on all devices with responsive design.",
    "portfolio.projects.kardes.challenges": "One of the biggest challenges of the project was creating a modern and secure admin panel with PHP. I implemented security measures such as SQL injection protection, XSS security, and file upload security. I also ensured mobile compatibility with responsive design and performed SEO optimization.",
    "portfolio.projects.kardes.results": "As a result of the project, I obtained a secure and user-friendly construction company website. I created a professional platform that allows easy content management through an admin panel, showcases portfolio through project gallery, and receives customer feedback through contact forms.",
    
    // Kardeş Yapı Features
    "portfolio.kardes.features.admin": "PHP Admin Panel",
    "portfolio.kardes.features.projects": "Project Gallery",
    "portfolio.kardes.features.services": "Services Page",
    "portfolio.kardes.features.contact": "Contact Form",
    "portfolio.kardes.features.responsive": "Responsive Design",
    "portfolio.kardes.features.seo": "SEO Optimization",
    "portfolio.kardes.features.security": "Security Measures",
    "portfolio.kardes.features.gallery": "Dynamic Gallery",
    
    // Umut Endüstriyel Project
    "portfolio.projects.umut.name": "Umut Endüstriyel",
    "portfolio.projects.umut.description": "Industrial company website developed with WordPress. Provides product catalog and service promotion with modern design and user-friendly interface.",
    "portfolio.projects.umut.overview": "Umut Endüstriyel is a professional website developed for a company operating in the industrial sector using WordPress CMS. Product catalog, services, references, and contact sections have been created with custom theme design and plugin integrations. It provides an excellent user experience on all devices with responsive design.",
    "portfolio.projects.umut.challenges": "One of the biggest challenges of the project was creating a custom theme suitable for the industrial sector using WordPress's flexible structure. I developed custom post types, custom fields, and visual gallery systems for the product catalog. I also performed SEO optimization and performance improvements.",
    "portfolio.projects.umut.results": "As a result of the project, I obtained a professional and user-friendly WordPress website for the industrial company. I created a platform that provides customer satisfaction with easy content management, product catalog system, and responsive design.",
    
    // Umut Endüstriyel Features
    "portfolio.umut.features.wordpress": "WordPress CMS",
    "portfolio.umut.features.custom": "Custom Theme Design",
    "portfolio.umut.features.catalog": "Product Catalog",
    "portfolio.umut.features.services": "Services Page",
    "portfolio.umut.features.references": "References",
    "portfolio.umut.features.contact": "Contact Form",
    "portfolio.umut.features.responsive": "Responsive Design",
    "portfolio.umut.features.seo": "SEO Optimization",
    
    // Çinar Et Pide Project
    "portfolio.projects.cinar.name": "Çinar Et Pide",
    "portfolio.projects.cinar.description": "Restaurant website developed with WordPress. Provides menu promotion and online ordering system with modern design and user-friendly interface.",
    "portfolio.projects.cinar.overview": "Çinar Et Pide is a professional website developed for a restaurant serving traditional Turkish cuisine using WordPress CMS. Menu system, gallery, about us, and contact sections have been created with custom theme design and plugin integrations. It provides an excellent user experience on all devices with responsive design.",
    "portfolio.projects.cinar.challenges": "One of the biggest challenges of the project was creating a custom WordPress theme suitable for the restaurant sector. I developed custom post types, price display, and category filtering systems for the menu system. I also integrated visual gallery and online reservation system.",
    "portfolio.projects.cinar.results": "As a result of the project, I obtained a professional and user-friendly WordPress website for the restaurant. I created a platform that enhances customer experience with easy menu management, visual gallery system, and responsive design.",
    
    // Çinar Et Pide Features
    "portfolio.cinar.features.wordpress": "WordPress CMS",
    "portfolio.cinar.features.custom": "Custom Theme Design",
    "portfolio.cinar.features.menu": "Menu System",
    "portfolio.cinar.features.gallery": "Visual Gallery",
    "portfolio.cinar.features.about": "About Us Page",
    "portfolio.cinar.features.contact": "Contact Form",
    "portfolio.cinar.features.responsive": "Responsive Design",
    "portfolio.cinar.features.seo": "SEO Optimization",
    
    // Portfolio Detail Page
    "portfolio.detail.back": "Back to Portfolio",
    "portfolio.detail.liveDemo": "Live Demo",
    "portfolio.detail.viewCode": "View Code",
    "portfolio.detail.gallery": "Project Gallery",
    "portfolio.detail.technologies": "Technologies Used",
    "portfolio.detail.features": "Key Features",
    "portfolio.detail.overview": "Project Overview",
    "portfolio.detail.challenges": "Challenges & Solutions",
    "portfolio.detail.results": "Results & Impact",
    "portfolio.detail.otherProjects": "Other Projects",
    
    // Footer
    "footer.home": "Home",
    "footer.about": "About",
    "footer.experience": "Experience",
    "footer.portfolio": "Portfolio",
    
    // Language Switcher
    "language.switch": "Switch Language",
    
    // Technologies Section
    "technologies.title": "Technologies I Use",
    
    // Contact Page
    "contact.title": "Get In Touch",
    "contact.description": "I'd love to work together on your projects! If you have any questions about web development or want to discuss a project, don't hesitate to contact me.",
    "contact.formTitle": "Let's Work Together",
    "contact.formDescription": "Reach out to me to discuss your project! I'd be happy to help you with web development, design, or technical consulting.",
    "contact.fullName": "Full Name",
    "contact.email": "Email Address",
    "contact.message": "Message",
    "contact.submit": "Send",
    "contact.sending": "Sending...",
    "contact.success": "✅ Your message has been sent successfully! I'll get back to you as soon as possible.",
    "contact.error": "❌ Message could not be sent. Please try again or contact me directly.",
    "contact.location": "Istanbul/Maltepe, Turkey",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "tr" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
