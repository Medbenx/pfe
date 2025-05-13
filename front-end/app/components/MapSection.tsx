import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/MapSection.css";

export default function MapSection() {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([31.7917, -7.0926], 6); // Centered on Morocco

    // Add a tile layer (map background)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // City data with coordinates and details
    const cities = [
      {
        name: "Tetouan",
        coordinates: [35.5769, -5.3686],
        details: "Tetouan is a city in northern Morocco known for its Andalusian influence and UNESCO-listed medina.",
      },
      {
        name: "Tangier",
        coordinates: [35.7595, -5.8340],
        details: "Tangier is a major port city in Morocco, located on the Strait of Gibraltar, known for its vibrant culture and history.",
      },
      {
        name: "Rabat",
        coordinates: [34.0209, -6.8416],
        details: "Rabat is the capital of Morocco, known for its historic landmarks like the Kasbah of the Udayas and Hassan Tower.",
      },
      {
        name: "Casablanca",
        coordinates: [33.5731, -7.5898],
        details: "Casablanca is Morocco's largest city, famous for its modern architecture and the Hassan II Mosque.",
      },
      {
        name: "Marrakech",
        coordinates: [31.6295, -7.9811],
        details: "Marrakech is a vibrant city known for its bustling souks, Jemaa el-Fnaa square, and historic palaces.",
      },
    ];

    // Add markers for each city
    cities.forEach((city) => {
      L.marker(city.coordinates)
        .addTo(map)
        .bindPopup(`<b>${city.name}</b><br>${city.details}`)
        .openPopup();
    });

    // Cleanup function to remove the map on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="mapSection">
      <h2>Explore Morocco on the Map</h2>
      <div id="map" className="mapContainer"></div>
    </div>
  );
}