// components/TripCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type TripCardProps = {
  id: number;
  city: string;
  title: string;
  rating: number;
  reviews: number;
  duration: string;
  price: number;
  image: string;
  layoutId?: string;
};

export function TripCard({
  id,
  city,
  title,
  rating,
  reviews,
  duration,
  price,
  image,
  layoutId
}: TripCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/trips/${id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {city}
            </span>
            <span className="text-xs font-medium text-gray-500">
              {duration}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center mb-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'fill-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">
              {rating} ({reviews.toLocaleString()})
            </span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-sm text-gray-500">From</span>
            <span className="text-lg font-bold text-blue-600">${price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}