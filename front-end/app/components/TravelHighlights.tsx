'use client';

import Image from "next/image";
import Link from "next/link";
import { FaUser, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import styles from '../styles/TravelHighlights.module.css';

interface HighlightCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function HighlightsSection() {
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<any>(null);

  const highlights: HighlightCard[] = [
    {
      id: 1,
      title: "Top 5 Must-Visit Cities",
      description: "From Marrakech to Fes, discover Morocco's hidden gems!",
      image: "/images/image10.jpg",
      tags: ["Travel Tips", "Culinary Delights"],
    },
    {
      id: 2,
      title: "Savor the Flavors of Morocco",
      description: "Indulge in tagines, couscous, and street food galore!",
      image: "/images/image11.jpg",
      tags: ["Cultural Events", "Local Cuisine"],
    },
    {
      id: 3,
      title: "Adventure Awaits You",
      description: "Hike the Atlas Mountains or surf the Atlantic waves!",
      image: "/images/image12.jpg",
      tags: ["Adventure", "Nature"],
    },
    {
      id: 4,
      title: "Experience Moroccan Festivals",
      description: "Join the vibrant celebrations and dance the night away!",
      image: "/images/image13.jpg",
      tags: ["Festivals", "Nightlife"],
    },
    {
      id: 5,
      title: "Explore Morocco's Imperial History",
      description: "Walk through centuries of history in Rabat, Meknes, and Fes.",
      image: "/images/image14.jpg",
      tags: ["History", "Architecture"],
    },
    {
      id: 6,
      title: "Discover the Magic of the Sahara",
      description: "Camel rides, starry skies, and golden dunes await in Merzouga.",
      image: "/images/image15.jpg",
      tags: ["Desert Tours", "Nature"],
    }
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section id="highlights" className={styles.highlightsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Travel Highlights</h2>
          <p className={styles.sectionSubtitle}>Discover the best of Morocco with our curated experiences</p>
        </div>

        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.swiperWrapper}
        >
          <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: true,
            }}
            loop={true}
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className={`${styles.swiperContainer} ${isHovered ? styles.paused : ''}`}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // We'll handle this manually
            }}
          >
            {highlights.map((highlight) => (
              <SwiperSlide key={highlight.id} className={styles.swiperSlide}>
                <Link href={`/highlights/${highlight.id}`} className={styles.cardLink}>
                  <div className={styles.card}>
                    <div className={styles.cardImageContainer}>
                      <Image
                        fill
                        src={highlight.image}
                        alt={highlight.title}
                        className={styles.cardImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                      <div className={styles.imageOverlay} />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <div className={styles.userIcon}>
                          <FaUser />
                        </div>
                        <h3 className={styles.cardTitle}>{highlight.title}</h3>
                      </div>
                      <p className={styles.cardDescription}>{highlight.description}</p>
                      <div className={styles.cardFooter}>
                        <div className={styles.tags}>
                          {highlight.tags.map((tag, i) => (
                            <span key={i} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={styles.arrowIcon}>
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            
            <div className={styles.swiperButtonPrev}></div>
            <div className={styles.swiperButtonNext}></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}