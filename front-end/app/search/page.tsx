"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaStar, FaMapMarkerAlt, FaHotel, FaUtensils, FaFilter, FaArrowUp, FaBook, FaHome } from "react-icons/fa";
import Image from "next/image";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


// Sample data structure
const hotels = [
  {
    id: 1,
    name: "Belfast",
    stars: 4,
    type: "Hôtel",
    location: {
      city: "Casablanca",
      distance: "3.3 km",
      from: "Hôtel Saint-Marc",
      coordinates: [33.5731, -7.5898], // Casablanca coordinates
    },
    image: "/images/belfast.jpg",
    description: "Charmant style parisien, Vue sur l'Arc de Triomphe",
    rating: 7.9,
    ratingText: "Bien",
    reviews: 2119,
    priceMain: {
      site: "Site de l'hôtel",
      value: 240,
      total: 3362,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 217 },
      { source: "Booking.com", value: 265 },
    ],
    discount: {
      percent: 27,
      label: "Moins cher que d'habitude",
    },
  },
  {
    id: 2,
    name: "Casablanca Palace",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Casablanca",
      distance: "1.5 km",
      from: "Old Medina",
      coordinates: [33.5937, -7.6159],
    },
    image: "/images/casablanca-palace.jpg",
    description: "Luxury hotel with panoramic sea views and spa facilities",
    rating: 9.2,
    ratingText: "Excellent",
    reviews: 1543,
    priceMain: {
      site: "Site de l'hôtel",
      value: 350,
      total: 4900,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 320 },
      { source: "Agoda", value: 335 },
    ],
    discount: {
      percent: 15,
      label: "Early bird discount",
    },
  },
  {
    id: 3,
    name: "Atlas Medina",
    stars: 4,
    type: "Hôtel",
    location: {
      city: "Marrakech",
      distance: "2.1 km",
      from: "Jemaa el-Fnaa",
      coordinates: [31.6295, -7.9811],
    },
    image: "/images/atlas-medina.jpg",
    description: "Authentic Moroccan riad with traditional architecture",
    rating: 8.7,
    ratingText: "Excellent",
    reviews: 892,
    priceMain: {
      site: "Site de l'hôtel",
      value: 180,
      total: 2520,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Booking.com", value: 195 },
      { source: "Hotels.com", value: 175 },
    ],
  },
  {
    id: 4,
    name: "Sofitel Casablanca",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Casablanca",
      distance: "0.5 km",
      from: "Twin Center",
      coordinates: [33.5955, -7.6186],
    },
    image: "/images/sofitel-casablanca.jpg",
    description: "Luxury hotel with rooftop pool and panoramic city views",
    rating: 9.0,
    ratingText: "Excellent",
    reviews: 1872,
    priceMain: {
      site: "Site de l'hôtel",
      value: 420,
      total: 5880,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 395 },
      { source: "Booking.com", value: 410 },
    ],
    discount: {
      percent: 12,
      label: "Weekend special",
    },
  },
  {
    id: 5,
    name: "Riad Dar Anika",
    stars: 4,
    type: "Hôtel",
    location: {
      city: "Marrakech",
      distance: "0.2 km",
      from: "Jemaa el-Fnaa",
      coordinates: [31.6289, -7.9891],
    },
    image: "/images/riad-dar-anika.jpg",
    description:
      "Beautiful riad with traditional Moroccan decor and rooftop terrace",
    rating: 9.4,
    ratingText: "Exceptional",
    reviews: 1245,
    priceMain: {
      site: "Site de l'hôtel",
      value: 210,
      total: 2940,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 225 },
      { source: "Agoda", value: 205 },
    ],
  },
  {
    id: 6,
    name: "Hyatt Regency Taghazout",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Agadir",
      distance: "15 km",
      from: "Taghazout Bay",
      coordinates: [30.5536, -9.7108],
    },
    image: "/images/hyatt-taghazout.jpg",
    description: "Beachfront resort with spa and golf course",
    rating: 9.1,
    ratingText: "Excellent",
    reviews: 932,
    priceMain: {
      site: "Site de l'hôtel",
      value: 380,
      total: 5320,
      nights: 14,
      currency: "$",
    },
    priceOthers: [{ source: "Booking.com", value: 360 }],
    discount: {
      percent: 20,
      label: "Summer promotion",
    },
  },
  {
    id: 7,
    name: "Palais Faraj Suites & Spa",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Fes",
      distance: "1.8 km",
      from: "Fes el Bali",
      coordinates: [34.0629, -4.9829],
    },
    image: "/images/palais-faraj.jpg",
    description: "Luxurious suites in a restored palace with hammam",
    rating: 9.6,
    ratingText: "Exceptional",
    reviews: 876,
    priceMain: {
      site: "Site de l'hôtel",
      value: 450,
      total: 6300,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 430 },
      { source: "Luxury Escapes", value: 415 },
    ],
  },
  {
    id: 8,
    name: "Le Mirage Resort & Spa",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Tangier",
      distance: "12 km",
      from: "City Center",
      coordinates: [35.7634, -5.8358],
    },
    image: "/images/le-mirage.jpg",
    description: "Clifftop resort with stunning Mediterranean views",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 654,
    priceMain: {
      site: "Site de l'hôtel",
      value: 520,
      total: 7280,
      nights: 14,
      currency: "$",
    },
    priceOthers: [{ source: "Booking.com", value: 495 }],
  },
  {
    id: 9,
    name: "Kasbah Tamadot",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Marrakech",
      distance: "45 km",
      from: "Atlas Mountains",
      coordinates: [31.1989, -7.9325],
    },
    image: "/images/kasbah-tamadot.jpg",
    description: "Richard Branson's luxury retreat in the Atlas Mountains",
    rating: 9.8,
    ratingText: "Exceptional",
    reviews: 542,
    priceMain: {
      site: "Site de l'hôtel",
      value: 950,
      total: 13300,
      nights: 14,
      currency: "$",
    },
  },
  {
    id: 10,
    name: "Hotel & Spa Le Doge",
    stars: 4,
    type: "Hôtel",
    location: {
      city: "Casablanca",
      distance: "2.3 km",
      from: "Arab League Park",
      coordinates: [33.5962, -7.6324],
    },
    image: "/images/le-doge.jpg",
    description: "Art Deco boutique hotel with luxury spa",
    rating: 8.9,
    ratingText: "Excellent",
    reviews: 723,
    priceMain: {
      site: "Site de l'hôtel",
      value: 290,
      total: 4060,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 275 },
      { source: "Hotels.com", value: 285 },
    ],
  },
  {
    id: 11,
    name: "Riad Fès - Relais & Châteaux",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Fes",
      distance: "0.5 km",
      from: "Medina",
      coordinates: [34.0631, -4.9783],
    },
    image: "/images/riad-fes.jpg",
    description: "Refined luxury in the heart of the medina",
    rating: 9.5,
    ratingText: "Exceptional",
    reviews: 689,
    priceMain: {
      site: "Site de l'hôtel",
      value: 480,
      total: 6720,
      nights: 14,
      currency: "$",
    },
  },
  {
    id: 12,
    name: "Mazagan Beach Resort",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "El Jadida",
      distance: "0.1 km",
      from: "Beach",
      coordinates: [33.2564, -8.5079],
    },
    image: "/images/mazagan.jpg",
    description: "Massive beachfront resort with golf course and casino",
    rating: 8.7,
    ratingText: "Excellent",
    reviews: 2154,
    priceMain: {
      site: "Site de l'hôtel",
      value: 320,
      total: 4480,
      nights: 14,
      currency: "$",
    },
    priceOthers: [
      { source: "Expedia", value: 305 },
      { source: "Booking.com", value: 315 },
    ],
    discount: {
      percent: 18,
      label: "Family package",
    },
  },
  {
    id: 13,
    name: "La Sultana Marrakech",
    stars: 5,
    type: "Hôtel",
    location: {
      city: "Marrakech",
      distance: "1.2 km",
      from: "Royal Palace",
      coordinates: [31.6213, -7.9836],
    },
    image: "/images/la-sultana.jpg",
    description: "Luxurious palace hotel with rooftop pool",
    rating: 9.7,
    ratingText: "Exceptional",
    reviews: 832,
    priceMain: {
      site: "Site de l'hôtel",
      value: 680,
      total: 9520,
      nights: 14,
      currency: "$",
    },
  },
];

const restaurants = [
  {
    id: 101,
    name: "Casablanca Restaurant",
    type: "Restaurant",
    location: {
      city: "Casablanca",
      distance: "1.2 km",
      from: "City Center",
      coordinates: [33.5926, -7.6159],
    },
    image: "/images/casablanca-restaurant.jpg",
    description: "Authentic Moroccan cuisine with sea view",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 845,
    cuisine: "Moroccan",
    priceRange: "$$",
    openingHours: "11:00 AM - 11:00 PM",
  },
  {
    id: 102,
    name: "La Sqala",
    type: "Restaurant",
    location: {
      city: "Casablanca",
      distance: "0.8 km",
      from: "Old Port",
      coordinates: [33.6049, -7.6222],
    },
    image: "/images/la-sqala.jpg",
    description:
      "Historic restaurant serving traditional Moroccan dishes in a beautiful garden setting",
    rating: 4.7,
    ratingText: "Excellent",
    reviews: 1203,
    cuisine: "Moroccan",
    priceRange: "$$$",
    openingHours: "10:00 AM - 11:30 PM",
  },
  {
    id: 103,
    name: "Le Cabestan",
    type: "Restaurant",
    location: {
      city: "Casablanca",
      distance: "3.5 km",
      from: "Corniche",
      coordinates: [33.5716, -7.6872],
    },
    image: "/images/le-cabestan.jpg",
    description: "Upscale Mediterranean seafood restaurant with ocean views",
    rating: 4.6,
    ratingText: "Excellent",
    reviews: 976,
    cuisine: "Mediterranean",
    priceRange: "$$$",
    openingHours: "12:00 PM - 12:00 AM",
  },
  {
    id: 104,
    name: "Al Fassia",
    type: "Restaurant",
    location: {
      city: "Marrakech",
      distance: "1.8 km",
      from: "Gueliz",
      coordinates: [31.634, -8.0089],
    },
    image: "/images/al-fassia.jpg",
    description:
      "Renowned for its authentic Moroccan cuisine served by an all-female staff",
    rating: 4.8,
    ratingText: "Excellent",
    reviews: 1562,
    cuisine: "Moroccan",
    priceRange: "$$",
    openingHours: "12:00 PM - 10:30 PM",
  },
  {
    id: 105,
    name: "Rick's Café",
    type: "Restaurant",
    location: {
      city: "Casablanca",
      distance: "2.0 km",
      from: "Old Medina",
      coordinates: [33.6042, -7.6187],
    },
    image: "/images/ricks-cafe.jpg",
    description:
      "Recreation of the famous café from the movie with live piano music",
    rating: 4.6,
    ratingText: "Excellent",
    reviews: 1568,
    cuisine: "International",
    priceRange: "$$$",
    openingHours: "12:00 PM - 1:00 AM",
  },
  {
    id: 106,
    name: "Le Petit Rocher",
    type: "Restaurant",
    location: {
      city: "Casablanca",
      distance: "4.2 km",
      from: "Corniche",
      coordinates: [33.5748, -7.6843],
    },
    image: "/images/le-petit-rocher.jpg",
    description: "Seaside restaurant specializing in fresh seafood",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 987,
    cuisine: "Seafood",
    priceRange: "$$$",
    openingHours: "11:30 AM - 11:00 PM",
  },
  {
    id: 107,
    name: "Al Mounia",
    type: "Restaurant",
    location: {
      city: "Casablanca",
      distance: "1.5 km",
      from: "United Nations Square",
      coordinates: [33.5973, -7.6228],
    },
    image: "/images/al-mounia.jpg",
    description: "Historic restaurant serving refined Moroccan cuisine",
    rating: 4.7,
    ratingText: "Excellent",
    reviews: 1243,
    cuisine: "Moroccan",
    priceRange: "$$$",
    openingHours: "12:00 PM - 11:00 PM",
  },
  {
    id: 108,
    name: "Nomad",
    type: "Restaurant",
    location: {
      city: "Marrakech",
      distance: "0.3 km",
      from: "Jemaa el-Fnaa",
      coordinates: [31.6265, -7.9893],
    },
    image: "/images/nomad.jpg",
    description: "Modern Moroccan cuisine with rooftop terrace views",
    rating: 4.8,
    ratingText: "Excellent",
    reviews: 1876,
    cuisine: "Moroccan Fusion",
    priceRange: "$$",
    openingHours: "10:00 AM - 11:30 PM",
  },
  {
    id: 109,
    name: "Le Jardin",
    type: "Restaurant",
    location: {
      city: "Marrakech",
      distance: "0.4 km",
      from: "Médina",
      coordinates: [31.6298, -7.9867],
    },
    image: "/images/le-jardin.jpg",
    description:
      "Peaceful garden setting with international and Moroccan dishes",
    rating: 4.4,
    ratingText: "Very Good",
    reviews: 1324,
    cuisine: "International",
    priceRange: "$$",
    openingHours: "9:00 AM - 11:00 PM",
  },
  {
    id: 110,
    name: "Dar Moha",
    type: "Restaurant",
    location: {
      city: "Marrakech",
      distance: "1.5 km",
      from: "Hivernage",
      coordinates: [31.6246, -7.9928],
    },
    image: "/images/dar-moha.jpg",
    description: "Fine dining in a beautiful riad setting",
    rating: 4.9,
    ratingText: "Exceptional",
    reviews: 876,
    cuisine: "Moroccan",
    priceRange: "$$$",
    openingHours: "7:00 PM - 11:30 PM",
  },
  {
    id: 111,
    name: "Le Tangerine",
    type: "Restaurant",
    location: {
      city: "Tangier",
      distance: "2.1 km",
      from: "Kasbah",
      coordinates: [35.7886, -5.8123],
    },
    image: "/images/le-tangerine.jpg",
    description: "French-Moroccan cuisine with stunning bay views",
    rating: 4.7,
    ratingText: "Excellent",
    reviews: 765,
    cuisine: "French-Moroccan",
    priceRange: "$$$",
    openingHours: "12:00 PM - 11:00 PM",
  },
  {
    id: 112,
    name: "El Morocco Club",
    type: "Restaurant",
    location: {
      city: "Tangier",
      distance: "1.8 km",
      from: "Medina",
      coordinates: [35.7862, -5.8087],
    },
    image: "/images/el-morocco-club.jpg",
    description: "Stylish venue with Mediterranean cuisine and live music",
    rating: 4.5,
    ratingText: "Excellent",
    reviews: 654,
    cuisine: "Mediterranean",
    priceRange: "$$$",
    openingHours: "6:00 PM - 1:00 AM",
  },
  {
    id: 113,
    name: "La Table du Marché",
    type: "Restaurant",
    location: {
      city: "Agadir",
      distance: "0.5 km",
      from: "Marina",
      coordinates: [30.4215, -9.5987],
    },
    image: "/images/la-table-du-marche.jpg",
    description: "Fresh market cuisine with ocean views",
    rating: 4.6,
    ratingText: "Excellent",
    reviews: 543,
    cuisine: "French",
    priceRange: "$$$",
    openingHours: "12:00 PM - 11:00 PM",
  },
  {
    id: 114,
    name: "Pure Passion",
    type: "Restaurant",
    location: {
      city: "Agadir",
      distance: "1.2 km",
      from: "Beach",
      coordinates: [30.4189, -9.6042],
    },
    image: "/images/pure-passion.jpg",
    description: "Creative fusion cuisine with Moroccan influences",
    rating: 4.8,
    ratingText: "Excellent",
    reviews: 432,
    cuisine: "Fusion",
    priceRange: "$$$",
    openingHours: "7:00 PM - 11:30 PM",
  },
];

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


const SearchPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const type = searchParams.get("type") || "hotels";
  const city = searchParams.get("city") || "";

  const [activeId, setActiveId] = useState<number | null>(null);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([33.5731, -7.5898]); // Default to Casablanca
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minRating: 0,
    maxPrice: 1000,
    hasDiscount: false,
  });

  const mapRef = useRef(null);

  // Filter results based on search params and filters
  useEffect(() => {
    const data = type === "hotels" ? hotels : restaurants;

    const results = data.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());

      const matchesCity =
        !city || item.location.city.toLowerCase() === city.toLowerCase();

      // Additional filters
      let matchesFilters = true;
      if (type === "hotels") {
        matchesFilters = item.stars >= filters.minRating && 
                        item.priceMain.value <= filters.maxPrice &&
                        (!filters.hasDiscount || item.discount);
      } else {
        matchesFilters = item.rating >= filters.minRating;
      }

      return matchesQuery && matchesCity && matchesFilters;
    });

    setFilteredResults(results);

    if (results.length > 0) {
      setMapCenter([
        results[0].location.coordinates[0],
        results[0].location.coordinates[1]
      ]);
    }
  }, [query, type, city, filters]);

  const handleCardHover = (id: number, coordinates: [number, number]) => {
    setActiveId(id);
    setMapCenter(coordinates);
  };

  const handleCardLeave = () => {
    setActiveId(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : parseInt(value)
    }));
  };

  const getCustomIcon = (isActive: boolean, isHotel: boolean) => {
    return L.divIcon({
      html: `
        <div class="relative">
          <div class="flex items-center justify-center w-8 h-8 rounded-full ${
            isActive ? (isHotel ? "bg-amber-500" : "bg-blue-500") : "bg-white"
          } text-white shadow-lg transform ${
            isActive ? "scale-125" : ""
          } transition-all">
            ${isHotel ? '<i class="fas fa-hotel"></i>' : '<i class="fas fa-utensils"></i>'}
          </div>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent ${
            isActive ? (isHotel ? "border-b-amber-500" : "border-b-blue-500") : "border-b-white"
          }"></div>
        </div>
      `,
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  };

  return (
    <div className="min-h-screen mt-32 py-16 bg-gradient-to-r from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <FaHome /> Back to Home
          </button>
          
          <h1 className="text-3xl font-bold text-center">
            {filteredResults.length} {type} found for "{query}"{" "}
            {city && `in ${city}`}
          </h1>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
          >
            <FaFilter /> Filters
          </button>
        </div>

        {showFilters && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8 backdrop-blur-sm bg-opacity-90">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Filter Options</h3>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Minimum Rating: <span className="font-bold">{filters.minRating}+</span>
                </label>
                <input
                  type="range"
                  name="minRating"
                  min="0"
                  max={type === "hotels" ? "5" : "5"}
                  value={filters.minRating}
                  onChange={handleFilterChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>5</span>
                </div>
              </div>
              
              {type === "hotels" && (
                <>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Max Price: <span className="font-bold">${filters.maxPrice}</span>
                    </label>
                    <input
                      type="range"
                      name="maxPrice"
                      min="50"
                      max="1000"
                      step="50"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$50</span>
                      <span>$1000</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="hasDiscount"
                        name="hasDiscount"
                        checked={filters.hasDiscount}
                        onChange={handleFilterChange}
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                    </div>
                    <label htmlFor="hasDiscount" className="block text-sm font-medium text-gray-700">
                      Special Offers Only
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {filteredResults.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              No results found
            </h2>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map Section */}
            <div className="w-full lg:w-1/2 h-96 lg:h-[calc(100vh-200px)] sticky top-4 rounded-xl overflow-hidden shadow-lg z-0">
              <MapContainer 
                center={mapCenter} 
                zoom={13} 
                style={{ height: "100%", width: "100%" }}
                ref={mapRef}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredResults.map((item) => (
                  <Marker
                    key={item.id}
                    position={[item.location.coordinates[0], item.location.coordinates[1]]}
                    icon={getCustomIcon(activeId === item.id, type === "hotels")}
                    eventHandlers={{
                      mouseover: () => handleCardHover(item.id, item.location.coordinates),
                      mouseout: handleCardLeave,
                    }}
                  >
                    <Popup>
                      <div className="max-w-xs">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <div className="mt-1">
                          {type === "hotels" ? (
                            <span className="text-amber-600 font-medium">
                              {item.priceMain.currency}
                              {item.priceMain.value}/night
                            </span>
                          ) : (
                            <span className="flex items-center text-blue-600">
                              <FaStar className="mr-1" /> {item.rating}
                            </span>
                          )}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Results List */}
            <div className="w-full lg:w-1/2 space-y-6">
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 ${
                    activeId === item.id
                      ? "ring-2 ring-amber-500"
                      : "hover:shadow-lg"
                  }`}
                  onMouseEnter={() =>
                    handleCardHover(item.id, item.location.coordinates)
                  }
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-1/3 h-48 bg-gray-200 overflow-hidden relative">
                      <Image
                        width={300}
                        height={200}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-2/3 p-4 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        {type === "hotels" && (
                          <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            <FaStar className="mr-1" />
                            {item.stars}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>
                          {item.location.distance} from {item.location.from}
                        </span>
                      </div>

                      <p className="text-gray-600 mt-2">{item.description}</p>

                      {type === "hotels" ? (
                        <div className="mt-4">
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-amber-600">
                              {item.priceMain.currency}
                              {item.priceMain.value}
                            </span>
                            <span className="text-gray-500 ml-1">/night</span>

                            {item.discount && (
                              <span className="ml-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                {item.discount.percent}% {item.discount.label}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center mt-2">
                            <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                              <span className="font-medium">{item.rating}</span>
                              <span className="mx-1">•</span>
                              <span>{item.ratingText}</span>
                              <span className="ml-2 text-gray-500">
                                ({item.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              <FaStar className="mr-1" />
                              <span>{item.rating}</span>
                              <span className="ml-2 text-gray-500">
                                ({item.reviews} reviews)
                              </span>
                            </div>

                            <div className="text-sm text-gray-700">
                              {item.cuisine} • {item.priceRange}
                            </div>
                          </div>

                          <div className="mt-2 text-sm text-gray-600">
                            Open: {item.openingHours}
                          </div>
                        </div>
                      )}

                      {/* Book Now Button */}
                      <div className="mt-auto pt-4">
                        <button 
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
                          onClick={() => {
                            // Here you would typically navigate to a booking page
                            alert(`Booking ${item.name}`);
                          }}
                        >
                          <FaBook /> Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default SearchPage;