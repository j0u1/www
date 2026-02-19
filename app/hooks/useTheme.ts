"use client"

import { useEffect, useState, useCallback } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(now => {
      const next = now === "light" ? "dark" : "light";
      localStorage.setItem("theme", next)
      return next
    })
  }

  useEffect(() => {
    try {
      setTheme(localStorage.getItem("theme") == "dark" ? "dark" : "light")
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return {theme, toggleTheme}
}