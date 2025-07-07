"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import morcompassLogo from "@/public/images/morcompass-logo.png";

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  languages: string;
  price_per_hour: string;
  photo: File | null;
}

const GuideForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    languages: "",
    price_per_hour: "",
    photo: null,
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formPayload.append(key, value);
        }
      });

      const response = await axios.post(
        "http://localhost:8000/api/touriste-guides", // تأكد من صحة هذا المسار
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Guide created successfully:", response.data);
      alert("Guide added successfully!");
    } catch (error: any) {
      console.error("Error submitting guide full error:", error);
      console.error("Error submitting guide response data:", error.response?.data);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      style={{ backgroundColor: colors.background }}
    >
      <div
        className="w-full max-w-2xl p-8 rounded-xl relative overflow-hidden"
        style={{
          backgroundColor: colors.cardBg,
          border: `1px solid ${colors.border}`,
        }}
      >
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ boxShadow: `inset 0 0 50px ${colors.primary}20` }}
        />

        <div className="text-center mb-8 flex flex-col items-center">
          <div className="w-24 h-24 mb-4 relative">
            <Image
              src={morcompassLogo}
              alt="MORCOMPASS Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1
            className="text-4xl font-bold mb-2 tracking-tighter"
            style={{
              color: colors.primary,
              textShadow: `0 0 10px ${colors.primary}80`,
            }}
          >
            MORCOMPASS
          </h1>
          <p className="text-lg italic" style={{ color: colors.accent }}>
            YOUR COMPASS BEYOND BOUNDARIES
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "name",
              "email",
              "phone",
              "price_per_hour",
              "location",
              "languages",
            ].map((field) => (
              <div key={field} className="space-y-1">
                <label
                  className="block font-medium tracking-wide"
                  style={{ color: colors.text }}
                >
                  {field
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </label>
                <input
                  type={
                    field === "price_per_hour"
                      ? "number"
                      : field === "email"
                      ? "email"
                      : "text"
                  }
                  name={field}
                  value={(formData as any)[field] ?? ""}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.border,
                    backgroundColor: "#1E1E1E",
                    color: colors.text,
                  }}
                  required={["name", "email"].includes(field)}
                />
              </div>
            ))}

            <div className="space-y-1">
              <label
                className="block font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio ?? ""}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                  backgroundColor: "#1E1E1E",
                  color: colors.text,
                }}
              />
            </div>

            <div className="space-y-1">
              <label
                className="block font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                Profile Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                  backgroundColor: "#1E1E1E",
                  color: colors.text,
                }}
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col space-y-4">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-bold"
              style={{
                backgroundColor: colors.primary,
                color: colors.lightText,
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuideForm;
