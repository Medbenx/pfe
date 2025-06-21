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


"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useRef } from "react";
import "../styles/about.css"; // Ensure you have the correct path to your CSS file

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

const moroccoOverview = {
  title: "Discover Morocco",
  subtitle: "Land of Contrasts & Cultural Treasures",
  video: '/videos/morocco-hero.mp4',
  sections: [
    {
      title: "Geography",
      image: "/images/image1.jpg",
      text: `Morocco is located in North Africa, bordered by the Atlantic Ocean and Mediterranean Sea, with Algeria to the east and the Western Sahara to the south. The country's landscape is diverse, featuring coastal plains, the Atlas and Rif mountain ranges, and the Sahara Desert.`,
    },
    {
      title: "Area and Climate",
      image: "/images/image2.jpg",
      text: `Morocco covers approximately 710,850 square kilometers. The climate varies from Mediterranean in the north to arid in the southeast. Coastal regions are mild, while the interior can experience extreme temperatures.`,
    },
    {
      title: "History and Economy",
      image: "/images/image3.jpg",
      text: `Morocco has a rich history influenced by Berber, Arab, and European cultures. It gained independence from France and Spain in 1956. Today, Morocco has a diverse economy based on agriculture, mining, manufacturing, tourism, and services.`,
    },
    {
      title: "People and Culture",
      image: "/images/image5.jpg",
      text: `The Moroccan population is primarily Arab-Berber, with strong family values and hospitality. Cultural expressions include traditional music, festivals, cuisine, and artisanal crafts. Cities like Fez and Marrakech are cultural hubs.`,
    },
    {
      title: "Official Religion",
      image: "/images/image4.jpg",
      text: `Islam is the official religion of Morocco. The majority of Moroccans are Sunni Muslims. Religious practices and traditions shape daily life, and Islamic architecture is visible throughout the country.`,
    },
    {
      title: "National Language",
      image: "/images/image6.jpg",
      text: `Morocco has two official languages: Arabic and Amazigh (Berber). French is widely used in business, education, and government, while English and Spanish are also understood in some regions.`,
    },
  ],
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="about-container" ref={containerRef}>
      {/* Video Hero Section */}
      <motion.div 
        className="hero-video-container"
        style={{ y: y1 }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video"
        >
          <source src={moroccoOverview.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={`${playfair.className} hero-title`}>{moroccoOverview.title}</h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {moroccoOverview.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="content-sections">
        {moroccoOverview.sections.map((section, index) => (
          <motion.section
            key={section.title}
            className={`feature-section ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="text-content"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="section-header">
                <motion.span 
                  className="section-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  0{index + 1}
                </motion.span>
                <h2 className={`${playfair.className} section-title`}>{section.title}</h2>
              </div>
              <motion.p 
                className="section-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {section.text}
              </motion.p>
            </motion.div>

            <motion.div 
              className="image-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="section-image"
              />
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}