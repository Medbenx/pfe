import { FiBell, FiSearch } from "react-icons/fi";
import Image from "next/image";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm h-20">
      {" "}
      {/* Added h-20 */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            {/* Menu icon */}
          </button>
          <div className="relative ml-4 lg:ml-6">
            <div className="flex items-center">
              <FiSearch className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="ml-4 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <FiBell className="h-6 w-6" />
          </button>
          {/* User dropdown */}
          <div className="relative ml-4 flex-shrink-0">
            <div>
              <button
                type="button"
                className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


