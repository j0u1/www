import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const onest = Montserrat({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "diy",
  description: "Портфолия diy - фронтенд разработчик и UI/UI дизайнер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} antialiased duration-100 transition-all flex flex-col gap-4 lg:gap-8 min-h-dvh`}>
        {children}
      </body>
    </html>
  );
}
