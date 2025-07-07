"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaStar,
  FaMapMarkerAlt,
  FaLanguage,
  FaBook,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCertificate,
  FaComments,
  FaChartLine,
} from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Add useRouter import

const guides = [
  {
    id: 1,
    name: "Ahmed El Fassi",
    title: "Certified Moroccan cultural expert",
    image: "/images/guide1.jpg",
    coverImage: "/images/marrakech-cover.jpg",
    bio: "Certified Moroccan cultural expert with 10+ years experience",
    rating: 4.9,
    reviews: 128,
    location: "Marrakech",
    languages: ["Arabic", "French", "English", "Spanish"],
    price: "$50/hour",
    availability: "Weekdays 9AM-5PM",
    specialties: ["Historical Tours", "Atlas Treks", "Cultural Immersion"],
    certifications: ["National Tourism Certification", "Wilderness First Aid"],
    experience: [
      {
        title: "Senior Guide",
        company: "Morocco Cultural Tours",
        duration: "2015-Present",
      },
      {
        title: "Tour Coordinator",
        company: "Atlas Mountain Expeditions",
        duration: "2010-2015",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-15",
        title: "Marrakech Medina Walk",
        available: true,
      },
      {
        date: "2023-11-20",
        title: "Atlas Mountains Day Trip",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Sophie M.",
        rating: 5,
        comment:
          "Ahmed's knowledge of Moroccan history brought our tour to life!",
        date: "2023-10-15",
      },
      {
        author: "James L.",
        rating: 4,
        comment: "Great guide, very knowledgeable about local culture.",
        date: "2023-09-28",
      },
    ],
    stats: {
      toursCompleted: 423,
      repeatClients: 68,
      responseRate: "98%",
    },
    contact: {
      phone: "+212 600 123 456",
      email: "ahmed@moroccotours.com",
      website: "www.moroccotours.com/ahmed",
    },
    gallery: [
      "/images/gallery/guide1-1.jpg",
      "/images/gallery/guide1-1.jpg",
      "/images/gallery/guide1-1.jpg",
      "/images/gallery/guide1-1.jpg",
    ],
    // gallery: [
    //   "/images/gallery/guide1-1.jpg",
    //   "/images/gallery/guide1-2.jpg",
    //   "/images/gallery/guide1-3.jpg",
    //   "/images/gallery/guide1-4.jpg"
    // ]
  },
  {
    id: 2,
    name: "Youssef Benair",
    title: "Desert Expedition Specialist",
    image: "/images/guide2.jpg",
    coverImage: "/images/merzouga-cover.jpg",
    bio: "Specializes in desert adventures with 200+ Sahara expeditions led",
    rating: 4.8,
    reviews: 95,
    location: "Merzouga, Morocco",
    languages: ["Arabic", "French", "English"],
    price: "$65/hour",
    availability: "Flexible schedule",
    specialties: ["Desert Trekking", "Adventure Tours", "Camel Expeditions"],
    certifications: ["Desert Survival Certification", "First Responder"],
    experience: [
      {
        title: "Lead Desert Guide",
        company: "Sahara Adventures",
        duration: "2018-Present",
      },
      {
        title: "Expedition Leader",
        company: "Nomadic Journeys",
        duration: "2014-2018",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-18",
        title: "Erg Chebbi Dunes Expedition",
        available: true,
      },
      {
        date: "2023-11-22",
        title: "Overnight Desert Camp",
        available: false,
      },
    ],
    reviewsList: [
      {
        author: "Thomas R.",
        rating: 5,
        comment: "Youssef made our desert experience unforgettable!",
        date: "2023-10-10",
      },
      {
        author: "Emma S.",
        rating: 4,
        comment: "Incredible knowledge of desert ecosystems.",
        date: "2023-09-15",
      },
    ],
    stats: {
      toursCompleted: 287,
      repeatClients: 42,
      responseRate: "95%",
    },
    contact: {
      phone: "+212 600 234 567",
      email: "youssef@desertadventures.ma",
      website: "www.desertadventures.ma/youssef",
    },
    gallery: [
      "/images/gallery/guide2-1.jpg",
      "/images/gallery/guide2-2.jpg",
      "/images/gallery/guide2-3.jpg",
    ],
  },
  {
    id: 3,
    name: "Amina Zahir",
    title: "Culinary Tourism Expert",
    image: "/images/guide3.jpg",
    coverImage: "/images/fes-cover.jpg",
    bio: "Culinary expert showcasing hidden gems of Moroccan cuisine",
    rating: 4.7,
    reviews: 112,
    location: "Fes, Morocco",
    languages: ["Arabic", "French", "English", "Spanish"],
    price: "$45/hour",
    availability: "Weekends 10AM-6PM",
    specialties: ["Food Tours", "Cooking Classes", "Market Visits"],
    certifications: ["Culinary Arts Degree", "Food Safety Certification"],
    experience: [
      {
        title: "Head Food Guide",
        company: "Taste of Morocco",
        duration: "2019-Present",
      },
      {
        title: "Sous Chef",
        company: "Riad Fes Restaurant",
        duration: "2015-2019",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-16",
        title: "Fes Medina Food Crawl",
        available: true,
      },
      {
        date: "2023-11-25",
        title: "Traditional Tagine Workshop",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Olivia P.",
        rating: 5,
        comment: "Amina introduced us to flavors we'd never find on our own!",
        date: "2023-10-05",
      },
      {
        author: "David K.",
        rating: 5,
        comment: "Best food tour we've ever taken anywhere in the world.",
        date: "2023-09-20",
      },
    ],
    stats: {
      toursCompleted: 356,
      repeatClients: 89,
      responseRate: "99%",
    },
    contact: {
      phone: "+212 600 345 678",
      email: "amina@moroccanfoodtours.com",
      website: "www.moroccanfoodtours.com/amina",
    },
    gallery: [
      "/images/gallery/guide3-1.jpg",
      "/images/gallery/guide3-2.jpg",
      "/images/gallery/guide3-3.jpg",
      "/images/gallery/guide3-4.jpg",
    ],
  },
  {
    id: 5,
    name: "Karim El Fassi",
    title: "Atlas Mountain Trekking Guide",
    image: "/images/guide5.jpg",
    coverImage: "/images/atlas-cover.jpg",
    bio: "Expert in mountain trekking and Berber culture with extensive knowledge of the Atlas Mountains",
    rating: 4.8,
    reviews: 76,
    location: "Imlil, Morocco",
    languages: ["Arabic", "French", "English", "Berber"],
    price: "$60/hour",
    availability: "Daily 7AM-7PM",
    specialties: ["Mountain Trekking", "Berber Villages", "Nature Walks"],
    certifications: [
      "Mountain Guide Certification",
      "Wilderness First Responder",
    ],
    experience: [
      {
        title: "Lead Mountain Guide",
        company: "Atlas Treks",
        duration: "2017-Present",
      },
      {
        title: "Trekking Assistant",
        company: "High Atlas Adventures",
        duration: "2013-2017",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-17",
        title: "Mount Toubkal Summit",
        available: true,
      },
      {
        date: "2023-11-24",
        title: "Berber Village Experience",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Michael B.",
        rating: 5,
        comment: "Karim's knowledge of the mountains is unparalleled!",
        date: "2023-10-12",
      },
      {
        author: "Sarah J.",
        rating: 4,
        comment: "Challenging but incredibly rewarding experience.",
        date: "2023-09-05",
      },
    ],
    stats: {
      toursCompleted: 198,
      repeatClients: 34,
      responseRate: "97%",
    },
    contact: {
      phone: "+212 600 456 789",
      email: "karim@atlastreks.ma",
      website: "www.atlastreks.ma/karim",
    },
    gallery: [
      "/images/gallery/guide5-1.jpg",
      "/images/gallery/guide5-2.jpg",
      "/images/gallery/guide5-3.jpg",
    ],
  },
  {
    id: 6,
    name: "Leila Boutaleb",
    title: "Women's Cultural Guide",
    image: "/images/guide6.jpg",
    coverImage: "/images/essaouira-cover.jpg",
    bio: "Specializes in women-only tours and cultural experiences tailored for female travelers",
    rating: 4.9,
    reviews: 143,
    location: "Essaouira, Morocco",
    languages: ["Arabic", "French", "English"],
    price: "$55/hour",
    availability: "Weekdays 8AM-4PM",
    specialties: ["Women's Tours", "Cultural Experiences", "Textile Workshops"],
    certifications: [
      "Cultural Sensitivity Training",
      "Textile Arts Certification",
    ],
    experience: [
      {
        title: "Founder & Guide",
        company: "Sisterhood Morocco Tours",
        duration: "2016-Present",
      },
      {
        title: "Cultural Coordinator",
        company: "Essaouira Women's Collective",
        duration: "2012-2016",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-19",
        title: "Women's Artisan Tour",
        available: true,
      },
      {
        date: "2023-11-26",
        title: "Henna & Tea Ceremony",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Jessica T.",
        rating: 5,
        comment: "Leila created a safe, welcoming space for our group.",
        date: "2023-10-18",
      },
      {
        author: "Rachel M.",
        rating: 5,
        comment:
          "Unique perspective on Moroccan culture we wouldn't have gotten otherwise.",
        date: "2023-09-30",
      },
    ],
    stats: {
      toursCompleted: 312,
      repeatClients: 107,
      responseRate: "100%",
    },
    contact: {
      phone: "+212 600 567 890",
      email: "leila@womentours.ma",
      website: "www.womentours.ma",
    },
    gallery: [
      "/images/gallery/guide6-1.jpg",
      "/images/gallery/guide6-2.jpg",
      "/images/gallery/guide6-3.jpg",
      "/images/gallery/guide6-4.jpg",
    ],
  },
  {
    id: 7,
    name: "Hassan Chraibi",
    title: "Photography Tour Specialist",
    image: "/images/guide7.jpg",
    coverImage: "/images/chefchaouen-cover.jpg",
    bio: "Photography guide helping visitors capture perfect shots of Morocco's landscapes",
    rating: 4.7,
    reviews: 88,
    location: "Chefchaouen, Morocco",
    languages: ["Arabic", "English", "Spanish"],
    price: "$70/hour",
    availability: "Sunrise & Sunset Tours",
    specialties: ["Photography Tours", "Sunset Spots", "Composition Tips"],
    certifications: [
      "Professional Photography Degree",
      "Drone Operation License",
    ],
    experience: [
      {
        title: "Photography Guide",
        company: "Morocco Through the Lens",
        duration: "2018-Present",
      },
      {
        title: "Freelance Photographer",
        company: "Self-Employed",
        duration: "2013-2018",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-21",
        title: "Blue City Golden Hour",
        available: true,
      },
      {
        date: "2023-11-28",
        title: "Landscape Photography Workshop",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Daniel P.",
        rating: 5,
        comment: "Hassan knows every perfect angle in Chefchaouen!",
        date: "2023-10-20",
      },
      {
        author: "Lisa W.",
        rating: 4,
        comment: "Great tips for amateur photographers.",
        date: "2023-09-12",
      },
    ],
    stats: {
      toursCompleted: 231,
      repeatClients: 56,
      responseRate: "96%",
    },
    contact: {
      phone: "+212 600 678 901",
      email: "hassan@moroccophoto.com",
      website: "www.moroccophoto.com/hassan",
    },
    gallery: [
      "/images/gallery/guide7-1.jpg",
      "/images/gallery/guide7-2.jpg",
      "/images/gallery/guide7-3.jpg",
    ],
  },
  {
    id: 8,
    name: "Fatima El Mansouri",
    title: "Historian & Architecture Expert",
    image: "/images/guide8.jpg",
    coverImage: "/images/rabat-cover.jpg",
    bio: "Historian specializing in Islamic architecture and royal palaces",
    rating: 4.6,
    reviews: 67,
    location: "Rabat, Morocco",
    languages: ["Arabic", "French", "English"],
    price: "$50/hour",
    availability: "Weekdays 10AM-3PM",
    specialties: ["Architecture Tours", "Palace Visits", "History Walks"],
    certifications: ["Art History Degree", "Official Tour Guide License"],
    experience: [
      {
        title: "Cultural Heritage Guide",
        company: "Rabat Historical Society",
        duration: "2019-Present",
      },
      {
        title: "Museum Educator",
        company: "Morocco National Museum",
        duration: "2015-2019",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-23",
        title: "Royal Palace District Walk",
        available: true,
      },
      {
        date: "2023-11-30",
        title: "Islamic Architecture Seminar",
        available: false,
      },
    ],
    reviewsList: [
      {
        author: "Robert H.",
        rating: 5,
        comment: "Fatima's depth of knowledge is astonishing!",
        date: "2023-10-08",
      },
      {
        author: "Sophia L.",
        rating: 4,
        comment: "Fascinating insights into Moroccan history.",
        date: "2023-09-22",
      },
    ],
    stats: {
      toursCompleted: 178,
      repeatClients: 29,
      responseRate: "94%",
    },
    contact: {
      phone: "+212 600 789 012",
      email: "fatima@historytours.ma",
      website: "www.historytours.ma/fatima",
    },
    gallery: ["/images/gallery/guide8-1.jpg", "/images/gallery/guide8-2.jpg"],
  },
  {
    id: 9,
    name: "Mehdi Zouhair",
    title: "Adventure Sports Guide",
    image: "/images/guide9.jpg",
    coverImage: "/images/agadir-cover.jpg",
    bio: "Adventure guide offering extreme sports and outdoor activities",
    rating: 4.9,
    reviews: 134,
    location: "Agadir, Morocco",
    languages: ["Arabic", "French", "English", "German"],
    price: "$75/hour",
    availability: "Daily 6AM-8PM",
    specialties: ["Rock Climbing", "Surfing", "Quad Biking"],
    certifications: ["Outdoor Leadership Certification", "Lifeguard Certified"],
    experience: [
      {
        title: "Head Adventure Guide",
        company: "Morocco Extreme",
        duration: "2020-Present",
      },
      {
        title: "Surf Instructor",
        company: "Atlantic Surf School",
        duration: "2016-2020",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-27",
        title: "Taghazout Surf Safari",
        available: true,
      },
      {
        date: "2023-12-02",
        title: "Paradise Valley Canyoning",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Mark T.",
        rating: 5,
        comment: "Mehdi is the most energetic guide I've ever met!",
        date: "2023-10-25",
      },
      {
        author: "Anna K.",
        rating: 5,
        comment:
          "Perfect for adrenaline junkies - felt completely safe the whole time.",
        date: "2023-09-18",
      },
    ],
    stats: {
      toursCompleted: 387,
      repeatClients: 112,
      responseRate: "99%",
    },
    contact: {
      phone: "+212 600 890 123",
      email: "mehdi@adventuremorocco.com",
      website: "www.adventuremorocco.com/mehdi",
    },
    gallery: [
      "/images/gallery/guide9-1.jpg",
      "/images/gallery/guide9-2.jpg",
      "/images/gallery/guide9-3.jpg",
      "/images/gallery/guide9-4.jpg",
    ],
  },
  {
    id: 10,
    name: "Nadia Belkhayat",
    title: "Wellness Retreat Leader",
    image: "/images/guide10.jpg",
    coverImage: "/images/oualidia-cover.jpg",
    bio: "Wellness guide offering yoga retreats and spa experiences",
    rating: 4.8,
    reviews: 102,
    location: "Oualidia, Morocco",
    languages: ["Arabic", "French", "English"],
    price: "$65/hour",
    availability: "By appointment",
    specialties: ["Yoga Retreats", "Hammam Tours", "Meditation Sessions"],
    certifications: ["Yoga Instructor 500hr", "Ayurveda Practitioner"],
    experience: [
      {
        title: "Wellness Director",
        company: "Oualidia Spa Retreat",
        duration: "2018-Present",
      },
      {
        title: "Yoga Teacher",
        company: "Marrakech Yoga Studio",
        duration: "2014-2018",
      },
    ],
    upcomingTours: [
      {
        date: "2023-11-29",
        title: "Sunrise Beach Yoga",
        available: true,
      },
      {
        date: "2023-12-05",
        title: "Full Moon Meditation",
        available: true,
      },
    ],
    reviewsList: [
      {
        author: "Elena S.",
        rating: 5,
        comment: "Nadia has a magical, calming presence.",
        date: "2023-10-30",
      },
      {
        author: "Paul M.",
        rating: 4,
        comment: "Perfect way to unwind after traveling.",
        date: "2023-09-25",
      },
    ],
    stats: {
      toursCompleted: 245,
      repeatClients: 78,
      responseRate: "98%",
    },
    contact: {
      phone: "+212 600 901 234",
      email: "nadia@wellnessmorocco.ma",
      website: "www.wellnessmorocco.ma/nadia",
    },
    gallery: [
      "/images/gallery/guide10-1.jpg",
      "/images/gallery/guide10-2.jpg",
      "/images/gallery/guide10-3.jpg",
    ],
  },
];

const GuideProfile = () => {
  const params = useParams();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const router = useRouter();

  // Booking modal state
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    tour: "",
    participants: 1,
    specialRequests: "",
  });
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // 3D tilt effect
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const rect = element.getBoundingClientRect();
      const middleX = rect.left + rect.width / 2;
      const middleY = rect.top + rect.height / 2;
      const offsetX = (x - middleX) / 20;
      const offsetY = (y - middleY) / 20;
      element.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    };

    const handleLeave = () => {
      element.style.transform = "rotateY(0) rotateX(0)";
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const rect = element.getBoundingClientRect();
      const middleX = rect.left + rect.width / 2;
      const middleY = rect.top + rect.height / 2;
      const offsetX = (x - middleX) / 20;
      const offsetY = (y - middleY) / 20;

      element.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    };

    const handleLeave = () => {
      element.style.transform = "rotateY(0) rotateX(0)";
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Find the guide based on the ID from URL params
  const guide = guides.find((g) => g.id === Number(params?.id));

  if (!guide) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Guide not found</h1>
          <p className="mt-2">The guide you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    router.back();
  };

  // Booking form handlers
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", bookingData);
    alert("Booking request sent successfully!");
    setShowBookingForm(false);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Cover Image with Parallax Effect */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${guide.coverImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold">{guide.name}</h1>
            <p className="text-xl md:text-2xl mt-2">{guide.title}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 -mt-16 md:-mt-24 relative z-10">
        <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <motion.div
              ref={tiltRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-out will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  className="object-cover"
                  style={{ transform: "translateZ(30px)" }}
                />
                <RiVerifiedBadgeFill className="absolute bottom-4 right-4 text-blue-500 text-3xl" />
              </div>
              <div className="p-6" style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    <FaStar className="mr-1" />
                    <span className="font-bold">{guide.rating}</span>
                    <span className="ml-1">({guide.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <span>{guide.location}</span>
                  </div>

                  <div className="flex items-start">
                    <FaLanguage className="text-gray-500 mr-2 mt-1" />
                    <div>
                      <h3 className="font-semibold">Languages:</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {guide.languages.map((lang) => (
                          <span
                            key={lang}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaMoneyBillWave className="text-gray-500 mr-2" />
                    <span>Rate: {guide.price}</span>
                  </div>

                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <span>Availability: {guide.availability}</span>
                  </div>
                </div>

                {/* Book This Guide button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowBookingForm(true)}
                  className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <FaBook /> Book This Guide
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden p-6"
            >
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaPhone className="text-gray-500 mr-3" />
                  <a
                    href={`tel:${guide.contact.phone}`}
                    className="hover:text-blue-600 transition"
                  >
                    {guide.contact.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-500 mr-3" />
                  <a
                    href={`mailto:${guide.contact.email}`}
                    className="hover:text-blue-600 transition"
                  >
                    {guide.contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="text-gray-500 mr-3" />
                  <a
                    href={`https://${guide.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    {guide.contact.website}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            {/* Bio Section */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{guide.bio}</p>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">My Specialties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.specialties.map((specialty, index) => (
                  <motion.div
                    key={specialty}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-medium">{specialty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience & Certifications */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                Experience & Certifications
              </h2>

              <div className="experience-timeline mt-6">
                {guide.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="timeline-item relative pl-8 pb-6 border-l-2 border-blue-200"
                  >
                    <div className="timeline-dot absolute w-4 h-4 rounded-full bg-blue-500 -left-2 top-0"></div>
                    <div className="timeline-content">
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <span className="text-sm text-gray-500">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="certifications mt-6">
                <h3 className="font-bold text-lg mb-4">Certifications</h3>
                <div className="space-y-3">
                  {guide.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <FaCertificate className="text-blue-500 mr-3" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Upcoming Tours */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">Upcoming Tours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guide.upcomingTours.map((tour, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="border rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center text-gray-600 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <span>{tour.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3">{tour.title}</h3>
                    <button
                      className={`w-full py-2 px-4 rounded-md font-medium ${
                        tour.available
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      {tour.available ? "Book Now" : "Sold Out"}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">Client Reviews</h2>
              <div className="space-y-4">
                {guide.reviewsList.map((review, i) => (
                  <div
                    key={i}
                    className="border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{review.author}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, starIdx) => (
                          <FaStar
                            key={starIdx}
                            className={`${
                              starIdx < review.rating
                                ? "text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">"{review.comment}"</p>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                Performance Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="stat-card bg-blue-50 p-6 rounded-lg text-center">
                  <FaChartLine className="text-blue-500 text-3xl mx-auto mb-3" />
                  <h3 className="font-bold text-2xl">
                    {guide.stats.toursCompleted}
                  </h3>
                  <p className="text-gray-600">Tours Completed</p>
                </div>
                <div className="stat-card bg-green-50 p-6 rounded-lg text-center">
                  <FaComments className="text-green-500 text-3xl mx-auto mb-3" />
                  <h3 className="font-bold text-2xl">
                    {guide.stats.repeatClients}%
                  </h3>
                  <p className="text-gray-600">Repeat Clients</p>
                </div>
                <div className="stat-card bg-amber-50 p-6 rounded-lg text-center">
                  <FaStar className="text-amber-500 text-3xl mx-auto mb-3" />
                  <h3 className="font-bold text-2xl">
                    {guide.stats.responseRate}
                  </h3>
                  <p className="text-gray-600">Response Rate</p>
                </div>
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.6 },
                },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {guide.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-32 rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Add the Back Button at the top */}
          <div className="container mx-auto px-4 pt-6">
            <motion.button
              onClick={handleBackClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-amber-500 hover:text-amber-800 transition-colors mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Guides
            </motion.button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <motion.div
          className="fixed inset-0 mt-20 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-md w-full max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
          >
            {/* Fixed Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
                Book {guide.name}
              </h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="overflow-y-auto p-6 flex-1">
              <form
                id="guide-booking-form"
                onSubmit={handleSubmitBooking}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="+212 600 123 456"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tour"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tour Selection *
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    value={bookingData.tour}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  >
                    <option value="">Select a tour</option>
                    {guide.upcomingTours
                      .filter((t) => t.available)
                      .map((tour, i) => (
                        <option key={i} value={tour.title}>
                          {tour.title} - {tour.date}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="participants"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Participants *
                  </label>
                  <select
                    id="participants"
                    name="participants"
                    value={bookingData.participants}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "person" : "people"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="specialRequests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    rows={3}
                    placeholder="Any special requirements or requests..."
                  />
                </div>
              </form>
            </div>

            {/* Fixed Footer with Submit Button */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <button
                type="submit"
                form="guide-booking-form"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                Confirm Booking Request
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GuideProfile;
