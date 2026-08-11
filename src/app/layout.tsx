import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandra Anggara Diputra",
  description: "Website Portfolio dan CV Chandra Anggara Diputra",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex flex-col min-h-full">
        <Header />
        <main className="flex flex-col flex-1 gap-6 bg-cyan-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
