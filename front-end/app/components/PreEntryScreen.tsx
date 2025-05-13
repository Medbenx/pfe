import { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js
import "../styles/PreEntryScreen.css"; // Import the CSS file

export default function PreEntryScreen({ onOpen }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const handleOpen = () => {
    setIsDoorOpen(true); // Trigger door opening animation
    setTimeout(() => {
      setIsFadingOut(true); // Start fade-out animation
      setTimeout(() => {
        onOpen(); // Hide the pre-entry screen after animations
      }, 500); // Match the duration of the fade-out animation
    }, 1000); // Delay fade-out until door animation completes
  };

  return (
    <div className={`preEntryScreen ${isFadingOut ? "fadeOut" : ""}`}>
      <div className={`doorContainer ${isDoorOpen ? "doorOpen" : ""}`}>
        <Image
          src="/images/moroccan-door.jpg"
          alt="Moroccan Door"
          width={500} // Numeric value (no "px")
          height={700} // Numeric value (no "px")
          className="doorImage"
        />
      </div>
      <button className="openButton" onClick={handleOpen}>
        Open
      </button>
    </div>
  );
}