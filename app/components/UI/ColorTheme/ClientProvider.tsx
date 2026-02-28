"use client"

import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react"
import { COLOR_THEMES, ColorTheme, colorThemeCtx } from "./ctx"
import { log } from "console"

type Props = PropsWithChildren<{
  cookieTheme?: string | null,
}>

export const ColorThemeClientProvider: FC<Props> = (({ children, cookieTheme }) => {
  const defaultTheme = COLOR_THEMES.includes(cookieTheme as ColorTheme) ? cookieTheme as ColorTheme : 'dark'
  const [localTheme, setLocalTheme] = useState<ColorTheme>(defaultTheme)
  const setTheme = useCallback((theme: ColorTheme) => {
    setLocalTheme(theme)
    cookieStore.set("colorMode", theme)
  }, [])
  useEffect(() => {
    if(!cookieTheme || !COLOR_THEMES.includes(cookieTheme as ColorTheme)) {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches
      setTheme(prefersLight ? 'light' : 'dark')
    }
  }, [])

  return <colorThemeCtx.Provider value={{theme:localTheme, setTheme}}>{children}</colorThemeCtx.Provider>
})