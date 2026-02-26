import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "diy",
  description: "Портфолия diy - фронтенд разработчик и UI/UI дизайнер",
  openGraph: {
    title: 'diy',
    description: 'Портфолио diy - фронтенд разработчик и UI/UI дизайнер',
    url: 'https://d1yy.ru',
    images: [
      {
        url: '/images/metadata/ogImage.jpg',
        width: 1200,
        height: 675,
        alt: 'diy',
      },
    ],
    type: 'website',
    locale: 'ru_RU',
  },
  creator: 'd1yy',
  twitter: {
    card: 'summary_large_image',
    title: 'diy',
    description: 'Портфолио diy - фронтенд разработчик и UI/UI дизайнер',
    images: [
      {
        url: '/images/metadata/ogImage.jpg',
        alt: 'diy',
      },
    ]
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#4d8ff3',
  colorScheme: 'light dark',
  maximumScale: 1
}

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
