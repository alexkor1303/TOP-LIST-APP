import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOP MOSCOW SCHOOL LIST",
  description: "TOP LIST OF SCHOOL MOSCOW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head></head>
      <body className={noto.className}>{children}</body>
    </html>
  );
}
