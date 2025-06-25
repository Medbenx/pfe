"use client";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import morcompassLogo from "@/public/images/morcompass-logo.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  language: string;
  pricePerHour: string;
  photo: File | null;
}

const MorcompassForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    language: "",
    pricePerHour: "",
    photo: null,
  });
  const [isHovered, setIsHovered] = useState(false);

  // Modern color scheme
  const colors = {
    primary: "#EE9799",
    secondary: "#FFFFFF",
    accent: "#C4C4C4",
    background: "#000000",
    text: "#FFFFFF",
    lightText: "#000000",
    border: "#EE9799",
    hover: "#D48789",
    cardBg: "#121212",
  };

  // New floating animation with subtle pulse
  const { transform, boxShadow } = useSpring({
    transform: isHovered
      ? "translateY(-8px) scale(1.02)"
      : "translateY(0px) scale(1)",
    boxShadow: isHovered
      ? `0 30px 60px -15px ${colors.primary}50`
      : `0 20px 40px -10px ${colors.primary}30`,
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Full-width animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.primary }}
        />
        <div 
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.primary }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-15"
          style={{ backgroundColor: colors.primary }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <animated.div
          className="w-full max-w-2xl p-8 rounded-xl relative z-10"
          style={{
            transform,
            boxShadow,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}30`,
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated border effect */}
          <div 
            className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
            style={{
              boxShadow: `inset 0 0 20px ${colors.primary}20`,
              border: `1px solid ${colors.border}30`,
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.primary}20, transparent)`,
                animation: 'shine 3s infinite',
              }}
            />
          </div>

          {/* Logo Section */}
          <div className="text-center mb-8 flex flex-col items-center relative z-10">
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={morcompassLogo}
                alt="MORCOMPASS Logo"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            <h1
              className="text-4xl font-bold mb-2 tracking-tighter bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${colors.primary}, #fff)`,
                textShadow: `0 2px 10px ${colors.primary}50`,
              }}
            >
              MORCOMPASS
            </h1>
            <p 
              className="text-lg italic mt-2"
              style={{ 
                color: colors.accent,
                textShadow: `0 1px 3px rgba(0,0,0,0.5)`
              }}
            >
              YOUR COMPASS BEYOND BOUNDARIES
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Name", name: "name", type: "text", required: true },
                { label: "Email", name: "email", type: "email", required: true },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Price per hour ($)", name: "pricePerHour", type: "number" },
                { label: "Location", name: "location", type: "text" },
                { label: "Language", name: "language", type: "text" },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label 
                    className="block font-medium tracking-wide text-sm uppercase"
                    style={{ 
                      color: colors.accent,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200"
                    style={{
                      borderColor: `${colors.border}40`,
                      backgroundColor: '#1E1E1E',
                      color: colors.text,
                      ':hover': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 1px ${colors.primary}`
                      },
                      ':focus': {
                        borderColor: colors.primary,
                        boxShadow: `0 0 0 2px ${colors.primary}`
                      }
                    }}
                    required={field.required}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <label 
                className="block font-medium tracking-wide text-sm uppercase"
                style={{ 
                  color: colors.accent,
                  letterSpacing: '0.1em'
                }}
              >
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200"
                style={{
                  borderColor: `${colors.border}40`,
                  backgroundColor: '#1E1E1E',
                  color: colors.text,
                  ':hover': {
                    borderColor: colors.primary,
                    boxShadow: `0 0 0 1px ${colors.primary}`
                  },
                  ':focus': {
                    borderColor: colors.primary,
                    boxShadow: `0 0 0 2px ${colors.primary}`
                  }
                }}
              />
            </div>

            <div className="space-y-2">
              <label 
                className="block font-medium tracking-wide text-sm uppercase"
                style={{ 
                  color: colors.accent,
                  letterSpacing: '0.1em'
                }}
              >
                Profile Photo
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#EE9799] file:text-black hover:border-[#EE9799] hover:shadow-[0_0_0_1px_#EE9799]"
                  style={{
                    borderColor: `${colors.border}40`,
                    backgroundColor: '#1E1E1E',
                    color: colors.text,
                  }}
                />
              </div>
            </div>

            <div className="pt-6 flex flex-col space-y-4">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.hover})`,
                  color: colors.lightText,
                  boxShadow: `0 4px 15px ${colors.primary}30`,
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
              </button>

              <Link
                href="/become-guide"
                className="text-center transition-all duration-200 flex items-center justify-center group"
                style={{
                  color: colors.primary,
                }}
              >
                Become a Guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </form>
        </animated.div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default MorcompassForm;