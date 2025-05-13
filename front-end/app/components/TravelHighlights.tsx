import Image from "next/image";
import "../styles/TravelHighlights.css";
import { FaUser } from "react-icons/fa"; // Importing a person icon from react-icons

export default function HighlightsSection() {
  return (
    <div className="travel-highlights">
      <div className="cards">
        <div className="card">
          <Image
            width="500"
            height="300"
            src="/images/image10.jpg"
            alt="Must-Visit Cities"
          />
          <div className="card-content">
            <FaUser className="personIcon" /> {/* Person icon */}
            <h2>Top 5 Must-Visit Cities</h2>
            <p>From Marrakech to Fes, discover Morocco is hidden gems!</p>
            <div className="tags">
              <span>Travel Tips</span>
              <span>Culinary Delights</span>
            </div>
          </div>
        </div>

        <div className="card">
          <Image
            width="500"
            height="300"
            src="/images/image11.jpg"
            alt="Flavors of Morocco"
          />
          <div className="card-content">
            <FaUser className="personIcon" /> {/* Person icon */}
            <h2>Savor the Flavors of Morocco</h2>
            <p>Indulge in tagines, couscous, and street food galore!</p>
            <div className="tags">
              <span>Cultural Events</span>
              <span>Local Cuisine</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <Image
            width="500"
            height="300"
            src="/images/image12.jpg"
            alt="Flavors of Morocco"
          />
          <div className="card-content">
            <FaUser className="personIcon" /> {/* Person icon */}
            <h2>Adventure Awaits You</h2>
            <p>Hike the Atlas Mountains or surf the Atlantic waves!</p>
            <div className="tags">
              <span>Adventure</span>
              <span>Nature</span>
            </div>
          </div>
        </div>

        <div className="card">
          <Image
            width="500"
            height="300"
            src="/images/image13.jpg"
            alt="Flavors of Morocco"
          />
          <div className="card-content">
            <FaUser className="personIcon" /> {/* Person icon */}
            <h2>Experience Moroccan Festivals</h2>
            <p>Join the vibrant celebrations and dance the night away!</p>
            <div className="tags">
              <span>Festivalss</span>
              <span>Nightlife</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
