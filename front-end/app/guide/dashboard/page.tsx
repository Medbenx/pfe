import Link from "next/link";
import { FiArrowRight, FiCode, FiLayout, FiSettings, FiDatabase, FiBarChart2, FiMoon } from "react-icons/fi";

export default function DashboardGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Implementation Guide</h1>
        <p className="text-lg text-gray-600">
          Learn how to implement, customize, and extend your user dashboard with this comprehensive guide.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <FiLayout className="mr-3 text-indigo-600" />
          Dashboard Structure
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-3">Main Components</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 p-1 rounded mr-3">
                  <FiLayout className="text-sm" />
                </span>
                <span>Sidebar Navigation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 p-1 rounded mr-3">
                  <FiBarChart2 className="text-sm" />
                </span>
                <span>Stats Cards</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 p-1 rounded mr-3">
                  <FiDatabase className="text-sm" />
                </span>
                <span>Recent Activities</span>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-100 text-indigo-800 p-1 rounded mr-3">
                  <FiSettings className="text-sm" />
                </span>
                <span>Notifications Panel</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-3">File Structure</h3>
            <div className="font-mono text-sm bg-gray-50 p-4 rounded">
              <div>app/</div>
              <div className="ml-4">dashboard/</div>
              <div className="ml-8">layout.tsx</div>
              <div className="ml-8">page.tsx</div>
              <div className="ml-8">components/</div>
              <div className="ml-12">Sidebar.tsx</div>
              <div className="ml-12">StatsCard.tsx</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <FiSettings className="mr-3 text-indigo-600" />
          Customization Guide
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-3">Changing the Color Scheme</h3>
            <p className="text-gray-600 mb-4">
              The dashboard uses Tailwind CSS for styling. To change the primary color from indigo to your brand color:
            </p>
            <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-4">
              {`// Replace all instances of 'indigo-600' with your color\n`}
              {`<div className="bg-indigo-600 text-indigo-100">...</div>`}
            </div>
            <p className="text-gray-600">
              You can use any of Tailwind's color palette or add custom colors in your <code>tailwind.config.js</code>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-3">Adding New Sections</h3>
            <p className="text-gray-600 mb-4">
              To add a new section like a calendar or task manager:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>Create a new component in the components folder</li>
              <li>Import it into your dashboard page</li>
              <li>Add it to the main content area with appropriate styling</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <FiCode className="mr-3 text-indigo-600" />
          Advanced Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-3">Data Fetching</h3>
            <p className="text-gray-600 mb-4">
              Connect your dashboard to an API for real data:
            </p>
            <div className="font-mono text-sm bg-gray-50 p-4 rounded">
              {`useEffect(() => {\n`}
              {`  const fetchData = async () => {\n`}
              {`    const res = await fetch('/api/stats');\n`}
              {`    const data = await res.json();\n`}
              {`    setStats(data);\n`}
              {`  };\n`}
              {`  fetchData();\n`}
              {`}, []);`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-3">Dark Mode</h3>
            <p className="text-gray-600 mb-4">
              Implement dark mode using Next Themes:
            </p>
            <div className="flex items-center text-sm mb-2">
              <FiMoon className="mr-2 text-indigo-600" />
              <span>Install package:</span>
            </div>
            <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-3">
              npm install next-themes
            </div>
            <Link href="#" className="text-indigo-600 text-sm flex items-center">
              View implementation guide <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-indigo-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-indigo-800 mb-3">Need More Help?</h2>
        <p className="text-indigo-700 mb-4">
          Check out our complete documentation or contact support for additional assistance.
        </p>
        <div className="flex space-x-3">
          <Link href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">
            Documentation
          </Link>
          <Link href="#" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md text-sm">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}