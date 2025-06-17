export interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      title: string;
      text: string;
      image?: string;
    }[];
    conclusion: string;
  };
}
export const highlights: Highlight[] = [
  {
    id: 1,
    title: "Top 5 Must-Visit Cities",
    description: "From Marrakech to Fes, discover Morocco's hidden gems!",
    image: "/images/image10.jpg",
    tags: ["Travel Tips", "Culinary Delights"],
    content: {
      intro: "Morocco is a land of vibrant colors, rich history, and breathtaking landscapes. Here are the top 5 cities you must visit on your Moroccan adventure.",
      sections: [
        {
          title: "Marrakech - The Red City",
          text: "Explore the bustling Jemaa el-Fnaa square, wander through the souks, and visit the stunning Bahia Palace.",
          image: "/images/marrakech-detail.jpg"
        },
        {
          title: "Fes - The Cultural Heart",
          text: "Discover the world's oldest university, get lost in the labyrinthine medina, and see traditional tanneries at work."
        }
      ],
      conclusion: "Each of these cities offers a unique glimpse into Morocco's soul. From the Atlas Mountains to the Sahara, your journey will be unforgettable."
    }
  },
  {
    id: 2,
    title: "Savor the Flavors of Morocco",
    description: "Indulge in tagines, couscous, and street food galore!",
    image: "/images/image11.jpg",
    tags: ["Cultural Events", "Local Cuisine"],
    content: {
      intro: "Moroccan cuisine is a fusion of Berber, Arab, and Mediterranean influences — a true feast for the senses.",
      sections: [
        {
          title: "Traditional Dishes",
          text: "Enjoy aromatic tagines, fluffy couscous, and harira soup — staples of Moroccan kitchens.",
          image: "/images/food-detail-1.jpg"
        },
        {
          title: "Street Food Adventures",
          text: "Try grilled meats, msemen (flatbread), and pastries in local markets and medinas.",
          image: "/images/food-detail-2.jpg"
        },
        {
          title: "Sweet Mint Tea",
          text: "No meal is complete without Morocco’s iconic mint tea, served with ceremony and sugar."
        }
      ],
      conclusion: "Tasting Moroccan cuisine is like tasting centuries of tradition, love, and hospitality in every bite."
    }
  },
  {
    id: 3,
    title: "Adventure Awaits You",
    description: "Hike the Atlas Mountains or surf the Atlantic waves!",
    image: "/images/image12.jpg",
    tags: ["Adventure", "Nature"],
    content: {
      intro: "Morocco is a dream destination for thrill-seekers and nature lovers alike.",
      sections: [
        {
          title: "Hiking the High Atlas",
          text: "Trek through scenic valleys, Berber villages, and reach the summit of Mount Toubkal — North Africa’s highest peak.",
          image: "/images/atlas-hike.jpg"
        },
        {
          title: "Surfing the Atlantic",
          text: "Taghazout and Essaouira offer perfect waves for surfers of all levels.",
          image: "/images/surfing.jpg"
        },
        {
          title: "Skiing in the Snow",
          text: "Yes, you can even ski in Morocco! The Oukaimeden resort brings winter adventure to the Atlas Mountains."
        }
      ],
      conclusion: "From sand to snow, Morocco offers year-round adventure that will leave you breathless and inspired."
    }
  },
  {
    id: 4,
    title: "Experience Moroccan Festivals",
    description: "Join the vibrant celebrations and dance the night away!",
    image: "/images/image13.jpg",
    tags: ["Festivals", "Nightlife"],
    content: {
      intro: "Moroccan festivals reflect the nation's deep-rooted traditions, music, and joyous spirit.",
      sections: [
        {
          title: "Gnaoua World Music Festival",
          text: "Held in Essaouira, this global music celebration blends African rhythms with Moroccan heritage.",
          image: "/images/gnaoua.jpg"
        },
        {
          title: "Mawazine Festival",
          text: "Hosted in Rabat, it's one of Africa’s biggest music festivals, attracting global stars and local talent.",
          image: "/images/mawazine.jpg"
        },
        {
          title: "Rose Festival in Kelaat M’Gouna",
          text: "Celebrate the harvest of roses with parades, music, and the sweet scent of blooms filling the valley."
        }
      ],
      conclusion: "Whether spiritual or celebratory, Moroccan festivals bring people together in unforgettable ways."
    }
  },
  {
    id: 5,
    title: "Explore Morocco's Imperial History",
    description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
    image: "/images/image14.jpg",
    tags: ["History", "Architecture"],
    content: {
      intro: "Morocco’s imperial cities showcase the country's historical and architectural richness.",
      sections: [
        {
          title: "Fes — A Living Time Capsule",
          text: "Explore the world’s oldest university, ancient medinas, and the historic Al-Qarawiyyin Mosque.",
          image: "/images/fes.jpg"
        },
        {
          title: "Meknes — The Versailles of Morocco",
          text: "Admire massive gates, royal granaries, and the mausoleum of Sultan Moulay Ismail.",
          image: "/images/meknes.jpg"
        },
        {
          title: "Rabat — The Modern Capital",
          text: "See the Hassan Tower, Royal Palace, and medina, blending old and new Morocco."
        }
      ],
      conclusion: "Every stone tells a story in Morocco’s imperial cities — a story of power, culture, and timeless beauty."
    }
  },
  {
    id: 6,
    title: "Discover the Magic of the Sahara",
    description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
    image: "/images/image15.jpg",
    tags: ["Desert Tours", "Nature"],
    content: {
      intro: "The Sahara Desert is a place of silence, mystery, and awe — a must-visit for every traveler.",
      sections: [
        {
          title: "Camel Treks at Sunset",
          text: "Ride across the endless dunes of Erg Chebbi on camelback and watch the sunset paint the sand gold.",
          image: "/images/sahara-camel.jpg"
        },
        {
          title: "Desert Camps and Stargazing",
          text: "Spend the night in a Berber tent, listen to traditional music, and marvel at millions of stars.",
          image: "/images/sahara-camp.jpg"
        },
        {
          title: "4x4 Adventures",
          text: "For thrill-seekers, explore the desert landscape in a 4x4 and discover remote oases and fossils."
        }
      ],
      conclusion: "The Sahara isn’t just a desert — it’s a deeply spiritual experience that stays with you forever."
    }
  }
];
