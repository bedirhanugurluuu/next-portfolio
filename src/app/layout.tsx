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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bedirhanugurlu.dev'),
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
  authors: [{ name: "Bedirhan Uğurlu", url: "https://bedirhanugurlu.dev" }],
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
    url: "https://bedirhanugurlu.dev",
    siteName: "Bedirhan Uğurlu - Portfolio",
    title: "Bedirhan Uğurlu - Frontend Developer",
    description: "Frontend Developer specializing in Next.js, React, TypeScript. Creating modern, performant web applications.",
    images: [
      {
        url: "https://bedirhanugurlu.dev/images/about.jpg",
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
    images: ["https://bedirhanugurlu.dev/images/about.jpg"],
    creator: "@bedirhanugurlu",
  },
  alternates: {
    canonical: "https://bedirhanugurlu.dev",
    languages: {
      "tr": "https://bedirhanugurlu.dev",
      "en": "https://bedirhanugurlu.dev/en",
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
        <link rel="canonical" href="https://bedirhanugurlu.dev" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bedirhan Uğurlu" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
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
