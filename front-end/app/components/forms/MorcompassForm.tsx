// "use client";
// import React, { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import Link from "next/link";
// import Image from "next/image";
// import morcompassLogo from "@/public/images/morcompass-logo.png"; // Adjust path to your logo

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   bio: string;
//   location: string;
//   language: string;
//   pricePerHour: string;
//   photo: File | null;
// }

// const MorcompassForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     bio: "",
//     location: "",
//     language: "",
//     pricePerHour: "",
//     photo: null,
//   });
//   const [isHovered, setIsHovered] = useState(false);

//   // Modern color scheme with black background and #EE9799 accent
//   const colors = {
//     primary: "#EE9799", // Primary pink accent
//     secondary: "#FFFFFF", // White for contrast
//     accent: "#C4C4C4", // Light gray for secondary elements
//     background: "#000000", // Black background
//     text: "#FFFFFF", // White text
//     lightText: "#000000", // Black text for buttons
//     border: "#EE9799", // Pink border
//     hover: "#D48789", // Darker pink for hover states
//     cardBg: "#121212", // Dark card background
//   };

//   // Enhanced 3D animation
//   const { transform, boxShadow } = useSpring({
//     transform: isHovered
//       ? "perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.05) translateZ(20px)"
//       : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)",
//     boxShadow: isHovered
//       ? `0 25px 50px rgba(238, 151, 153, 0.4)`
//       : `0 15px 35px rgba(238, 151, 153, 0.2)`,
//     config: { mass: 1, tension: 200, friction: 15 },
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission here
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen p-4"
//       style={{ backgroundColor: colors.background }}
//     >
//       <animated.div
//         className="w-full max-w-2xl p-8 rounded-xl relative overflow-hidden"
//         style={{
//           transform,
//           boxShadow,
//           backgroundColor: colors.cardBg,
//           border: `1px solid ${colors.border}`,
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Glow effect */}
//         <div
//           className="absolute inset-0 rounded-xl pointer-events-none"
//           style={{
//             boxShadow: `inset 0 0 50px ${colors.primary}20`,
//           }}
//         />

//         {/* Logo Section */}
//         <div className="text-center mb-8 flex flex-col items-center">
//           <div className="w-24 h-24 mb-4 relative">
//             <Image
//               src={morcompassLogo}
//               alt="MORCOMPASS Logo"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <h1
//             className="text-4xl font-bold mb-2 tracking-tighter"
//             style={{
//               color: colors.primary,
//               textShadow: `0 0 10px ${colors.primary}80`,
//             }}
//           >
//             MORCOMPASS
//           </h1>
//           <p className="text-lg italic" style={{ color: colors.accent }}>
//             YOUR COMPASS BEYOND BOUNDARIES
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { label: "Name", name: "name", type: "text", required: true },
//               { label: "Email", name: "email", type: "email", required: true },
//               { label: "Phone", name: "phone", type: "tel" },
//               {
//                 label: "Price per hour ($)",
//                 name: "pricePerHour",
//                 type: "number",
//               },
//               { label: "Location", name: "location", type: "text" },
//               { label: "Language", name: "language", type: "text" },
//             ].map((field) => (
//               <div key={field.name} className="space-y-1">
//                 <label
//                   className="block font-medium tracking-wide"
//                   style={{ color: colors.text }}
//                 >
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name as keyof FormData] as string}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
//                   style={{
//                     borderColor: colors.border,
//                     backgroundColor: "#1E1E1E",
//                     color: colors.text,
//                     "--tw-ring-color": colors.primary,
//                     ":hover": {
//                       borderColor: colors.primary,
//                       boxShadow: `0 0 0 3px ${colors.primary}40`,
//                     },
//                   }}
//                   required={field.required}
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="space-y-1">
//             <label
//               className="block font-medium tracking-wide"
//               style={{ color: colors.text }}
//             >
//               Bio
//             </label>
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               rows={4}
//               className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
//               style={{
//                 borderColor: colors.border,
//                 backgroundColor: "#1E1E1E",
//                 color: colors.text,
//                 "--tw-ring-color": colors.primary,
//                 ":hover": {
//                   borderColor: colors.primary,
//                   boxShadow: `0 0 0 3px ${colors.primary}40`,
//                 },
//               }}
//             />
//           </div>

//           <div className="space-y-1">
//             <label
//               className="block font-medium tracking-wide"
//               style={{ color: colors.text }}
//             >
//               Profile Photo
//             </label>
//             <div className="relative">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold transition-all duration-200"
//                 style={{
//                   borderColor: colors.border,
//                   backgroundColor: "#1E1E1E",
//                   color: colors.text,
//                   "--tw-ring-color": colors.primary,
//                   ":hover": {
//                     borderColor: colors.primary,
//                     boxShadow: `0 0 0 3px ${colors.primary}40`,
//                   },
//                   file: {
//                     backgroundColor: colors.primary,
//                     color: colors.lightText,
//                   },
//                 }}
//               />
//             </div>
//           </div>

//           <div className="pt-4 flex flex-col space-y-4">
//             <button
//               type="submit"
//               className="w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 relative overflow-hidden group"
//               style={{
//                 backgroundColor: colors.primary,
//                 color: colors.lightText,
//               }}
//             >
//               <span className="relative z-10">Submit</span>
//               <span
//                 className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                 style={{ backgroundColor: colors.hover }}
//               />
//             </button>

//             <Link
//               href="/become-guide"
//               className="text-center hover:underline transition-all duration-200"
//               style={{
//                 color: colors.primary,
//                 ":hover": {
//                   textShadow: `0 0 8px ${colors.primary}`,
//                 },
//               }}
//             >
//               Become a Guide
//             </Link>
//           </div>
//         </form>

//         {/* Decorative elements */}
//         <div
//           className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-xl opacity-20"
//           style={{ backgroundColor: colors.primary }}
//         />
//         <div
//           className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-xl opacity-20"
//           style={{ backgroundColor: colors.primary }}
//         />
//       </animated.div>
//     </div>
//   );
// };

// export default MorcompassForm;




"use client";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import morcompassLogo from "@/public/images/morcompass-logo.png";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const UserRegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const colors = {
    primary: "#EE9799",
    secondary: "#FFFFFF",
    accent: "#C4C4C4",
    background: "#000000",
    text: "#FFFFFF",
    lightText: "#000000",
    border: "#EE9799",
    hover: "#D48789",
    cardBg: "#121212",
  };

  const { transform, boxShadow } = useSpring({
    transform: isHovered
      ? "translateY(-8px) scale(1.02)"
      : "translateY(0px) scale(1)",
    boxShadow: isHovered
      ? `0 30px 60px -15px ${colors.primary}50`
      : `0 20px 40px -10px ${colors.primary}30`,
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

   try {
      //  👇 Get CSRF token
       await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
       withCredentials: true,
      });

      // 👇 Post registration
       await axios.post("http://localhost:8000/api/register", formData, {
        withCredentials: true,
       });
      setSuccess("Registration successful! Please login.");
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error: any) {
      if (error.response) {
        const data = error.response.data;
        const messages = data.errors
          ? Object.values(data.errors).flat().join(" ")
          : data.message || "Registration failed";
        setError(messages);
      } else {
        setError("Network error. Please try again later.");
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
      {/* background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: colors.primary }} />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: colors.primary }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-15" style={{ backgroundColor: colors.primary }} />
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logo Section */}
          <div className="text-center mb-8 flex flex-col items-center relative z-10">
            <div className="w-24 h-24 mb-4 relative">
              <Image src={morcompassLogo} alt="MORCOMPASS Logo" fill className="object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-4xl font-bold mb-2 tracking-tighter bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(45deg, ${colors.primary}, #fff)` }}>
              MORCOMPASS
            </h1>
            <p className="text-lg italic mt-2" style={{ color: colors.accent }}>
              YOUR COMPASS BEYOND BOUNDARIES
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {["name", "email", "password", "password_confirmation"].map((field) => (
              <div key={field} className="space-y-2">
                <label className="block font-medium text-sm uppercase" style={{ color: colors.accent }}>
                  {field.replace("_", " ")}
                </label>
                <input
                  type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border focus:outline-none transition-all duration-200"
                  style={{
                    borderColor: `${colors.border}40`,
                    backgroundColor: "#1E1E1E",
                    color: colors.text,
                  }}
                />
              </div>
            ))}

            {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
            {success && <p className="text-green-500 text-center font-semibold">{success}</p>}

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
                  {loading ? "Registering..." : "Register"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </button>

              <Link href="/login" className="text-center text-sm" style={{ color: colors.primary }}>
                Already have an account? Login
              </Link>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default UserRegisterForm;
