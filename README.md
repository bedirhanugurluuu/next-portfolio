# Bedirhan Uğurlu - Portfolio Website

Modern ve etkileyici bir portfolio websitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Smooth Animasyonlar**: Motion.dev ile akıcı geçişler
- **Çok Dilli Destek**: Türkçe ve İngilizce
- **Modern UI/UX**: Tailwind CSS ile şık tasarım
- **Portfolio Galerisi**: Projelerinizi etkileyici şekilde sergileyin
- **İletişim Formu**: Nodemailer ile çalışan iletişim sistemi
- **SEO Optimized**: Arama motorları için optimize edilmiş

## 🛠️ Teknolojiler

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Motion.dev](https://motion.dev/) - Animations
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [Nodemailer](https://nodemailer.com/) - Email service

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**

    ```bash
    pnpm install
    ```

2. **Geliştirme sunucusunu başlatın:**

    ```bash
    pnpm dev
    ```

    [http://localhost:3000](http://localhost:3000) adresini tarayıcınızda açın.

## 🚀 Deployment

### Vercel (Önerilen)

```bash
pnpm build
```

Vercel'e deploy etmek için GitHub repository'nizi bağlayın.

### Diğer Platformlar

- **Netlify**: `pnpm build` komutunu çalıştırın
- **Cloudflare Pages**: `cf-pages` branch'ini kullanın

## 📁 Proje Yapısı

```
src/
├── app/                 # Next.js app router
├── components/          # React bileşenleri
│   ├── ui/             # UI bileşenleri
│   ├── sections/       # Sayfa bölümleri
│   └── motion-primitives/ # Animasyon bileşenleri
├── content/            # İçerik dosyaları
├── hooks/              # Custom hooks
└── lib/                # Utility fonksiyonları
```

## 🎨 Özelleştirme

- **Renkler**: `tailwind.config.ts` dosyasında tema renklerini değiştirin
- **İçerik**: `src/content/` klasöründeki dosyaları düzenleyin
- **Çeviriler**: `src/components/language-provider.tsx` dosyasını güncelleyin

## 📧 İletişim

- **Email**: bedirhanugurlu3661@gmail.com
- **LinkedIn**: [bedirhan-ugurlu](https://linkedin.com/in/bedirhan-ugurlu)
- **GitHub**: [bedirhanugurluuu](https://github.com/bedirhanugurluuu)

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

**Geliştirici**: Bedirhan Uğurlu  
**Tarih**: 2025
