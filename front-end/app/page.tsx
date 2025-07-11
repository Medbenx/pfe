// "use client";
// import { useState } from "react";
// import HeroSection from "./components/HeroSection";
// import TravelHighlights from "./components/TravelHighlights";
// import PreEntryScreen from "./components/PreEntryScreen";
// import "./styles.css";
// import GuidesSection from "./components/GuidesSection";
// import FAQSection from "./components/FAQSection";
// import MapSection from "./components/MapSection";
// import TrendingDestinations from "./components/TrendingDestinations";
// import RecommendedHotels from "./components/RecommendedHotels";
// import Review from "./Review/Review";
// import FeaturedTrips from "./components/FeaturedTrips";
// import ContactSection from "./components/ContactSection";

// export default function Home() {
//   const [showPreEntryScreen, setShowPreEntryScreen] = useState(true);

//   const handleOpen = () => {
//     setShowPreEntryScreen(false); // Hide the pre-entry screen
//   };

//   return (
//     <div>
//       {showPreEntryScreen ? (
//         <PreEntryScreen onOpen={handleOpen} />
//       ) : (
//         <>
//           <HeroSection />
//           <TrendingDestinations />
//           <TravelHighlights />
//           <FeaturedTrips />
//           <GuidesSection />
//           <RecommendedHotels />
//           <Review />
//           <FAQSection />
//           <MapSection />
//           <ContactSection />
//         </>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import TravelHighlights from "./components/TravelHighlights";
import PreEntryScreen from "./components/PreEntryScreen";
import "./styles.css";
import GuidesSection from "./components/GuidesSection";
import FAQSection from "./components/FAQSection";
import MapSection from "./components/MapSection";
import TrendingDestinations from "./components/TrendingDestinations";
import RecommendedHotels from "./components/RecommendedHotels";
import Review from "./Review/Review";
import FeaturedTrips from "./components/FeaturedTrips";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const [showPreEntryScreen, setShowPreEntryScreen] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if the page was loaded via refresh
    const isRefresh = performance.navigation.type === 1; // 1 means page was refreshed
    const firstVisit = !localStorage.getItem('hasVisited');
    
    // Show door if first visit OR refresh
    setShowPreEntryScreen(firstVisit || isRefresh);
    
    // Mark as visited (for future visits)
    localStorage.setItem('hasVisited', 'true');
  }, []);

  const handleOpen = () => {
    setShowPreEntryScreen(false);
  };

  if (showPreEntryScreen === null) {
    return null; // or a loading spinner
  }

  return (
    <div>
      {showPreEntryScreen ? (
        <PreEntryScreen onOpen={handleOpen} />
      ) : (
        <>
          <HeroSection />
          <TrendingDestinations />
          <TravelHighlights />
          <FeaturedTrips />
          <GuidesSection />
          <RecommendedHotels />
          <Review />
          <FAQSection />
          <MapSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}