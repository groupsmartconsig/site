import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import FacebookPixel from "./page/facebook-pixel";

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Smart Consig - Portabilidade",
    template: "%s | Smart Consig",
  },
  description: "Portabilidade de empréstimo com liberação de valor",
  keywords: [
    'financeiro',
    'portabilidade',
    'bancos',
    'empréstimo',
    'parcela'
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
    <html lang="pt">
      <body
        className={`${montserrat.className} antialiased bg-gradient-to-br from-black to-zinc-950`}
      >
        <main>{children}</main>
        <FacebookPixel pixelId="1597315194197904" />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
