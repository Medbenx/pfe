// import Image from "next/image";
// import "../styles/TravelHighlights.css";
// import { FaUser } from "react-icons/fa"; // Importing a person icon from react-icons

// export default function HighlightsSection() {
//   return (
//     <div className="travel-highlights">
//       <div className="cards">
//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image10.jpg"
//             alt="Must-Visit Cities"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Top 5 Must-Visit Cities</h2>
//             <p>From Marrakech to Fes, discover Morocco is hidden gems!</p>
//             <div className="tags">
//               <span>Travel Tips</span>
//               <span>Culinary Delights</span>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image11.jpg"
//             alt="Flavors of Morocco"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Savor the Flavors of Morocco</h2>
//             <p>Indulge in tagines, couscous, and street food galore!</p>
//             <div className="tags">
//               <span>Cultural Events</span>
//               <span>Local Cuisine</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="cards">
//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image12.jpg"
//             alt="Flavors of Morocco"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Adventure Awaits You</h2>
//             <p>Hike the Atlas Mountains or surf the Atlantic waves!</p>
//             <div className="tags">
//               <span>Adventure</span>
//               <span>Nature</span>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image13.jpg"
//             alt="Flavors of Morocco"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Experience Moroccan Festivals</h2>
//             <p>Join the vibrant celebrations and dance the night away!</p>
//             <div className="tags">
//               <span>Festivalss</span>
//               <span>Nightlife</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import Image from "next/image";
// import Link from "next/link";
// import "../styles/TravelHighlights.css";
// import { FaUser, FaArrowRight } from "react-icons/fa";

// interface HighlightCard {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// export default function HighlightsSection() {
//   const highlights: HighlightCard[] = [
//     {
//       id: 1,
//       title: "Top 5 Must-Visit Cities",
//       description: "From Marrakech to Fes, discover Morocco's hidden gems!",
//       image: "/images/image10.jpg",
//       tags: ["Travel Tips", "Culinary Delights"],
//     },
//     {
//       id: 2,
//       title: "Savor the Flavors of Morocco",
//       description: "Indulge in tagines, couscous, and street food galore!",
//       image: "/images/image11.jpg",
//       tags: ["Cultural Events", "Local Cuisine"],
//     },
//     {
//       id: 3,
//       title: "Adventure Awaits You",
//       description: "Hike the Atlas Mountains or surf the Atlantic waves!",
//       image: "/images/image12.jpg",
//       tags: ["Adventure", "Nature"],
//     },
//     {
//       id: 4,
//       title: "Experience Moroccan Festivals",
//       description: "Join the vibrant celebrations and dance the night away!",
//       image: "/images/image13.jpg",
//       tags: ["Festivals", "Nightlife"],
//     },
//     {
//     id: 5,
//     title: "Explore Morocco's Imperial History",
//     description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
//     image: "/images/image14.jpg",
//     tags: ["History", "Architecture"],
//   },
//   {
//     id: 6,
//     title: "Discover the Magic of the Sahara",
//     description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
//     image: "/images/image15.jpg",
//     tags: ["Desert Tours", "Nature"],
//   },
//   ];

//   return (
//     <div className="highlights-container">
//       <div className="travel-highlights">
//         <h2 className="section-title">Travel Highlights</h2>
//         <p className="section-subtitle">Discover the best of Morocco</p>
        
//         <div className="cards-grid">
//           {highlights.map((highlight) => (
//             <Link 
//               href={`/highlights/${highlight.id}`} 
//               key={highlight.id}
//               className="card-link"
//             >
//               <div className="card">
//                 <div className="card-image-container">
//                   <Image
//                     width={500}
//                     height={300}
//                     src={highlight.image}
//                     alt={highlight.title}
//                     className="card-image"
//                   />
//                 </div>
//                 <div className="card-content">
//                   <div className="card-header">
//                     <FaUser className="person-icon" />
//                     <h3>{highlight.title}</h3>
//                   </div>
//                   <p>{highlight.description}</p>
//                   <div className="card-footer">
//                     <div className="tags">
//                       {highlight.tags.map((tag, index) => (
//                         <span key={index}>{tag}</span>
//                       ))}
//                     </div>
//                     <FaArrowRight className="arrow-icon" />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { FaUser, FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useTransform, useScroll, MotionValue } from "framer-motion";

// interface HighlightCard {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// export default function HighlightsSection() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 50);

//   const highlights: HighlightCard[] = [
//     {
//       id: 1,
//       title: "Top 5 Must-Visit Cities",
//       description: "From Marrakech to Fes, discover Morocco's hidden gems!",
//       image: "/images/image10.jpg",
//       tags: ["Travel Tips", "Culinary Delights"],
//     },
//     {
//       id: 2,
//       title: "Savor the Flavors of Morocco",
//       description: "Indulge in tagines, couscous, and street food galore!",
//       image: "/images/image11.jpg",
//       tags: ["Cultural Events", "Local Cuisine"],
//     },
//     {
//       id: 3,
//       title: "Adventure Awaits You",
//       description: "Hike the Atlas Mountains or surf the Atlantic waves!",
//       image: "/images/image12.jpg",
//       tags: ["Adventure", "Nature"],
//     },
//     {
//       id: 4,
//       title: "Experience Moroccan Festivals",
//       description: "Join the vibrant celebrations and dance the night away!",
//       image: "/images/image13.jpg",
//       tags: ["Festivals", "Nightlife"],
//     },
//     {
//     id: 5,
//     title: "Explore Morocco's Imperial History",
//     description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
//     image: "/images/image14.jpg",
//     tags: ["History", "Architecture"],
//   },
//   {
//     id: 6,
//     title: "Discover the Magic of the Sahara",
//     description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
//     image: "/images/image15.jpg",
//     tags: ["Desert Tours", "Nature"],
//   }
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 50 },
//     show: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10
//       }
//     },
//     hover: {
//       y: -10,
//       scale: 1.02,
//       transition: { 
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   return (
//     <div 
//       className="py-16 bg-gradient-to-r from-blue-50 to-amber-50"
//       style={{
//         perspective: "1000px"
//       }}
//     >
//       <motion.div 
//         ref={ref}
//         initial="hidden"
//         whileInView="show"
//         variants={container}
//         viewport={{ once: true, margin: "-100px" }}
//         className="container mx-auto px-4 max-w-7xl"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-500">
//             Travel Highlights
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover the best of Morocco with our curated experiences
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {highlights.map((highlight, index) => (
//             <motion.div
//               key={highlight.id}
//               variants={item}
//               whileHover="hover"
//               style={{
//                 transformStyle: "preserve-3d",
//                 y: useParallax(scrollYProgress, index * 10)
//               }}
//             >
//               <Link 
//                 href={`/highlights/${highlight.id}`} 
//                 className="block h-full"
//               >
//                 <motion.div
//                   whileHover={{ 
//                     rotateY: 5,
//                     rotateX: 2,
//                     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
//                   }}
//                   transition={{ 
//                     type: "spring",
//                     stiffness: 300
//                   }}
//                   className="h-full bg-white rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-blue-100/50 transition-all duration-300"
//                   style={{
//                     transformStyle: "preserve-3d"
//                   }}
//                 >
//                   <motion.div 
//                     className="relative h-64 overflow-hidden"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <Image
//                       fill
//                       src={highlight.image}
//                       alt={highlight.title}
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                   </motion.div>

//                   <motion.div 
//                     className="p-6"
//                     style={{
//                       transform: "translateZ(30px)"
//                     }}
//                   >
//                     <div className="flex items-center mb-4">
//                       <div className="p-2 bg-blue-100 rounded-full mr-3">
//                         <FaUser className="text-blue-600" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-900">{highlight.title}</h3>
//                     </div>
                    
//                     <p className="text-gray-600 mb-5">{highlight.description}</p>
                    
//                     <div className="flex justify-between items-center">
//                       <div className="flex flex-wrap gap-2">
//                         {highlight.tags.map((tag, i) => (
//                           <span 
//                             key={i}
//                             className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="p-2 bg-amber-100 rounded-full text-amber-600">
//                         <FaArrowRight />
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }





// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { FaUser, FaArrowRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import styles from '../styles/TravelHighlights.module.css'; // Adjust the path as necessary

// interface HighlightCard {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// export default function HighlightsSection() {
//   const highlights: HighlightCard[] = [
//     {
//       id: 1,
//       title: "Top 5 Must-Visit Cities",
//       description: "From Marrakech to Fes, discover Morocco's hidden gems!",
//       image: "/images/image10.jpg",
//       tags: ["Travel Tips", "Culinary Delights"],
//     },
//     {
//       id: 2,
//       title: "Savor the Flavors of Morocco",
//       description: "Indulge in tagines, couscous, and street food galore!",
//       image: "/images/image11.jpg",
//       tags: ["Cultural Events", "Local Cuisine"],
//     },
//     {
//       id: 3,
//       title: "Adventure Awaits You",
//       description: "Hike the Atlas Mountains or surf the Atlantic waves!",
//       image: "/images/image12.jpg",
//       tags: ["Adventure", "Nature"],
//     },
//     {
//       id: 4,
//       title: "Experience Moroccan Festivals",
//       description: "Join the vibrant celebrations and dance the night away!",
//       image: "/images/image13.jpg",
//       tags: ["Festivals", "Nightlife"],
//     },
//     {
//       id: 5,
//       title: "Explore Morocco's Imperial History",
//       description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
//       image: "/images/image14.jpg",
//       tags: ["History", "Architecture"],
//     },
//     {
//       id: 6,
//       title: "Discover the Magic of the Sahara",
//       description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
//       image: "/images/image15.jpg",
//       tags: ["Desert Tours", "Nature"],
//     }
//   ];

//   return (
//     <section className={styles.highlightsSection}>
//       <div className={styles.container}>
//         <div className={styles.sectionHeader}>
//           <h2 className={styles.sectionTitle}>Travel Highlights</h2>
//           <p className={styles.sectionSubtitle}>Discover the best of Morocco with our curated experiences</p>
//         </div>

//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 15,
//             stretch: 0,
//             depth: 200,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           navigation={true}
//           modules={[EffectCoverflow, Navigation, Autoplay]}
//           className={styles.swiperContainer}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//         >
//           {highlights.map((highlight) => (
//             <SwiperSlide key={highlight.id} className={styles.swiperSlide}>
//               <Link href={`/highlights/${highlight.id}`} className={styles.cardLink}>
//                 <div className={styles.card}>
//                   <div className={styles.cardImageContainer}>
//                     <Image
//                       fill
//                       src={highlight.image}
//                       alt={highlight.title}
//                       className={styles.cardImage}
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className={styles.imageOverlay} />
//                   </div>
//                   <div className={styles.cardContent}>
//                     <div className={styles.cardHeader}>
//                       <div className={styles.userIcon}>
//                         <FaUser />
//                       </div>
//                       <h3 className={styles.cardTitle}>{highlight.title}</h3>
//                     </div>
//                     <p className={styles.cardDescription}>{highlight.description}</p>
//                     <div className={styles.cardFooter}>
//                       <div className={styles.tags}>
//                         {highlight.tags.map((tag, i) => (
//                           <span key={i} className={styles.tag}>
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className={styles.arrowIcon}>
//                         <FaArrowRight />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }




// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { FaUser, FaArrowRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import styles from '../styles/TravelHighlights.module.css';

// interface HighlightCard {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// }

// export default function HighlightsSection() {
//   const highlights: HighlightCard[] = [
//      {
//       id: 1,
//       title: "Top 5 Must-Visit Cities",
//       description: "From Marrakech to Fes, discover Morocco's hidden gems!",
//       image: "/images/image10.jpg",
//       tags: ["Travel Tips", "Culinary Delights"],
//     },
//     {
//       id: 2,
//       title: "Savor the Flavors of Morocco",
//       description: "Indulge in tagines, couscous, and street food galore!",
//       image: "/images/image11.jpg",
//       tags: ["Cultural Events", "Local Cuisine"],
//     },
//     {
//       id: 3,
//       title: "Adventure Awaits You",
//       description: "Hike the Atlas Mountains or surf the Atlantic waves!",
//       image: "/images/image12.jpg",
//       tags: ["Adventure", "Nature"],
//     },
//     {
//       id: 4,
//       title: "Experience Moroccan Festivals",
//       description: "Join the vibrant celebrations and dance the night away!",
//       image: "/images/image13.jpg",
//       tags: ["Festivals", "Nightlife"],
//     },
//     {
//       id: 5,
//       title: "Explore Morocco's Imperial History",
//       description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
//       image: "/images/image14.jpg",
//       tags: ["History", "Architecture"],
//     },
//     {
//       id: 6,
//       title: "Discover the Magic of the Sahara",
//       description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
//       image: "/images/image15.jpg",
//       tags: ["Desert Tours", "Nature"],
//     }
//   ];

//   return (
//     <section className={styles.highlightsSection}>
//       <div className={styles.container}>
//         <div className={styles.sectionHeader}>
//           <h2 className={styles.sectionTitle}>Travel Highlights</h2>
//           <p className={styles.sectionSubtitle}>Discover the best of Morocco with our curated experiences</p>
//         </div>

//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           loop={true}
//           coverflowEffect={{
//             rotate: 10,
//             stretch: 0,
//             depth: 300,
//             modifier: 1.5,
//             slideShadows: true,
//           }}
//           navigation={{
//             nextEl: `.${styles.swiperButtonNext}`,
//             prevEl: `.${styles.swiperButtonPrev}`,
//           }}
//           modules={[EffectCoverflow, Autoplay, Navigation]}
//           className={styles.swiperContainer}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             640: {
//               coverflowEffect: {
//                 rotate: 15,
//                 depth: 400,
//               }
//             },
//             1024: {
//               coverflowEffect: {
//                 rotate: 20,
//                 depth: 500,
//               }
//             }
//           }}
//         >
//           {highlights.map((highlight) => (
//             <SwiperSlide key={highlight.id} className={styles.swiperSlide}>
//               <Link href={`/highlights/${highlight.id}`} className={styles.cardLink}>
//                 <div className={styles.card}>
//                   <div className={styles.cardImageContainer}>
//                     <Image
//                       fill
//                       src={highlight.image}
//                       alt={highlight.title}
//                       className={styles.cardImage}
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       priority
//                     />
//                     <div className={styles.imageOverlay} />
//                   </div>
//                   <div className={styles.cardContent}>
//                     <div className={styles.cardHeader}>
//                       <div className={styles.userIcon}>
//                         <FaUser />
//                       </div>
//                       <h3 className={styles.cardTitle}>{highlight.title}</h3>
//                     </div>
//                     <p className={styles.cardDescription}>{highlight.description}</p>
//                     <div className={styles.cardFooter}>
//                       <div className={styles.tags}>
//                         {highlight.tags.map((tag, i) => (
//                           <span key={i} className={styles.tag}>
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className={styles.arrowIcon}>
//                         <FaArrowRight />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </SwiperSlide>
//           ))}
          
//           {/* Custom Navigation Buttons */}
//           <div className={styles.swiperButtonPrev}></div>
//           <div className={styles.swiperButtonNext}></div>
//         </Swiper>
//       </div>
//     </section>
//   );
// }



'use client';

import Image from "next/image";
import Link from "next/link";
import { FaUser, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../styles/TravelHighlights.module.css';

interface HighlightCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function HighlightsSection() {
  const highlights: HighlightCard[] = [
    {
      id: 1,
      title: "Top 5 Must-Visit Cities",
      description: "From Marrakech to Fes, discover Morocco's hidden gems!",
      image: "/images/image10.jpg",
      tags: ["Travel Tips", "Culinary Delights"],
    },
    {
      id: 2,
      title: "Savor the Flavors of Morocco",
      description: "Indulge in tagines, couscous, and street food galore!",
      image: "/images/image11.jpg",
      tags: ["Cultural Events", "Local Cuisine"],
    },
    {
      id: 3,
      title: "Adventure Awaits You",
      description: "Hike the Atlas Mountains or surf the Atlantic waves!",
      image: "/images/image12.jpg",
      tags: ["Adventure", "Nature"],
    },
    {
      id: 4,
      title: "Experience Moroccan Festivals",
      description: "Join the vibrant celebrations and dance the night away!",
      image: "/images/image13.jpg",
      tags: ["Festivals", "Nightlife"],
    },
    {
      id: 5,
      title: "Explore Morocco's Imperial History",
      description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
      image: "/images/image14.jpg",
      tags: ["History", "Architecture"],
    },
    {
      id: 6,
      title: "Discover the Magic of the Sahara",
      description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
      image: "/images/image15.jpg",
      tags: ["Desert Tours", "Nature"],
    }
  ];

  return (
    <section className={styles.highlightsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Travel Highlights</h2>
          <p className={styles.sectionSubtitle}>Discover the best of Morocco with our curated experiences</p>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          modules={[Autoplay, Navigation]}
          className={styles.swiperContainer}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {highlights.map((highlight) => (
            <SwiperSlide key={highlight.id} className={styles.swiperSlide}>
              <Link href={`/highlights/${highlight.id}`} className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.cardImageContainer}>
                    <Image
                      fill
                      src={highlight.image}
                      alt={highlight.title}
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.userIcon}>
                        <FaUser />
                      </div>
                      <h3 className={styles.cardTitle}>{highlight.title}</h3>
                    </div>
                    <p className={styles.cardDescription}>{highlight.description}</p>
                    <div className={styles.cardFooter}>
                      <div className={styles.tags}>
                        {highlight.tags.map((tag, i) => (
                          <span key={i} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={styles.arrowIcon}>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          
          <div className={styles.swiperButtonPrev}></div>
          <div className={styles.swiperButtonNext}></div>
        </Swiper>
      </div>
    </section>
  );
}