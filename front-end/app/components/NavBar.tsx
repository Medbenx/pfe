

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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          email: "test@example.com",
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
       <>
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
          {/* Desktop Navigation - Left Side */}
          <div className="nav-section hidden md:block">
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

          {/* Logo - Center (Desktop) / Left (Mobile) */}
          <motion.div
            className="nav-section logo-section"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="logo">
              <Image src="/images/logo1.png" alt="Logo" width={70} height={70} priority />
            </Link>
          </motion.div>

          {/* Desktop Navigation - Right Side */}
          <div className="nav-section hidden md:block">
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

         {/* Mobile Menu Button - Right Side */}
          <div className="md:hidden mobile-menu-button">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
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

       {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-container"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-start space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/about"
                  className="text-white text-2xl py-3 block hover:text-rose-300 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  About Morocco
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Link
                  href="/experience"
                  className="text-white text-2xl py-3 block hover:text-rose-300 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  Experience
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/TravelProgram"
                  className="text-white text-2xl py-3 block hover:text-rose-300 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  Travel Program
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  href="/events-happenings"
                  className="text-white text-2xl py-3 block hover:text-rose-300 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  Events & Happenings
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/menu-of-the-day"
                  className="text-white text-2xl py-3 block hover:text-rose-300 transition-colors duration-300"
                  onClick={toggleMobileMenu}
                >
                  Food
                </Link>
              </motion.div>

              <div className="flex flex-col items-start space-y-6 pt-8 w-full">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <button
                    onClick={() => {
                      toggleLanguage();
                    }}
                    className="text-white text-xl py-3 px-6 border-2 border-rose-300 rounded-full hover:bg-rose-300 hover:text-black transition-colors duration-300"
                  >
                    Switch to {language === "EN" ? "العربية" : "English"}
                  </button>
                </motion.div>

                {isLoggedIn ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href="/profile"
                        className="flex items-center text-white text-xl py-3 hover:text-rose-300 transition-colors duration-300"
                        onClick={toggleMobileMenu}
                      >
                        <FaUserEdit className="mr-3" /> Profile
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <button
                        onClick={() => {
                          handleLogout();
                          toggleMobileMenu();
                        }}
                        className="flex items-center text-white text-xl py-3 hover:text-rose-300 transition-colors duration-300"
                      >
                        <FaSignOutAlt className="mr-3" /> Log Out
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href="/login"
                        className="flex items-center text-white text-xl py-3 hover:text-rose-300 transition-colors duration-300"
                        onClick={toggleMobileMenu}
                      >
                        <FaSignInAlt className="mr-3" /> Login
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <Link
                        href="/main/sign-up"
                        className="flex items-center text-white text-xl py-3 hover:text-rose-300 transition-colors duration-300"
                        onClick={toggleMobileMenu}
                      >
                        <FaUserPlus className="mr-3" /> Sign Up
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}