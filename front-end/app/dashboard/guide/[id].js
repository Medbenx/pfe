import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaLanguage, 
  FaCalendarAlt,
  FaCertificate,
  FaComments,
  FaChartLine
} from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import "../../styles/GuideDashboard.css";

const guides = [
  {
    id: 1,
    name: "Ahmed El Fassi",
    image: "/images/guide1.jpg",
    bio: "Certified Moroccan cultural expert with 10+ years experience",
    rating: 4.9,
    reviews: 128,
    location: "Marrakech",
    languages: ["Arabic", "French", "English", "Spanish"],
    specialties: ["Historical Tours", "Atlas Treks", "Cultural Immersion"],
    certifications: ["National Tourism Certification", "Wilderness First Aid"],
    experience: [
      {
        title: "Senior Guide",
        company: "Morocco Cultural Tours",
        duration: "2015-Present"
      },
      {
        title: "Tour Coordinator",
        company: "Atlas Mountain Expeditions",
        duration: "2010-2015"
      }
    ],
    upcomingTours: [
      {
        date: "2023-11-15",
        title: "Marrakech Medina Walk",
        available: true
      },
      {
        date: "2023-11-20",
        title: "Atlas Mountains Day Trip",
        available: true
      }
    ],
    reviewsList: [
      {
        author: "Sophie M.",
        rating: 5,
        comment: "Ahmed's knowledge of Moroccan history brought our tour to life!",
        date: "2023-10-15"
      },
      // ... more reviews
    ],
    stats: {
      toursCompleted: 423,
      repeatClients: 68,
      responseRate: "98%"
    }
  }
];

export default function GuideDashboard() {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState("overview");
  const guide = guides.find((g) => g.id === parseInt(id));

  if (!guide) {
    return <div className="not-found">Guide not found</div>;
  }

  return (
    <div className="guide-dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="profile-header">
          <div className="avatar-container">
            <Image
              src={guide.image}
              alt={guide.name}
              fill
              className="guide-avatar"
            />
            <RiVerifiedBadgeFill className="verified-badge" />
          </div>
          <div className="profile-meta">
            <h1>{guide.name}</h1>
            <div className="rating">
              <FaStar className="star-icon" />
              <span>{guide.rating}</span>
              <span>({guide.reviews} reviews)</span>
            </div>
            <div className="location">
              <FaMapMarkerAlt />
              <span>{guide.location}</span>
            </div>
            <div className="languages">
              <FaLanguage />
              <span>{guide.languages.join(", ")}</span>
            </div>
          </div>
        </div>

        <nav className="dashboard-tabs">
          {["overview", "tours", "reviews", "stats"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        {activeTab === "overview" && (
          <div className="overview-tab">
            <section className="bio-section">
              <h2>About Me</h2>
              <p>{guide.bio}</p>
            </section>

            <section className="specialties-section">
              <h2>Specialties</h2>
              <div className="specialties-grid">
                {guide.specialties.map((spec, i) => (
                  <div key={i} className="specialty-card">
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="experience-section">
              <h2>Experience & Certifications</h2>
              <div className="experience-timeline">
                {guide.experience.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3>{exp.title}</h3>
                      <p>{exp.company}</p>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="certifications">
                {guide.certifications.map((cert, i) => (
                  <div key={i} className="certification">
                    <FaCertificate />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "tours" && (
          <div className="tours-tab">
            <h2>Upcoming Tours</h2>
            <div className="tours-grid">
              {guide.upcomingTours.map((tour, i) => (
                <div key={i} className="tour-card">
                  <div className="tour-date">
                    <FaCalendarAlt />
                    <span>{tour.date}</span>
                  </div>
                  <h3>{tour.title}</h3>
                  <button className={`book-btn ${tour.available ? "available" : "sold-out"}`}>
                    {tour.available ? "Book Now" : "Sold Out"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="reviews-tab">
            <h2>Client Reviews</h2>
            <div className="reviews-list">
              {guide.reviewsList.map((review, i) => (
                <div key={i} className="review-card">
                  <div className="review-header">
                    <h3>{review.author}</h3>
                    <div className="review-rating">
                      {[...Array(5)].map((_, starIdx) => (
                        <FaStar 
                          key={starIdx} 
                          className={`star-icon ${starIdx < review.rating ? "filled" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="review-comment">"{review.comment}"</p>
                  <span className="review-date">{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="stats-tab">
            <h2>Performance Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <FaChartLine className="stat-icon" />
                <h3>{guide.stats.toursCompleted}</h3>
                <p>Tours Completed</p>
              </div>
              <div className="stat-card">
                <FaComments className="stat-icon" />
                <h3>{guide.stats.repeatClients}%</h3>
                <p>Repeat Clients</p>
              </div>
              <div className="stat-card">
                <FaStar className="stat-icon" />
                <h3>{guide.stats.responseRate}</h3>
                <p>Response Rate</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}