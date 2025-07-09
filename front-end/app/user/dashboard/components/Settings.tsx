import { Lock, Globe, Trash2, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Settings</h2>
      
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Change Password
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">→</span>
          </button>
        </div>
        
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Language
              </span>
            </div>
            <select className="bg-transparent text-sm text-gray-500 dark:text-gray-400 border-none focus:ring-0">
              <option>English</option>
              <option>العربية</option>
              <option>Français</option>
            </select>
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Dark Mode
              </span>
            </div>
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {theme === "dark" ? "Disable" : "Enable"}
            </button>
          </div>
        </div>
        
        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <button className="w-full flex items-center space-x-3 text-red-600 dark:text-red-400">
            <Trash2 className="w-5 h-5" />
            <span className="text-sm font-medium">
              Delete Account
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}   