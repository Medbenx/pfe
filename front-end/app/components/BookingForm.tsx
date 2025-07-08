// components/BookingForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "../styles/BookingForm.css"; // Assuming you have a CSS file for styles

interface BookingFormProps {
  experience: {
    id: string;
    title: string;
    city: string;
    duration: string;
    price: string;
    defaultDates?: {
      start: string | null;
      end: string | null;
    };
  };
}

export default function BookingForm({ experience }: BookingFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    experienceId: experience.id,
    experienceTitle: experience.title,
    destination: experience.city,
    package: "standard",
    dates: {
      start: experience.defaultDates?.start || null,
      end: experience.defaultDates?.end || null,
    },
    travelers: { adults: 1, children: 0 },
    contact: { name: "", email: "", phone: "" },
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const [section, field] = name.includes(".")
      ? name.split(".")
      : [null, name];

    setFormData((prev) => ({
      ...prev,
      ...(section
        ? {
            [section]: {
              ...prev[section as keyof typeof formData],
              [field]: value,
            },
          }
        : { [field as string]: value }),
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) return nextStep();

    // In a real app, you would submit to your API here
    console.log("Booking submitted:", formData);
    router.push(`/booking/confirmation?experience=${experience.id}`);
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Book {experience.title}</h2>

      {/* Progress Steps */}
      <div className="progress-steps">
        {["Details", "Travelers", "Confirm"].map((label, i) => (
          <div
            key={i}
            className={`step ${
              step > i + 1 ? "completed" : step === i + 1 ? "active" : ""
            }`}
          >
            <div className="step-number">{step > i + 1 ? "✓" : i + 1}</div>
            <span className="step-label">{label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        {/* Step 1: Experience Details */}
        {step === 1 && (
          <div className="form-step">
            <div className="experience-summary">
              <h3>{experience.title}</h3>
              <p>
                {experience.duration} in {experience.city}
              </p>
              <div className="price-display">
                Starting from <span>{experience.price}</span>
              </div>
            </div>

            <div className="form-group">
              <label>Package Option</label>
              <div className="package-options">
                <label
                  className={`package-option ${
                    formData.package === "standard" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value="standard"
                    checked={formData.package === "standard"}
                    onChange={handleChange}
                  />
                  <div>
                    <h4>Standard Package</h4>
                    <p>
                      Includes all activities, 3-star accommodation, and
                      breakfast
                    </p>
                  </div>
                </label>
                <label
                  className={`package-option ${
                    formData.package === "premium" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value="premium"
                    checked={formData.package === "premium"}
                    onChange={handleChange}
                  />
                  <div>
                    <h4>Premium Package</h4>
                    <p>
                      Upgraded accommodation, all meals, and private transfers
                    </p>
                    <span className="price-badge">+30%</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Travel Dates</label>
              <div className="date-inputs">
                <div>
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="dates.start"
                    value={formData.dates.start || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>End Date</label>
                  <input
                    type="date"
                    name="dates.end"
                    value={formData.dates.end || ""}
                    onChange={handleChange}
                    required
                    min={formData.dates.start || ""}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Traveler Information */}
        {step === 2 && (
          <div className="form-step">
            <div className="form-group">
              <label>Number of Travelers</label>
              <div className="traveler-inputs">
                <div>
                  <label>Adults</label>
                  <input
                    type="number"
                    name="travelers.adults"
                    min="1"
                    max="10"
                    value={formData.travelers.adults}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label>Children (under 12)</label>
                  <input
                    type="number"
                    name="travelers.children"
                    min="0"
                    max="10"
                    value={formData.travelers.children}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Contact Information</label>
              <input
                type="text"
                name="contact.name"
                placeholder="Full Name"
                value={formData.contact.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="contact.email"
                placeholder="Email Address"
                value={formData.contact.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contact.phone"
                placeholder="Phone Number"
                value={formData.contact.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Special Requests</label>
              <textarea
                name="specialRequests"
                placeholder="Dietary restrictions, accessibility needs, etc."
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="form-step">
            <div className="confirmation-summary">
              <h3>Review Your Booking</h3>

              <div className="summary-section">
                <h4>Experience</h4>
                <p>{experience.title}</p>
                <p>
                  {experience.duration} in {experience.city}
                </p>
              </div>

              <div className="summary-section">
                <h4>Dates</h4>
                <p>
                  {formData.dates.start
                    ? new Date(formData.dates.start).toLocaleDateString()
                    : "Not set"}{" "}
                  -
                  {formData.dates.end
                    ? new Date(formData.dates.end).toLocaleDateString()
                    : "Not set"}
                </p>
              </div>

              <div className="summary-section">
                <h4>Travelers</h4>
                <p>
                  {formData.travelers.adults} Adults,{" "}
                  {formData.travelers.children} Children
                </p>
              </div>

              <div className="summary-section">
                <h4>Package</h4>
                <p>
                  {formData.package === "standard"
                    ? "Standard Package"
                    : "Premium Package"}
                </p>
              </div>

              <div className="price-summary">
                <h4>Total Price</h4>
                <div className="price">
                  {experience.price} {formData.package === "premium" && "+ 30%"}
                </div>
              </div>

              <div className="terms-agreement">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="form-actions">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="back-button">
              <FaChevronLeft /> Back
            </button>
          )}
          <button
            type="submit"
            className="orange-button-3d flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold group"
          >
            {step === 3 ? "Confirm Booking" : "Continue"}
            <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </form>
    </div>
  );
}
