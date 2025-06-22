  export const programs = [
    {
      id: 1,
      title: "5-day trip in Marrakech and the Sahara",
      duration: "5 days / 4 nights",
      price: "Starting from 1500 AED",
      image: "/images/programs/marrakech-sahara.jpg",
      description: "Experience the magic of Marrakech and the breathtaking Sahara desert in this unforgettable journey.",
      itinerary: [
        { day: 1, title: "Arrival in Marrakech", description: "Check-in at riad, explore Jemaa el-Fnaa square" },
        { day: 2, title: "Marrakech City Tour", description: "Visit Bahia Palace, Saadian Tombs, and Majorelle Garden" },
        { day: 3, title: "Atlas Mountains & Ait Ben Haddou", description: "Scenic drive through the mountains to the famous kasbah" },
        { day: 4, title: "Sahara Desert", description: "Camel trekking and overnight in desert camp" },
        { day: 5, title: "Return to Marrakech", description: "Transfer to airport for departure" }
      ],
      includes: [
        "4 nights accommodation (Riad & Desert Camp)",
        "All intercity transportation",
        "Daily breakfast and 3 dinners",
        "Professional tour guide",
        "Camel trekking experience"
      ],
      excludes: [
        "International flights",
        "Travel insurance",
        "Lunches and some dinners",
        "Personal expenses"
      ],
      gallery: [
        "/images/programs/marrakech-sahara.jpg",
        "/images/programs/marrakech-sahara.jpg",
        "/images/programs/marrakech-sahara.jpg"
      ],
      // gallery: [
      //   "/images/gallery/marrakech-1.jpg",
      //   "/images/gallery/sahara-1.jpg",
      //   "/images/gallery/ait-ben-haddou.jpg"
      // ],
      video: "/videos/marrakech-sahara-preview.mp4",
      mapImage: "/images/programs/marrakech-sahara.jpg"
      // mapImage: "/images/maps/marrakech-sahara-route.jpg"
    },
    {
      id: 2,
      title: "7-day Imperial Cities Tour",
      duration: "7 days / 6 nights",
      price: "Starting from 2200 AED",
      image: "/images/programs/marrakech-sahara.jpg",
      description: "Discover Morocco's historic imperial cities: Rabat, Meknes, Fes, and Marrakech.",
      itinerary: [
        { day: 1, title: "Arrival in Casablanca", description: "Visit Hassan II Mosque, transfer to Rabat" },
        { day: 2, title: "Rabat to Meknes", description: "Explore Rabat landmarks, continue to Meknes" },
        { day: 3, title: "Meknes & Volubilis", description: "Visit Meknes and Roman ruins of Volubilis" },
        { day: 4, title: "Meknes to Fes", description: "Full day exploring Fes medina" },
        { day: 5, title: "Fes to Marrakech", description: "Travel through Middle Atlas mountains" },
        { day: 6, title: "Marrakech Exploration", description: "Full day city tour" },
        { day: 7, title: "Departure", description: "Transfer to airport" }
      ],
      includes: [
        "6 nights accommodation in 4-star hotels",
        "All transportation between cities",
        "Daily breakfast",
        "Professional guide",
        "Entrance fees to historical sites"
      ],
      excludes: [
        "International flights",
        "Most meals (lunches and dinners)",
        "Personal expenses"
      ],
      gallery: [
        "/images/programs/marrakech-sahara.jpg",
        "/images/programs/marrakech-sahara.jpg",
        "/images/programs/marrakech-sahara.jpg"
      ],
      video: "/videos/imperial-cities-preview.mp4",
      mapImage: "/images/programs/marrakech-sahara.jpg"
    },
    {
      id: 3,
      title: "3-day Chefchaouen Escape",
      duration: "3 days / 2 nights",
      price: "Starting from 800 AED",
      image: "/images/programs/marrakech-sahara.jpg",
      description: "Relax in the famous blue city of Chefchaouen nestled in the Rif Mountains.",
      itinerary: [
        { day: 1, title: "Tangier to Chefchaouen", description: "Transfer from Tangier, explore blue streets" },
        { day: 2, title: "Chefchaouen Exploration", description: "Full day to explore at your leisure" },
        { day: 3, title: "Return to Tangier", description: "Transfer back to Tangier" }
      ],
      includes: [
        "2 nights in boutique hotel",
        "Roundtrip transportation from Tangier",
        "Daily breakfast",
        "Walking tour of the medina"
      ],
      excludes: [
        "Transport to/from Tangier",
        "Lunches and dinners",
        "Personal expenses"
      ],
      gallery: [
        "/images/programs/marrakech-sahara.jpg",
        "/images/programs/marrakech-sahara.jpg",
        "/images/programs/marrakech-sahara.jpg"
      ],
      video: "/videos/chefchaouen-preview.mp4",
      mapImage: "/images/programs/marrakech-sahara.jpg"
    },
    {
    id: 4,
    title: "8-day Grand Morocco Tour",
    duration: "8 days / 7 nights",
    price: "Starting from 2800 AED",
    image: "/images/programs/marrakech-sahara.jpg",
    description: "A comprehensive tour covering Morocco's highlights from coast to desert to mountains.",
    itinerary: [
      { day: 1, title: "Casablanca & Rabat", description: "Arrival, visit Hassan II Mosque, transfer to Rabat" },
      { day: 2, title: "Meknes & Volubilis", description: "Explore imperial city and Roman ruins" },
      { day: 3, title: "Fes Exploration", description: "Full day in Morocco's cultural capital" },
      { day: 4, title: "Middle Atlas to Merzouga", description: "Travel through Ifrane to Sahara dunes" },
      { day: 5, title: "Sahara Experience", description: "Camel trek and desert camp overnight" },
      { day: 6, title: "Todgha Gorge & Dades Valley", description: "Stunning canyon landscapes" },
      { day: 7, title: "Ait Ben Haddou to Marrakech", description: "UNESCO site and High Atlas crossing" },
      { day: 8, title: "Marrakech & Departure", description: "City tour before airport transfer" }
    ],
    includes: [
      "7 nights accommodation (hotels & desert camp)",
      "All transportation in private vehicle",
      "Daily breakfast and 4 dinners",
      "English-speaking driver/guide",
      "Camel trek and desert camp experience"
    ],
    excludes: [
      "International flights",
      "Lunches and some dinners",
      "Entrance fees to optional sites"
    ],
    gallery: [
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg"
    ],
    video: "/videos/grand-morocco-preview.mp4",
    mapImage: "/images/programs/marrakech-sahara.jpg"
  },
  {
    id: 5,
    title: "4-day Desert Adventure from Marrakech",
    duration: "4 days / 3 nights",
    price: "Starting from 1200 AED",
    image: "/images/programs/marrakech-sahara.jpg",
    description: "An exciting journey from Marrakech through the Atlas Mountains to the Sahara.",
    itinerary: [
      { day: 1, title: "Marrakech to Dades Valley", description: "Cross High Atlas, visit Ait Ben Haddou" },
      { day: 2, title: "Dades to Merzouga", description: "Todgha Gorge, arrival at Erg Chebbi dunes" },
      { day: 3, title: "Sahara Experience", description: "Camel trek, overnight in luxury desert camp" },
      { day: 4, title: "Return to Marrakech", description: "Scenic drive back through Draa Valley" }
    ],
    includes: [
      "3 nights accommodation (hotels & desert camp)",
      "Private transportation with AC",
      "Breakfasts and dinners",
      "Camel trek with local guides",
      "Sunset and sunrise in the desert"
    ],
    excludes: [
      "Marrakech accommodation before/after",
      "Lunches and drinks",
      "Personal expenses"
    ],
    gallery: [
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg"
    ],
    video: "/videos/desert-adventure-preview.mp4",
    mapImage: "/images/maps/desert-adventure-route.jpg"
  },
  {
    id: 6,
    title: "5-day Luxury Morocco Escape",
    duration: "5 days / 4 nights",
    price: "Starting from 3500 AED",
    image: "/images/luxury-escape.jpg",
    description: "Premium accommodations and exclusive experiences in Morocco's finest locations.",
    itinerary: [
      { day: 1, title: "Marrakech Arrival", description: "VIP airport transfer, check-in to luxury riad" },
      { day: 2, title: "Private Marrakech Tour", description: "Customized city tour with gourmet lunch" },
      { day: 3, title: "Atlas Mountains Retreat", description: "Helicopter transfer to mountain resort" },
      { day: 4, title: "Spa & Leisure Day", description: "Private hammam and massage treatments" },
      { day: 5, title: "Departure", description: "Private transfer to airport" }
    ],
    includes: [
      "4 nights in 5-star accommodations",
      "Private transfers and tours",
      "All meals with premium selections",
      "Spa treatments and activities",
      "Dedicated concierge service"
    ],
    excludes: [
      "International flights",
      "Personal shopping",
      "Optional premium experiences"
    ],
    gallery: [
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg"
    ],
    video: "/videos/luxury-escape-preview.mp4",
    mapImage: "/images/maps/luxury-escape-route.jpg"
  },
  {
    id: 7,
    title: "6-day Surf & Beach Tour",
    duration: "6 days / 5 nights",
    price: "Starting from 1800 AED",
    image: "/images/surf-tour.jpg",
    description: "Ride Morocco's best waves along the Atlantic coast from Taghazout to Essaouira.",
    itinerary: [
      { day: 1, title: "Agadir Arrival", description: "Transfer to surf camp in Taghazout" },
      { day: 2, title: "Surf Lessons", description: "Beginner/intermediate lessons at Tamraght" },
      { day: 3, title: "Anchor Point", description: "Surf at famous Anchor Point break" },
      { day: 4, title: "Essaouira Transfer", description: "Explore the windy city's beaches" },
      { day: 5, title: "Essaouira Surf", description: "Lessons at Sidi Kaouki beach" },
      { day: 6, title: "Departure", description: "Transfer to Marrakech airport" }
    ],
    includes: [
      "5 nights in surf camps/hotels",
      "All surf equipment rental",
      "Daily professional surf lessons",
      "All transportation between spots",
      "Breakfasts and 3 dinners"
    ],
    excludes: [
      "International flights",
      "Lunches and some dinners",
      "Surf clothing/accessories"
    ],
    gallery: [
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg"
    ],
    video: "/videos/surf-tour-preview.mp4",
    mapImage: "/images/maps/surf-tour-route.jpg"
  },
  {
    id: 8,
    title: "9-day Family Adventure",
    duration: "9 days / 8 nights",
    price: "Starting from 3200 AED (family of 4)",
    image: "/images/family-adventure.jpg",
    description: "Kid-friendly activities and accommodations for an unforgettable family vacation.",
    itinerary: [
      { day: 1, title: "Marrakech Arrival", description: "Check-in to family riad with pool" },
      { day: 2, title: "Marrakech for Kids", description: "Majorelle Garden, camel rides in Palmeraie" },
      { day: 3, title: "Ouzoud Waterfalls", description: "Day trip to stunning waterfalls" },
      { day: 4, title: "Atlas Mountains", description: "Berber village visit and mule rides" },
      { day: 5, title: "Essaouira Beach", description: "Transfer to coastal town, beach time" },
      { day: 6, title: "Essaouira Activities", description: "Quad biking, argan oil workshop" },
      { day: 7, title: "Agadir", description: "Legzira Beach and Souss Massa Park" },
      { day: 8, title: "Return to Marrakech", description: "Leisure day in Marrakech" },
      { day: 9, title: "Departure", description: "Airport transfer" }
    ],
    includes: [
      "8 nights family-friendly accommodations",
      "All transportation in private minivan",
      "Daily breakfast and 5 dinners",
      "All kid-friendly activities mentioned",
      "English-speaking family guide"
    ],
    excludes: [
      "International flights",
      "Some meals and snacks",
      "Personal expenses"
    ],
    gallery: [
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg"
    ],
    video: "/videos/family-adventure-preview.mp4",
    mapImage: "/images/maps/family-adventure-route.jpg"
  },
  {
    id: 9,
    title: "7-day Hiking in the Atlas Mountains",
    duration: "7 days / 6 nights",
    price: "Starting from 2000 AED",
    image: "/images/atlas-hiking.jpg",
    description: "Trek through stunning landscapes and Berber villages in the High Atlas.",
    itinerary: [
      { day: 1, title: "Marrakech to Imlil", description: "Transfer to mountain village, short hike" },
      { day: 2, title: "Tizi n'Tamatert", description: "Hike through walnut groves to Tacheddirt" },
      { day: 3, title: "Imsker Valley", description: "Scenic hike through remote valleys" },
      { day: 4, title: "Tizi n'Libour Pass", description: "Challenging pass crossing (3,100m)" },
      { day: 5, title: "Azib Tamsoult", description: "Hike to beautiful mountain refuge" },
      { day: 6, title: "Return to Imlil", description: "Descend via Tizi Mzik pass" },
      { day: 7, title: "Marrakech Return", description: "Transfer back, optional city tour" }
    ],
    includes: [
      "6 nights in mountain gites/refuges",
      "All meals during the trek",
      "Professional mountain guide",
      "Mule team for luggage transport",
      "All ground transportation"
    ],
    excludes: [
      "Hiking equipment rental",
      "Travel insurance",
      "Personal expenses"
    ],
    gallery: [
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg",
      "/images/programs/marrakech-sahara.jpg"
    ],
    video: "/videos/atlas-hiking-preview.mp4",
    mapImage: "/images/maps/atlas-hiking-route.jpg"
  },
  {
    id: 10,
    title: "5-day Food & Culture Tour",
    duration: "5 days / 4 nights",
    price: "Starting from 1600 AED",
    image: "/images/food-tour.jpg",
    description: "A gastronomic journey through Morocco's culinary traditions and food markets.",
    itinerary: [
      { day: 1, title: "Casablanca Arrival", description: "Food tour of Habous quarter" },
      { day: 2, title: "Fes Culinary Experience", description: "Medina food tour, cooking class" },
      { day: 3, title: "Meknes & Wine Country", description: "Visit Meknes, wine tasting" },
      { day: 4, title: "Marrakech Foodie Day", description: "Souk spices, street food tour" },
      { day: 5, title: "Departure", description: "Morning market visit before airport" }
    ],
    includes: [
      "4 nights in boutique hotels",
      "All food experiences mentioned",
      "Cooking classes and tastings",
      "Private transportation",
      "Expert food guide"
    ],
    excludes: [
      "International flights",
      "Some meals not specified",
      "Personal shopping"
    ],
    gallery: [
      "/images/gallery/food-1.jpg",
      "/images/gallery/food-2.jpg",
      "/images/gallery/food-3.jpg"
    ],
    video: "/videos/food-tour-preview.mp4",
    mapImage: "/images/maps/food-tour-route.jpg"
  },
  {
    id: 11,
    title: "10-day Complete Morocco Experience",
    duration: "10 days / 9 nights",
    price: "Starting from 3800 AED",
    image: "/images/complete-morocco.jpg",
    description: "The ultimate Morocco tour covering cities, mountains, desert, and coast.",
    itinerary: [
      { day: 1, title: "Casablanca & Rabat", description: "Modern capital and imperial city" },
      { day: 2, title: "Meknes & Volubilis", description: "Historical sites and Roman ruins" },
      { day: 3, title: "Fes Exploration", description: "Full day in Morocco's cultural heart" },
      { day: 4, title: "Middle Atlas to Sahara", description: "Cedar forests to desert dunes" },
      { day: 5, title: "Sahara Experience", description: "Camel trek and luxury desert camp" },
      { day: 6, title: "Todgha Gorge", description: "Stunning canyon landscapes" },
      { day: 7, title: "Ait Ben Haddou", description: "UNESCO world heritage site" },
      { day: 8, title: "Atlas Mountains", description: "Tizi n'Tichka pass to Marrakech" },
      { day: 9, title: "Essaouira", description: "Coastal town and beach relaxation" },
      { day: 10, title: "Departure", description: "Transfer to Marrakech airport" }
    ],
    includes: [
      "9 nights in premium accommodations",
      "All transportation in luxury vehicle",
      "Daily breakfast and 6 dinners",
      "Private guide throughout",
      "All entrance fees and activities"
    ],
    excludes: [
      "International flights",
      "Some meals and drinks",
      "Personal expenses"
    ],
    gallery: [
      "/images/gallery/complete-1.jpg",
      "/images/gallery/complete-2.jpg",
      "/images/gallery/complete-3.jpg"
    ],
    video: "/videos/complete-morocco-preview.mp4",
    mapImage: "/images/maps/complete-morocco-route.jpg"
  },
  {
    id: 12,
    title: "4-day Romantic Getaway",
    duration: "4 days / 3 nights",
    price: "Starting from 2500 AED (couple)",
    image: "/images/romantic-getaway.jpg",
    description: "Intimate experiences and luxury accommodations for couples.",
    itinerary: [
      { day: 1, title: "Marrakech Arrival", description: "Private transfer to luxury riad" },
      { day: 2, title: "Private City Tour", description: "Exclusive visits with romantic touches" },
      { day: 3, title: "Atlas Mountains Day", description: "Private picnic with mountain views" },
      { day: 4, title: "Departure", description: "Leisurely morning before airport" }
    ],
    includes: [
      "3 nights in luxury suite",
      "Private transfers and tours",
      "Romantic dinners with wine",
      "Couples spa treatment",
      "Personalized experiences"
    ],
    excludes: [
      "International flights",
      "Some meals not specified",
      "Personal shopping"
    ],
    gallery: [
      "/images/gallery/romantic-1.jpg",
      "/images/gallery/romantic-2.jpg",
      "/images/gallery/romantic-3.jpg"
    ],
    video: "/videos/romantic-getaway-preview.mp4",
    mapImage: "/images/maps/romantic-getaway-route.jpg"
  },
  {
    id: 13,
    title: "6-day Photography Tour",
    duration: "6 days / 5 nights",
    price: "Starting from 2200 AED",
    image: "/images/photo-tour.jpg",
    description: "Capture Morocco's most photogenic locations with professional guidance.",
    itinerary: [
      { day: 1, title: "Marrakech Arrival", description: "Orientation and medina night shots" },
      { day: 2, title: "Marrakech Photo Day", description: "Architecture, gardens, and souks" },
      { day: 3, title: "Ait Ben Haddou", description: "UNESCO site and cinematic landscapes" },
      { day: 4, title: "Sahara Desert", description: "Dunes at golden hour and star photography" },
      { day: 5, title: "Atlas Mountains", description: "Berber villages and mountain vistas" },
      { day: 6, title: "Departure", description: "Final morning shoot before airport" }
    ],
    includes: [
      "5 nights in photogenic accommodations",
      "Professional photography guide",
      "Transportation to prime locations",
      "Golden hour and night shoots",
      "Daily photo reviews"
    ],
    excludes: [
      "Photography equipment",
      "International flights",
      "Some meals"
    ],
    gallery: [
      "/images/gallery/photo-1.jpg",
      "/images/gallery/photo-2.jpg",
      "/images/gallery/photo-3.jpg"
    ],
    video: "/videos/photo-tour-preview.mp4",
    mapImage: "/images/maps/photo-tour-route.jpg"
  }    
  ];

 export const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Mansoori",
      photo: "/images/testimonials/ahmed.jpg",
      comment: "The Marrakech and Sahara tour was incredible! The desert camp experience was the highlight of our trip.",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Al-Hashemi",
      photo: "/images/testimonials/fatima.jpg",
      comment: "Our family loved the Imperial Cities tour. The guide was very knowledgeable about Moroccan history.",
      rating: 4
    },
    {
      id: 3,
      name: "Khalid Al-Nuaimi",
      photo: "/images/testimonials/khalid.jpg",
      comment: "Chefchaouen is even more beautiful in person. The blue streets are magical at sunset.",
      rating: 5
    },
    {
    id: 4,
    name: "Layla Al-Qasimi",
    photo: "/images/testimonials/layla.jpg",
    comment: "The Luxury Morocco Escape exceeded all expectations. The helicopter ride to the Atlas Mountains was unforgettable!",
    rating: 5
  },
  {
    id: 5,
    name: "Omar Al-Zeidi",
    photo: "/images/testimonials/omar.jpg",
    comment: "As a photography enthusiast, the Photography Tour helped me capture Morocco like never before. Our guide knew all the hidden spots.",
    rating: 5
  },
  {
    id: 6,
    name: "Yasmin Al-Suwaidi",
    photo: "/images/testimonials/yasmin.jpg",
    comment: "Our family of five had the best vacation with the Family Adventure tour. The kids are still talking about the mule rides!",
    rating: 4
  },
  {
    id: 7,
    name: "Rashid Al-Mazrouei",
    photo: "/images/testimonials/rashid.jpg",
    comment: "The Complete Morocco Experience was worth every dirham. We saw everything from cities to desert in perfect comfort.",
    rating: 5
  },
  {
    id: 8,
    name: "Noora Al-Ketbi",
    photo: "/images/testimonials/noora.jpg",
    comment: "Our Romantic Getaway was perfect for our anniversary. The private picnic in the Atlas Mountains was magical.",
    rating: 5
  },
  {
    id: 9,
    name: "Majid Al-Romaithi",
    photo: "/images/testimonials/majid.jpg",
    comment: "The Surf Tour introduced me to amazing breaks I never knew existed in Morocco. Already planning my next trip!",
    rating: 4
  },
  {
    id: 10,
    name: "Salma Al-Shamsi",
    photo: "/images/testimonials/salma.jpg",
    comment: "The Food & Culture Tour was a revelation. I learned so much about Moroccan cuisine and brought home amazing recipes.",
    rating: 5
  }
];