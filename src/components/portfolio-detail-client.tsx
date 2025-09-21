"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, X } from "lucide-react";
import { useLanguage } from "./language-provider";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import { useState, useEffect, useCallback } from "react";
import FooterSection from "./footer";

interface PortfolioDetailClientProps {
  project: {
    id: string;
    name: string;
    nameKey: string;
    description: string;
    descriptionKey: string;
    img: string;
    url: string;
    technologies: string[];
    features: string[];
    featuresKeys?: string[];
    gallery?: string[];
    liveUrl?: string;
    githubUrl?: string;
    overviewKey?: string;
    challengesKey?: string;
    resultsKey?: string;
  };
}

export function PortfolioDetailClient({ project }: PortfolioDetailClientProps) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = useCallback(() => {
    if (project.gallery && currentImageIndex < project.gallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setSelectedImage(project.gallery[currentImageIndex + 1]);
    }
  }, [project.gallery, currentImageIndex]);

  const prevImage = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setSelectedImage(project.gallery![currentImageIndex - 1]);
    }
  }, [currentImageIndex, project.gallery]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, project.gallery, nextImage, prevImage]);

  return (
    <div className="min-h-screen pt-16 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t(project.nameKey)}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t(project.descriptionKey)}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4" />
{t("portfolio.detail.liveDemo")}
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  <Github className="w-4 h-4" />
{t("portfolio.detail.viewCode")}
                </Link>
              )}
            </div>
          </div>
          
          <div className="relative">
            <Image
              src={project.img}
              alt={t(project.nameKey)}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t("portfolio.detail.gallery")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <Image
                    src={image}
                    alt={`${t(project.nameKey)} - Screenshot ${index + 1}`}
                    width={1874}
                    height={950}
                    quality={100}
                    loading="lazy"
                    className="w-full aspect-[1874/950] object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to a placeholder or hide the image
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technologies Used */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("portfolio.detail.technologies")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("portfolio.detail.features")}
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-16 space-y-12">
          {project.overviewKey && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t("portfolio.detail.overview")}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p>{t(project.overviewKey)}</p>
              </div>
            </div>
          )}

          {project.challengesKey && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t("portfolio.detail.challenges")}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p>{t(project.challengesKey)}</p>
              </div>
            </div>
          )}

          {project.resultsKey && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t("portfolio.detail.results")}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p>{t(project.resultsKey)}</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation to Other Projects */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            {t("portfolio.detail.otherProjects")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_CONTENT.filter(p => p.id !== project.id).slice(0, 3).map((otherProject) => (
              <Link
                key={otherProject.id}
                href={otherProject.url}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={otherProject.img}
                    alt={t(otherProject.nameKey)}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t(otherProject.nameKey)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {t(otherProject.descriptionKey).substring(0, 100)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 dark:bg-black/90"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {project.gallery && project.gallery.length > 1 && (
              <>
                {currentImageIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                )}
                {currentImageIndex < project.gallery.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-6 h-6 rotate-180" />
                  </button>
                )}
              </>
            )}

            {/* Image */}
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt={`${t(project.nameKey)} - Screenshot ${currentImageIndex + 1}`}
                width={1874}
                height={950}
                quality={100}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>

            {/* Image Counter */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {project.gallery.length}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
