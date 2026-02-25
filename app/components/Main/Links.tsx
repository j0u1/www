"use client"

import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";

export default function Links() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex absolute top-0 right-0 flex-col gap-4 transition-all duration-300">
      <Link
        className="inline-block transition-all duration-300 scale-100 hover:scale-110 text-additional/70 dark:text-additional hover:text-accent"
        href="https://github.com/j0u1"
        target="_blank"
      >
        <GithubIcon className="size-6" />
      </Link>

      <div onClick={toggleTheme} className="relative cursor-pointer">
        <div className="absolute rounded-full transition-all duration-300 size-5.5 bg-neutral-300" />
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
