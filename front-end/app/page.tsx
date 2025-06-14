"use client";
// import { useState } from "react";
import HeroSection from "./components/HeroSection";
import TravelHighlights from "./components/TravelHighlights";
// import PreEntryScreen from "./components/PreEntryScreen";
import "./styles.css";
import GuidesSection from "./components/GuidesSection";
import FAQSection from "./components/FAQSection";
import MapSection from "./components/MapSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import TrendingDestinations from "./components/TrendingDestinations";
import FeaturedTrips from "./components/FeaturedTrips";
import PromoSection from "./components/PromoSection";
import RecommendedHotels from "./components/RecommendedHotels";




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
          <TravelHighlights />
           <TrendingDestinations />
           <FeaturedTrips />
          <GuidesSection />
          <RecommendedHotels />
          <FAQSection />
          <MapSection />
          <PromoSection />
          <ContactSection />
          <FooterSection />
        </>
      {/* )} */}
    </div>
  );
}
