// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import { highlights } from '../../data/highlights';
// import '../../styles/HighlightDetail.css'; // Assuming you have a CSS file for styles

// export default function HighlightDetail({ params }: { params: { id: string } }) {
//   const highlight = highlights.find(h => h.id.toString() === params.id);
  
//   if (!highlight) {
//     notFound();
//   }

//   return (
//     <div className="highlight-detail">
//       {/* Hero Section with Parallax Effect */}
//       <div className="hero-section">
//         <div className="hero-image-container">
//           <Image
//             src={highlight.image}
//             alt={highlight.title}
//             fill
//             className="hero-image"
//             priority
//           />
//           <div className="hero-overlay"></div>
//         </div>
//         <div className="hero-content">
//           <h1 className="hero-title animate-fadeIn">{highlight.title}</h1>
//           <p className="hero-description animate-fadeIn animate-delay-200">
//             {highlight.description}
//           </p>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="content-container">
//         <div className="intro-section animate-fadeInUp">
//           <p>{highlight.content.intro}</p>
//         </div>

//         {highlight.content.sections.map((section, index) => (
//           <section 
//             key={index} 
//             className={`section-block ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
//           >
//             <div className="section-content animate-fadeInUp">
//               <h2 className="section-title">{section.title}</h2>
//               <p className="section-text">{section.text}</p>
//               {section.image && (
//                 <div className="section-image-container">
//                   <Image
//                     src={section.image}
//                     alt={section.title}
//                     width={800}
//                     height={450}
//                     className="section-image"
//                   />
//                 </div>
//               )}
//             </div>
//           </section>
//         ))}

//         <div className="conclusion-section animate-fadeInUp">
//           <p>{highlight.content.conclusion}</p>
//         </div>

//         {/* Tags */}
//         <div className="tags-container">
//           {highlight.tags.map((tag, index) => (
//             <span key={index} className="tag">{tag}</span>
//           ))}
//         </div>

//         {/* Back Button */}
//         <div className="back-button-container">
//           <a href="/" className="back-button">
//             ← Back to Highlights
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
// HighlightDetail.tsx
import { use } from "react";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { highlights } from '../../data/highlights';
import { motion } from 'framer-motion';

export default function HighlightDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const highlight = highlights.find(h => h.id.toString() === id);
  
  if (!highlight) {
    notFound();
  }

  return (
    <div className="min-h-screen  bg-gradient-to-b from-blue-50 to-amber-50">
      {/* Modern Hero Section with Parallax Effect */}
      <div className="relative h-[80vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={highlight.image}
            alt={highlight.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        
        {/* Back Button (fixed to work with navbar) */}
        <div className="fixed top-20 left-4 z-30">
          <Link 
            href="/#highlights" 
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">All Highlights</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6 text-center sm:p-8 md:p-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {highlight.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl text-amber-200 md:text-2xl"
          >
            {highlight.description}
          </motion.p>
          
          {/* Booking Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="#booking"
              className="inline-flex items-center rounded-full bg-amber-600 px-8 py-3 text-lg font-bold text-white shadow-lg hover:bg-amber-700 transition-all hover:shadow-xl"
            >
              Book Now
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            {highlight.content.intro}
          </p>
        </motion.section>

        {/* Content Sections */}
        {highlight.content.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`mb-16 overflow-hidden rounded-2xl shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="flex flex-col md:flex-row">
              {section.image && (
                <div className="md:w-1/2">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className={`p-8 ${section.image ? 'md:w-1/2' : 'w-full'}`}>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  {section.title}
                </h2>
                <p className="text-gray-700">{section.text}</p>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-wrap justify-center gap-2"
        >
          {highlight.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Booking Section */}
        <motion.section
          id="booking"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center shadow-xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Experience {highlight.title}?</h2>
          <p className="mb-6 text-xl text-amber-100">
            Book your adventure today and create unforgettable memories
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-lg font-bold text-amber-600 shadow-lg hover:bg-gray-100 transition-all"
          >
            Book Now
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}