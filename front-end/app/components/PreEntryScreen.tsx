// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import "../styles/PreEntryScreen.css";

// export default function DoorIntro() {
//   const router = useRouter();
//   const [opened, setOpened] = useState(false);
//   const [zoom, setZoom] = useState(false);

//   const handleClick = () => {
//     if (!opened) {
//       setOpened(true);
//       setTimeout(() => {
//         setZoom(true);
//         setTimeout(() => router.push("/home"), 1000);
//       }, 1500);
//     }
//   };

//   return (
//     <div className="preEntryScreen">
//       <div className={`doorContainer ${zoom ? "zoomEffect" : ""}`}>
//         {/* Left Door */}
//         <div className={`leftDoor ${opened ? "openLeft" : ""}`}>
//           <Image
//             src="/images/left-door.png"
//             alt="Left Door"
//             width={370}
//             height={700}
//             className="doorImage"
//             priority
//           />
//         </div>
        
//         {/* Right Door */}
//         <div className={`rightDoor ${opened ? "openRight" : ""}`}>
//           <Image
//             src="/images/right-door.png"
//             alt="Right Door"
//             width={370}
//             height={700}
//             className="doorImage"
//             priority
//           />
//         </div>
//       </div>

//       <div className="welcomeText">
//         <h1 className={`titleAnimation ${opened ? "fadeOutText" : ""}`}>
//           Welcome to Morocco
//         </h1>
//       </div>

//       <button 
//         className={`enterButton ${opened ? "buttonExit" : ""}`}
//         onClick={handleClick}
//       >
//         Entrer
//       </button>

//       {/* Light effect when doors open */}
//       {opened && <div className="lightEffect"></div>}
//     </div>
//   );
// }

// PreEntryScreen.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import "../styles/PreEntryScreen.css";

export default function PreEntryScreen({ onOpen }: { onOpen: () => void }) {
  const [opened, setOpened] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleClick = () => {
    if (!opened) {
      setOpened(true);
      setTimeout(() => {
        setZoom(true);
        setTimeout(() => onOpen(), 1000); // Call onOpen instead of router.push
      }, 1500);
    }
  };

  return (
    <div className="preEntryScreen">
      <div className={`doorContainer ${zoom ? "zoomEffect" : ""}`}>
        {/* Left Door */}
        <div className={`leftDoor ${opened ? "openLeft" : ""}`}>
          <Image
            src="/images/left-door.png"
            alt="Left Door"
            width={370}
            height={700}
            className="doorImage"
            priority
          />
        </div>
        
        {/* Right Door */}
        <div className={`rightDoor ${opened ? "openRight" : ""}`}>
          <Image
            src="/images/right-door.png"
            alt="Right Door"
            width={370}
            height={700}
            className="doorImage"
            priority
          />
        </div>
      </div>

      <div className="welcomeText">
        <h1 className={`titleAnimation ${opened ? "fadeOutText" : ""}`}>
          Welcome to Morocco
        </h1>
      </div>

      <button 
        className={`enterButton ${opened ? "buttonExit" : ""}`}
        onClick={handleClick}
      >
        Entrer
      </button>

      {/* Light effect when doors open */}
      {opened && <div className="lightEffect"></div>}
    </div>
  );
}