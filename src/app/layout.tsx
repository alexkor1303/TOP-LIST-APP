import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
//Layout components
import { Header, Sidebar, Footer } from "../../layout";
import styles from "../../layout/Layout.module.css";
//other
export const metadata: Metadata = {
  title: "TOP MOSCOW SCHOOL LIST",
  description: "TOP LIST OF SCHOOL MOSCOW",
};
const noto = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head></head>
      <body className={noto.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <div className={styles.bodyContent}>{children}</div>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
