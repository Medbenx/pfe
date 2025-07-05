'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted') {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
    // Implement logic to disable non-essential cookies
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <p className="text-sm">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            Learn more in our <Link href="/cookie-policy" className="text-amber-300 hover:underline">Cookie Policy</Link>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={declineCookies}
            className="px-4 py-2 border border-white rounded hover:bg-gray-700 transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 bg-amber-600 rounded hover:bg-amber-700 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}