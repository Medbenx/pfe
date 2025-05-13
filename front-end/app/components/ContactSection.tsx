import React from "react";
import "../styles/ContactSection.css";

export default function ContactSection() {
  return (
    <div className="contactSection">
      <h2>Contact Us</h2>
      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}