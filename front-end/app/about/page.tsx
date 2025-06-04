// This file is part of the Morocco Travel Guide project.
"use client";

import Image from "next/image";
import "../styles/about.css";

const moroccoOverview = {
  title: "Discover Morocco",
  subtitle: "Land of Contrasts & Cultural Treasures",
  video: '/videos/morocco-hero.mp4',
  sections: [
    {
      title: "Geography",
      image: "/images/image1.jpg",
      text: `Morocco is located in North Africa, bordered by the Atlantic Ocean and Mediterranean Sea, with Algeria to the east and the Western Sahara to the south. The country's landscape is diverse, featuring coastal plains, the Atlas and Rif mountain ranges, and the Sahara Desert.`,
    },
    {
      title: "Area and Climate",
      image: "/images/image2.jpg",
      text: `Morocco covers approximately 710,850 square kilometers. The climate varies from Mediterranean in the north to arid in the southeast. Coastal regions are mild, while the interior can experience extreme temperatures.`,
    },
    {
      title: "History and Economy",
      image: "/images/image3.jpg",
      text: `Morocco has a rich history influenced by Berber, Arab, and European cultures. It gained independence from France and Spain in 1956. Today, Morocco has a diverse economy based on agriculture, mining, manufacturing, tourism, and services.`,
    },
    {
      title: "People and Culture",
      image: "/images/image5.jpg",
      text: `The Moroccan population is primarily Arab-Berber, with strong family values and hospitality. Cultural expressions include traditional music, festivals, cuisine, and artisanal crafts. Cities like Fez and Marrakech are cultural hubs.`,
    },
    {
      title: "Official Religion",
      image: "/images/image4.jpg",
      text: `Islam is the official religion of Morocco. The majority of Moroccans are Sunni Muslims. Religious practices and traditions shape daily life, and Islamic architecture is visible throughout the country.`,
    },
    {
      title: "National Language",
      image: "/images/image6.jpg",
      text: `Morocco has two official languages: Arabic and Amazigh (Berber). French is widely used in business, education, and government, while English and Spanish are also understood in some regions.`,
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Enhanced Video Hero Section */}
      <div className="hero-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video"
        >
          <source src={moroccoOverview.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">{moroccoOverview.title}</h1>
            <p className="hero-subtitle">{moroccoOverview.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Redesigned Content Sections */}
      <div className="content-sections">
        {moroccoOverview.sections.map((section, index) => (
          <section
            key={section.title}
            className={`feature-section ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="text-content">
              <div className="section-header">
                <span className="section-number">0{index + 1}</span>
                <h2 className="section-title">{section.title}</h2>
              </div>
              <p className="section-text">{section.text}</p>
            </div>
            <div className="image-wrapper">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="section-image"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}