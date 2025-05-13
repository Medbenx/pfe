import Image from 'next/image';
import { notFound } from 'next/navigation';
import '../../styles/TravelProgramDetails.css';

const experiences = {
  1: {
    title: 'Exploring Marrakech',
    duration: '3 Days 2 Nights',
    description: 'Immerse yourself in the vibrant colors and bustling souks of Marrakech, the Red City of Morocco.',
    itinerary: ['Day 1: Jemaa el-Fnaa & Koutoubia Mosque', 'Day 2: Bahia Palace & Majorelle Garden', 'Day 3: Atlas Mountains excursion'],
    image: '/images/Marrakech.jpg'
  },
 2: {
    title: 'Sahara Desert Adventure',
    duration: '4 Days 3 Nights',
    description: 'Experience the magic of the Moroccan desert...',
    itinerary: ['Day 1: Jemaa el-Fnaa & Koutoubia Mosque', 'Day 2: Bahia Palace & Majorelle Garden', 'Day 3: Atlas Mountains excursion'],
    image: '/images/Sahara.jpg'
  }
};


export default function TravelProgramDetails({ params }) {
  const experience = experiences[params.id];

  if (!experience) {
    return notFound();
  }

  return (
    <div className="experience-details">
      <div className="hero-image">
        <Image 
          src={experience.image} 
          alt={experience.title} 
          fill
          className="image"
        />
        <div className="overlay">
          <h1>{experience.title}</h1>
          <p>{experience.duration}</p>
        </div>
      </div>

      <div className="content">
        <div className="description">
          <h2>About This Adventure</h2>
          <p>{experience.description}</p>
        </div>

        <div className="itinerary">
          <h2>Itinerary</h2>
          <ul>
            {experience.itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}