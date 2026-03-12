"use client"

import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { useColorTheme } from "../../UI/ColorTheme/useColorTheme";

export default function Links() {
  const { theme, toggle } = useColorTheme();
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

      <div onClick={toggle} className="relative cursor-pointer">
        <div className="absolute rounded-full transition-all duration-300 size-5.5 bg-neutral-300" />
        <div
          className={`relative size-5.5 duration-300 transition-all dark:-translate-y-1.5 dark:translate-x-1.5 ztranslate-y-0 translate-x-0`}
        >
          <div
            className={`absolute size-5.5 rounded-full duration-300 transition-all dark:bg-background bg-[#171824]`}
          />
        </div>
      </div>
    </div>
  );
}
