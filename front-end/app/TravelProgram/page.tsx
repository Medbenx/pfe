import Link from 'next/link';
import Image from 'next/image';
import '../styles/TravelProgram.css';

export default function TravelProgram() {
  // Moroccan destinations data
  const destinations = [
    { 
      id: 1, 
      city: 'Marrakech', 
      duration: '3 DAYS 2 NIGHTS',
      title: 'Exploring Marrakech: A Vibrant 3D2N City Adventure',
      image: '/images/marrakech.jpg'
    },
    { 
      id: 2, 
      city: 'Chefchaouen', 
      duration: '3 DAYS 2 NIGHTS',
      title: 'The Blue Pearl: A 3D2N Exploration of Chefchaouen',
      image: '/images/chefchaouen.jpg'
    },
    { 
      id: 3, 
      city: 'Sahara', 
      duration: '4 DAYS 3 NIGHTS',
      title: '4D3N Sahara Adventure: Experience the Desert Wonders',
      image: '/images/sahara.jpg'
    },
    { 
      id: 4, 
      city: 'Fes', 
      duration: '4 DAYS 3 NIGHTS',
      title: '4D3N in Fes: Morocco\'s Cultural Capital',
      image: '/images/fes.jpg'
    },
    { 
      id: 5, 
      city: 'Casablanca', 
      duration: '3 DAYS 2 NIGHTS',
      title: '3D2N in Casablanca: Modern Meets Traditional',
      image: '/images/casablanca.jpg'
    },
    { 
      id: 6, 
      city: 'Atlas', 
      duration: '3 DAYS 2 NIGHTS',
      title: '3D2N Atlas Trek: Unforgettable Mountain Journey',
      image: '/images/atlas.jpg'
    }
  ];

  const durations = [
    '3 Days 2 Nights',
    '4 Days 3 Nights',
    '5 Days 4 Nights',
    '6 Days 5 Nights',
    '7 Days 6 Nights',
    'Day Trip'
  ];

  return (
    <div className="experience-page">
      <div className="hero-section">
        <h1>Enjoy one of our carefully curated adventures to be cherished forever.</h1>
      </div>

      <div className="content-wrapper">
        <div className="filters-section">
          <div className="filter-group">
            <h2>State</h2>
            <select className="dropdown">
              <option>SELECT STATE</option>
              <option>Marrakech</option>
              <option>Chefchaouen</option>
              <option>Sahara Desert</option>
              <option>Fes</option>
              <option>Casablanca</option>
              <option>Atlas Mountains</option>
            </select>
          </div>

          <div className="filter-group">
            <h2>Duration</h2>
            <div className="duration-options">
              {durations.map((duration, index) => (
                <div key={index} className="duration-option">
                  <input type="radio" id={`duration-${index}`} name="duration" />
                  <label htmlFor={`duration-${index}`}>{duration}</label>
                </div>
              ))}
            </div>
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
                />
                <div className="duration-badge">{destination.duration}</div>
              </div>
              <div className="destination-info">
                <h3>{destination.city}</h3>
                <p>{destination.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}