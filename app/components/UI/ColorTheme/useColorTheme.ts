import { useCallback, useContext } from "react";
import { colorThemeCtx } from "./ctx";

export function useColorTheme() {
  const ctx = useContext(colorThemeCtx)
  const toggle = useCallback(() => {
    ctx?.setTheme(ctx.theme === 'light' ? 'dark' : 'light')
  }, [ctx])

  return {
    toggle,
    theme:ctx?.theme ?? 'dark'
  }
}