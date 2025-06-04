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
  // Add similar content for other highlights
];