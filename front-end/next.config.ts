import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  // ... your existing config
};

export default nextConfig;

