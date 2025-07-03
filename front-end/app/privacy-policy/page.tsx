import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Your Website Name',
  description: 'Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mt-20 mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our website. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about this privacy notice or our practices with regard to your personal 
            information, please contact us at privacy@yourwebsite.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect personal information that you voluntarily provide to us when you register on the website, 
            express an interest in obtaining information about us or our products and services, or otherwise when 
            you contact us.
          </p>
          <p className="text-gray-700 mb-4">
            The personal information we collect may include the following:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Name and contact data (email address, phone number, etc.)</li>
            <li>Payment information (for ticket purchases)</li>
            <li>Event preferences and interests</li>
            <li>Technical data (IP address, browser type, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To provide and operate our services</li>
            <li>To process your ticket purchases and bookings</li>
            <li>To send you marketing and promotional communications</li>
            <li>To respond to user inquiries and offer support</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="text-gray-700 mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
            if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">
            We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>With event organizers:</strong> For events you register for or purchase tickets to</li>
            <li><strong>With service providers:</strong> Such as payment processors and email service providers</li>
            <li><strong>For legal reasons:</strong> When required by law or to protect our rights</li>
            <li><strong>Business transfers:</strong> In connection with any merger or sale of company assets</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal 
            information. However, please remember that no method of transmission over the Internet or method of 
            electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Privacy Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>The right to access, update or delete your information</li>
            <li>The right to rectification if your data is inaccurate</li>
            <li>The right to object to our processing of your data</li>
            <li>The right to request restriction of processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="text-gray-700 mb-4">
            To exercise these rights, please contact us at privacy@yourwebsite.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Updates to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, you can contact us:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>By email: privacy@yourwebsite.com</li>
            <li>By visiting this page on our website: <Link href="/contact" className="text-amber-600 hover:underline">Contact Us</Link></li>
            <li>By mail: [Your Company Address]</li>
          </ul>
        </section>
      </div>
    </div>
  );
}