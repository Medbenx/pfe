"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Carousel.css";

const images = [
  { src: "/images/image1.jpg", text: "City Tetouan" },
  { src: "/images/image2.jpg", text: "City Rabat" },
  { src: "/images/image3.jpg", text: "City Casablanca" },
  { src: "/images/image4.jpg", text: "City Marrakech" },
  { src: "/images/image5.jpg", text: "City Fes" },
  { src: "/images/image6.jpg", text: "City Tangier" },
  { src: "/images/image7.jpg", text: "City Chefchaouen" },
  { src: "/images/image8.jpg", text: "City Agadir" },
  { src: "/images/image9.jpg", text: "City Meknes" },
  { src: "/images/image10.jpg", text: "City Ouarzazate" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (!isHovered) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === "ArrowLeft") {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight") {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <Image
          src={images[index].src}
          alt="Morocco"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="text-overlay">
        <h2>{images[index].text}</h2>
      </div>

      {/* Navigation Buttons with Icons */}
      <button
        className="nav-button prev"
        onClick={() =>
          setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
        }
        aria-label="Previous Image"
      >
        <FaArrowLeft />
      </button>
      <button
        className="nav-button next"
        onClick={() => setIndex((prevIndex) => (prevIndex + 1) % images.length)}
        aria-label="Next Image"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="indicators">
        {images.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}