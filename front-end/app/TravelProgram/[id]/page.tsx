"use client";
import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "@/app/data/travelProgram";
import "../../styles/TravelProgramDetails.css";

export default function TravelProgramDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return notFound();
  }

  return (
    <div className="travel-program-details">
      {/* Hero Section with 3D Parallax Effect */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-image-container">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1>{program.title}</h1>
              <div className="hero-meta">
                <span>{program.duration}</span>
                <span>{program.price}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Program Overview */}
        <motion.section
          className="program-overview mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2>About This Adventure</h2>
          <p>{program.description}</p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Itinerary Section */}
          <motion.section
            className="itinerary-section lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2>Detailed Itinerary</h2>
            <div className="timeline">
              {program.itinerary.map((day, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="timeline-day">DAY {day.day}</div>
                  <div className="timeline-content">
                    <h3>{day.title}</h3>
                    <p>{day.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Includes/Excludes */}
            <motion.div
              className="includes-excludes mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="includes">
                <h3>What's Included</h3>
                <ul>
                  {program.includes.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                    >
                      <span className="check-icon">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="excludes">
                <h3>Not Included</h3>
                <ul>
                  {program.excludes.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    >
                      <span className="cross-icon">✗</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="map-section mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>Tour Route Map</h3>
              <div className="map-image-container">
                <Image
                  src={program.mapImage}
                  alt="Tour route map"
                  fill
                  className="map-image"
                />
              </div>
            </motion.div>

            {/* Booking CTA */}
            <motion.div
              className="booking-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>Ready for Adventure?</h3>
              <button className="cta-button">Book This Program</button>
            </motion.div>
          </div>
        </div>

        {/* Gallery Section */}
        <motion.section
          className="gallery-section mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {program.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="gallery-image"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
