"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import "../../styles/ExperienceDetails.css";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaChevronRight,
} from "react-icons/fa";
import { useState, use } from "react";
import BookingForm from "../../components/BookingForm";

// Detailed data for each Moroccan experience
const experiences = {
  1: {
    city: "Marrakech",
    title: "Discovering Marrakech Through Its Rich Heritage & Local Markets",
    duration: "3 DAYS 2 NIGHTS",
    topic: "Culture & Heritage",
    description:
      "Immerse yourself in the vibrant colors and bustling souks of Marrakech, the Red City of Morocco. This 3-day adventure takes you through historic palaces, lively markets, and hidden gems.",
    highlights: [
      "Explore the iconic Jemaa el-Fnaa square",
      "Visit the stunning Bahia Palace",
      "Discover the secret Majorelle Garden",
      "Experience traditional Moroccan cuisine",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Arrival & hotel check-in",
          "Guided tour of Koutoubia Mosque",
          "Evening in Jemaa el-Fnaa",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Bahia Palace visit",
          "Majorelle Garden exploration",
          "Souk shopping experience",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Atlas Mountains day trip",
          "Traditional lunch in a Berber village",
          "Departure",
        ],
      },
    ],
    image: "/marrakech.jpg",
    gallery: ["/marrakech-1.jpg", "/marrakech-2.jpg", "/marrakech-3.jpg"],
    price: "$899",
    rating: 4.8,
    reviews: 124,
  },
  2: {
    city: "Chefchaouen",
    title: "The Blue Pearl: A 3D2N Exploration of Chefchaouen",
    duration: "3 DAYS 2 NIGHTS",
    topic: "Nature & Adventure",
    description:
      "Discover the magical blue-washed streets of Chefchaouen nestled in the Rif Mountains. This tranquil getaway offers stunning views, local crafts, and peaceful walks through picturesque alleys.",
    highlights: [
      "Wander through the famous blue streets",
      "Hike to the Spanish Mosque for sunset views",
      "Visit local artisan workshops",
      "Experience authentic Moroccan hospitality",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Arrival & orientation walk",
          "Explore the Medina",
          "Dinner with local family",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Full day exploring the blue city",
          "Visit Ras El Maa waterfall",
          "Shopping for local crafts",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Sunrise hike",
          "Breakfast with mountain views",
          "Departure",
        ],
      },
    ],
    image: "/chefchaouen.jpg",
    gallery: ["/chefchaouen-1.jpg", "/chefchaouen-2.jpg", "/chefchaouen-3.jpg"],
    price: "$749",
    rating: 4.9,
    reviews: 98,
  },
  3: {
    city: "Sahara Desert",
    title: "Magical Sahara: 4-Day Desert Adventure with Luxury Camp Stay",
    duration: "4 DAYS 3 NIGHTS",
    topic: "Adventure & Luxury",
    description:
      "Embark on an unforgettable journey through the golden dunes of the Sahara. Experience camel treks at sunset, spend nights under the stars in luxury desert camps, and immerse yourself in Berber culture.",
    highlights: [
      "Sunset camel trek in Erg Chebbi dunes",
      "Luxury desert camp with private tents",
      "Traditional Berber music around campfire",
      "Quad biking adventure on the dunes",
      "Visit to historic Ait Ben Haddou",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Depart from Marrakech",
          "Cross High Atlas Mountains",
          "Arrive in Ouarzazate",
          "Visit Atlas Film Studios",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Travel to Merzouga",
          "Camel trek to desert camp",
          "Sunset over dunes",
          "Night in luxury camp",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Sunrise over dunes",
          "Quad biking adventure",
          "Visit nomadic families",
          "Return to Merzouga",
        ],
      },
      {
        day: "Day 4",
        activities: [
          "Return journey",
          "Stop at Ait Ben Haddou",
          "Arrival in Marrakech",
        ],
      },
    ],
    image: "/sahara.jpg",
    gallery: [
      "/sahara-1.jpg",
      "/sahara-2.jpg",
      "/sahara-3.jpg",
      "/sahara-4.jpg",
    ],
    price: "$1299",
    rating: 4.9,
    reviews: 156,
  },
  4: {
    city: "Fes",
    title: "Imperial Fes: 3-Day Cultural Immersion in Morocco's Ancient City",
    duration: "3 DAYS 2 NIGHTS",
    topic: "History & Culture",
    description:
      "Step back in time as you explore Fes, Morocco's spiritual and cultural heart. Wander through the world's largest medina, visit ancient madrasas, and witness traditional craftsmanship.",
    highlights: [
      "Guided tour of Fes el-Bali medina",
      "Visit to Al Quaraouiyine University",
      "Explore Chouara Tanneries",
      "Traditional Moroccan cooking class",
      "Evening at a Sufi music performance",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Arrival in Fes",
          "Orientation walk",
          "Visit Royal Palace gates",
          "Evening at traditional riad",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Full-day medina tour",
          "Lunch at local family home",
          "Visit artisan workshops",
          "Sunset at Merenid Tombs",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Cooking class",
          "Visit to pottery cooperative",
          "Departure",
        ],
      },
    ],
    image: "/fes.jpg",
    gallery: ["/fes-1.jpg", "/fes-2.jpg", "/fes-3.jpg"],
    price: "$849",
    rating: 4.7,
    reviews: 112,
  },
  5: {
    city: "Essaouira",
    title: "Coastal Escape: 3-Day Relaxation in Charming Essaouira",
    duration: "3 DAYS 2 NIGHTS",
    topic: "Beach & Relaxation",
    description:
      "Discover the laid-back charm of Essaouira, where Portuguese fortifications meet Atlantic breezes. Enjoy fresh seafood, stroll along sandy beaches, and explore the artistic soul of this coastal gem.",
    highlights: [
      "Walk along the historic ramparts",
      "Fresh seafood lunch at port",
      "Argan oil cooperative visit",
      "Horseback riding on the beach",
      "Sunset at Cap Sim",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Arrival in Essaouira",
          "Medina walking tour",
          "Visit to fishing port",
          "Dinner with ocean view",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Beach relaxation",
          "Argan oil workshop",
          "Horseback riding",
          "Sunset drinks",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Morning at leisure",
          "Visit to women's cooperative",
          "Departure",
        ],
      },
    ],
    image: "/essaouira.jpg",
    gallery: ["/essaouira-1.jpg", "/essaouira-2.jpg", "/essaouira-3.jpg"],
    price: "$699",
    rating: 4.6,
    reviews: 87,
  },
  6: {
    city: "Atlas Mountains",
    title: "Berber Villages Trek: 4-Day Hiking Adventure in High Atlas",
    duration: "4 DAYS 3 NIGHTS",
    topic: "Trekking & Nature",
    description:
      "Challenge yourself with breathtaking hikes through the Atlas Mountains while experiencing authentic Berber hospitality. Stay in mountain villages, enjoy home-cooked meals, and take in spectacular views.",
    highlights: [
      "Trek through picturesque valleys",
      "Homestay in Berber villages",
      "Summit Mount Toubkal (optional)",
      "Visit to traditional markets",
      "Swim in mountain waterfalls",
    ],
    itinerary: [
      {
        day: "Day 1",
        activities: [
          "Transfer to Imlil",
          "Trek to Tacheddirt village",
          "Dinner with local family",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Hike to Tizi n'Tacheddirt pass",
          "Descend to Timichi village",
          "Traditional hammam experience",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Trek through Azzaden Valley",
          "Lunch by waterfall",
          "Arrival in Aremd village",
        ],
      },
      {
        day: "Day 4",
        activities: [
          "Optional Toubkal summit",
          "Return to Imlil",
          "Transfer to Marrakech",
        ],
      },
    ],
    image: "/atlas.jpg",
    gallery: ["/atlas-1.jpg", "/atlas-2.jpg", "/atlas-3.jpg", "/atlas-4.jpg"],
    price: "$999",
    rating: 4.8,
    reviews: 134,
  },
};

export default function ExperienceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const experience = experiences[id as keyof typeof experiences];
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!experience) {
    return notFound();
  }

  // Calculate default dates (next month's 1st to 4th day as example)
  const defaultDates = {
    start: new Date(new Date().setMonth(new Date().getMonth() + 1, 1))
      .toISOString()
      .split("T")[0],
    end: new Date(new Date().setMonth(new Date().getMonth() + 1, 4))
      .toISOString()
      .split("T")[0],
  };

  return (
    <div className="experience-detail">
      {/* Hero Section with Parallax Effect */}
      <div className="hero-parallax">
        <div className="hero-image">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="image"
            priority
          />
          <div className="hero-overlay">
            <div className="hero-text">
              <h1 data-aos="fade-up">{experience.title}</h1>
              <div
                className="meta-info"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span>
                  <FaMapMarkerAlt /> {experience.city}
                </span>
                <span>
                  <FaCalendarAlt /> {experience.duration}
                </span>
                <span>
                  <FaTag /> {experience.topic}
                </span>
              </div>
              <div
                className="hero-rating"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(experience.rating) ? "filled" : ""
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span>
                  {experience.rating} ({experience.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Booking Card - Update the button */}
      <div className="floating-booking-card" data-aos="fade-left">
        <div className="booking-card-inner">
          <div className="booking-card-content">
            <h3>
              Start From <span>{experience.price}</span>
            </h3>
            <p>per person</p>
            <div className="booking-details">
              <div>
                <span>Duration</span>
                <span>{experience.duration}</span>
              </div>
              <div>
                <span>Rating</span>
                <span>{experience.rating}/5</span>
              </div>
            </div>
            <button
              className="book-now-btn"
              onClick={() => setShowBookingForm(true)}
            >
              Book Now <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed mt-20 inset-0 z-50 overflow-y-auto">
          {/* Background overlay with subtle animation */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setShowBookingForm(false)}
          ></div>

          {/* Modal container with 3D perspective */}
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <div
              className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                animation:
                  "modalEntry 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            >
              {/* Gradient background with padding */}
              <div className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 px-6">
                {/* Close button with 3D effect */}
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="absolute right-6 top-6 z-10 rounded-full p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></div>
                    <svg
                      className="h-10 w-10 transform transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </button>

                {/* Booking form content */}
                <BookingForm
                  experience={{
                    ...experience,
                    id, // use the unwrapped id
                    defaultDates,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="content-container">
        {/* Description Section */}
        <section className="description-section" data-aos="fade-up">
          <h2>About This Experience</h2>
          <p>{experience.description}</p>

          <div className="highlights">
            <h3>Experience Highlights</h3>
            <ul>
              {experience.highlights.map((highlight, index) => (
                <li
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 50}
                >
                  <span className="highlight-icon">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="itinerary-section">
          <h2 data-aos="fade-up">Detailed Itinerary</h2>
          <div className="itinerary-days">
            {experience.itinerary.map((day, index) => (
              <div
                key={index}
                className="day-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="day-number">{index + 1}</div>
                <div className="day-content">
                  <h3>{day.day}</h3>
                  <ul>
                    {day.activities.map((activity, i) => (
                      <li key={i}>
                        <span className="activity-bullet"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2 data-aos="fade-up">Gallery</h2>
          <div className="image-gallery">
            {experience.gallery.map((image, index) => (
              <div
                key={index}
                className="gallery-image"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={image}
                  alt={`${experience.city} ${index + 1}`}
                  fill
                  className="image"
                />
                <div className="image-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section" data-aos="fade-up">
          <h2>Traveler Testimonials</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  "This was the most amazing experience! The local guides were
                  knowledgeable and the itinerary was perfect."
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Sarah Johnson</span>
                    <span className="author-location">New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  "The attention to detail and cultural immersion made this trip
                  unforgettable. Highly recommend!"
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <span className="author-name">Michael Chen</span>
                    <span className="author-location">Toronto, Canada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Update the Booking CTA button */}
        <div className="booking-cta" data-aos="fade-up">
          <h2>Ready for an unforgettable experience?</h2>
          <div className="cta-buttons">
            <button
              className="book-now-btn"
              onClick={() => setShowBookingForm(true)}
            >
              Book Now <FaChevronRight />
            </button>
            <button className="inquiry-btn">Make an Inquiry</button>
          </div>
        </div>

        {/* Add these styles */}
        <style jsx>{`
          .booking-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
          }

          .modal-content {
            background: white;
            border-radius: 8px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 30px;
          }

          .close-button {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .modal-content {
              padding: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

