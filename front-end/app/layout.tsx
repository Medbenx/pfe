"use client";


import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import FooterSection from "./components/FooterSection";
import AOSInitializer from "./components/AOSInitializer";
import CookieConsentBanner from "./components/CookieConsentBanner";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pathname = usePathname();

  // Paths where footer should be hidden
  const noFooterPaths = [
    "/login",
    "/main/become-guide",
    "/main/guide-dashboard",
    "/main/guide-dashboard/trips",
    "/main/guide-dashboard/trip-details",
    "/main/guide-dashboard/reviews",
    "/main/guide-dashboard/settings",
    "/main/guide-dashboard/earnings",
    "/main/guide-dashboard/help",
    "/components/PreEntryScreen",
  ];

  const showFooter = !noFooterPaths.includes(pathname);

  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${inter.className} ${
          params.locale === "ar" ? "font-sans-ar" : "font-sans"
        }`}
      >
        <Navbar />
        <main>{children}</main>
        {showFooter && <FooterSection />}
        <AOSInitializer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
