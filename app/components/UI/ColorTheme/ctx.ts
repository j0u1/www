"use client"

import { createContext } from "react"

export const COLOR_THEMES = [
  "light",
  "dark"
] as const

export type ColorTheme = (typeof COLOR_THEMES)[number]

interface ColorThemeCtx {
  theme: ColorTheme,
  setTheme: (theme: ColorTheme) => void
}

export const colorThemeCtx = createContext<ColorThemeCtx | null>(null)