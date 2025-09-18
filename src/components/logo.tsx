"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration sorununu tamamen çözmek için sadece temel sınıflar
  const logoClasses = cn("size-7 w-7", className);

  return (
    <div 
      className={logoClasses}
      style={{
        filter: mounted && resolvedTheme === 'dark' ? 'invert(1)' : 'invert(0)',
        transition: mounted ? 'filter 0.2s ease-in-out' : 'none'
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={28}
        height={28}
        className="w-full h-full"
        priority
      />
    </div>
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration sorununu tamamen çözmek için sadece temel sınıflar
  const logoClasses = cn("size-7 w-7", className);

  return (
    <div 
      className={logoClasses}
      style={{
        filter: mounted && resolvedTheme === 'dark' ? 'invert(1)' : 'invert(0)',
        transition: mounted ? 'filter 0.2s ease-in-out' : 'none'
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={28}
        height={28}
        className="w-full h-full"
        priority
      />
    </div>
  );
};
