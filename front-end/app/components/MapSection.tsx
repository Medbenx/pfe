import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-elevation";
// import "leaflet-elevation/dist/leaflet-elevation.css";
import "../styles/MapSection.css";
import Image from "next/image";

// Custom 3D-like marker icon
const create3DIcon = (color = "#3b82f6") => {
  return L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 24px;
        height: 24px;
        background: ${color};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: -2px -2px 5px rgba(0,0,0,0.3);
      ">
        <div style="
          position: absolute;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        "></div>
      </div>
    `,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
};

const CityMarkers = () => {
  const map = useMap();
  const [activeCity, setActiveCity] = useState(null);

  // Enhanced city data with more details
  const cities = [
    {
      id: 1,
      name: "Tetouan",
      coordinates: [35.5769, -5.3686],
      description: "Known as the 'White Dove', Tetouan is a blend of Moroccan and Andalusian influences.",
      highlights: [
        "UNESCO-listed Medina",
        "Ethnographic Museum",
        "Royal Palace",
        "Martil Beach"
      ],
      population: "380,000",
      bestTime: "March-May, September-November",
      image: "/images/map/tetouan.jpg",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Tangier",
      coordinates: [35.7595, -5.8340],
      description: "The gateway between Africa and Europe, with a rich international history.",
      highlights: [
        "Kasbah Museum",
        "Hercules Caves",
        "Cap Spartel",
        "American Legation Museum"
      ],
      population: "1.1 million",
      bestTime: "April-June, September-October",
      image: "/images/map/map/tangier.jpg",
      color: "#10b981"
    },
    {
      id: 3,
      name: "Rabat",
      coordinates: [34.0209, -6.8416],
      description: "Morocco's modern capital with well-preserved historical sites.",
      highlights: [
        "Hassan Tower",
        "Kasbah of the Udayas",
        "Chellah Necropolis",
        "Royal Palace"
      ],
      population: "1.8 million",
      bestTime: "March-May, September-November",
      image: "/images/map/rabat.jpg",
      color: "#f59e0b"
    },
    {
      id: 4,
      name: "Casablanca",
      coordinates: [33.5731, -7.5898],
      description: "Morocco's economic hub with impressive modern architecture.",
      highlights: [
        "Hassan II Mosque",
        "Corniche",
        "Habous Quarter",
        "Royal Palace of Casablanca"
      ],
      population: "3.7 million",
      bestTime: "April-June, September-October",
      image: "/images/map/casablanca.jpg",
      color: "#ef4444"
    },
    {
      id: 5,
      name: "Marrakech",
      coordinates: [31.6295, -7.9811],
      description: "The Red City, famous for its vibrant souks and palaces.",
      highlights: [
        "Jemaa el-Fnaa",
        "Bahia Palace",
        "Saadian Tombs",
        "Majorelle Garden"
      ],
      population: "1 million",
      bestTime: "March-May, September-November",
      image: "/images/map/marrakech.jpg",
      color: "#8b5cf6"
    }
  ];

  // Fly to city when active city changes
  useEffect(() => {
    if (activeCity) {
      const city = cities.find(c => c.id === activeCity);
      if (city) {
        map.flyTo(city.coordinates, 12, {
          duration: 1.5,
          easeLinearity: 0.25
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
          }}
        >
          <Popup className="custom-popup">
            <div className="popup-content">
              <h3>{city.name}</h3>
              <Image 
                width={300}
                height={200}
                src={city.image} 
                alt={city.name} 
                className="popup-image"
                onError={(e) => {
                  e.target.src = '/images/map/default-city.jpg';
                }}
              />
              <p>{city.description}</p>
              <div className="popup-details">
                <p><strong>Population:</strong> {city.population}</p>
                <p><strong>Best time to visit:</strong> {city.bestTime}</p>
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
    // Add terrain control
    L.control.zoom({ position: 'topright' }).addTo(map);
    
    // Add scale control
    L.control.scale({ imperial: false }).addTo(map);

    // Add 3D terrain layer (using OpenTopoMap)
    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(map);

    return () => {
      map.eachLayer((layer: { _url: string | string[]; }) => {
        if (layer instanceof L.TileLayer && layer._url.includes('opentopomap')) {
          map.removeLayer(layer);
        }
      });
    };
  }, []);

  return null;
};

export default function MapSection() {
  return (
    <div className="mapSection">
      <h2>Explore Morocco in 3D</h2>
      <p className="subtitle">Click on any city marker to discover its highlights and travel information</p>
      
      <div className="mapContainer">
        <MapContainer
          center={[31.7917, -7.0926]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapControls />
          <CityMarkers />
        </MapContainer>
      </div>
      
      <div className="map-legend">
        <h4>City Categories:</h4>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: "#3b82f6" }}></span>
            <span>Northern Cities</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: "#10b981" }}></span>
            <span>Coastal Cities</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: "#f59e0b" }}></span>
            <span>Capital Region</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: "#ef4444" }}></span>
            <span>Economic Hubs</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: "#8b5cf6" }}></span>
            <span>Tourist Destinations</span>
          </div>
        </div>
      </div>
    </div>
  );
}