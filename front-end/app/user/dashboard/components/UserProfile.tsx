import { User, Edit, BadgeCheck } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function UserProfile() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <User className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <BadgeCheck className="absolute bottom-0 right-0 w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Ahmed Mohamed</h2>
            <p className="text-gray-600 dark:text-gray-300 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Active • Dubai, UAE
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Premium Member
            </p>
          </div>
        </div>
        <Button variant="outline" className="flex items-center">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>
    </div>
  );
}