import { FC, PropsWithChildren } from "react";
import { ColorThemeClientProvider } from "./ClientProvider";
import { cookies, headers } from "next/headers";

export const ColorThemeProvider: FC<PropsWithChildren> = async ({ children }) => {
  const cookieStore = await cookies()
  return <ColorThemeClientProvider cookieTheme={cookieStore.get("colorMode")?.value}>{children}</ColorThemeClientProvider>
}