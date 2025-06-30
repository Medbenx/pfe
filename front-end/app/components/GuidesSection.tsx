"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/GuidesSection.css";




const guides = [
  {
    id: 1,
    name: "Sara El Amran",
    image: "/images/guide1.jpg",
    email: "sara@moroccotours.com",
    phone: "+212 600 123 456",
    bio: "Expert in Moroccan culture with 10+ years experience guiding travelers through Marrakech's medina.",
    location: "Marrakech, Morocco",
    price: "$50/hour",
    specialties: ["Cultural Tours", "Historical Sites", "Local Crafts"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Youssef Benair",
    image: "/images/guide2.jpg",
    email: "youssef@desertadventures.ma",
    phone: "+212 600 234 567",
    bio: "Specializes in desert adventures with 200+ Sahara expeditions led.",
    location: "Merzouga, Morocco",
    price: "$65/hour",
    specialties: ["Desert Trekking", "Adventure Tours", "Camel Expeditions"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Amina Zahir",
    image: "/images/guide3.jpg",
    email: "amina@moroccanfoodtours.com",
    phone: "+212 600 345 678",
    bio: "Culinary expert showcasing hidden gems of Moroccan cuisine.",
    location: "Fes, Morocco",
    price: "$45/hour",
    specialties: ["Food Tours", "Cooking Classes", "Market Visits"],
    rating: 4.7
  },
  {
    id: 5,
    name: "Karim El Fassi",
    image: "/images/guide5.jpg",
    email: "karim@atlastreks.ma",
    phone: "+212 600 456 789",
    bio: "Expert in mountain trekking and Berber culture with extensive knowledge of the Atlas Mountains.",
    location: "Imlil, Morocco",
    price: "$60/hour",
    specialties: ["Mountain Trekking", "Berber Villages", "Nature Walks"],
    rating: 4.8
  },
  {
    id: 6,
    name: "Leila Boutaleb",
    image: "/images/guide6.jpg",
    email: "leila@womentours.ma",
    phone: "+212 600 567 890",
    bio: "Specializes in women-only tours and cultural experiences tailored for female travelers.",
    location: "Essaouira, Morocco",
    price: "$55/hour",
    specialties: ["Women's Tours", "Cultural Experiences", "Textile Workshops"],
    rating: 4.9
  },
  {
    id: 7,
    name: "Hassan Chraibi",
    image: "/images/guide7.jpg",
    email: "hassan@moroccophoto.com",
    phone: "+212 600 678 901",
    bio: "Photography guide helping visitors capture perfect shots of Morocco's landscapes.",
    location: "Chefchaouen, Morocco",
    price: "$70/hour",
    specialties: ["Photography Tours", "Sunset Spots", "Composition Tips"],
    rating: 4.7
  },
  {
    id: 8,
    name: "Fatima El Mansouri",
    image: "/images/guide8.jpg",
    email: "fatima@historytours.ma",
    phone: "+212 600 789 012",
    bio: "Historian specializing in Islamic architecture and royal palaces.",
    location: "Rabat, Morocco",
    price: "$50/hour",
    specialties: ["Architecture Tours", "Palace Visits", "History Walks"],
    rating: 4.6
  },
  {
    id: 9,
    name: "Mehdi Zouhair",
    image: "/images/guide9.jpg",
    email: "mehdi@adventuremorocco.com",
    phone: "+212 600 890 123",
    bio: "Adventure guide offering extreme sports and outdoor activities.",
    location: "Agadir, Morocco",
    price: "$75/hour",
    specialties: ["Rock Climbing", "Surfing", "Quad Biking"],
    rating: 4.9
  },
  {
    id: 10,
    name: "Nadia Belkhayat",
    image: "/images/guide10.jpg",
    email: "nadia@wellnessmorocco.ma",
    phone: "+212 600 901 234",
    bio: "Wellness guide offering yoga retreats and spa experiences.",
    location: "Oualidia, Morocco",
    price: "$65/hour",
    specialties: ["Yoga Retreats", "Hammam Tours", "Meditation Sessions"],
    rating: 4.8
  }
];




export default function GuidesSection() {
  return (
    <section className="guides-section bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Meet Our Expert Guides
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="guides-slider"
        >
          {guides.map((guide) => (
            <SwiperSlide key={guide.id}>
              <div className="guide-card group h-[500px] w-full perspective-1000">
                {/* Front Card */}
                <div className="card-front bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-500 group-hover:opacity-0 group-hover:rotate-y-180 absolute inset-0 backface-hidden">
                  <div className="guide-image mb-4">
                    <Image
                      src={guide.image}
                      alt={guide.name}
                      width={120}
                      height={120}
                       className="profile-image"
                    />
                  </div>
                  <div className="card-content text-center">
                    <h3 className="text-xl font-bold text-gray-800">{guide.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{guide.location}</p>
                    <div className="rating flex justify-center items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < Math.floor(guide.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-gray-600 text-sm ml-1">({guide.rating})</span>
                    </div>
                    <div className="price text-amber-600 font-bold mt-2">{guide.price}</div>
                    <div className="specialties flex flex-wrap justify-center gap-2 mt-4">
                      {guide.specialties.slice(0, 2).map((spec, i) => (
                        <span 
                          key={i} 
                          className="specialty bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Back Card - Updated with Social Media */}
                <div className="card-back bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-500 rotate-y-180 opacity-0 group-hover:opacity-100 group-hover:rotate-y-0 absolute inset-0 backface-hidden">
                  <div className="back-content w-full h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">{guide.name}</h3>
                      
                      <div className="contact-info mb-4">
                        <p className="flex items-center text-gray-300 mb-2">
                          <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                          {guide.email}
                        </p>
                        <p className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          {guide.phone}
                        </p>
                      </div>
                      
                      <p className="bio text-white text-[20px] leading-[28px] mb-6 line-clamp-4">
                        {guide.bio}
                      </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="social-media mb-6">
                      <h4 className="text-amber-400 text-sm font-semibold mb-3">Connect with me:</h4>
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="text-white hover:text-amber-400 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-amber-400 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-amber-400 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-amber-400 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="action-buttons flex flex-col gap-3">
                      <Link 
                        href={`/guides/${guide.id}`} 
                        className="profile-link bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors"
                      >
                        View Full Profile
                      </Link>
                      <button className="book-button bg-transparent border border-amber-400 hover:bg-amber-400/10 text-amber-400 font-medium py-2 px-4 rounded-lg transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}