import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Your Website Name',
  description: 'Terms governing the use of our website and services',
};

export default function TermsOfService() {
  return (
    <div className="container mt-20 mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). 
            If you do not agree to all of these Terms, do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-4">
            Our platform provides information about cultural events and facilitates ticket purchases for various events 
            ("Service"). We reserve the right to modify or discontinue the Service at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            To access certain features, you may need to create an account. You are responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Providing accurate and complete information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Ticket Purchases</h2>
          <p className="text-gray-700 mb-4">
            When purchasing tickets through our Service:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>All sales are final unless otherwise stated</li>
            <li>Prices are subject to change without notice</li>
            <li>You must comply with all event rules and regulations</li>
            <li>We are not responsible for event cancellations or changes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Prohibited Conduct</h2>
          <p className="text-gray-700 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Use the Service for any illegal purpose</li>
            <li>Resell tickets in violation of applicable laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use automated means to access the Service without permission</li>
            <li>Interfere with other users' enjoyment of the Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            All content on this website, including text, graphics, logos, and images, is our property or the property 
            of our licensors and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Disclaimers</h2>
          <p className="text-gray-700 mb-4">
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT THAT:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>The Service will be uninterrupted or error-free</li>
            <li>Event descriptions are accurate or complete</li>
            <li>The Service will meet your requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Indemnification</h2>
          <p className="text-gray-700 mb-4">
            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of a third party</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without 
            regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these Terms at any time. We will notify you of changes by updating the 
            "Last updated" date. Your continued use of the Service constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            For questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Email: legal@yourwebsite.com</li>
            <li>Mail: [Your Company Address]</li>
            <li>Phone: [Your Contact Number]</li>
          </ul>
        </section>
      </div>
    </div>
  );
}