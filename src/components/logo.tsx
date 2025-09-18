import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={28}
      height={28}
      className={cn("size-7 w-7 dark:invert", className)}
      priority
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={28}
      height={28}
      className={cn("size-7 w-7 dark:invert", className)}
      priority
    />
  );
};
