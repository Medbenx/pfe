"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
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
  password: string;
  password_confirmation: string;
}

const GuideForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    language: "",
    pricePerHour: "",
    photo: null,
    password: "",
    password_confirmation: "",
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
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formPayload.append(key, value);
        }
      });

      const response = await axios.post(
        "http://localhost:8000/api/touriste-guides",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log("Guide created successfully:", response.data);
      alert("Guide added successfully!");
    } catch (error: any) {
      console.error("Error submitting guide:", error);
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
            {["name", "email", "phone", "pricePerHour", "location", "language"].map(
              (field) => (
                <div key={field} className="space-y-1">
                  <label
                    className="block font-medium tracking-wide"
                    style={{ color: colors.text }}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={
                      field === "pricePerHour"
                        ? "number"
                        : field === "email"
                        ? "email"
                        : "text"
                    }
                    name={field}
                    value={formData[field as keyof FormData] as string}
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
              )
            )}
          </div>

          {["password", "password_confirmation"].map((field) => (
            <div key={field} className="space-y-1">
              <label
                className="block font-medium tracking-wide"
                style={{ color: colors.text }}
              >
                {field.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </label>
              <input
                type="password"
                name={field}
                value={(formData as any)[field] ?? ""}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                  backgroundColor: "#1E1E1E",
                  color: colors.text,
                }}
                required
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
              value={formData.bio}
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
