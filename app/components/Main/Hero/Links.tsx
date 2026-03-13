"use client"

import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { useColorTheme } from "../../UI/ColorTheme/useColorTheme";
import ChangeThemeButton from "./ChangeThemeButton";

export default function Links() {
  const { theme, toggle } = useColorTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex absolute top-0 right-0 flex-col gap-4 transition-all duration-300">
      <Link
        className="inline-block transition-all duration-300 text-additional hover:text-accent"
        href="https://github.com/j0u1"
        target="_blank"
      >
        <GithubIcon className="size-6" />
      </Link>

      <ChangeThemeButton toggle={toggle} />
    </div>
  );
}
