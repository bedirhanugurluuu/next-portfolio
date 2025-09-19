import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ServicesSection from "@/components/sections/home/services";
import ServicesSection2 from "@/components/sections/home/services-2";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";
import { Metadata } from "next";

// SSG için metadata
export const metadata: Metadata = {
  title: "Bedirhan Uğurlu - Front End Developer | Portfolio",
  description: "Front End Developer specializing in Next.js, React, PHP, and WordPress. View my portfolio of modern web applications and projects.",
  keywords: ["Front End Developer", "Next.js", "React", "PHP", "WordPress", "Portfolio", "Web Development"],
  authors: [{ name: "Bedirhan Uğurlu" }],
  creator: "Bedirhan Uğurlu",
  publisher: "Bedirhan Uğurlu",
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
    url: "https://bedirhanugurlu.com",
    title: "Bedirhan Uğurlu - Front End Developer",
    description: "Front End Developer specializing in Next.js, React, PHP, and WordPress. View my portfolio of modern web applications and projects.",
    siteName: "Bedirhan Uğurlu Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bedirhan Uğurlu - Front End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedirhan Uğurlu - Front End Developer",
    description: "Front End Developer specializing in Next.js, React, PHP, and WordPress.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bedirhanugurlu.com",
    languages: {
      "tr-TR": "https://bedirhanugurlu.com",
      "en-US": "https://bedirhanugurlu.com/en",
    },
  },
};

// SSG için generateStaticParams
export async function generateStaticParams() {
  return [];
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
