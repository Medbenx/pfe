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
          <GuidesSection />
          <FAQSection />
          <MapSection />
          <ContactSection />
          <FooterSection />
        </>
      {/* )} */}
    </div>
  );
}
