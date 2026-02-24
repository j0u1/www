import { useCallback } from "react";

export const useLocalStorage = (key: string) => {
  const setItem = useCallback((value: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key]);

  return {setItem}
}