"use client";
import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";
import { useLanguage } from "./language-provider";

const mySkills = [
  {
    titleKey: "about.skills.frontend",
    descriptionKey: "about.skills.frontend.desc",
  },
  {
    titleKey: "about.skills.uiux",
    descriptionKey: "about.skills.uiux.desc",
  },
  {
    titleKey: "about.skills.tech",
    descriptionKey: "about.skills.tech.desc",
  },
  {
    titleKey: "about.skills.problem",
    descriptionKey: "about.skills.problem.desc",
  },
];

export default function ContentSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              {t("about.title")}
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              {t("about.description")}
            </p>
          </ScrollView>
        </div>

        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {mySkills.map((skill, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{t(skill.titleKey)}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {t(skill.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
