// import Image from "next/image";
// import "../styles/TravelHighlights.css";
// import { FaUser } from "react-icons/fa"; // Importing a person icon from react-icons

// export default function HighlightsSection() {
//   return (
//     <div className="travel-highlights">
//       <div className="cards">
//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image10.jpg"
//             alt="Must-Visit Cities"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Top 5 Must-Visit Cities</h2>
//             <p>From Marrakech to Fes, discover Morocco is hidden gems!</p>
//             <div className="tags">
//               <span>Travel Tips</span>
//               <span>Culinary Delights</span>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image11.jpg"
//             alt="Flavors of Morocco"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Savor the Flavors of Morocco</h2>
//             <p>Indulge in tagines, couscous, and street food galore!</p>
//             <div className="tags">
//               <span>Cultural Events</span>
//               <span>Local Cuisine</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="cards">
//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image12.jpg"
//             alt="Flavors of Morocco"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Adventure Awaits You</h2>
//             <p>Hike the Atlas Mountains or surf the Atlantic waves!</p>
//             <div className="tags">
//               <span>Adventure</span>
//               <span>Nature</span>
//             </div>
//           </div>
//         </div>

//         <div className="card">
//           <Image
//             width="500"
//             height="300"
//             src="/images/image13.jpg"
//             alt="Flavors of Morocco"
//           />
//           <div className="card-content">
//             <FaUser className="personIcon" /> {/* Person icon */}
//             <h2>Experience Moroccan Festivals</h2>
//             <p>Join the vibrant celebrations and dance the night away!</p>
//             <div className="tags">
//               <span>Festivalss</span>
//               <span>Nightlife</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import "../styles/TravelHighlights.css";
import { FaUser, FaArrowRight } from "react-icons/fa";

interface HighlightCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function HighlightsSection() {
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
  },
  ];

  return (
    <div className="highlights-container">
      <div className="travel-highlights">
        <h2 className="section-title">Travel Highlights</h2>
        <p className="section-subtitle">Discover the best of Morocco</p>
        
        <div className="cards-grid">
          {highlights.map((highlight) => (
            <Link 
              href={`/highlights/${highlight.id}`} 
              key={highlight.id}
              className="card-link"
            >
              <div className="card">
                <div className="card-image-container">
                  <Image
                    width={500}
                    height={300}
                    src={highlight.image}
                    alt={highlight.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <FaUser className="person-icon" />
                    <h3>{highlight.title}</h3>
                  </div>
                  <p>{highlight.description}</p>
                  <div className="card-footer">
                    <div className="tags">
                      {highlight.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>
                    <FaArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
