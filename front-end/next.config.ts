import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    domains: ['localhost'],
  },
};
=======
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  // ... your existing config
}

>>>>>>> 92c376f4c596817652a6fa7311800c9cb40f8545

export default nextConfig;

