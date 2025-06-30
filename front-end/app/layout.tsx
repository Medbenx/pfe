"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import FooterSection from "./components/FooterSection";
import AOSInitializer from "./components/AOSInitializer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Paths where footer should be hidden
  const noFooterPaths = ["/login", "/main/become-guide"];

  const showFooter = !noFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        {showFooter && <FooterSection />}
        <AOSInitializer />
      </body>
    </html>
  );
}
