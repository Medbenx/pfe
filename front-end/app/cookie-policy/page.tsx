import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Your Website Name',
  description: 'Information about how we use cookies and similar technologies',
};

export default function CookiePolicy() {
  return (
    <div className="container mt-20 mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help the website 
            remember information about your visit, which can make it easier to visit the site again and make the site 
            more useful to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies for the following purposes:
          </p>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Cookie Type</th>
                <th className="text-left py-3 px-4">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-medium">Essential Cookies</td>
                <td className="py-3 px-4">Necessary for the website to function properly</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-medium">Performance Cookies</td>
                <td className="py-3 px-4">Help us understand how visitors interact with our website</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-medium">Functionality Cookies</td>
                <td className="py-3 px-4">Remember your preferences and settings</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-medium">Targeting/Advertising Cookies</td>
                <td className="py-3 px-4">Used to deliver relevant ads and measure ad performance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Third-Party Cookies</h2>
          <p className="text-gray-700 mb-4">
            We may also use various third-party cookies including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
              <strong>Google Analytics:</strong> To analyze website traffic and usage patterns
            </li>
            <li>
              <strong>Facebook Pixel:</strong> To measure the effectiveness of our advertising
            </li>
            <li>
              <strong>Payment Processors:</strong> Cookies necessary for payment processing
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            These third-party services have their own privacy policies and may use their own cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Your Cookie Choices</h2>
          <p className="text-gray-700 mb-4">
            You have several options to manage cookies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
              <strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies and to delete 
              cookies. The methods for doing so vary from browser to browser.
            </li>
            <li>
              <strong>Cookie Consent Tool:</strong> When you first visit our website, you can manage your cookie 
              preferences through our cookie consent banner.
            </li>
            <li>
              <strong>Opt-Out Tools:</strong> For third-party advertising cookies, you can visit sites like 
              <Link href="https://optout.aboutads.info" className="text-amber-600 hover:underline ml-1" target="_blank">
                aboutads.info/choices
              </Link> to opt out.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Specific Cookies We Use</h2>
          <p className="text-gray-700 mb-4">
            Below is a list of some cookies we use and their purposes:
          </p>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Cookie Name</th>
                <th className="text-left py-3 px-4">Purpose</th>
                <th className="text-left py-3 px-4">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-mono">session_id</td>
                <td className="py-3 px-4">Maintains your session state</td>
                <td className="py-3 px-4">Session</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-mono">_ga</td>
                <td className="py-3 px-4">Google Analytics tracking</td>
                <td className="py-3 px-4">2 years</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-mono">cookie_consent</td>
                <td className="py-3 px-4">Stores your cookie preferences</td>
                <td className="py-3 px-4">1 year</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-mono">language</td>
                <td className="py-3 px-4">Remembers your language preference</td>
                <td className="py-3 px-4">1 year</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Cookie Policy from time to time. We will notify you of any changes by updating the 
            "Last updated" date at the top of this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our use of cookies, please contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Email: privacy@yourwebsite.com</li>
            <li>Mail: [Your Company Address]</li>
            <li>Through our <Link href="/contact" className="text-amber-600 hover:underline">Contact Page</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
}