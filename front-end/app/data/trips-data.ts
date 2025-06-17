// lib/trips-data.ts
export const trips = [
  {
    id: 1,
    city: 'Marrakech, Morocco',
    title: 'Atlas Mountains & Berber Villages Day Trip',
    rating: 4.8,
    reviews: 243,
    duration: '1 day',
    price: 75,
    image: '/images/destination/atlas-trip.jpg',
    description: 'Explore the stunning Atlas Mountains and visit authentic Berber villages with a local guide. Experience traditional Moroccan culture, enjoy mint tea with locals, and witness breathtaking landscapes of the Toubkal National Park.',
    highlights: [
      'Scenic mountain drives through Tizi n\'Tichka pass',
      'Visit to Aroumd traditional Berber village',
      'Authentic tajine lunch with a local family',
      'Guided walk through terraced fields and walnut groves',
      'Learn about Berber culture and traditions'
    ],
    included: [
      'Round-trip transportation from Marrakech',
      'Professional English/French speaking guide',
      'Traditional lunch and mint tea',
      'All entrance fees',
      'Hotel pickup and drop-off'
    ],
    recommended: true
  },
  {
    id: 2,
    city: 'Chefchaouen, Morocco',
    title: 'Blue City Photography Tour with Local Guide',
    rating: 4.9,
    reviews: 187,
    duration: '2 days',
    price: 120,
    image: '/images/destination/chefchaouen-trip.jpg',
    description: 'Discover the magical blue-washed streets of Chefchaouen through the lens of your camera. This photography-focused tour takes you to hidden corners and panoramic viewpoints with a local photographer guide who knows all the best angles.',
    highlights: [
      'Sunrise and sunset photography sessions',
      'Visit to the Spanish Mosque viewpoint',
      'Guided tour of the medina\'s most photogenic spots',
      'Workshop on travel photography techniques',
      'Local market and waterfall visit'
    ],
    included: [
      '1 night in a traditional riad',
      'Professional photography guide',
      'All breakfasts and 1 dinner',
      'Transportation between locations',
      'Photo editing basics workshop'
    ],
    recommended: true
  },
  {
    id: 3,
    city: 'Sahara Desert, Morocco',
    title: 'Overnight Luxury Desert Camp with Camel Trek',
    rating: 5.0,
    reviews: 325,
    duration: '2 days',
    price: 199,
    image: '/images/destination/sahara-trip.jpg',
    description: 'Experience the magic of the Sahara Desert with an overnight stay in a luxury desert camp. Ride camels at sunset, sleep under the stars, and enjoy Berber hospitality in the heart of the Erg Chebbi dunes near Merzouga.',
    highlights: [
      'Camel trek at sunset and sunrise',
      'Luxury tent accommodation with private bathroom',
      'Traditional Berber music around the campfire',
      'Sandboarding on the golden dunes',
      'Stargazing with telescope (weather permitting)'
    ],
    included: [
      'Round-trip transportation from Merzouga',
      '1 night in luxury desert camp',
      'All meals (dinner and breakfast)',
      'Camel ride with experienced guides',
      'Sandboarding equipment'
    ],
    recommended: true
  },
  {
    id: 4,
    city: 'Fes, Morocco',
    title: 'Medieval Medina Cultural Walking Tour',
    rating: 4.7,
    reviews: 215,
    duration: '1 day',
    price: 65,
    image: '/images/destination/fes-trip.jpg',
    description: 'Step back in time with a guided walking tour through Fes el-Bali, the world\'s largest living medieval medina. Explore ancient madrasas, tanneries, and artisan workshops with a knowledgeable local guide.',
    highlights: [
      'Visit to Chouara Tanneries (with mint provided)',
      'Al-Attarine Madrasa and Bou Inania Madrasa',
      'Al-Qarawiyyin University (exterior only)',
      'Traditional pottery cooperative visit',
      'Hidden viewpoints overlooking the medina'
    ],
    included: [
      'Professional local guide',
      'All entrance fees to historical sites',
      'Traditional Moroccan lunch',
      'Map of the medina',
      'Small group experience (max 8 people)'
    ],
    recommended: false
  },
  {
    id: 5,
    city: 'Essaouira, Morocco',
    title: 'Coastal Food & Market Tour with Cooking Class',
    rating: 4.9,
    reviews: 178,
    duration: '1 day',
    price: 89,
    image: '/images/destination/essaouira-trip.jpg',
    description: 'Discover Essaouira\'s vibrant food scene with a local chef. Tour the fish market, select fresh ingredients, then learn to prepare classic Moroccan seafood dishes in a hands-on cooking class.',
    highlights: [
      'Guided tour of the fish market',
      'Selection of fresh seafood with local fishermen',
      'Hands-on cooking class with professional chef',
      'Learn 3-4 traditional Moroccan recipes',
      'Enjoy the meal you prepared with local wines'
    ],
    included: [
      'Market tour and ingredient shopping',
      '3-hour cooking class',
      'All cooking equipment and ingredients',
      'Recipe booklet to take home',
      'Lunch with drinks'
    ],
    recommended: true
  },
  {
    id: 6,
    city: 'Casablanca, Morocco',
    title: 'Hassan II Mosque & Coastal City Tour',
    rating: 4.7,
    reviews: 198,
    duration: '1 day',
    price: 85,
    image: '/images/destination/casablanca-trip.jpg',
    description: 'Explore Morocco\'s economic capital with a focus on its stunning architecture and coastal charm. The highlight is a guided tour of the magnificent Hassan II Mosque, one of the few mosques open to non-Muslims.',
    highlights: [
      'Guided tour of Hassan II Mosque interior',
      'Corniche coastal drive with photo stops',
      'Visit to the Habous Quarter (New Medina)',
      'Mohammed V Square and Art Deco district',
      'Optional Rick\'s Café visit (additional cost)'
    ],
    included: [
      'Professional licensed guide',
      'Hassan II Mosque entrance ticket',
      'Transport between sites',
      'Bottled water',
      'City map and recommendations'
    ],
    recommended: false
  },
  {
    id: 7,
    city: 'Tangier, Morocco',
    title: 'Mediterranean Culture & Cave of Hercules',
    rating: 4.6,
    reviews: 176,
    duration: '1 day',
    price: 95,
    image: '/images/destination/tangier-trip.jpg',
    description: 'Experience Tangier\'s unique blend of Mediterranean and Moroccan cultures. Visit the legendary Cave of Hercules, explore the kasbah, and enjoy panoramic views from Cap Spartel where the Atlantic meets the Mediterranean.',
    highlights: [
      'Cave of Hercules with its famous sea window',
      'Cap Spartel lighthouse and viewpoint',
      'Kasbah Museum and American Legation Museum',
      'Walk through the medina and Grand Socco',
      'Optional camel ride on the beach'
    ],
    included: [
      'Round-trip transportation',
      'Professional local guide',
      'Entrance fees to all sites',
      'Traditional Moroccan lunch',
      'Hotel pickup and drop-off'
    ],
    recommended: false
  },
  {
    id: 8,
    city: 'Meknes, Morocco',
    title: 'Imperial City & Roman Ruins of Volubilis',
    rating: 4.8,
    reviews: 154,
    duration: '1 day',
    price: 70,
    image: '/images/destination/meknes-trip.jpg',
    description: 'Discover Meknes, one of Morocco\'s four imperial cities, and the remarkably preserved Roman ruins of Volubilis. This tour combines Islamic architecture with ancient Roman history for a fascinating cultural experience.',
    highlights: [
      'Guided tour of Volubilis archaeological site',
      'Visit to Moulay Ismail\'s mausoleum',
      'Bab Mansour and Place el-Hedim',
      'Royal granaries and stables',
      'Optional wine tasting at nearby vineyards'
    ],
    included: [
      'Transportation between sites',
      'Professional guide',
      'Entrance fees to Volubilis and Meknes sites',
      'Bottled water',
      'Historical information booklet'
    ],
    recommended: false
  },
  {
    id: 9,
    city: 'Dades Valley, Morocco',
    title: 'Todgha Gorge & Valley of Roses Adventure',
    rating: 4.9,
    reviews: 132,
    duration: '3 days',
    price: 220,
    image: '/images/destination/dades-trip.jpg',
    description: 'Journey through Morocco\'s stunning desert landscapes to the dramatic Todgha Gorge and fragrant Valley of Roses. This multi-day adventure includes hiking, visits to kasbahs, and stays in traditional guesthouses.',
    highlights: [
      'Hiking in Todgha Gorge canyon',
      'Visit to Aït Ben Haddou kasbah',
      'Valley of Roses and rose product workshops',
      'Dades Valley "Monkey Fingers" rock formations',
      'Traditional music evening with locals'
    ],
    included: [
      '2 nights accommodation (guesthouses)',
      'All breakfasts and dinners',
      'Professional guide for hikes',
      'Transportation in 4x4 vehicle',
      'All entrance fees'
    ],
    recommended: true
  },
  {
    id: 10,
    city: 'Agadir, Morocco',
    title: 'Paradise Valley & Surf Beach Day Trip',
    rating: 4.7,
    reviews: 145,
    duration: '1 day',
    price: 65,
    image: '/images/destination/agadir-trip.jpg',
    description: 'Escape the city to Paradise Valley\'s natural pools in the morning, then enjoy the surf culture of Taghazout beach in the afternoon. Perfect combination of nature and beach relaxation.',
    highlights: [
      'Swimming in Paradise Valley\'s natural pools',
      'Optional cliff jumping (for the adventurous)',
      'Lunch at a surf camp in Taghazout',
      'Beach time at Tamraght or Anchor Point',
      'Visit to local argan oil cooperative'
    ],
    included: [
      'Round-trip transportation',
      'Professional guide',
      'Lunch at surf camp',
      'Bottled water',
      'Hotel pickup and drop-off'
    ],
    recommended: false
  }
] as const;

export type Trip = typeof trips[number];