"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../styles/events.css"; // Ensure you have the appropriate styles for this component
import Link from "next/link";

export default function EventsHappenings() {
  const [activeSeason, setActiveSeason] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCity, setActiveCity] = useState("All");

  // Event data
  const events = [
    {
      id: 1,
      title: "Gnaoua World Music Festival",
      city: "Essaouira",
      date: "June 27-29, 2024",
      type: "Music",
      season: "Summer",
      image: "/images/events/gnaoua-festival.jpg",
      description:
        "Experience the magical fusion of Gnaoua music with international jazz, blues, and pop artists.",
      price: "From 200 AED",
    },
    {
      id: 2,
      title: "Marrakech International Film Festival",
      city: "Marrakech",
      date: "November 29 - December 7, 2024",
      type: "Film",
      season: "Winter",
      image: "/images/events/film-festival.jpg",
      description:
        "Red carpet premieres and screenings with international film stars in historic Marrakech.",
      price: "From 350 AED",
    },
    {
      id: 3,
      title: "Tan-Tan Moussem",
      city: "Tan-Tan",
      date: "May 15-20, 2024",
      type: "Cultural",
      season: "Spring",
      image: "/images/events/tan-tan.jpg",
      description:
        "Celebration of Saharan nomadic culture with camel races, traditional music, and poetry.",
      price: "Free",
    },
    {
      id: 4,
      title: "Fes Festival of World Sacred Music",
      city: "Fes",
      date: "June 7-15, 2024",
      type: "Music",
      season: "Summer",
      image: "/images/events/fes-festival.jpg",
      description:
        "Spiritual music from around the world in the ancient medina of Fes.",
      price: "From 250 AED",
    },
    {
      id: 5,
      title: "Rose Festival",
      city: "Kelaat M'Gouna",
      date: "May 10-12, 2024",
      type: "Cultural",
      season: "Spring",
      image: "/images/events/rose-festival.jpg",
      description:
        "Celebration of the valley's rose harvest with parades, music, and local products.",
      price: "Free",
    },
    {
      id: 6,
      title: "Marathon des Sables",
      city: "Sahara Desert",
      date: "April 12-22, 2024",
      type: "Sports",
      season: "Spring",
      image: "/images/events/marathon.jpg",
      description:
        "The toughest footrace on Earth - 250km through the Sahara Desert.",
      price: "Registration required",
    },
    {
      id: 7, // Next available ID
      title: "FIFA World Cup 2026",
      city: "USA, Canada, Mexico", // Host countries
      date: "June 8 - July 3, 2026", // Tentative dates
      type: "Sports",
      season: "Summer",
      image: "/images/events/worldcup.jpg", // Add your image path
      description: "The biggest football tournament in the world, hosted across 3 North American countries.",
      price: "Varies by match", // Or "Ticket sales required"
      tags: ["important", "global"], // Optional tags
    },
  ];

  const seasons = ["All", "Spring", "Summer", "Fall", "Winter"];
  const categories = [
    "All",
    "Music",
    "Film",
    "Cultural",
    "Sports",
    "Religious",
  ];
  const cities = [
    "All",
    "Marrakech",
    "Fes",
    "Essaouira",
    "Tan-Tan",
    "Kelaat M'Gouna",
    "Sahara Desert",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSeason =
      activeSeason === "All" || event.season === activeSeason;
    const matchesCategory =
      activeCategory === "All" || event.type === activeCategory;
    const matchesCity = activeCity === "All" || event.city === activeCity;
    return matchesSeason && matchesCategory && matchesCity;
  });

  const clearFilters = () => {
    setActiveSeason("All");
    setActiveCategory("All");
    setActiveCity("All");
  };

  return (
    <div className="events-page">
      {/* Hero Section with NavBar spacing */}
      <section className="relative h-[90vh] min-h-[500px] w-full ">
        <Image
          src="/images/events/hero-events.jpg"
          alt="Moroccan festival"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="text-center px-4 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Enjoy Morocco is Most Vibrant Events
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Discover cultural festivals, music celebrations, and unique
              happenings across the kingdom
            </p>
            <motion.button
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Find Your Perfect Event
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Season Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Season
                </h3>
                <div className="flex flex-wrap gap-2">
                  {seasons.map((season) => (
                    <motion.button
                      key={season}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeSeason === season
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveSeason(season)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {season}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category
                          ? "bg-amber-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* City Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  City
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <motion.button
                      key={city}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCity === city
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCity(city)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {city}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(activeSeason !== "All" ||
              activeCategory !== "All" ||
              activeCity !== "All") && (
              <motion.div
                className="mt-6 pt-6 border-t border-gray-200 flex items-center flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="text-gray-600">Filters:</span>
                {activeSeason !== "All" && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                    {activeSeason}
                    <button
                      onClick={() => setActiveSeason("All")}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {activeCategory !== "All" && (
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm flex items-center">
                    {activeCategory}
                    <button
                      onClick={() => setActiveCategory("All")}
                      className="ml-2 text-amber-600 hover:text-amber-800"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {activeCity !== "All" && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                    {activeCity}
                    <button
                      onClick={() => setActiveCity("All")}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      ✕
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="ml-auto text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Upcoming Events
          </motion.h2>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="event-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <span className="text-white font-medium">
                          {event.city}
                        </span>
                        <span className="text-white block text-sm">
                          {event.date}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 text-amber-600 px-3 py-1 rounded-full text-xs font-bold">
                        {event.type}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-amber-600 font-bold">
                          {event.price}
                        </span>
                        <Link href={`/events-happenings/${event.id}`}>
                          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16 bg-gray-50 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No events match your filters
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria
              </p>
              <button
                onClick={clearFilters}
                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Event Locations
            </h2>
            <div className="relative h-96 rounded-xl overflow-hidden border-2 border-amber-500">
              {/* This would be replaced with an actual interactive map component */}
              <Image
                src="/images/events/morocco-map.jpg"
                alt="Morocco event map"
                fill
                className="object-cover"
              />
              {/* Map pins would be added here dynamically */}
              {events.map((event) => (
                <div
                  key={`map-${event.id}`}
                  className="absolute map-pin"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
                  <div className="map-tooltip">
                    {event.title} - {event.city}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video/Gallery Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Experience Our Events
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/events-highlight.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="bg-white/90 text-amber-600 rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-44 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={`/images/events/gallery-${i}.jpg`}
                    alt={`Event gallery ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Visitor Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                photo: "/images/testimonials/sarah.jpg",
                comment:
                  "The Gnaoua Festival was life-changing! The music, the energy, the people - unforgettable.",
                rating: 5,
                event: "Gnaoua World Music Festival",
              },
              {
                name: "Mohammed L.",
                photo: "/images/testimonials/mohammed.jpg",
                comment:
                  "Attending the Marrakech Film Festival gave me access to incredible films and celebrities.",
                rating: 4,
                event: "Marrakech International Film Festival",
              },
              {
                name: "Amina S.",
                photo: "/images/testimonials/amina.jpg",
                comment:
                  "The Rose Festival was more beautiful than I imagined. The scent of roses everywhere!",
                rating: 5,
                event: "Rose Festival",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < testimonial.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 italic">
                  "{testimonial.comment}"
                </p>
                <p className="text-sm text-gray-500">— {testimonial.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-amber-600 p-8 rounded-2xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              Stay Updated
            </h2>
            <p className="text-center mb-8 text-blue-100 max-w-2xl mx-auto">
              Sign up to receive notifications about upcoming events and
              exclusive offers
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block mb-2">Interested In</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white">
                  <option value="">All Events</option>
                  {categories
                    .filter((c) => c !== "All")
                    .map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-white text-amber-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
