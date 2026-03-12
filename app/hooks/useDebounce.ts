"use client"
import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300) {
  const [debaunceValue, setDebaunceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebaunceValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debaunceValue
}