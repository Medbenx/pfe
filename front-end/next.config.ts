import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  // ... your existing config
};

export default nextConfig;
