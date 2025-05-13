import React from "react";
import "../styles/FooterSection.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

export default function FooterSection() {
  return (
    <footer className="footerSection">
      <div className="footerContent">
        <div className="footerInfo">
          <h3>Explore Morocco</h3>
          <p>Your gateway to the beauty, culture, and adventure of Morocco.</p>
        </div>
        <div className="footerLinks">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="Hero.tsx">Home</a></li>
            <li><a href="/about">About Morocco</a></li>
            <li><a href="/travel">Travel Programs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footerSocial">
          <h4>Follow Us</h4>
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Explore Morocco. All rights reserved.</p>
      </div>
    </footer>
  );
}