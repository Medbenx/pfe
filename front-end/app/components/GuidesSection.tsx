"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/GuidesSection.css";

interface Guide {
  id: number;
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  photo: string;
  price_per_hour: number;
  languages?: string | string[];  // يمكن أن تكون نص أو مصفوفة
}

export default function GuidesSection() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/touriste-guides")
      .then(res => {
        setGuides(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load guides");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading guides...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <section className="guides-section bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meet Our Expert Guides
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="guides-slider"
        >
          {guides.map((guide) => (
            <SwiperSlide key={guide.id}>
              <div className="guide-card group h-[500px] w-full perspective-1000 relative">
                {/* Front Card */}
                <div className="card-front bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:rotate-y-180 absolute inset-0 backface-hidden">
                  <div className="guide-image mb-4">
                    <Image
                      src={`http://localhost:8000/storage/${guide.photo}`}
                      alt={guide.name}
                      width={120}
                      height={120}
                      className="profile-image rounded-full object-cover"
                    />
                  </div>
                  <div className="card-content text-center">
                    <h3 className="text-xl font-bold text-gray-800">{guide.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{guide.location}</p>
                    {guide.languages && (
                      <p className="text-gray-600 text-sm mt-1 italic">
                        Languages: {typeof guide.languages === 'string'
                          ? guide.languages.split(',').map(lang => lang.trim()).join(", ")
                          : guide.languages.join(", ")}
                      </p>
                    )}
                    <div className="price text-amber-600 font-bold mt-2">
                      ${guide.price_per_hour}/hour
                    </div>
                  </div>
                </div>

                {/* Back Card */}
                <div className="card-back bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-500 rotate-y-180 opacity-0 group-hover:opacity-100 group-hover:rotate-y-0 absolute inset-0 backface-hidden">
                  <div className="back-content w-full h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">{guide.name}</h3>

                      <div className="contact-info mb-4">
                        <p className="flex items-center text-gray-300 mb-2">
                          <svg
                            className="w-5 h-5 mr-2 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {guide.email}
                        </p>
                        <p className="flex items-center text-gray-300">
                          <svg
                            className="w-5 h-5 mr-2 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {guide.phone}
                        </p>
                      </div>

                      <p className="bio text-white text-[20px] leading-[28px] mb-6 line-clamp-4">
                        {guide.bio}
                      </p>
                    </div>

                    <div className="action-buttons flex flex-col gap-3">
                      <Link
                        href={`/guides/${guide.id}`}
                        className="profile-link bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors"
                      >
                        View Full Profile
                      </Link>
                      <button className="book-button bg-transparent border border-amber-400 hover:bg-amber-400/10 text-amber-400 font-medium py-2 px-4 rounded-lg transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
