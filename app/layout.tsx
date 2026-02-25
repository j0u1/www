import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
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
      <body className={`${onest.variable} antialiased duration-300 transition-all flex flex-col gap-6 lg:gap-12 p-4 lg:p-8`}>
        {children}
      </body>
    </html>
  );
}
