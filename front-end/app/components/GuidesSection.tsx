
// // This file is part of a Next.js application and uses Swiper for a responsive carousel of guides.
// 'use client';

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";
// import styles from '../styles/GuidesSection.module.css';

// const guides = [
//   {
//     id: 1,
//     name: "Sara El Amran",
//     image: "/images/guide1.jpg",
//     email: "sara@moroccotours.com",
//     phone: "+212 600 123 456",
//     bio: "Expert in Moroccan culture with 10+ years experience guiding travelers through Marrakech's medina.",
//     location: "Marrakech, Morocco",
//     price: "$50/hour",
//     specialties: ["Cultural Tours", "Historical Sites", "Local Crafts"],
//     rating: 4.9
//   },
//   {
//     id: 2,
//     name: "Youssef Benair",
//     image: "/images/guide2.jpg",
//     email: "youssef@desertadventures.ma",
//     phone: "+212 600 234 567",
//     bio: "Specializes in desert adventures with 200+ Sahara expeditions led.",
//     location: "Merzouga, Morocco",
//     price: "$65/hour",
//     specialties: ["Desert Trekking", "Adventure Tours", "Camel Expeditions"],
//     rating: 4.8
//   },
//   {
//     id: 3,
//     name: "Amina Zahir",
//     image: "/images/guide3.jpg",
//     email: "amina@moroccanfoodtours.com",
//     phone: "+212 600 345 678",
//     bio: "Culinary expert showcasing hidden gems of Moroccan cuisine.",
//     location: "Fes, Morocco",
//     price: "$45/hour",
//     specialties: ["Food Tours", "Cooking Classes", "Market Visits"],
//     rating: 4.7
//   },
//   {
//     id: 5,
//     name: "Karim El Fassi",
//     image: "/images/guide5.jpg",
//     email: "karim@atlastreks.ma",
//     phone: "+212 600 456 789",
//     bio: "Expert in mountain trekking and Berber culture with extensive knowledge of the Atlas Mountains.",
//     location: "Imlil, Morocco",
//     price: "$60/hour",
//     specialties: ["Mountain Trekking", "Berber Villages", "Nature Walks"],
//     rating: 4.8
//   },
//   {
//     id: 6,
//     name: "Leila Boutaleb",
//     image: "/images/guide6.jpg",
//     email: "leila@womentours.ma",
//     phone: "+212 600 567 890",
//     bio: "Specializes in women-only tours and cultural experiences tailored for female travelers.",
//     location: "Essaouira, Morocco",
//     price: "$55/hour",
//     specialties: ["Women's Tours", "Cultural Experiences", "Textile Workshops"],
//     rating: 4.9
//   },
//   {
//     id: 7,
//     name: "Hassan Chraibi",
//     image: "/images/guide7.jpg",
//     email: "hassan@moroccophoto.com",
//     phone: "+212 600 678 901",
//     bio: "Photography guide helping visitors capture perfect shots of Morocco's landscapes.",
//     location: "Chefchaouen, Morocco",
//     price: "$70/hour",
//     specialties: ["Photography Tours", "Sunset Spots", "Composition Tips"],
//     rating: 4.7
//   },
//   {
//     id: 8,
//     name: "Fatima El Mansouri",
//     image: "/images/guide8.jpg",
//     email: "fatima@historytours.ma",
//     phone: "+212 600 789 012",
//     bio: "Historian specializing in Islamic architecture and royal palaces.",
//     location: "Rabat, Morocco",
//     price: "$50/hour",
//     specialties: ["Architecture Tours", "Palace Visits", "History Walks"],
//     rating: 4.6
//   },
//   {
//     id: 9,
//     name: "Mehdi Zouhair",
//     image: "/images/guide9.jpg",
//     email: "mehdi@adventuremorocco.com",
//     phone: "+212 600 890 123",
//     bio: "Adventure guide offering extreme sports and outdoor activities.",
//     location: "Agadir, Morocco",
//     price: "$75/hour",
//     specialties: ["Rock Climbing", "Surfing", "Quad Biking"],
//     rating: 4.9
//   },
//   {
//     id: 10,
//     name: "Nadia Belkhayat",
//     image: "/images/guide10.jpg",
//     email: "nadia@wellnessmorocco.ma",
//     phone: "+212 600 901 234",
//     bio: "Wellness guide offering yoga retreats and spa experiences.",
//     location: "Oualidia, Morocco",
//     price: "$65/hour",
//     specialties: ["Yoga Retreats", "Hammam Tours", "Meditation Sessions"],
//     rating: 4.8
//   }
// ];

// export default function GuidesSection() {
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   return (
//     <section className={styles.guidesSection}>
//       <div className={styles.container}>
//         <h2 className={styles.sectionTitle}>Meet Our Expert Guides</h2>
        
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           navigation={true}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           modules={[Pagination, Navigation, Autoplay]}
//           className={styles.swiperContainer}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 25,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//         >
//           {guides.map((guide) => (
//             <SwiperSlide key={guide.id} className={styles.swiperSlide}>
//               <div 
//                 className={`${styles.guideCard} ${activeCard === guide.id ? styles.active : ''}`}
//                 onMouseEnter={() => setActiveCard(guide.id)}
//                 onMouseLeave={() => setActiveCard(null)}
//               >
//                 <div className={styles.cardInner}>
//                   <div className={styles.cardFront}>
//                     <div className={styles.guideImage}>
//                       <Image
//                         src={guide.image}
//                         alt={guide.name}
//                         width={200}
//                         height={200}
//                         className={styles.avatar}
//                       />
//                       <div className={styles.rating}>
//                         <span>★</span> {guide.rating}
//                       </div>
//                     </div>
//                     <div className={styles.cardContent}>
//                       <h3 className={styles.name}>{guide.name}</h3>
//                       <p className={styles.location}>{guide.location}</p>
//                       <div className={styles.price}>{guide.price}</div>
//                       <div className={styles.specialties}>
//                         {guide.specialties.map((spec, i) => (
//                           <span key={i} className={styles.specialty}>{spec}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className={styles.cardBack}>
//                     <div className={styles.backContent}>
//                       <h3 className={styles.name}>{guide.name}</h3>
//                       <div className={styles.contactInfo}>
//                         <p><span>✉️</span> {guide.email}</p>
//                         <p><span>📞</span> {guide.phone}</p>
//                       </div>
//                       <p className={styles.bio}>{guide.bio}</p>
//                       <div className={styles.actionButtons}>
//                         <button className={styles.bookButton}>Book Now</button>
//                         <Link href={`/guides/${guide.id}`} className={styles.profileLink}>
//                           View Full Profile
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


'use client';

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/GuidesSection.module.css';

// Modern arrow icons
const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
);

const guides = [
  {
    id: 1,
    name: "Sara El Amran",
    image: "/images/guide1.jpg",
    email: "sara@moroccotours.com",
    phone: "+212 600 123 456",
    bio: "Expert in Moroccan culture with 10+ years experience guiding travelers through Marrakech's medina.",
    location: "Marrakech, Morocco",
    price: "$50/hour",
    specialties: ["Cultural Tours", "Historical Sites", "Local Crafts"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Youssef Benair",
    image: "/images/guide2.jpg",
    email: "youssef@desertadventures.ma",
    phone: "+212 600 234 567",
    bio: "Specializes in desert adventures with 200+ Sahara expeditions led.",
    location: "Merzouga, Morocco",
    price: "$65/hour",
    specialties: ["Desert Trekking", "Adventure Tours", "Camel Expeditions"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Amina Zahir",
    image: "/images/guide3.jpg",
    email: "amina@moroccanfoodtours.com",
    phone: "+212 600 345 678",
    bio: "Culinary expert showcasing hidden gems of Moroccan cuisine.",
    location: "Fes, Morocco",
    price: "$45/hour",
    specialties: ["Food Tours", "Cooking Classes", "Market Visits"],
    rating: 4.7
  },
  {
    id: 5,
    name: "Karim El Fassi",
    image: "/images/guide5.jpg",
    email: "karim@atlastreks.ma",
    phone: "+212 600 456 789",
    bio: "Expert in mountain trekking and Berber culture with extensive knowledge of the Atlas Mountains.",
    location: "Imlil, Morocco",
    price: "$60/hour",
    specialties: ["Mountain Trekking", "Berber Villages", "Nature Walks"],
    rating: 4.8
  },
  {
    id: 6,
    name: "Leila Boutaleb",
    image: "/images/guide6.jpg",
    email: "leila@womentours.ma",
    phone: "+212 600 567 890",
    bio: "Specializes in women-only tours and cultural experiences tailored for female travelers.",
    location: "Essaouira, Morocco",
    price: "$55/hour",
    specialties: ["Women's Tours", "Cultural Experiences", "Textile Workshops"],
    rating: 4.9
  },
  {
    id: 7,
    name: "Hassan Chraibi",
    image: "/images/guide7.jpg",
    email: "hassan@moroccophoto.com",
    phone: "+212 600 678 901",
    bio: "Photography guide helping visitors capture perfect shots of Morocco's landscapes.",
    location: "Chefchaouen, Morocco",
    price: "$70/hour",
    specialties: ["Photography Tours", "Sunset Spots", "Composition Tips"],
    rating: 4.7
  },
  {
    id: 8,
    name: "Fatima El Mansouri",
    image: "/images/guide8.jpg",
    email: "fatima@historytours.ma",
    phone: "+212 600 789 012",
    bio: "Historian specializing in Islamic architecture and royal palaces.",
    location: "Rabat, Morocco",
    price: "$50/hour",
    specialties: ["Architecture Tours", "Palace Visits", "History Walks"],
    rating: 4.6
  },
  {
    id: 9,
    name: "Mehdi Zouhair",
    image: "/images/guide9.jpg",
    email: "mehdi@adventuremorocco.com",
    phone: "+212 600 890 123",
    bio: "Adventure guide offering extreme sports and outdoor activities.",
    location: "Agadir, Morocco",
    price: "$75/hour",
    specialties: ["Rock Climbing", "Surfing", "Quad Biking"],
    rating: 4.9
  },
  {
    id: 10,
    name: "Nadia Belkhayat",
    image: "/images/guide10.jpg",
    email: "nadia@wellnessmorocco.ma",
    phone: "+212 600 901 234",
    bio: "Wellness guide offering yoga retreats and spa experiences.",
    location: "Oualidia, Morocco",
    price: "$65/hour",
    specialties: ["Yoga Retreats", "Hammam Tours", "Meditation Sessions"],
    rating: 4.8
  }
];

export default function GuidesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const swiperRef = useRef<any>(null);
  const flipTimeout = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (guideId: number) => {
    setActiveCard(guideId);
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    // Delay the flip back to allow for smooth animation
    flipTimeout.current = setTimeout(() => {
      setActiveCard(null);
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
      }
    }, 300);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, guideId: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 40; // Reduced tilt amount for slower effect
    const tiltY = (centerX - x) / 40;
    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <section className={`py-16 bg-gradient-to-r from-blue-50 to-amber-50 ${styles.guidesSection}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Meet Our Expert Guides</h2>
        
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ 
            clickable: true,
            bulletClass: `${styles.swiperPaginationBullet} swiper-pagination-bullet`,
            bulletActiveClass: `${styles.swiperPaginationBulletActive} swiper-pagination-bullet-active`
          }}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className={styles.swiperContainer}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {guides.map((guide) => (
            <SwiperSlide key={guide.id} className={styles.swiperSlide}>
              <div 
                className={`${styles.guideCard} ${activeCard === guide.id ? styles.active : ''}`}
                onMouseEnter={() => handleMouseEnter(guide.id)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, guide.id)}
                style={{
                  transform: activeCard === guide.id 
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                    : 'perspective(1000px) rotateX(0) rotateY(0)'
                }}
              >
                <div className={styles.cardInner}>
                  {/* Front of Card */}
                  <div className={styles.cardFront}>
                    <div className={styles.guideImage}>
                      <Image
                        src={guide.image}
                        alt={guide.name}
                        width={200}
                        height={200}
                        className={styles.avatar}
                      />
                      <div className={styles.rating}>
                        <span>★</span> {guide.rating}
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.name}>{guide.name}</h3>
                      <p className={styles.location}>{guide.location}</p>
                      <div className={styles.price}>{guide.price}</div>
                      <div className={styles.specialties}>
                        {guide.specialties.map((spec, i) => (
                          <span key={i} className={styles.specialty}>{spec}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className={styles.cardBack}>
                    <div className={styles.backContent}>
                      <h3 className={styles.name}>{guide.name}</h3>
                      <div className={styles.contactInfo}>
                        <p><span>✉️</span> {guide.email}</p>
                        <p><span>📞</span> {guide.phone}</p>
                      </div>
                      <p className={styles.bio}>{guide.bio}</p>
                      <div className={styles.actionButtons}>
                        <button className={styles.bookButton}>Book Now</button>
                        <Link href={`/guides/${guide.id}`} className={styles.profileLink}>
                          View Full Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className={`${styles.swiperButtonNext} swiper-button-next`}>
            <NextIcon />
          </div>
          <div className={`${styles.swiperButtonPrev} swiper-button-prev`}>
            <PrevIcon />
          </div>
        </Swiper>
      </div>
    </section>
  );
}