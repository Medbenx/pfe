"use client";
// import { useState } from "react";
import HeroSection from "./components/HeroSection";
import TravelHighlights from "./components/TravelHighlights";
// import PreEntryScreen from "./components/PreEntryScreen";
import "./styles.css";
import GuidesSection from "./components/GuidesSection";
import FAQSection from "./components/FAQSection";
import MapSection from "./components/MapSection";
import TrendingDestinations from "./components/TrendingDestinations";
// import PromoSection from "./components/PromoSection";
import RecommendedHotels from "./components/RecommendedHotels";
import Review from "./Review/Review";
import FeaturedTrips from "./components/FeaturedTrips";
import ContactSection from "./components/ContactSection";


export default function Home() {
/*   const [showPreEntryScreen, setShowPreEntryScreen] = useState(true);
 
  const handleOpen = () => {
    setShowPreEntryScreen(false); // Hide the pre-entry screen
  }; */

  return (
    <div>
     

      {/* {showPreEntryScreen ? (
        <PreEntryScreen onOpen={handleOpen} />
      ) : ( */}
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
          {/* <PromoSection /> */}
          <ContactSection />
        </>
      {/* )} */}
    </div>
  );
}
