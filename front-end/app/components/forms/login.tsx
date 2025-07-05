"use client";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import morcompassLogo from "@/public/images/morcompass-logo.png";

interface LoginFormData {
  email: string;
  password: string;
}

const UserLoginForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const colors = {
    primary: "#EE9799",
    accent: "#C4C4C4",
    background: "#000000",
    text: "#FFFFFF",
    lightText: "#000000",
    border: "#EE9799",
    hover: "#D48789",
    cardBg: "#121212",
  };

  const { transform, boxShadow } = useSpring({
    transform: loading
      ? "translateY(-4px) scale(1.01)"
      : "translateY(0px) scale(1)",
    boxShadow: loading
      ? `0 20px 40px -15px ${colors.primary}50`
      : `0 15px 30px -10px ${colors.primary}30`,
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // احصل على CSRF token
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // إرسال بيانات تسجيل الدخول
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData,
        { withCredentials: true }
      );

      const { user, role, redirect } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", role);

      // إعادة التوجيه
      if (redirect) {
        router.push(redirect);
      } else {
        alert("Login succeeded but no redirect URL found.");
      }
    } catch (err: any) {
      const res = err.response;
      if (res?.data?.message) {
        setError(res.data.message);
      } else {
        setError("Login failed. Please check your credentials.");
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
        <div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.primary }}
        />
        <div
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.primary }}
        />
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
        >
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
              }}
            >
              MORCOMPASS
            </h1>
            <p className="text-lg italic mt-2" style={{ color: colors.accent }}>
              Welcome Back! Please login to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label
                className="block font-medium text-sm uppercase"
                style={{ color: colors.accent }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200"
                style={{
                  borderColor: `${colors.border}40`,
                  backgroundColor: "#1E1E1E",
                  color: colors.text,
                }}
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label
                className="block font-medium text-sm uppercase"
                style={{ color: colors.accent }}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200"
                style={{
                  borderColor: `${colors.border}40`,
                  backgroundColor: "#1E1E1E",
                  color: colors.text,
                }}
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-red-500 text-center font-semibold">{error}</p>
            )}

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
                <span className="relative z-10 flex items-center justify-center">
                  {loading ? "Logging in..." : "Login"}
                </span>
              </button>

              <Link
                href="/main/sign-up"
                className="text-center text-sm"
                style={{ color: colors.primary }}
              >
                Don’t have an account? Sign Up
              </Link>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default UserLoginForm;
