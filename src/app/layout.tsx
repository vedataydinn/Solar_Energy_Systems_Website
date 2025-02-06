import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Güneş Panel - Sürdürülebilir Enerji Çözümleri",
  description: "Güneş enerjisi sistemleri için profesyonel çözümler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <div className="pt-[4.5rem] md:pt-[5.5rem]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
