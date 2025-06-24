// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { Playfair_Display } from "next/font/google";
// import { useEffect, useRef } from "react";
// import "../styles/about.css";

// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

// const moroccoOverview = {
//   title: "Discover Morocco",
//   subtitle: "Land of Contrasts & Cultural Treasures",
//   video: '/videos/morocco-hero.mp4',
//   sections: [
//     {
//       title: "Geography",
//       image: "/images/image1.jpg",
//       text: `Morocco is located in North Africa, bordered by the Atlantic Ocean and Mediterranean Sea, with Algeria to the east and the Western Sahara to the south. The country's landscape is diverse, featuring coastal plains, the Atlas and Rif mountain ranges, and the Sahara Desert.`,
//     },
//     {
//       title: "Area and Climate",
//       image: "/images/image2.jpg",
//       text: `Morocco covers approximately 710,850 square kilometers. The climate varies from Mediterranean in the north to arid in the southeast. Coastal regions are mild, while the interior can experience extreme temperatures.`,
//     },
//     {
//       title: "History and Economy",
//       image: "/images/image3.jpg",
//       text: `Morocco has a rich history influenced by Berber, Arab, and European cultures. It gained independence from France and Spain in 1956. Today, Morocco has a diverse economy based on agriculture, mining, manufacturing, tourism, and services.`,
//     },
//     {
//       title: "People and Culture",
//       image: "/images/image5.jpg",
//       text: `The Moroccan population is primarily Arab-Berber, with strong family values and hospitality. Cultural expressions include traditional music, festivals, cuisine, and artisanal crafts. Cities like Fez and Marrakech are cultural hubs.`,
//     },
//     {
//       title: "Official Religion",
//       image: "/images/image4.jpg",
//       text: `Islam is the official religion of Morocco. The majority of Moroccans are Sunni Muslims. Religious practices and traditions shape daily life, and Islamic architecture is visible throughout the country.`,
//     },
//     {
//       title: "National Language",
//       image: "/images/image6.jpg",
//       text: `Morocco has two official languages: Arabic and Amazigh (Berber). French is widely used in business, education, and government, while English and Spanish are also understood in some regions.`,
//     },
//   ],
// };

// export default function AboutPage() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

//   return (
//     <div className="about-container" ref={containerRef}>
//       {/* 3D Video Hero Section */}
//       <motion.div 
//         className="hero-video-container"
//         style={{ y: y1 }}
//       >
//         <video 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//           className="hero-video"
//         >
//           <source src={moroccoOverview.video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-overlay">
//           <motion.div 
//             className="hero-text"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className={`${playfair.className} hero-title`}>{moroccoOverview.title}</h1>
//             <motion.p 
//               className="hero-subtitle"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 1 }}
//             >
//               {moroccoOverview.subtitle}
//             </motion.p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* 3D Content Sections */}
//       <div className="content-sections">
//         {moroccoOverview.sections.map((section, index) => (
//           <motion.section
//             key={section.title}
//             className={`feature-section ${index % 2 !== 0 ? "reverse" : ""}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.1 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <motion.div 
//               className="text-content"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <div className="section-header">
//                 <motion.span 
//                   className="section-number"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ delay: index * 0.1 + 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   0{index + 1}
//                 </motion.span>
//                 <h2 className={`${playfair.className} section-title`}>{section.title}</h2>
//               </div>
//               <motion.p 
//                 className="section-text"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: index * 0.1 + 0.5 }}
//                 viewport={{ once: true }}
//               >
//                 {section.text}
//               </motion.p>
//             </motion.div>

//             <motion.div 
//               className="image-wrapper"
//               initial={{ rotateY: 90, opacity: 0 }}
//               whileInView={{ rotateY: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, z: 20 }}
//               style={{
//                 transformStyle: "preserve-3d",
//                 perspective: "1000px"
//               }}
//             >
//               <Image
//                 src={section.image}
//                 alt={section.title}
//                 fill
//                 className="section-image"
//               />
//               <div className="image-reflection"></div>
//             </motion.div>
//           </motion.section>
//         ))}
//       </div>

//       {/* 3D Floating Elements */}
//       <motion.div 
//         className="floating-element-1"
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 5, 0]
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       />
//       <motion.div 
//         className="floating-element-2"
//         animate={{
//           x: [0, 15, 0],
//           rotate: [0, -5, 0]
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//       />
//     </div>
//   );
// }


// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { Playfair_Display } from "next/font/google";
// import { useRef } from "react";
// import "../styles/about.css"; // Ensure you have the correct path to your CSS file

// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

// const moroccoOverview = {
//   title: "Discover Morocco",
//   subtitle: "Land of Contrasts & Cultural Treasures",
//   video: '/videos/morocco-hero.mp4',
//   sections: [
//     {
//       title: "Geography",
//       image: "/images/image1.jpg",
//       text: `Morocco is located in North Africa, bordered by the Atlantic Ocean and Mediterranean Sea, with Algeria to the east and the Western Sahara to the south. The country's landscape is diverse, featuring coastal plains, the Atlas and Rif mountain ranges, and the Sahara Desert.`,
//     },
//     {
//       title: "Area and Climate",
//       image: "/images/image2.jpg",
//       text: `Morocco covers approximately 710,850 square kilometers. The climate varies from Mediterranean in the north to arid in the southeast. Coastal regions are mild, while the interior can experience extreme temperatures.`,
//     },
//     {
//       title: "History and Economy",
//       image: "/images/image3.jpg",
//       text: `Morocco has a rich history influenced by Berber, Arab, and European cultures. It gained independence from France and Spain in 1956. Today, Morocco has a diverse economy based on agriculture, mining, manufacturing, tourism, and services.`,
//     },
//     {
//       title: "People and Culture",
//       image: "/images/image5.jpg",
//       text: `The Moroccan population is primarily Arab-Berber, with strong family values and hospitality. Cultural expressions include traditional music, festivals, cuisine, and artisanal crafts. Cities like Fez and Marrakech are cultural hubs.`,
//     },
//     {
//       title: "Official Religion",
//       image: "/images/image4.jpg",
//       text: `Islam is the official religion of Morocco. The majority of Moroccans are Sunni Muslims. Religious practices and traditions shape daily life, and Islamic architecture is visible throughout the country.`,
//     },
//     {
//       title: "National Language",
//       image: "/images/image6.jpg",
//       text: `Morocco has two official languages: Arabic and Amazigh (Berber). French is widely used in business, education, and government, while English and Spanish are also understood in some regions.`,
//     },
//   ],
// };

// export default function AboutPage() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   return (
//     <div className="about-container" ref={containerRef}>
//       {/* Video Hero Section */}
//       <motion.div 
//         className="hero-video-container"
//         style={{ y: y1 }}
//       >
//         <video 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//           className="hero-video"
//         >
//           <source src={moroccoOverview.video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="hero-overlay">
//           <motion.div 
//             className="hero-text"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className={`${playfair.className} hero-title`}>{moroccoOverview.title}</h1>
//             <motion.p 
//               className="hero-subtitle"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 1 }}
//             >
//               {moroccoOverview.subtitle}
//             </motion.p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Content Sections */}
//       <div className="content-sections">
//         {moroccoOverview.sections.map((section, index) => (
//           <motion.section
//             key={section.title}
//             className={`feature-section ${index % 2 !== 0 ? "reverse" : ""}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.1 }}
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             <motion.div 
//               className="text-content"
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             >
//               <div className="section-header">
//                 <motion.span 
//                   className="section-number"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ delay: index * 0.1 + 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   0{index + 1}
//                 </motion.span>
//                 <h2 className={`${playfair.className} section-title`}>{section.title}</h2>
//               </div>
//               <motion.p 
//                 className="section-text"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: index * 0.1 + 0.5 }}
//                 viewport={{ once: true }}
//               >
//                 {section.text}
//               </motion.p>
//             </motion.div>

//             <motion.div 
//               className="image-wrapper"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Image
//                 src={section.image}
//                 alt={section.title}
//                 fill
//                 className="section-image"
//               />
//             </motion.div>
//           </motion.section>
//         ))}
//       </div>
//     </div>
//   );
// }



'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const AboutMorocco = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Toggle background music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Set up audio context on component mount
  useEffect(() => {
    // Video will autoplay but must be muted in most browsers
    if (videoRef.current) {
      videoRef.current.muted = true;
    }

    // This helps with audio autoplay restrictions
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // Set lower volume for background music
      }
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="text-gray-800">
      <Head>
        <title>Discover Morocco - Land of Diversity</title>
        <meta name="description" content="Explore the rich culture, history and geography of Morocco" />
      </Head>

      {/* Background Audio Element */}
      <audio 
        ref={audioRef} 
        loop
        src="/audio/moroccan-music.wav" 
        className="hidden"
      />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted // Always muted to satisfy autoplay policies
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/morocco-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Discover Morocco
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in delay-100">
              Where ancient traditions meet modern vitality
            </p>
            <button 
              onClick={toggleMusic}
              className={`${isMusicPlaying ? 'bg-amber-500/90 hover:bg-amber-500' : 'bg-white/20 hover:bg-white/30'} backdrop-blur-sm text-white px-8 py-4 rounded-full transition-all flex items-center mx-auto animate-fade-in delay-200 text-lg`}
            >
              {isMusicPlaying ? (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2zm12-3c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2zM9 10l12-3" />
                  </svg>
                  Pause Background Music
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2zm12-3c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2z" />
                  </svg>
                  Play Background Music
                </>
              )}
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <svg className="animate-bounce w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-amber-600">Geography & Area</h2>
            <div className="space-y-4 text-lg">
              <p>
                Morocco occupies a strategic location at the northwest corner of Africa, bordered by the Atlantic Ocean and Mediterranean Sea.
              </p>
              <p>
                <span className="font-semibold">Total Area:</span> 446,550 km² (172,410 sq mi) including Western Sahara
              </p>
              <p>
                <span className="font-semibold">Landscapes:</span> From the rugged Atlas Mountains to the vast Sahara Desert and fertile coastal plains
              </p>
              <p>
                <span className="font-semibold">Highest Point:</span> Mount Toubkal (4,165 m) in the High Atlas range
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/morocco-geography.jpg" 
              alt="Moroccan landscape with mountains"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-600">Climate</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mediterranean",
                description: "Mild, wet winters and hot, dry summers along the coast",
                icon: "🌊"
              },
              {
                title: "Mountain",
                description: "Cool summers and very cold winters with snow in the Atlas Mountains",
                icon: "⛰️"
              },
              {
                title: "Desert",
                description: "Extreme temperature variations between day and night in the Sahara",
                icon: "🏜️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-amber-600">Rich History</h2>
        
        <div className="relative">
          {/* Timeline */}
          <div className="border-l-4 border-amber-400 absolute left-1/2 h-full -translate-x-1/2 hidden md:block"></div>
          
          {[
            {
              year: "7000 BCE",
              title: "Early Berber Settlements",
              description: "Indigenous Berber tribes establish early communities"
            },
            {
              year: "8th Century",
              title: "Islamic Influence",
              description: "Arab conquest introduces Islam and Arabic culture"
            },
            {
              year: "1062",
              title: "Marrakech Founded",
              description: "Almoravid dynasty establishes the imperial city"
            },
            {
              year: "1956",
              title: "Independence",
              description: "Morocco gains independence from France and Spain"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-20 md:pl-0 text-left' : 'md:pl-20 md:pr-0 text-right'}`}
            >
              <div className={`bg-white p-6 rounded-lg shadow-lg relative z-10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="absolute -top-4 -left-4 bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {item.year}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* People & Culture Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6 text-amber-400">People & Culture</h2>
              <div className="space-y-6">
                <p className="text-lg">
                  Morocco is a melting pot of Arab, Berber, African, and European influences creating a vibrant cultural tapestry.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-400 mb-2">Population</h4>
                    <p>~37 million</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-400 mb-2">Ethnic Groups</h4>
                    <p>Arab-Berber 99%, Other 1%</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-400 mb-2">Official Religion</h4>
                    <p>Islam (99% Sunni Muslim)</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-400 mb-2">National Language</h4>
                    <p>Arabic (Darija), Tamazight</p>
                  </div>
                </div>
                
                <p>
                  Moroccan culture is renowned for its hospitality, colorful festivals, intricate handicrafts, and UNESCO-recognized traditions.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="/images/morocco-culture-1.jpg" 
                    alt="Moroccan market"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden mt-8">
                  <Image 
                    src="/images/morocco-culture-2.jpg" 
                    alt="Traditional Moroccan clothing"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="/images/morocco-culture-3.jpg" 
                    alt="Moroccan tea ceremony"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden mt-8">
                  <Image 
                    src="/images/morocco-culture-4.jpg" 
                    alt="Festival in Morocco"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economy Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-amber-600">Economy</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Agriculture",
              percentage: "15% of GDP",
              description: "Major producer of citrus, vegetables, olives and wine"
            },
            {
              title: "Industry",
              percentage: "30% of GDP",
              description: "Phosphates mining, textiles, automotive and aerospace"
            },
            {
              title: "Tourism",
              percentage: "7% of GDP",
              description: "Over 12 million visitors annually pre-pandemic"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-400">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-amber-600 font-bold mb-3">{item.percentage}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Morocco?</h2>
          <p className="text-xl mb-8">
            Discover the magic of Morocco with our expert guides and curated experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Book Your Trip
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMorocco;