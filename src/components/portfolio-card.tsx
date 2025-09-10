"use client";
import Image from "next/image";
import Link from "next/link";
import { CustomCursorElement } from "./custom-cursor-element";
import { ScrollView } from "./scroll-view";
import { useLanguage } from "./language-provider";

export default function PortfolioCard({
  card,
}: {
  card: {
    id: string;
    nameKey: string;
    descriptionKey: string;
    img: string;
    url: string;
    technologies: string[];
    features: string[];
  };
}) {
  const { t } = useLanguage();
  
  return (
    <div>
      <CustomCursorElement
        cursor={<div className="text-zinc-950 text-lg font-medium">View</div>}
      >
        <ScrollView>
          <div className="group hover:scale-105 transition-all duration-500 ">
            <Link href={card.url}>
              <Image
                className=" w-full grayscale-25 hover:grayscale-0 rounded-md object-cover object-top  transition-all duration-500  "
                height="480"
                width="720"
                src={card.img}
                alt={t(card.nameKey)}
              />
              <div className="mt-4">
                <h3 className="text-title text-2xl font-medium ">
                  {t(card.nameKey)}
                </h3>
                <p className="text-muted-foreground">{t(card.descriptionKey)}</p>
              </div>
            </Link>
          </div>
        </ScrollView>
      </CustomCursorElement>
    </div>
  );
}
