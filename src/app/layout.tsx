import Header from "../../components/Header";
import { Onest } from 'next/font/google';
import "./globals.css";

const onest = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-onest',
});

export const metadata = {
  title: "Доктор тома",
  description: "Описание сайта",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={onest.variable}>
      <body className={onest.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
