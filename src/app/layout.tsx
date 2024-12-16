import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header/Header';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Foodcipes',
  description: 'A private collection of my favorite recipes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full min-h-screen antialiased flex flex-col justify-center items-center relative py-24`}
      >
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
