// app/booking/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const BookingPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    package: "",
    dates: { start: null, end: null },
    travelers: { adults: 1, children: 0 },
    contact: { name: "", email: "", phone: "" },
    specialRequests: "",
  });

  const packages = [
    { id: "cultural", name: "Cultural Explorer", price: 799 },
    { id: "desert", name: "Desert Adventure", price: 999 },
    { id: "luxury", name: "Luxury Retreat", price: 1499 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.includes(".")
      ? name.split(".")
      : [null, name];

    setFormData((prev) => ({
      ...prev,
      ...(section
        ? {
            [section]: { ...prev[section], [field]: value },
          }
        : { [field]: value }),
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 4) return nextStep();
    // Submit logic here
    router.push("/booking/confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>Book Your Moroccan Adventure</title>
      </Head>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-amber-600 mb-6">
            Book Your Trip to Morocco
          </h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {["Destination", "Dates", "Details", "Confirm"].map((label, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${
                  step > i + 1
                    ? "text-amber-600"
                    : step === i + 1
                    ? "font-bold"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step > i + 1
                      ? "bg-amber-100"
                      : step === i + 1
                      ? "bg-amber-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span className="mt-2 text-sm">{label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Destination */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Choose Your Destination
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Marrakech",
                    "Fes",
                    "Chefchaouen",
                    "Sahara Desert",
                    "Casablanca",
                    "Tangier",
                  ].map((city) => (
                    <div
                      key={city}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.destination === city
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, destination: city })
                      }
                    >
                      <h3 className="font-medium">{city}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Package & Dates */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Select Your Package</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        formData.package === pkg.id
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, package: pkg.id })
                      }
                    >
                      <h3 className="font-bold">{pkg.name}</h3>
                      <p className="text-amber-600 font-semibold">
                        ${pkg.price}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {pkg.id === "cultural" &&
                          "Historical sites & local experiences"}
                        {pkg.id === "desert" && "Camel trek & desert camps"}
                        {pkg.id === "luxury" &&
                          "5-star hotels & private guides"}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Start Date</label>
                    <input
                      type="date"
                      name="dates.start"
                      value={formData.dates.start || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">End Date</label>
                    <input
                      type="date"
                      name="dates.end"
                      value={formData.dates.end || ""}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      min={
                        formData.dates.start ||
                        new Date().toISOString().split("T")[0]
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Traveler Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Traveler Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-2 font-medium">Adults</label>
                    <input
                      type="number"
                      name="travelers.adults"
                      min="1"
                      max="10"
                      value={formData.travelers.adults}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Children (under 12)
                    </label>
                    <input
                      type="number"
                      name="travelers.children"
                      min="0"
                      max="10"
                      value={formData.travelers.children}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="contact.name"
                      value={formData.contact.name}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="contact.email"
                      value={formData.contact.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Phone</label>
                    <input
                      type="tel"
                      name="contact.phone"
                      value={formData.contact.phone}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Confirm Your Booking</h2>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Trip Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Destination</p>
                      <p className="font-medium">{formData.destination}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Package</p>
                      <p className="font-medium">
                        {packages.find((p) => p.id === formData.package)
                          ?.name || "Custom"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Dates</p>
                      <p className="font-medium">
                        {formData.dates.start
                          ? new Date(formData.dates.start).toLocaleDateString()
                          : ""}{" "}
                        -{" "}
                        {formData.dates.end
                          ? new Date(formData.dates.end).toLocaleDateString()
                          : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Travelers</p>
                      <p className="font-medium">
                        {formData.travelers.adults} Adults,{" "}
                        {formData.travelers.children} Children
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-gray-600">Total Price</p>
                    <p className="text-2xl font-bold text-amber-600">
                      $
                      {packages.find((p) => p.id === formData.package)?.price *
                        formData.travelers.adults || "--"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
              </div>
            )}

            <div className="mt-10 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium ${
                  step === 4
                    ? "bg-amber-600 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {step === 4 ? "Confirm Booking" : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
