import Image from 'next/image';
import { notFound } from 'next/navigation';
import '../../styles/ExperienceDetails.css';

// Detailed data for each Moroccan experience
const experiences = {
  1: {
    city: 'Marrakech',
    title: 'Discovering Marrakech Through Its Rich Heritage & Local Markets',
    duration: '3 DAYS 2 NIGHTS',
    topic: 'Culture & Heritage',
    description: 'Immerse yourself in the vibrant colors and bustling souks of Marrakech, the Red City of Morocco. This 3-day adventure takes you through historic palaces, lively markets, and hidden gems.',
    highlights: [
      'Explore the iconic Jemaa el-Fnaa square',
      'Visit the stunning Bahia Palace',
      'Discover the secret Majorelle Garden',
      'Experience traditional Moroccan cuisine'
    ],
    itinerary: [
      { day: 'Day 1', activities: ['Arrival & hotel check-in', 'Guided tour of Koutoubia Mosque', 'Evening in Jemaa el-Fnaa'] },
      { day: 'Day 2', activities: ['Bahia Palace visit', 'Majorelle Garden exploration', 'Souk shopping experience'] },
      { day: 'Day 3', activities: ['Atlas Mountains day trip', 'Traditional lunch in a Berber village', 'Departure'] }
    ],
    image: '/marrakech.jpg',
    gallery: [
      '/marrakech-1.jpg',
      '/marrakech-2.jpg',
      '/marrakech-3.jpg'
    ]
  },
  2: {
    city: 'Chefchaouen',
    title: 'The Blue Pearl: A 3D2N Exploration of Chefchaouen',
    duration: '3 DAYS 2 NIGHTS',
    topic: 'Nature & Adventure',
    description: 'Discover the magical blue-washed streets of Chefchaouen nestled in the Rif Mountains. This tranquil getaway offers stunning views, local crafts, and peaceful walks through picturesque alleys.',
    highlights: [
      'Wander through the famous blue streets',
      'Hike to the Spanish Mosque for sunset views',
      'Visit local artisan workshops',
      'Experience authentic Moroccan hospitality'
    ],
    itinerary: [
      { day: 'Day 1', activities: ['Arrival & orientation walk', 'Explore the Medina', 'Dinner with local family'] },
      { day: 'Day 2', activities: ['Full day exploring the blue city', 'Visit Ras El Maa waterfall', 'Shopping for local crafts'] },
      { day: 'Day 3', activities: ['Sunrise hike', 'Breakfast with mountain views', 'Departure'] }
    ],
    image: '/chefchaouen.jpg',
    gallery: [
      '/chefchaouen-1.jpg',
      '/chefchaouen-2.jpg',
      '/chefchaouen-3.jpg'
    ]
  },
  // Add similar detailed entries for other IDs (3-6)
};

export default function ExperienceDetails({ params }: { params: { id: string } }) {
  const experience = experiences[params.id as keyof typeof experiences];

  if (!experience) {
    return notFound();
  }

  return (
    <div className="experience-detail">
      {/* Hero Section */}
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
            <h1>{experience.title}</h1>
            <div className="meta-info">
              <span>{experience.city}</span>
              <span>{experience.duration}</span>
              <span>{experience.topic}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Description Section */}
        <section className="description-section">
          <h2>About This Experience</h2>
          <p>{experience.description}</p>
          
          <div className="highlights">
            <h3>Experience Highlights</h3>
            <ul>
              {experience.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Itinerary Section */}
        <section className="itinerary-section">
          <h2>Detailed Itinerary</h2>
          <div className="itinerary-days">
            {experience.itinerary.map((day, index) => (
              <div key={index} className="day-card">
                <h3>{day.day}</h3>
                <ul>
                  {day.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="image-gallery">
            {experience.gallery.map((image, index) => (
              <div key={index} className="gallery-image">
                <Image
                  src={image}
                  alt={`${experience.city} ${index + 1}`}
                  fill
                  className="image"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Booking CTA */}
        <div className="booking-cta">
          <button className="book-now-btn">Book This Experience</button>
          <button className="inquiry-btn">Make an Inquiry</button>
        </div>
      </div>
    </div>
  );
}