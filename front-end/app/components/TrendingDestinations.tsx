// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { trendingItems } from "../data/destination"; // Adjust the import path as needed

// const TrendingDestinations = () => {
//   // const trendingItems = [
//   //   {
//   //     title: 'Marrakech',
//   //     tours: '50+ Experiences',
//   //     image: '/images/destination/marrakech.jpg',
//   //     description: 'The Red City with vibrant souks'
//   //   },
//   //   {
//   //     title: 'Chefchaouen',
//   //     tours: '30+ Tours',
//   //     image: '/images/destination/chefchaouen.jpg',
//   //     description: 'The Blue Pearl of Morocco'
//   //   },
//   //   {
//   //     title: 'Fes',
//   //     tours: '45+ Cultural Tours',
//   //     image: '/images/destination/fes.jpg',
//   //     description: 'Ancient medina & spiritual heart'
//   //   },
//   //   {
//   //     title: 'Sahara Desert',
//   //     tours: '25+ Adventures',
//   //     image: '/images/destination/sahara.jpg',
//   //     description: 'Golden dunes & camel treks'
//   //   },
//   //   {
//   //     title: 'Essaouira',
//   //     tours: '35+ Coastal Tours',
//   //     image: '/images/destination/essaouira.jpg',
//   //     description: 'Windswept beaches & fresh seafood'
//   //   },
//   //   {
//   //     title: 'Atlas Mountains',
//   //     tours: '40+ Hiking Tours',
//   //     image: '/images/destination/atlas.jpg',
//   //     description: 'Berber villages & scenic trails'
//   //   },
//   // ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       id="trending-destinations"
//       className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 w-full"
//     >
//       <div className="container ">
//         {/* Added w-[95%] here */}
//         <div className="flex flex-col lg:flex-row items-start gap-12 w-[100%]">
//           {/* Left-aligned heading */}
//           <div className="lg:w-1/4">
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="text-4xl font-bold text-gray-900 mb-4"
//             >
//               Trending Moroccan Destinations
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-lg text-gray-600 mb-6"
//             >
//               Discover the most popular destinations in Morocco with our curated
//               experiences
//             </motion.p>
//             <Link href="/destinations" passHref>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
//               >
//                 See All Destinations
//               </motion.button>
//             </Link>
//           </div>

//           {/* Slider */}
//           <div className="lg:w-3/4 w-full">
//             <Slider {...settings} className="trending-slider">
//               {trendingItems.map((item, index) => (
//                 <div key={index} className="px-2">
//                   <motion.div
//                     whileHover={{ y: -10 }}
//                     transition={{ duration: 0.3 }}
//                     className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
//                     style={{ width: "300px", height: "350px" }}
//                   >
//                     <div className="relative h-48 overflow-hidden">
//                       <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.5 }}
//                         className="w-full h-full"
//                       >
//                         <Image
//                           src={item.image}
//                           alt={item.title}
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         />
//                       </motion.div>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-gray-900 mb-1">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-2">
//                         {item.description}
//                       </p>
//                       <div className="flex justify-between items-center mt-4">
//                         <span className="text-amber-600 font-medium">
//                           {item.tours}
//                         </span>
//                         <Link
//                           href={`/destinations/${item.id}`}
//                           key={item.id}
//                           passHref
//                         >
//                           <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors duration-200 hover:underline">
//                             Explore →
//                           </button>
//                         </Link>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingDestinations;



"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { trendingItems } from "../data/destination";

const TrendingDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,               // Enable auto-scrolling
    autoplaySpeed: 3000,          // 3 seconds between slides
    pauseOnHover: true,           // Pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true          // Keep autoplay on tablet
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplay: true          // Keep autoplay on mobile
        },
      },
    ],
  };

  return (
    <section id="trending-destinations" className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 w-full">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-12 w-[100%]">
          {/* Left-aligned heading */}
          <div className="lg:w-1/4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Trending Moroccan Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6"
            >
              Discover the most popular destinations in Morocco with our curated
              experiences
            </motion.p>
            <Link href="/destinations" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                See All Destinations
              </motion.button>
            </Link>
          </div>

          {/* Slider with auto-scroll and hover pause */}
          <div className="lg:w-3/4 w-full">
            <Slider {...settings} className="trending-slider">
              {trendingItems.map((item, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
                    style={{ width: "300px", height: "350px" }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-amber-600 font-medium">
                          {item.tours}
                        </span>
                        <Link
                          href={`/destinations/${item.id}`}
                          key={item.id}
                          passHref
                        >
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors duration-200 hover:underline">
                            Explore →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;