"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

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
  const [isAnimating, setIsAnimating] = useState(false);

  // For background parallax effect
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const backgroundX = useTransform(x, xInput, [30, 0, -30]);
  const textX = useTransform(x, xInput, [50, 0, -50]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered && !isAnimating) {
      interval = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered, isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    })
  };

  // Background animation variants
  const bgVariants = {
    enter: { opacity: 0 },
    center: { opacity: 0.3 },
    exit: { opacity: 0 }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background layer */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={`bg-${index}`}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{ x: backgroundX }}
        >
          <Image
            src={images[index].src}
            alt={images[index].text}
            fill
            className="object-cover scale-110"
            priority
            quality={50}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Main image */}
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
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            filter: { duration: 0.5 }
          }}
          className="absolute w-full h-full z-10"
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
              className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ x: textX }}
            >
              {images[index].text}
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-lg md:text-2xl text-amber-300 font-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ x: textX }}
            >
              {images[index].location}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Navigation Buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
        <motion.button
          className="relative p-4 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-amber-500/90 transition-all group"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FaArrowLeft size={28} className="group-hover:text-white" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Previous
          </span>
        </motion.button>
        
        <motion.button
          className="relative p-4 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-amber-500/90 transition-all group"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FaArrowRight size={28} className="group-hover:text-white" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-black/80 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Next
          </span>
        </motion.button>
      </div>

      {/* Modern Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <motion.button
            key={i}
            className={`relative rounded-full transition-all ${i === index ? 'bg-amber-500' : 'bg-white/50 hover:bg-white/80'}`}
            onClick={() => {
              if (!isAnimating) {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
            whileHover={{ scale: 1.2 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i }}
          >
            <span className="block w-2 h-2 sm:w-3 sm:h-3 rounded-full" />
            {i === index && (
              <motion.span 
                className="absolute inset-0 border-2 border-amber-500 rounded-full"
                layoutId="indicator"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1.8, opacity: 0.5 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

