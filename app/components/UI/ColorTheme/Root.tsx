"use client"

import { FC, PropsWithChildren } from "react";
import { useColorTheme } from "./useColorTheme";

export const ColorThemeRoot: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useColorTheme()

  return <div className={`${theme} dark:bg-background text-foreground duration-300 transition-all min-h-dvh flex flex-col gap-6 justify-between lg:gap-12 p-4 lg:p-8`}>{children}</div>
}