"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsProfileOpen(false);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsProfileOpen(false);
  };
  const toggleLanguage = () => setLanguage(language === "EN" ? "AR" : "EN");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileOpen(false);
  };

  return (
    <motion.nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-lines-container">
        <motion.div
          className="nav-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Mobile Top Bar */}
      <div className="mobile-nav-bar">
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </button>
        <Link href="/" className="mobile-logo">
          <Image src="/images/logo1.png" alt="Logo" width={60} height={60} />
        </Link>
      </div>

      {/* Desktop & Mobile Nav */}
      <div className={`nav-content ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        {/* Left Menu */}
        <div className="nav-section left">
          <ul className="navLinks">
            <li>
              <Link href="/about">About Morocco</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/TravelProgram">Travel Program</Link>
            </li>
          </ul>
        </div>

        {/* Logo Center (desktop only) */}
        <div className="nav-section center desktop-logo">
          <Link href="/" className="logo">
            <Image src="/images/logo1.png" alt="Logo" width={70} height={70} />
          </Link>
        </div>

        {/* Right Menu */}
        <div className="nav-section right">
          <ul className="navLinks">
            <li>
              <Link href="/events-happenings">Events</Link>
            </li>
            <li>
              <Link href="/menu-of-the-day">Food</Link>
            </li>
            <li className="language-selector" onClick={toggleLanguage}>
              {language}
            </li>
            {/* Profile Dropdown */}
            <li className="profile-menu">
              {isLoggedIn ? (
                <motion.div
                  className="profile-container"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="profile-btn" onClick={toggleProfile}>
                    <Image
                      src="/images/profile-placeholder.jpg"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="profile-img"
                    />
                    <FaChevronDown
                      className={`chevron ${isProfileOpen ? "open" : ""}`}
                    />
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
                          <p className="profile-email">user@example.com</p>
                        </div>
                        <ul>
                          <li>
                            <Link
                              href="/profile"
                              onClick={() => setIsProfileOpen(false)}
                            >
                              <FaUserEdit /> Edit Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/help"
                              onClick={() => setIsProfileOpen(false)}
                            >
                              <FaQuestionCircle /> Help & Support
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
                <motion.div
                  className="profile-container"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="profile-btn" onClick={toggleProfile}>
                    <FaUser className="user-icon" />
                    <FaChevronDown
                      className={`chevron ${isProfileOpen ? "open" : ""}`}
                    />
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
                            <button onClick={handleLogin}>
                              <FaSignInAlt /> Login
                            </button>
                          </li>
                          <li>
                            <Link
                              href="/signup"
                              onClick={() => setIsProfileOpen(false)}
                            >
                              <FaUserPlus /> Sign Up
                            </Link>
                          </li>
                          <li>
                            <button onClick={toggleLanguage}>
                              <FaGlobe />{" "}
                              {language === "EN" ? "العربية" : "English"}
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
