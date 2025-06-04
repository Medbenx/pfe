"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/events.css';

const eventsData = [
  {
    id: 1,
    title: "Marrakech International Film Festival",
    description: "Africa's largest film festival held annually in Marrakech, attracting global cinema stars and showcasing Arab and African cinema.",
    image: "/images/events/film-festival.jpg",
    date: "November - December",
    featured: false
  },
  {
    id: 2,
    title: "Fes Festival of World Sacred Music",
    description: "A unique celebration of spiritual music from around the world, held in the ancient city of Fes since 1994.",
    image: "/images/events/fes-music.jpg",
    date: "June",
    featured: false
  },
  {
    id: 3,
    title: "2030 FIFA World Cup™",
    description: "Morocco will co-host the 2030 World Cup alongside Spain and Portugal, becoming the first African host since 2010.",
    image: "/images/events/world-cup.jpg",
    date: "June - July 2030",
    featured: true,
    details: {
      stadiums: ["Casablanca Grand Stadium", "Marrakech Arena", "Tangier Sports City"],
      matches: "Expected 10+ matches including quarter-finals",
      capacity: "Over 300,000 international visitors expected"
    }
  },
  {
    id: 4,
    title: "Gnaoua World Music Festival",
    description: "Celebration of Gnaoua music and its fusion with jazz, blues and pop in Essaouira's coastal paradise.",
    image: "/images/events/gnaoua-festival.jpg",
    date: "May",
    featured: false
  },
  {
    id: 5,
    title: "Rose Festival in Kelaa M'gouna",
    description: "Annual celebration of the rose harvest in the Valley of Roses with parades, music and traditional dances.",
    image: "/images/events/rose-festival.jpg",
    date: "May",
    featured: false
  }
];

export default function EventHappenings() {
  const worldCupRef = useRef<HTMLDivElement>(null);
  const eventCards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // World Cup floating animation
    const animateWorldCup = () => {
      if (worldCupRef.current) {
        const time = Date.now() * 0.001;
        const yPos = Math.sin(time * 0.5) * 10;
        worldCupRef.current.style.transform = `translateY(${yPos}px)`;
      }
      requestAnimationFrame(animateWorldCup);
    };
    animateWorldCup();

    // Event card scroll animations
    const handleScroll = () => {
      eventCards.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          if (isVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize visible cards

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="events-container">
      <div className="hero-section">
        <h1 className="hero-title">Morocco's Vibrant Events</h1>
        <p className="hero-subtitle">Cultural Celebrations & The Historic 2030 World Cup</p>
      </div>

      {/* World Cup Featured Section */}
      <div className="world-cup-feature">
        <div className="world-cup-content" ref={worldCupRef}>
          <div className="trophy-animation">
            <Image 
              src="/images/events/world-cup-trophy.png" 
              alt="FIFA World Cup Trophy"
              width={120}
              height={200}
              className="trophy-image"
            />
            <div className="glow-effect"></div>
          </div>
          <h2>2030 FIFA World Cup™ in Morocco</h2>
          <div className="stadiums-grid">
            {eventsData.find(e => e.featured)?.details?.stadiums.map((stadium, i) => (
              <div key={i} className="stadium-card">
                <div className="pulse-dot"></div>
                <p>{stadium}</p>
              </div>
            ))}
          </div>
          <p className="world-cup-desc">
            Morocco will make history as the first North African nation to host World Cup matches, 
            with state-of-the-art stadiums and unparalleled hospitality.
          </p>
        </div>
      </div>

      {/* All Events Grid */}
      <div className="events-grid">
        {eventsData.map((event, index) => (
          <div 
            key={event.id}
            ref={el => eventCards.current[index] = el}
            className={`event-card ${event.featured ? 'featured' : ''}`}
          >
            <div className="event-image-container">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="event-image"
              />
              {event.featured && (
                <div className="featured-badge">
                  <span>⭐ Featured Event</span>
                </div>
              )}
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              {event.featured && (
                <div className="world-cup-details">
                  <p><strong>Matches:</strong> {event.details?.matches}</p>
                  <p><strong>Visitors:</strong> {event.details?.capacity}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Countdown to World Cup */}
      <div className="countdown-section">
        <h3>Countdown to 2030 World Cup</h3>
        <div className="countdown-timer">
          <div className="countdown-unit">
            <span className="number">06</span>
            <span className="label">Years</span>
          </div>
          <div className="countdown-unit">
            <span className="number">11</span>
            <span className="label">Months</span>
          </div>
          <div className="countdown-unit">
            <span className="number">23</span>
            <span className="label">Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}