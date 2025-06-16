import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "../data/review";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div className="py-8">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[380px] w-[90%] h-[320px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl block p-6 shadow-lg">
            <div className="w-full h-full flex flex-col">
              {/* Review text */}
              <p className="text-sm sm:text-base font-bold flex-grow  text-black-700 mb-4">
                {data.comment}
              </p>
              
              {/* Rating stars */}
              <div className="flex items-center mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < data.rating ? "text-yellow-400" : "text-gray-300"
                    }`} 
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {data.rating}.0
                </span>
              </div>
              
              {/* User profile */}
              <div className="mt-auto">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src={data.image}
                      alt={data.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 768px) 48px, 48px"
                      quality={80}
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      {data.name}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;