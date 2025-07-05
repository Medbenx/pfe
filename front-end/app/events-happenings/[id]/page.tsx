// app/events-happenings/[id]/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function EventDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  // Mock data - in a real app you'd fetch this based on params.id
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
        "Experience the magical fusion of Gnaoua music with international jazz, blues, and pop artists in the beautiful coastal city of Essaouira. This festival transforms the ancient medina into a global music stage where spiritual Gnaoua rhythms meet contemporary sounds.",
      price: "From 200 AED",
      location: "Various venues throughout Essaouira",
      duration: "3 days",
      website: "https://gnaouamusic.com",
      organizer: "Essaouira Municipality",
      capacity: "50,000 attendees",
      ageRestriction: "All ages",
      accessibility: "Wheelchair accessible venues",
      transportation: "Shuttle buses available from major hotels",
      highlights: [
        "Nightly concerts in historic squares",
        "Masterclasses with Gnaoua maalems",
        "Fusion performances with international artists",
        "Artisan markets and food stalls",
      ],
      performers: [
        {
          name: "Maalem Hamid El Kasri",
          image: "/images/performers/kasri.jpg",
          genre: "Gnaoua",
        },
        {
          name: "Oumou Sangaré",
          image: "/images/performers/oumou.jpg",
          genre: "Wassoulou",
        },
        {
          name: "Marcus Miller",
          image: "/images/performers/marcus.jpg",
          genre: "Jazz",
        },
        {
          name: "Hindi Zahra",
          image: "/images/performers/hindi.jpg",
          genre: "Folk-Pop",
        },
      ],
      gallery: [
        {
          src: "/images/events/gnaoua-1.jpg",
          caption: "Main stage at Moulay Hassan Square",
        },
        {
          src: "/images/events/gnaoua-2.jpg",
          caption: "Traditional Gnaoua musicians",
        },
        {
          src: "/images/events/gnaoua-3.jpg",
          caption: "Crowd enjoying evening performance",
        },
        {
          src: "/images/events/gnaoua-4.jpg",
          caption: "International artist collaboration",
        },
      ],
      schedule: [
        {
          day: "June 27",
          events: [
            {
              time: "18:00",
              title: "Opening Ceremony",
              location: "Moulay Hassan Square",
            },
            {
              time: "20:00",
              title: "Hamid El Kasri Performance",
              location: "Main Stage",
            },
          ],
        },
        {
          day: "June 28",
          events: [
            {
              time: "10:00",
              title: "Gnaoua Music Workshop",
              location: "Dar Souiri",
            },
            {
              time: "22:00",
              title: "Marcus Miller Concert",
              location: "Beach Stage",
            },
          ],
        },
      ],
      reviews: [
        {
          user: "TravelLover22",
          rating: 5,
          comment: "The energy was incredible! A must-experience festival.",
        },
        {
          user: "MusicFanatic",
          rating: 4,
          comment: "Great lineup but crowded at main stage",
        },
      ],
      musicTracks: [
      {
        title: "Gnaoua Fusion",
        artist: "Maalem Hamid El Kasri",
        src: "/audio/gnaoua-fusion.mp3",
      },
      {
        title: "Lila Ceremony",
        artist: "Traditional Gnaoua Ensemble",
        src: "/audio/lila-ceremony.mp3",
      },
      {
        title: "Saharan Rhythms",
        artist: "Desert Nomads",
        src: "/audio/saharan-rhythms.mp3",
      },
    ],
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
        "Red carpet premieres and screenings with international film stars in historic Marrakech. The festival showcases the best of world cinema with a focus on Arab and African filmmakers.",
      price: "From 350 AED",
      location: "Palais des Congrès and other venues",
      duration: "9 days",
      website: "https://marrakechfilmfestival.com",
      organizer: "Marrakech Film Foundation",
      highlights: [
        "Opening and closing galas",
        "Masterclasses with directors",
        "Arab and African film competition",
        "Tribute to cinema legends",
      ],
      performers: [
        {
          name: "Martin Scorsese",
          image: "/images/performers/scorsese.jpg",
          role: "Jury President",
        },
        {
          name: "Lupita Nyong'o",
          image: "/images/performers/lupita.jpg",
          role: "Guest of Honor",
        },
      ],
      gallery: [
        { src: "/images/events/film-1.jpg", caption: "Red carpet arrivals" },
        { src: "/images/events/film-2.jpg", caption: "Jury panel discussion" },
      ],
      musicTracks: [
      {
        title: "Cinematic Morocco",
        artist: "Film Score Orchestra",
        src: "/audio/cinematic-morocco.mp3",
      },
      {
        title: "Red Carpet Theme",
        artist: "Marrakech Symphony",
        src: "/audio/red-carpet-theme.mp3",
      },
      {
        title: "Golden Atlas",
        artist: "Award Winners Ensemble",
        src: "/audio/golden-atlas.mp3",
      },
    ],
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
        "Celebration of Saharan nomadic culture with camel races, traditional music, and poetry. Recognized by UNESCO as intangible cultural heritage.",
      price: "Free",
      location: "Tan-Tan desert camp",
      duration: "6 days",
      highlights: [
        "Camel beauty contests",
        "Traditional Saharan weddings",
        "Nomadic poetry competitions",
        "Handicraft exhibitions",
      ],
      performers: [
        {
          name: "Nomadic Tribes",
          image: "/images/performers/nomads.jpg",
          role: "Cultural Performers",
        },
      ],
      gallery: [
        { src: "/images/events/tan-tan-1.jpg", caption: "Camel procession" },
        {
          src: "/images/events/tan-tan-2.jpg",
          caption: "Traditional tent setup",
        },
      ],
       musicTracks: [
      {
        title: "Nomadic Chants",
        artist: "Saharan Tribes",
        src: "/audio/nomadic-chants.mp3",
      },
      {
        title: "Camel Caravan",
        artist: "Desert Musicians",
        src: "/audio/camel-caravan.mp3",
      },
      {
        title: "Tindé Rhythm",
        artist: "Tuareg Ensemble",
        src: "/audio/tinde-rhythm.mp3",
      },
    ],
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
        "Spiritual music from around the world in the ancient medina of Fes. A unique exploration of sacred musical traditions in historic venues.",
      price: "From 250 AED",
      location: "Various historic venues in Fes",
      duration: "9 days",
      highlights: [
        "Sufi nights at Dar Tazi",
        "Morning concerts in Boujloud Square",
        "Interfaith dialogue sessions",
        "Young artists platform",
      ],
      performers: [
        {
          name: "Youssou N'Dour",
          image: "/images/performers/youssou.jpg",
          genre: "Mbalax",
        },
        {
          name: "Ravi Shankar Ensemble",
          image: "/images/performers/ravi.jpg",
          genre: "Indian Classical",
        },
      ],
      gallery: [
        {
          src: "/images/events/fes-1.jpg",
          caption: "Performance at Bab Makina",
        },
        { src: "/images/events/fes-2.jpg", caption: "Sufi whirling ceremony" },
      ],
       musicTracks: [
      {
        title: "Sufi Whirling",
        artist: "Fes Spiritual Ensemble",
        src: "/audio/sufi-whirling.mp3",
      },
      {
        title: "Andalusian Prayer",
        artist: "Al-Andalus Orchestra",
        src: "/audio/andalusian-prayer.mp3",
      },
      {
        title: "Universal Harmony",
        artist: "Interfaith Choir",
        src: "/audio/universal-harmony.mp3",
      },
    ],
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
        "Celebration of the valley's rose harvest with parades, music, and local products. The festival marks the annual Damascene rose harvest in the Valley of Roses.",
      price: "Free",
      location: "Kelaat M'Gouna town center",
      duration: "3 days",
      highlights: [
        "Rose petal parade",
        "Beauty pageant (Queen of Roses)",
        "Local product exhibitions",
        "Traditional Amazigh music",
      ],
      gallery: [
        { src: "/images/events/rose-1.jpg", caption: "Rose petal carpet" },
        { src: "/images/events/rose-2.jpg", caption: "Traditional dancers" },
      ],
       musicTracks: [
      {
        title: "Valley of Roses",
        artist: "Amazigh Folk Group",
        src: "/audio/valley-of-roses.mp3",
      },
      {
        title: "Petals in the Wind",
        artist: "M'Gouna Musicians",
        src: "/audio/petals-in-wind.mp3",
      },
      {
        title: "Harvest Dance",
        artist: "Local Collective",
        src: "/audio/harvest-dance.mp3",
      },
    ],
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
        "The toughest footrace on Earth - 250km through the Sahara Desert. Competitors carry all their supplies while crossing dunes, rocky plains and salt pans.",
      price: "Registration required (≈4000 EUR)",
      location: "Southern Morocco desert",
      duration: "7 stages over 10 days",
      highlights: [
        "250km self-sufficient race",
        "International competitors",
        "Night in traditional bivouacs",
        "Charity fundraising component",
      ],
      gallery: [
        {
          src: "/images/events/marathon-1.jpg",
          caption: "Runners crossing dunes",
        },
        {
          src: "/images/events/marathon-2.jpg",
          caption: "Desert camp at night",
        },
      ],
      musicTracks: [
      {
        title: "Dunes Challenge",
        artist: "Sahara Rhythm Section",
        src: "/audio/dunes-challenge.mp3",
      },
      {
        title: "Runner's High",
        artist: "Endurance Beats",
        src: "/audio/runners-high.mp3",
      },
      {
        title: "Finish Line",
        artist: "Victory Drums",
        src: "/audio/finish-line.mp3",
      },
    ],
    },
    {
      id: 7,
      title: "FIFA World Cup 2026",
      city: "USA, Canada, Mexico",
      date: "June 8 - July 3, 2026",
      type: "Sports",
      season: "Summer",
      image: "/images/events/worldcup.jpg",
      description:
        "The largest sporting event in the world - 48 teams compete across 16 host cities in North America. First World Cup hosted by three nations, featuring expanded format and new technologies.",
      price: "Ticket packages from $250 USD (varies by match)",
      location:
        "16 host cities including New York, Los Angeles, Toronto, Mexico City",
      duration: "26 days (64 matches)",
      highlights: [
        "First 48-team World Cup in history",
        "Opening match in Mexico City",
        "Final at MetLife Stadium (New Jersey)",
        "New VAR and semi-automated offside technology",
        "Fan festivals in all host cities",
      ],
      gallery: [
        {
          src: "/images/events/worldcup-1.jpg",
          caption: "2026 Host Cities announcement",
        },
        {
          src: "/images/events/worldcup-2.jpg",
          caption: "Previous World Cup final celebration",
        },
      ],
      musicTracks: [
      {
        title: "World Unity Anthem",
        artist: "Global Artists Collective",
        src: "/audio/world-unity.mp3",
      },
      {
        title: "Victory Chant",
        artist: "Stadium Choir",
        src: "/audio/victory-chant.mp3",
      },
      {
        title: "The Beautiful Game",
        artist: "International Orchestra",
        src: "/audio/beautiful-game.mp3",
      },
    ],
      tags: ["important", "mega-event"], // Optional for filtering
    },
  ];

  // Add this near the top of your component (after the event data)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2026-06-27"); // Use your event date
      const difference = +eventDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);


  const event = events.find((e) => e.id.toString() === id);
  if (!event) {
    return <div className="container mx-auto px-4 py-12">Event not found</div>;
  }

  return (
    <div className="event-details-page">
      {/* Hero Section with 3D Parallax Effect */}
      <section className="relative h-[75vh] min-h-[500px] w-full  overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <motion.div
            className="container mx-auto px-4 pb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => router.back()}
              className="mb-8 flex items-center text-white hover:text-amber-400 transition-colors"
              whileHover={{ x: -5 }}
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Events
            </motion.button>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {event.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {event.city}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {event.date}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {event.type}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Event Info */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-1 bg-amber-500 mr-4"></span>
                About the Event
              </h2>
              <p className="text-lg text-gray-700 mb-6">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Location
                  </h3>
                  <p className="text-gray-600">{event.location}</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Date & Duration
                  </h3>
                  <p className="text-gray-600">
                    {event.date} ({event.duration})
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Price
                </h3>
                <p className="text-2xl font-bold text-amber-600">
                  {event.price}
                </p>
                <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Book Tickets
                </button>
              </div>
            </motion.section>

            {/* Highlights Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-1 bg-amber-500 mr-4"></span>
                Event Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Performers Section */}
            <motion.section
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-1 bg-amber-500 mr-4"></span>
                Featured Performers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {event.performers?.map((performer, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={performer.image}
                        alt={performer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-800">
                      {performer.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Gallery Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-1 bg-amber-500 mr-4"></span>
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {event.gallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="relative h-40 rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      key={idx}
                      src={image.src}
                      alt={image.caption}
                      width={600} // or your desired width
                      height={400} // or your desired height
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            {/* Map Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Event Location
                </h3>
                <button
                  className="text-sm text-amber-600 hover:text-amber-700 flex items-center"
                  onClick={() => {
                    // Open Google Maps with the event location
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        event.location
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open in Maps
                </button>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden mb-4 border border-gray-200">
                <Image
                  src={`/images/maps/${event.city.toLowerCase()}-map.jpg`}
                  alt={`${event.city} map`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                {/* Map Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <svg
                      className="w-8 h-8 text-red-500 drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    // Open Google Maps with the event location
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        event.location
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-700">{event.location}</p>
                </div>

                {event.transportation && (
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <p className="text-gray-700">{event.transportation}</p>
                  </div>
                )}

                <button
                  className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                  onClick={() => {
                    // Open directions in Google Maps
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        event.location
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Get Directions
                </button>
              </div>
            </motion.div>
          </div>

          {/* Weather Card */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Weather Forecast
            </h3>
            <div className="flex items-center mb-4">
              <div className="text-5xl mr-4">☀️</div>
              <div>
                <p className="text-2xl font-bold">24°C</p>
                <p className="text-gray-600">Sunny</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {["Thu", "Fri", "Sat"].map((day, index) => (
                <div key={index} className="py-2">
                  <p className="font-medium">{day}</p>
                  <p className="text-2xl mb-1">
                    {index === 0 ? "☀️" : index === 1 ? "⛅" : "☀️"}
                  </p>
                  <p className="text-sm text-gray-600">22°-26°</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Similar Events */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Similar Events
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Fes Festival of World Sacred Music",
                  date: "June 7-15, 2024",
                  image: "/images/events/fes-festival.jpg",
                },
                {
                  title: "Essaouira Andalusian Festival",
                  date: "October 18-20, 2024",
                  image: "/images/events/andalusian-festival.jpg",
                },
              ].map((similarEvent, index) => (
                <Link href={`/events-happenings/${index + 2}`} key={index}>
                  <motion.div
                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4">
                      <Image
                        src={similarEvent.image}
                        alt={similarEvent.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {similarEvent.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {similarEvent.date}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Countdown Timer Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Time Until Event
          </h2>
          <div className="flex justify-center gap-4">
            <div className="bg-gray-100 p-6 rounded-xl w-24">
              <div className="text-3xl font-bold text-amber-600">
                {timeLeft.days}
              </div>
              <div className="text-gray-600">Days</div>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl w-24">
              <div className="text-3xl font-bold text-amber-600">
                {timeLeft.hours}
              </div>
              <div className="text-gray-600">Hours</div>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl w-24">
              <div className="text-3xl font-bold text-amber-600">
                {timeLeft.minutes}
              </div>
              <div className="text-gray-600">Minutes</div>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl w-24">
              <div className="text-3xl font-bold text-amber-600">
                {timeLeft.seconds}
              </div>
              <div className="text-gray-600">Seconds</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Music Cards Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-50 to-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Experience the Music
          </h2>
          {event.musicTracks && event.musicTracks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {event.musicTracks.map((track, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-amber-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2zm12-3c0 1.105-1.79 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {track.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{track.artist}</p>
                    <audio controls className="w-full">
                      <source src={track.src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No music tracks available for this event.
            </p>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-amber-600 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience {event.title}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss this unforgettable celebration of music and culture in
            the heart of Morocco
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              Book Your Tickets Now
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors text-lg">
              Contact Organizers
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
