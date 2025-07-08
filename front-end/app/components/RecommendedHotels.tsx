// components/RecommendedHotels.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../styles/RecommendedHotels.css";

const hotels = [
  {
    id: 1,
    name: "Royal Mansour Marrakech",
    location: "Marrakech, Morocco",
    rating: 4.8,
    reviews: 1245,
    price: 850,
    image: "/images/hotels/marrakech-royal.jpg",
  },
  {
    id: 2,
    name: "Kasbah Tamadot",
    location: "Atlas Mountains, Morocco",
    rating: 4.9,
    reviews: 892,
    price: 720,
    image: "/images/hotels/atlas-kasbah.jpg",
  },
  {
    id: 3,
    name: "La Sultana Oualidia",
    location: "Oualidia, Morocco",
    rating: 4.7,
    reviews: 567,
    price: 380,
    image: "/images/hotels/oualidia-sultana.jpg",
  },
  {
    id: 4,
    name: "Mandarin Oriental",
    location: "Fes, Morocco",
    rating: 4.8,
    reviews: 1032,
    price: 650,
    image: "/images/hotels/fes-mandarin.jpg",
  },
  {
    id: 5,
    name: "Hotel Sahrai",
    location: "Chefchaouen, Morocco",
    rating: 4.6,
    reviews: 784,
    price: 420,
    image: "/images/hotels/chefchaouen-sahrai.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function RecommendedHotels() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigatingId, setNavigatingId] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = (id: number) => {
    setIsNavigating(true);
    setNavigatingId(id);
    router.push(`/hotels/${id}`);
  };

  return (
    <section className="rh-section">
      <div className="rh-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="rh-header"
        >
          <motion.h2 variants={fadeIn} className="rh-title">
            Luxury Moroccan Hotels
          </motion.h2>
          <motion.p variants={fadeIn} className="rh-subtitle">
            Discover Morocco is finest accommodations handpicked by our travel
            experts
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rh-swiper-container"
        >
          {isNavigating && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium text-gray-800">
                  Loading{" "}
                  {hotels.find((h) => h.id === navigatingId)?.name}
                  ...
                </p>
              </div>
            </div>
          )}

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".rh-swiper-button-next",
              prevEl: ".rh-swiper-button-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 3.5 },
            }}
            className="rh-swiper"
          >
            {hotels.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <div
                  onClick={() => handleCardClick(hotel.id)}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="rh-card"
                  >
                    <div className="rh-image-container">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="rh-image"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="rh-rating-badge">
                        {hotel.rating.toFixed(1)} ★
                      </div>
                    </div>
                    <div className="rh-details">
                      <h3 className="rh-hotel-name">{hotel.name}</h3>
                      <p className="rh-location">{hotel.location}</p>
                      <div className="rh-reviews">
                        {hotel.reviews.toLocaleString()} reviews
                      </div>
                      <div className="rh-price-container">
                        <span className="rh-from">From</span>
                        <span className="rh-price">${hotel.price}</span>
                        <span className="rh-night">/night</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="rh-swiper-nav">
            <div className="rh-swiper-button-prev"></div>
            <div className="rh-swiper-button-next"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}