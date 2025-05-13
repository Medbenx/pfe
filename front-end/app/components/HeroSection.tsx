import Carousel from "./Carousel";
import "../styles/HeroSection.css";
import SearchForm from "./searchForm";

export default function HeroSection() {
  return (
    <div className="Hero">
      {/* Morocco Text at Top Right */}
      <div className="morocco">
        <h1>Visit Morocco</h1>
        <h2>Beautiful Country In Africa</h2>
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Overlay with Search Bar */}
      <div className="overlay">
        <h1>Discover Your Favorite Place in Morocco</h1>
        <p>Explore the beauty of Morocco without limits.</p>

        <SearchForm />
      </div>
    </div>
  );
}
