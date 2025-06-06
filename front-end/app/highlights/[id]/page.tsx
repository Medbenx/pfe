import { notFound } from 'next/navigation';
import Image from 'next/image';
import { highlights } from '../../data/highlights';
import '../../styles/HighlightDetail.css'; // Assuming you have a CSS file for styles

export default function HighlightDetail({ params }: { params: { id: string } }) {
  const highlight = highlights.find(h => h.id.toString() === params.id);
  
  if (!highlight) {
    notFound();
  }

  return (
    <div className="highlight-detail">
      {/* Hero Section with Parallax Effect */}
      <div className="hero-section">
        <div className="hero-image-container">
          <Image
            src={highlight.image}
            alt={highlight.title}
            fill
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title animate-fadeIn">{highlight.title}</h1>
          <p className="hero-description animate-fadeIn animate-delay-200">
            {highlight.description}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="content-container">
        <div className="intro-section animate-fadeInUp">
          <p>{highlight.content.intro}</p>
        </div>

        {highlight.content.sections.map((section, index) => (
          <section 
            key={index} 
            className={`section-block ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="section-content animate-fadeInUp">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-text">{section.text}</p>
              {section.image && (
                <div className="section-image-container">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={800}
                    height={450}
                    className="section-image"
                  />
                </div>
              )}
            </div>
          </section>
        ))}

        <div className="conclusion-section animate-fadeInUp">
          <p>{highlight.content.conclusion}</p>
        </div>

        {/* Tags */}
        <div className="tags-container">
          {highlight.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        {/* Back Button */}
        <div className="back-button-container">
          <a href="/" className="back-button">
            ← Back to Highlights
          </a>
        </div>
      </div>
    </div>
  );
}