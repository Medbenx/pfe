// pages/guide/[id].js
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/GuideDetails.css"

const guides = [
  { id: 1, name: "Sara El Amran", image: "/images/guide1.jpg", bio: "Sara is an expert in Moroccan culture and history." },
  { id: 2, name: "Youssef Benair", image: "/images/guide2.jpg", bio: "Youssef specializes in desert adventures and trekking." },
  { id: 3, name: "Amina Zahir", image: "/images/guide3.jpg", bio: "Amina is a food enthusiast and culinary guide." },
  // Add more guides with their bios
];

export default function GuideDetails() {
  const router = useRouter();
  const { id } = router.query;
  const guide = guides.find((g) => g.id === parseInt(id));

  if (!guide) {
    return <div>Guide not found</div>;
  }

  return (
    <div className="guideDetails">
      <h1>{guide.name}</h1>
      <Image src={guide.image} alt={guide.name} style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
      <p>{guide.bio}</p>
      <Link href="/">Back to Guides</Link>
    </div>
  );
}