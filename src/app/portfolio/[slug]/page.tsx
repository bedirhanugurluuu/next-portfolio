import { notFound } from "next/navigation";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PortfolioDetailClient } from "@/components/portfolio-detail-client";
import type { Metadata } from "next";

interface PortfolioDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_CONTENT.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_CONTENT.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
      description: "Aradığınız proje bulunamadı.",
    };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [
        {
          url: project.img,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [project.img],
    },
    alternates: {
      canonical: `https://bedirhanugurlu.com${project.url}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_CONTENT.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
