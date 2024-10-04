import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Smart Consig - Portabilidade",
    template: "%s | Smart Consig",
  },
  description: "Portabilidade de empréstimo com liberação de valor",
  keywords: [
    'finance', 
    'portability', 
    'banking', 
    'money transfer', 
    'account management'
  ],
  authors: [{ name: 'Grupo Smart Consig' }],
  creator: 'FinPort',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gruposmartconsig.com.br',
    siteName: 'Smart Consig',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@smartconsig',
    creator: '@smartconsig',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
