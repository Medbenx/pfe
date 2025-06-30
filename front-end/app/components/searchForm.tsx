// ModernSearchBar.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaHotel,
  FaUtensils,
  FaCalendarAlt,
  FaUserFriends,
  FaStar,
  FaDollarSign,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ModernSearchBar() {
  const router = useRouter();
  const [searchType, setSearchType] = useState<"hotels" | "restaurants">(
    "hotels"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [rating, setRating] = useState("");
  const [people, setPeople] = useState("");
  const [price, setPrice] = useState("");

  const cities = ["Marrakech", "Casablanca", "Fes", "Agadir", "Tangier"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("q", searchQuery);
    params.set("type", searchType);

    if (city) params.set("city", city);
    if (searchType === "hotels") {
      if (checkIn) params.set("checkIn", checkIn);
      if (checkOut) params.set("checkOut", checkOut);
      if (guests) params.set("guests", guests);
    } else {
      if (rating) params.set("rating", rating);
      if (people) params.set("people", people);
      if (price) params.set("price", price);
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md text-black rounded-2xl shadow-xl p-2 w-full max-w-[720px] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Toggle Tabs */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-4 border border-gray-300 rounded-full p-1 bg-white">
          <button
            type="button"
            onClick={() => setSearchType("hotels")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
              searchType === "hotels"
                ? "bg-amber-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FaHotel /> <span>Hotels</span>
          </button>
          <button
            type="button"
            onClick={() => setSearchType("restaurants")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
              searchType === "restaurants"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FaUtensils /> <span>Restaurants</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${searchType}...`}
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Search Fields */}
      {/* <div className="flex items-center space-x-4 flex-wrap"> */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        <div className="relative w-full sm:w-[180px]">
          <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
          <select
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <AnimatePresence mode="wait">
          {searchType === "hotels" ? (
            <>
              <motion.div
                className="relative w-full sm:w-[140px]"
                key="date-range"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  className="pl-10 pr-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="Check-in"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </motion.div>

              <motion.div
                className="relative w-full sm:w-[140px]"
                key="check-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  className="pl-10 pr-4 py-2 w-full text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500"
                  placeholder="Check-out"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </motion.div>

              <motion.div
                key="guests"
                className="relative w-[140px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaUserFriends className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="">Guests</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                  <option value="6+">6+</option>
                </select>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                key="rating"
                className="relative w-[150px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaStar className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Rating</option>
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r}★ & up
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                key="people"
                className="relative w-[130px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaUserFriends className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                >
                  <option value="">People</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                  <option value="6+">6+</option>
                </select>
              </motion.div>

              <motion.div
                key="price"
                className="relative w-[140px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Price</option>
                  <option value="$">$ Budget</option>
                  <option value="$$">$$ Mid</option>
                  <option value="$$$">$$$ High</option>
                </select>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Search Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-md w-full sm:w-auto"
        >
          <FaSearch />
        </motion.button>
      </div>
    </motion.form>
  );
}
