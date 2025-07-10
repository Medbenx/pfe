import { Star, Edit, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const reviews = [
  {
    id: 1,
    tour: "Dubai City Tour",
    guide: "Mohamed Ali",
    rating: 5,
    comment: "Excellent tour guide with deep knowledge of Dubai's history.",
    date: "15 Jun 2023"
  },
  {
    id: 2,
    tour: "Desert Safari",
    guide: "Fatima Ahmed",
    rating: 4,
    comment: "Amazing experience, but the sunset view was crowded.",
    date: "10 May 2023"
  },
  {
    id: 3,
    tour: "Abu Dhabi Day Trip",
    guide: "Khalid Hassan",
    rating: 3,
    comment: "Good tour but felt a bit rushed in some locations.",
    date: "22 Apr 2023"
  }
];

export default function MyReviews() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        My Reviews
      </h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {review.tour}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  with {review.guide}
                </p>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-500'}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {review.comment}
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {review.date}
              </span>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-xs h-8">
                  <Edit className="w-3 h-3 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-xs h-8 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                  <Trash2 className="w-3 h-3 mr-1" /> Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="mt-4 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
        View All Reviews
      </Button>
    </div>
  );
}   