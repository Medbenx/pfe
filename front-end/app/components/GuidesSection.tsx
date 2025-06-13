// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link"; // Import Link from Next.js for navigation
// import "../styles/GuidesSection.css";

// const guides = [
//   {
//     id: 1,
//     name: "Sara El Amran",
//     image: "/images/guide1.jpg",
//     bio: "Sara is an expert in Moroccan culture and history.",
//   },
//   {
//     id: 2,
//     name: "Youssef Benair",
//     image: "/images/guide2.jpg",
//     bio: "Youssef specializes in desert adventures and trekking.",
//   },
//   {
//     id: 3,
//     name: "Amina Zahir",
//     image: "/images/guide3.jpg",
//     bio: "Amina is a food enthusiast and culinary guide.",
//   },
//   {
//     id: 5,
//     name: "Guide 5",
//     image: "/images/guide5.jpg",
//     bio: "Amina is a food enthusiast and culinary guide.",
//   },
//   {
//     id: 6,
//     name: "Guide 6",
//     image: "/images/guide6.jpg",
//     bio: "Amina is a food enthusiast and culinary guide.",
//   },
//   {
//     id: 7,
//     name: "Guide 7",
//     image: "/images/guide7.jpg",
//     bio: "Amina is a food enthusiast and culinary guide.",
//   },
//   {
//     id: 8,
//     name: "Guide 8",
//     image: "/images/guide8.jpg",
//     bio: "Amina is a food enthusiast and culinary guide.",
//   },
//   {
//     id: 9,
//     name: "Guide 9",
//     image: "/images/guide9.jpg",
//     bio: "Amina is a food enthusiast and culinary guide.",
//   },
//   { id: 10, name: "Guide 10", image: "/images/guide10.jpg" },
// ];

// export default function GuidesSection() {
//   return (
//     <div className="guidesSection">
//       <h2>Our Travel Gurus</h2>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         navigation={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Navigation, Autoplay]}
//         className="mySwiper"
//       >
//         {guides.map((guide) => (
//           <SwiperSlide style={{ height: "230px" }} key={guide.id}>
//             <Link href={`/guide/${guide.id}`} passHref>
//               {" "}
//               {/* Link to guide details page */}
//               <div className="guideCard">
//                 <div className="guideImage">
//                   <Image
//                     src={guide.image}
//                     alt={guide.name}
//                     width={150}
//                     height={150}
//                     style={{ borderRadius: "50%" }}
//                   />
//                   <div className="hoverOverlay">
//                     <p>View Profile</p> {/* Hover text */}
//                   </div>
//                 </div>
//                 <h3>{guide.name}</h3>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "../styles/GuidesSection.css";

const guides = [
  {
    id: 1,
    name: "Sara El Amran",
    image: "/images/guide1.jpg",
    bio: "Sara is an expert in Moroccan culture and history with 10 years of experience guiding travelers through Marrakech's medina.",
    specialties: ["Cultural Tours", "Historical Sites", "Local Crafts"],
  },
  {
    id: 2,
    name: "Youssef Benair",
    image: "/images/guide2.jpg",
    bio: "Youssef specializes in desert adventures and trekking, having led over 200 expeditions into the Sahara.",
    specialties: ["Desert Trekking", "Adventure Tours", "Camel Expeditions"],
  },
  {
    id: 3,
    name: "Amina Zahir",
    image: "/images/guide3.jpg",
    bio: "Amina is a food enthusiast and culinary guide.",
  },
  {
    id: 5,
    name: "Guide 5",
    image: "/images/guide5.jpg",
    bio: "Amina is a food enthusiast and culinary guide.",
  },
  {
    id: 6,
    name: "Guide 6",
    image: "/images/guide6.jpg",
    bio: "Amina is a food enthusiast and culinary guide.",
  },
  {
    id: 7,
    name: "Guide 7",
    image: "/images/guide7.jpg",
    bio: "Amina is a food enthusiast and culinary guide.",
  },
  {
    id: 8,
    name: "Guide 8",
    image: "/images/guide8.jpg",
    bio: "Amina is a food enthusiast and culinary guide.",
  },
  {
    id: 9,
    name: "Guide 9",
    image: "/images/guide9.jpg",
    bio: "Amina is a food enthusiast and culinary guide.",
  },
  { id: 10, name: "Guide 10", image: "/images/guide10.jpg" },
];

export default function GuidesSection() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const handleMouseEnter = (guideId: number) => {
    setActivePopup(guideId);
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setActivePopup(null);
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div className="guidesSection">
      <div className="guidesCenterContainer">
        {" "}
        {/* New wrapper div */}
        <h2>Our Travel Gurus</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {guides.map((guide) => (
            <SwiperSlide key={guide.id} style={{ height: "230px" }}>
              <div
                className="guideCard"
                onMouseEnter={() => handleMouseEnter(guide.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="guideImage">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    width={150}
                    height={150}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <h3>{guide.name}</h3>

                {/* Popup that appears on hover */}
                {activePopup === guide.id && (
                  <div className="guidePopup">
                    <div className="popupContent">
                      <div className="popupImage">
                        <Image
                          src={guide.image}
                          alt={guide.name}
                          width={200}
                          height={200}
                          style={{ borderRadius: "50%" }}
                        />
                      </div>
                      <div className="popupInfo">
                        <h4>{guide.name}</h4>
                        <p className="bio">{guide.bio}</p>
                        <div className="specialties">
                          {guide.specialties?.map((spec, i) => (
                            <span key={i} className="specialty">
                              {spec}
                            </span>
                          ))}
                        </div>
                        <Link href={`/guide/${guide.id}`} passHref>
                          <button className="viewProfileBtn">
                            View Full Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
