'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const PromoSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email submission logic here
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-blue-600"> {/* Changed to blue background */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 text-white"> {/* White text for contrast */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Get 5% off your 1st app booking
              </h2>
              <p className="text-lg mb-6">
                Booking's better on the app. Use promo code <span className="font-bold text-amber-300">"TourBooking"</span> to save!
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-2">
                  Get a magic link sent to your email
                </h3>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white text-gray-900"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                      Send
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-blue-700 text-white rounded-lg">
                    Magic link sent! Check your email.
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/app-screenshot-promo1.png" // Replace with your image
                alt="App booking screenshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;