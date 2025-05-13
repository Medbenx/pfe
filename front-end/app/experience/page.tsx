import Link from 'next/link';
import Image from 'next/image';
import '../styles/Experience.css';

export default function Experience() {
  // Moroccan destinations data
  const destinations = [
    { 
      id: 1, 
      city: 'Marrakech', 
      topic: 'Culture & Heritage',
      title: 'Discovering Marrakech Through Its Rich Heritage & Local Markets',
      image: '/images/marrakech.jpg'
    },
    { 
      id: 2, 
      city: 'Chefchaouen', 
      topic: 'Nature & Adventure',
      title: 'Relaxing Getaways to Explore in the Blue City',
      image: '/images/chefchaouen.jpg'
    },
    { 
      id: 3, 
      city: 'Sahara Desert', 
      topic: 'Adventure',
      title: 'Desert Escapes: Top 9 Retreats in the Sahara',
      image: '/images/sahara.jpg'
    },
    { 
      id: 4, 
      city: 'Essaouira', 
      topic: 'Island & Beaches',
      title: 'Exploring Essaouira: Top Beachfront Activities',
      image: '/images/essaouira.jpg'
    },
    { 
      id: 5, 
      city: 'Fes', 
      topic: 'Culture & Heritage',
      title: '9 Best Riads & Cultural Stays in Fes',
      image: '/images/fes.jpg'
    },
    { 
      id: 6, 
      city: 'Atlas Mountains', 
      topic: 'Nature & Adventure',
      title: 'Cool Escapes: Atlas Mountain Retreats',
      image: '/images/atlas.jpg'
    }
  ];

  const topics = [
    'Island & Beaches',
    'Culture & Heritage',
    'Food & Drinks',
    'Family Fun',
    'City Excitement',
    'Nature & Adventure',
    'Stay'
  ];

  const cities = [
    'Marrakech',
    'Chefchaouen',
    'Sahara Desert',
    'Essaouira',
    'Fes',
    'Atlas Mountains',
    'Casablanca',
    'Rabat'
  ];

  return (
    <div className="experience-page">
      <div className="hero-section">
        <h1>Be an explorer and experience the beauty of diversity in Morocco.</h1>
      </div>

      <div className="content-wrapper">
        <div className="filters-section">
          <div className="filter-group">
            <h2>State</h2>
            <select className="dropdown">
              <option>SELECT STATE</option>
              {cities.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <h2>Topics</h2>
            <ul className="topics-list">
              {topics.map((topic, index) => (
                <li key={index}>
                  <Link href={`/experience?topic=${topic.toLowerCase().replace(' & ', '-')}`}>
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="destinations-grid">
          {destinations.map(destination => (
            <Link href={`/experience/${destination.id}`} key={destination.id} className="destination-card">
              <div className="destination-image">
                <Image 
                  src={destination.image} 
                  alt={destination.city} 
                  fill
                  className="image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="destination-info">
                <span className="destination-city">{destination.city}</span>
                <h3>{destination.title}</h3>
                <span className="destination-topic">{destination.topic}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}