"use client";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import morcompassLogo from "@/public/images/morcompass-logo.png";

interface LoginData {
  email: string;
  password: string;
}

const UserLoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const { transform, boxShadow } = useSpring({
    transform: isHovered
      ? "translateY(-8px) scale(1.02)"
      : "translateY(0px) scale(1)",
    boxShadow: isHovered
      ? `0 30px 60px -15px ${colors.primary}50`
      : `0 20px 40px -10px ${colors.primary}30`,
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      // 1. Get CSRF token
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // 2. Send login request
      await axios.post(
        "http://localhost:8000/api/login",
        formData,
        { withCredentials: true }
      );

      setSuccess("Login successful!");
      // Redirect to dashboard or home page
      
      // router.push("/dashboard"); ← إن استخدمت useRouter
    } catch (err: any) {
      if (err.response) {
        setError(
          err.response.data.message || "Invalid credentials. Please try again."
        );
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: colors.primary }} />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: colors.primary }} />
      </div>

      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <animated.div
          className="w-full max-w-md p-8 rounded-xl relative z-10"
          style={{
            transform,
            boxShadow,
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}30`,
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logo */}
          <div className="text-center mb-8 flex flex-col items-center">
            <div className="w-24 h-24 mb-4 relative">
              <Image src={morcompassLogo} alt="MORCOMPASS Logo" fill className="object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-4xl font-bold mb-2 tracking-tighter bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(45deg, ${colors.primary}, #fff)` }}>
              MORCOMPASS
            </h1>
            <p className="text-lg italic mt-2" style={{ color: colors.accent }}>
              Welcome back!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {["email", "password"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block font-medium text-sm uppercase" style={{ color: colors.accent }}>
                  {field}
                </label>
                <input
                  type={field === "password" ? "password" : "email"}
                  name={field}
                  value={formData[field as keyof LoginData]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200"
                  style={{
                    borderColor: `${colors.border}40`,
                    backgroundColor: "#1E1E1E",
                    color: colors.text,
                  }}
                />
              </div>
            ))}

            {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
            {success && <p className="text-green-500 text-center font-semibold">{success}</p>}

            <div className="pt-6 flex flex-col space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
                style={{
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.hover})`,
                  color: colors.lightText,
                }}
              >
                <span className="relative z-10">
                  {loading ? "Logging in..." : "Login"}
                </span>
              </button>

              <Link href="/signup" className="text-center text-sm" style={{ color: colors.primary }}>
                Don't have an account? Register
              </Link>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default UserLoginForm;
