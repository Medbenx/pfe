import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "./Carousel";
import SearchForm from "./searchForm";
import { Playfair_Display } from "next/font/google";
import "../styles/HeroSection.css"; // Ensure you have the necessary styles

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      className="Hero relative w-full h-screen overflow-hidden"
      style={{ y }}
    >
      {/* 3D Parallax Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10"></div>
        <Carousel />
      </div>

      {/* Morocco Text with 3D Effect */}
      <motion.div
        className={`${playfair.className} morocco absolute top-[30px] left-20 text-right z-10`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mt-14 mb-2"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Morocco
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl text-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Gateway to Africa
        </motion.h2>
      </motion.div>

      {/* Overlay with Search Bar */}
      <motion.div
      //here you can see icon working just remove top-1/2
        className="overlay  absolute top-1/2 sm:px-8 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4 mt-[-90px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.h1
          className={`${playfair.className} text-3xl md:text-5xl font-bold text-white mb-4`}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          Discover Your Perfect Moroccan Escape
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8 max-w-2xl mx-auto"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the vibrant culture, stunning landscapes, and rich history of
          Morocco
        </motion.p>

        <SearchForm />
      </motion.div>

      {/* Floating Elements for 3D Effect */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-amber-400/20 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-400/20 blur-xl"
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
}