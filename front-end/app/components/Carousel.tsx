// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "../styles/Carousel.css";

// const images = [
//   { src: "/images/image1.jpg", text: "City Tetouan" },
//   { src: "/images/image2.jpg", text: "City Rabat" },
//   { src: "/images/image3.jpg", text: "City Casablanca" },
//   { src: "/images/image4.jpg", text: "City Marrakech" },
//   { src: "/images/image5.jpg", text: "City Fes" },
//   { src: "/images/image6.jpg", text: "City Tangier" },
//   { src: "/images/image7.jpg", text: "City Chefchaouen" },
//   { src: "/images/image8.jpg", text: "City Agadir" },
//   { src: "/images/image9.jpg", text: "City Meknes" },
//   { src: "/images/image10.jpg", text: "City Ouarzazate" },
// ];

// export default function Carousel() {
//   const [index, setIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     let interval: string | number | NodeJS.Timeout | undefined;
//     if (!isHovered) {
//       interval = setInterval(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 3000); // Change image every 3 seconds
//     }
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   useEffect(() => {
//     const handleKeyDown = (event: { key: string; }) => {
//       if (event.key === "ArrowLeft") {
//         setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//       } else if (event.key === "ArrowRight") {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <div
//       className="carousel"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="image-container">
//         <Image
//           src={images[index].src}
//           alt="Morocco"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//       </div>

//       <div className="text-overlay">
//         <h2>{images[index].text}</h2>
//       </div>

//       {/* Navigation Buttons with Icons */}
//       <button
//         className="nav-button prev"
//         onClick={() =>
//           setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
//         }
//         aria-label="Previous Image"
//       >
//         <FaArrowLeft />
//       </button>
//       <button
//         className="nav-button next"
//         onClick={() => setIndex((prevIndex) => (prevIndex + 1) % images.length)}
//         aria-label="Next Image"
//       >
//         <FaArrowRight />
//       </button>

//       {/* Indicators */}
//       <div className="indicators">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             className={`indicator ${i === index ? "active" : ""}`}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to image ${i + 1}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/image1.jpg", text: "Tetouan - The White Dove", location: "Northern Morocco" },
  { src: "/images/image2.jpg", text: "Rabat - The Capital", location: "Atlantic Coast" },
  { src: "/images/image3.jpg", text: "Casablanca - Economic Hub", location: "Central Morocco" },
  { src: "/images/image4.jpg", text: "Marrakech - The Red City", location: "Southwest Morocco" },
  { src: "/images/image5.jpg", text: "Fes - Cultural Heart", location: "Northern Morocco" },
  { src: "/images/image6.jpg", text: "Tangier - Gateway to Europe", location: "Strait of Gibraltar" },
  { src: "/images/image7.jpg", text: "Chefchaouen - The Blue Pearl", location: "Rif Mountains" },
  { src: "/images/image8.jpg", text: "Agadir - Beach Paradise", location: "Southern Coast" },
  { src: "/images/image9.jpg", text: "Meknes - Imperial City", location: "North Central Morocco" },
  { src: "/images/image10.jpg", text: "Ouarzazate - Desert Gateway", location: "Sahara Desert" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.3 }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[index].src}
            alt={images[index].text}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <motion.h3 
              className="text-3xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {images[index].text}
            </motion.h3>
            <motion.p 
              className="text-xl text-amber-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {images[index].location}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-all"
        onClick={handlePrev}
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20 hover:bg-black/70 transition-all"
        onClick={handleNext}
      >
        <FaArrowRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-amber-500 w-6' : 'bg-white/50'}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}