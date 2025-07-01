"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaChevronDown,
  FaSignInAlt,
  FaUserPlus,
  FaGlobe,
  FaUserEdit,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".profile-menu")) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "AR" : "EN");
  };

  const handleLogin = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          email: "test@example.com", // عدل حسب بيانات النموذج
          password: "password",
        },
        {
          withCredentials: true,
        }
      );

      setIsLoggedIn(true);
      setUserEmail(response.data.user?.email || "user@example.com");
      setIsProfileOpen(false);
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Check your credentials.");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true });
      setIsLoggedIn(false);
      setUserEmail("");
      setIsProfileOpen(false);
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-lines-container">
        <motion.div
          className="nav-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="nav-content">
        <div className="nav-section">
          <ul className="navLinks">
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/about">About Morocco</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/experience">Experience</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/TravelProgram">Travel Program</Link>
            </motion.li>
          </ul>
        </div>

        <motion.div
          className="nav-section center"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="logo">
            <Image src="/images/logo1.png" alt="Logo" width={70} height={70} priority />
          </Link>
        </motion.div>

        <div className="nav-section">
          <ul className="navLinks">
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/events-happenings">Events & Happenings</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/menu-of-the-day">Food</Link>
            </motion.li>

            <motion.li
              className="language-selector"
              whileHover={{ scale: 1.05 }}
              onClick={toggleLanguage}
            >
              {language}
            </motion.li>

            {/* Profile Dropdown */}
            <li className="profile-menu">
              {isLoggedIn ? (
                <motion.div className="profile-container" whileHover={{ scale: 1.05 }}>
                  <button className="profile-btn" onClick={toggleProfile}>
                    <Image
                      src="/images/profile-placeholder.jpg"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="profile-img"
                    />
                    <FaChevronDown className={`chevron ${isProfileOpen ? "open" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="dropdown-header">
                          <p className="profile-name">My Profile</p>
                          <p className="profile-email">{userEmail}</p>
                        </div>
                        <ul>
                          <li>
                            <Link href="/profile" onClick={() => setIsProfileOpen(false)}>
                              <FaUserEdit /> Edit Profile
                            </Link>
                          </li>
                          <li>
                            <Link href="/help" onClick={() => setIsProfileOpen(false)}>
                              <FaQuestionCircle /> Help & Support
                            </Link>
                          </li>
                          <li>
                            <Link href="/become-guide" onClick={() => setIsProfileOpen(false)}>
                              🧭 Become a Guide
                            </Link>
                          </li>
                          <li>
                            <button onClick={handleLogout}>
                              <FaSignOutAlt /> Log Out
                            </button>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div className="profile-container" whileHover={{ scale: 1.05 }}>
                  <button className="profile-btn" onClick={toggleProfile}>
                    <FaUser className="user-icon" />
                    <FaChevronDown className={`chevron ${isProfileOpen ? "open" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul>
                          <li>
                            <Link href="/login" onClick={() => setIsProfileOpen(false)}>
                              <FaSignInAlt /> Login
                            </Link>
                          </li>
                          <li>
                            <Link href="/main/sign-up" onClick={() => setIsProfileOpen(false)}>
                              <FaUserPlus /> Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link href="/guideform" onClick={() => setIsProfileOpen(false)}>
                              🧭 Become a Guide
                            </Link>
                          </li>
                          <li>
                            <button onClick={toggleLanguage}>
                              <FaGlobe /> {language === "EN" ? "العربية" : "English"}
                            </button>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-lines-container">
        <motion.div
          className="nav-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </motion.nav>
  );
}
