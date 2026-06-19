import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatinagummy.com.br"),

  title: {
    default: "Creatina Gummy",
    template: "%s | Creatina Gummy",
  },

  description:
    "Conteúdos sobre Creatina Gummy, suplementação, performance esportiva, força, recuperação muscular e saúde.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Creatina Gummy",
    description:
      "Conteúdos sobre Creatina Gummy e suplementação esportiva.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
