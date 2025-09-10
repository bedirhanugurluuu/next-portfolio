import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { HeroHeader } from "@/components/header";
import Analytics from "@/components/analytics";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bedirhanugurlu.com'),
  title: {
    default: "Bedirhan Uğurlu - Frontend Developer",
    template: "%s | Bedirhan Uğurlu"
  },
  description: "Frontend Developer specializing in Next.js, React, TypeScript. Creating modern, performant web applications with beautiful user experiences.",
  keywords: [
    "Frontend Developer", 
    "Next.js", 
    "React", 
    "TypeScript", 
    "JavaScript", 
    "Portfolio", 
    "Web Development", 
    "UI/UX", 
    "Tailwind CSS",
    "Bedirhan Uğurlu",
    "İstanbul Developer",
    "Turkish Developer"
  ],
  authors: [{ name: "Bedirhan Uğurlu", url: "https://bedirhanugurlu.com" }],
  creator: "Bedirhan Uğurlu",
  publisher: "Bedirhan Uğurlu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://bedirhanugurlu.com",
    siteName: "Bedirhan Uğurlu - Portfolio",
    title: "Bedirhan Uğurlu - Frontend Developer",
    description: "Frontend Developer specializing in Next.js, React, TypeScript. Creating modern, performant web applications.",
    images: [
      {
        url: "https://bedirhanugurlu.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bedirhan Uğurlu - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedirhan Uğurlu - Frontend Developer",
    description: "Frontend Developer specializing in Next.js, React, TypeScript.",
    images: ["https://bedirhanugurlu.com/logo.jpg"],
    creator: "@bedirhanugurlu",
  },
  alternates: {
    canonical: "https://bedirhanugurlu.com",
    languages: {
      "tr": "https://bedirhanugurlu.com",
      "en": "https://bedirhanugurlu.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="canonical" href="https://bedirhanugurlu.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Resource Hints */}
        <link rel="preload" href="/hero-light.mp4" as="video" type="video/mp4" />
        
        {/* PWA and Mobile */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bedirhan Uğurlu" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: var(--font-inter), system-ui, sans-serif; }
            .min-h-screen { min-height: 100vh; }
            .overflow-hidden { overflow: hidden; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .z-10 { z-index: 10; }
            .z-20 { z-index: 20; }
            .bg-black { background-color: #000; }
            .text-white { color: #fff; }
            .opacity-50 { opacity: 0.5; }
            .object-cover { object-fit: cover; }
            .size-full { width: 100%; height: 100%; }
          `
        }} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Analytics />
            <HeroHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
