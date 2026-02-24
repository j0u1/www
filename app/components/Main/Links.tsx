"use client"

import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";

export default function Links() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute flex flex-col gap-4 top-4 right-4 lg:top-8 lg:right-8 duration-300 transition-all">
      <Link
        className="text-additional/70 dark:text-additional hover:text-accent duration-300 transition-all scale-100 hover:scale-110 inline-block"
        href="https://github.com/j0u1"
        target="_blank"
      >
        <GithubIcon className="size-6" />
      </Link>

      <div onClick={toggleTheme} className="relative cursor-pointer">
        <div className="absolute size-5.5 bg-neutral-300 rounded-full duration-300 transition-all" />
        <div
          className={`relative size-5.5 duration-300 transition-all ${
            isDark ? "-translate-y-1.5 translate-x-1.5" : "translate-y-0 translate-x-0"
          }`}
        >
          <div
            className={`absolute size-5.5 rounded-full duration-300 transition-all ${
              isDark ? "bg-background" : "dark:bg-[#171824]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
