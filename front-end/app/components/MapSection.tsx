// import React, { useEffect, useState } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// // import "leaflet-elevation";
// // import "leaflet-elevation/dist/leaflet-elevation.css";
// import "../styles/MapSection.css";
// import Image from "next/image";

// // Custom 3D-like marker icon
// const create3DIcon = (color = "#3b82f6") => {
//   return L.divIcon({
//     html: `
//       <div style="
//         position: relative;
//         width: 24px;
//         height: 24px;
//         background: ${color};
//         border-radius: 50% 50% 50% 0;
//         transform: rotate(-45deg);
//         box-shadow: -2px -2px 5px rgba(0,0,0,0.3);
//       ">
//         <div style="
//           position: absolute;
//           width: 16px;
//           height: 16px;
//           background: white;
//           border-radius: 50%;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%) rotate(45deg);
//         "></div>
//       </div>
//     `,
//     className: "",
//     iconSize: [24, 24],
//     iconAnchor: [12, 24],
//   });
// };

// const CityMarkers = () => {
//   const map = useMap();
//   const [activeCity, setActiveCity] = useState(null);

//   // Enhanced city data with more details
//   const cities = [
//     {
//       id: 1,
//       name: "Tetouan",
//       coordinates: [35.5769, -5.3686],
//       description: "Known as the 'White Dove', Tetouan is a blend of Moroccan and Andalusian influences.",
//       highlights: [
//         "UNESCO-listed Medina",
//         "Ethnographic Museum",
//         "Royal Palace",
//         "Martil Beach"
//       ],
//       population: "380,000",
//       bestTime: "March-May, September-November",
//       image: "/images/map/tetouan.jpg",
//       color: "#3b82f6"
//     },
//     {
//       id: 2,
//       name: "Tangier",
//       coordinates: [35.7595, -5.8340],
//       description: "The gateway between Africa and Europe, with a rich international history.",
//       highlights: [
//         "Kasbah Museum",
//         "Hercules Caves",
//         "Cap Spartel",
//         "American Legation Museum"
//       ],
//       population: "1.1 million",
//       bestTime: "April-June, September-October",
//       image: "/images/map/map/tangier.jpg",
//       color: "#10b981"
//     },
//     {
//       id: 3,
//       name: "Rabat",
//       coordinates: [34.0209, -6.8416],
//       description: "Morocco's modern capital with well-preserved historical sites.",
//       highlights: [
//         "Hassan Tower",
//         "Kasbah of the Udayas",
//         "Chellah Necropolis",
//         "Royal Palace"
//       ],
//       population: "1.8 million",
//       bestTime: "March-May, September-November",
//       image: "/images/map/rabat.jpg",
//       color: "#f59e0b"
//     },
//     {
//       id: 4,
//       name: "Casablanca",
//       coordinates: [33.5731, -7.5898],
//       description: "Morocco's economic hub with impressive modern architecture.",
//       highlights: [
//         "Hassan II Mosque",
//         "Corniche",
//         "Habous Quarter",
//         "Royal Palace of Casablanca"
//       ],
//       population: "3.7 million",
//       bestTime: "April-June, September-October",
//       image: "/images/map/casablanca.jpg",
//       color: "#ef4444"
//     },
//     {
//       id: 5,
//       name: "Marrakech",
//       coordinates: [31.6295, -7.9811],
//       description: "The Red City, famous for its vibrant souks and palaces.",
//       highlights: [
//         "Jemaa el-Fnaa",
//         "Bahia Palace",
//         "Saadian Tombs",
//         "Majorelle Garden"
//       ],
//       population: "1 million",
//       bestTime: "March-May, September-November",
//       image: "/images/map/marrakech.jpg",
//       color: "#8b5cf6"
//     }
//   ];

//   // Fly to city when active city changes
//   useEffect(() => {
//     if (activeCity) {
//       const city = cities.find(c => c.id === activeCity);
//       if (city) {
//         map.flyTo(city.coordinates, 12, {
//           duration: 1.5,
//           easeLinearity: 0.25
//         });
//       }
//     }
//   }, [activeCity]);

//   return (
//     <>
//       {cities.map((city) => (
//         <Marker
//           key={city.id}
//           position={city.coordinates}
//           icon={create3DIcon(city.color)}
//           eventHandlers={{
//             click: () => setActiveCity(city.id),
//           }}
//         >
//           <Popup className="custom-popup">
//             <div className="popup-content">
//               <h3>{city.name}</h3>
//               <Image
//                 width={300}
//                 height={200}
//                 src={city.image}
//                 alt={city.name}
//                 className="popup-image"
//                 onError={(e) => {
//                   e.target.src = '/images/map/default-city.jpg';
//                 }}
//               />
//               <p>{city.description}</p>
//               <div className="popup-details">
//                 <p><strong>Population:</strong> {city.population}</p>
//                 <p><strong>Best time to visit:</strong> {city.bestTime}</p>
//                 <div className="highlights-section">
//                   <h4>Top Highlights:</h4>
//                   <ul>
//                     {city.highlights.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </Popup>
//         </Marker>
//       ))}
//     </>
//   );
// };

// const MapControls = () => {
//   const map = useMap();

//   useEffect(() => {
//     // Add terrain control
//     L.control.zoom({ position: 'topright' }).addTo(map);

//     // Add scale control
//     L.control.scale({ imperial: false }).addTo(map);

//     // Add 3D terrain layer (using OpenTopoMap)
//     L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       maxZoom: 17,
//       attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     }).addTo(map);

//     return () => {
//       map.eachLayer((layer: { _url: string | string[]; }) => {
//         if (layer instanceof L.TileLayer && layer._url.includes('opentopomap')) {
//           map.removeLayer(layer);
//         }
//       });
//     };
//   }, []);

//   return null;
// };

// export default function MapSection() {
//   return (
//     <div className="mapSection">
//       <h2>Explore Morocco in 3D</h2>
//       <p className="subtitle">Click on any city marker to discover its highlights and travel information</p>

//       <div className="mapContainer">
//         <MapContainer
//           center={[31.7917, -7.0926]}
//           zoom={6}
//           scrollWheelZoom={true}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <MapControls />
//           <CityMarkers />
//         </MapContainer>
//       </div>

//       <div className="map-legend">
//         <h4>City Categories:</h4>
//         <div className="legend-items">
//           <div className="legend-item">
//             <span className="legend-color" style={{ backgroundColor: "#3b82f6" }}></span>
//             <span>Northern Cities</span>
//           </div>
//           <div className="legend-item">
//             <span className="legend-color" style={{ backgroundColor: "#10b981" }}></span>
//             <span>Coastal Cities</span>
//           </div>
//           <div className="legend-item">
//             <span className="legend-color" style={{ backgroundColor: "#f59e0b" }}></span>
//             <span>Capital Region</span>
//           </div>
//           <div className="legend-item">
//             <span className="legend-color" style={{ backgroundColor: "#ef4444" }}></span>
//             <span>Economic Hubs</span>
//           </div>
//           <div className="legend-item">
//             <span className="legend-color" style={{ backgroundColor: "#8b5cf6" }}></span>
//             <span>Tourist Destinations</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "../styles/MapSection.css";
import Image from "next/image";

// Custom 3D pin icon with color variations
const create3DIcon = (color = "#3b82f6") => {
  return L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 28px;
        height: 28px;
        background: ${color};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: -2px -2px 6px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <div style="
          position: absolute;
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
        <div style="
          position: absolute;
          width: 8px;
          height: 8px;
          background: ${color};
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
  });
};

const CityMarkers = () => {
  const map = useMap();
  const [activeCity, setActiveCity] = useState(null);

  // City data based on your screenshot
  const cities = [
    {
      id: 1,
      name: "Tangier",
      coordinates: [35.7595, -5.834],
      description:
        "Gateway to Africa with a rich international history and stunning Mediterranean views.",
      highlights: [
        "Kasbah Museum",
        "Hercules Caves",
        "Cap Spartel",
        "Grand Socco",
      ],
      population: "1.1 million",
      bestTime: "April-June, September-October",
      image: "/images/map/tangier.jpg",
      color: "#3b82f6",
      region: "north",
    },
    {
      id: 2,
      name: "Chefchaouen",
      coordinates: [35.1713, -5.2699],
      description:
        "The famous Blue Pearl of Morocco nestled in the Rif Mountains.",
      highlights: [
        "Blue-washed Medina",
        "Spanish Mosque",
        "Ras El Maa waterfall",
        "Outa El Hammam Square",
      ],
      population: "42,786",
      bestTime: "March-May, September-November",
      image: "/images/map/chefchaouen.jpg",
      color: "#8b5cf6",
      region: "north",
    },
    {
      id: 3,
      name: "Rabat",
      coordinates: [34.0209, -6.8416],
      description:
        "Morocco's modern capital with well-preserved historical sites.",
      highlights: [
        "Hassan Tower",
        "Kasbah of the Udayas",
        "Chellah Necropolis",
        "Royal Palace",
      ],
      population: "1.8 million",
      bestTime: "March-May, September-November",
      image: "/images/map/rabat.jpg",
      color: "#f59e0b",
      region: "capital",
    },
    {
      id: 4,
      name: "Fez",
      coordinates: [34.0181, -5.0078],
      description:
        "Morocco's spiritual and cultural heart with the world's largest medina.",
      highlights: [
        "Fes el Bali Medina",
        "Al Quaraouiyine University",
        "Bou Inania Madrasa",
        "Chouara Tanneries",
      ],
      population: "1.2 million",
      bestTime: "March-May, September-November",
      image: "/images/map/fez.jpg",
      color: "#10b981",
      region: "cultural",
    },
    {
      id: 5,
      name: "Casablanca",
      coordinates: [33.5731, -7.5898],
      description:
        "Morocco's economic hub with impressive modern architecture.",
      highlights: [
        "Hassan II Mosque",
        "Corniche",
        "Habous Quarter",
        "Royal Palace of Casablanca",
      ],
      population: "3.7 million",
      bestTime: "April-June, September-October",
      image: "/images/map/casablanca.jpg",
      color: "#ef4444",
      region: "economic",
    },
    {
      id: 6,
      name: "Marrakech",
      coordinates: [31.6295, -7.9811],
      description: "The Red City, famous for its vibrant souks and palaces.",
      highlights: [
        "Jemaa el-Fnaa",
        "Bahia Palace",
        "Saadian Tombs",
        "Majorelle Garden",
      ],
      population: "1 million",
      bestTime: "March-May, September-November",
      image: "/images/map/marrakech.jpg",
      color: "#ec4899",
      region: "tourist",
    },
    {
      id: 7,
      name: "Agadir",
      coordinates: [30.4278, -9.5981],
      description:
        "Modern beach resort with beautiful coastline and year-round sunshine.",
      highlights: [
        "Agadir Beach",
        "Agadir Oufella ruins",
        "Souk El Had",
        "Valley of the Birds",
      ],
      population: "600,000",
      bestTime: "Year-round",
      image: "/images/map/agadir.jpg",
      color: "#14b8a6",
      region: "coastal",
    },
    {
      id: 8,
      name: "Ouarzazate",
      coordinates: [30.9333, -6.9167],
      description:
        "Gateway to the Sahara and famous for its film studios and kasbahs.",
      highlights: [
        "Atlas Film Studios",
        "Ait Ben Haddou",
        "Taourirt Kasbah",
        "Draa Valley",
      ],
      population: "71,000",
      bestTime: "March-May, September-November",
      image: "/images/map/ouarzazate.jpg",
      color: "#f97316",
      region: "desert",
    },
    {
      id: 9,
      name: "Merzouga",
      coordinates: [31.0992, -4.0119],
      description: "Doorway to the Erg Chebbi dunes in the Sahara Desert.",
      highlights: [
        "Erg Chebbi dunes",
        "Camel treks",
        "Desert camps",
        "Berber villages",
      ],
      population: "15,000",
      bestTime: "October-April",
      image: "/images/map/merzouga.jpg",
      color: "#d946ef",
      region: "desert",
    },
    {
      id: 10,
      name: "Essaouira",
      coordinates: [31.5131, -9.7697],
      description:
        "Charming coastal town with Portuguese fortifications and artistic vibe.",
      highlights: [
        "Medina of Essaouira",
        "Skala de la Ville",
        "Essaouira Beach",
        "Moulay El Hassan Square",
      ],
      population: "77,000",
      bestTime: "April-June, September-November",
      image: "/images/map/essaouira.jpg",
      color: "#0ea5e9",
      region: "coastal",
    },
    {
      id: 11,
      name: "Oujda",
      coordinates: [34.6819, -1.9086],
      description: "Eastern Morocco's largest city near the Algerian border.",
      highlights: [
        "Oujda Medina",
        "Sidi Yahya Mosque",
        "Lalla Aicha Park",
        "Algerian border markets",
      ],
      population: "500,000",
      bestTime: "March-May, September-November",
      image: "/images/map/oujda.jpg",
      color: "#84cc16",
      region: "east",
    },
    {
      id: 12,
      name: "Taroudant",
      coordinates: [30.4667, -8.8667],
      description:
        "Known as 'Little Marrakech' with impressive ramparts and authentic vibe.",
      highlights: [
        "Taroudant Walls",
        "Souk Arab",
        "Palais Claudio Bravo",
        "Atlas Mountains views",
      ],
      population: "80,000",
      bestTime: "March-May, September-November",
      image: "/images/map/taroudant.jpg",
      color: "#a855f7",
      region: "south",
    },
  ];

  // Fly to city with smooth animation
  useEffect(() => {
    if (activeCity) {
      const city = cities.find((c) => c.id === activeCity);
      if (city) {
        map.flyTo(city.coordinates, 12, {
          duration: 1.5,
          easeLinearity: 0.25,
        });
      }
    }
  }, [activeCity]);

  return (
    <>
      {cities.map((city) => (
        <Marker
          key={city.id}
          position={city.coordinates}
          icon={create3DIcon(city.color)}
          eventHandlers={{
            click: () => setActiveCity(city.id),
            mouseover: () => setActiveCity(city.id),
          }}
        >
          <Popup className="custom-popup">
            <div className="popup-content">
              <h3>{city.name}</h3>
              <div className="popup-image-container">
                <Image
                  width={300}
                  height={200}
                  src={city.image}
                  alt={city.name}
                  className="popup-image"
                  onError={(e) => {
                    e.target.src = "/images/map/default-city.jpg";
                  }}
                />
                <div
                  className="city-badge"
                  style={{ backgroundColor: city.color }}
                >
                  {city.region.charAt(0).toUpperCase() + city.region.slice(1)}
                </div>
              </div>
              <p>{city.description}</p>
              <div className="popup-details">
                <p>
                  <strong>Population:</strong> {city.population}
                </p>
                <p>
                  <strong>Best time to visit:</strong> {city.bestTime}
                </p>
                <div className="highlights-section">
                  <h4>Top Highlights:</h4>
                  <ul>
                    {city.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

const MapControls = () => {
  const map = useMap();

  useEffect(() => {
    // Add custom controls
    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.scale({ imperial: false }).addTo(map);

    // Add terrain layer with hillshading
    L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }).addTo(map);

    // Add decorative elements
    const bounds = map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    // Add decorative compass rose
    const compassRose = L.divIcon({
      html: `
        <div style="
          width: 80px;
          height: 80px;
          background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"%233b82f6\" stroke-width=\"2\"/><path d=\"M50 10 L53 40 L50 50 L47 40 Z\" fill=\"%23ef4444\"/><text x=\"50\" y=\"20\" text-anchor=\"middle\" font-size=\"12\" fill=\"%231e293b\">N</text></svg>');
          background-size: contain;
          opacity: 0.7;
        "></div>
      `,
      className: "",
      iconSize: [80, 80],
      iconAnchor: [40, 40],
    });

    L.marker([ne.lat - 1, ne.lng - 1], { icon: compassRose }).addTo(map);

    return () => {
      map.eachLayer((layer) => {
        if (
          layer instanceof L.TileLayer &&
          layer._url.includes("opentopomap")
        ) {
          map.removeLayer(layer);
        }
      });
    };
  }, []);

  return null;
};

export default function MapSection() {
  const [mapReady, setMapReady] = useState(false);

  return (
    <div className="mapSection">
      <div className="map-header">
        <h2>Morocco Travel Map</h2>
        <p className="subtitle">
          Explore the diverse regions and cities of Morocco - click on any pin
          to discover more
        </p>
      </div>

      <div className="mapContainer">
        <MapContainer
          center={[31.7917, -7.0926]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          whenReady={() => setMapReady(true)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {mapReady && (
            <>
              <MapControls />
              <CityMarkers />
            </>
          )}
        </MapContainer>
      </div>

      <div className="map-legend">
        <h4>City Categories:</h4>
        <div className="legend-items">
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#3b82f6" }}
            ></span>
            <span>Northern Cities</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#8b5cf6" }}
            ></span>
            <span>Cultural Cities</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#f59e0b" }}
            ></span>
            <span>Capital Region</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#ef4444" }}
            ></span>
            <span>Economic Hubs</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#10b981" }}
            ></span>
            <span>Historical Cities</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#0ea5e9" }}
            ></span>
            <span>Coastal Cities</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#f97316" }}
            ></span>
            <span>Desert Gateways</span>
          </div>
          <div className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: "#ec4899" }}
            ></span>
            <span>Tourist Hotspots</span>
          </div>
        </div>
      </div>
    </div>
  );
}
