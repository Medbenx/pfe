import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover';

export function FlightCalendar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Flight Calendar
      </h2>
      <div className="flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[240px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Pick a date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
          <div>
            <p className="text-sm font-medium">Dubai Tour</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">15 Jun 2023</p>
          </div>
        </div>
        <div className="flex items-center p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <div>
            <p className="text-sm font-medium">Abu Dhabi Tour</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">22 May 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}