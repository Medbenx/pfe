import { User, Send } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const conversations = [
  {
    id: 1,
    guide: "Mohamed Ali",
    lastMessage: "See you at the meeting point at 9 AM",
    time: "2 hours ago",
    unread: true
  },
  {
    id: 2,
    guide: "Fatima Ahmed",
    lastMessage: "Don't forget to bring water",
    time: "1 day ago",
    unread: false
  },
  {
    id: 3,
    guide: "Khalid Hassan",
    lastMessage: "The weather will be perfect tomorrow",
    time: "3 days ago",
    unread: false
  }
];

export default function Messages() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Messages</h2>
      
      <div className="space-y-3 mb-4">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id} 
            className={`p-3 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
              conversation.unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
              <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                {conversation.guide}
              </h3>
              <p className={`text-sm ${
                conversation.unread ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'
              }`}>
                {conversation.lastMessage}
              </p>
            </div>
            <div className="text-xs text-gray-400">
              {conversation.time}
              {conversation.unread && (
                <div className="w-2 h-2 rounded-full bg-blue-500 ml-auto mt-1"></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center space-x-2">
        <Input 
          placeholder="Type a message..." 
          className="flex-1" 
        />
        <Button size="icon" className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}