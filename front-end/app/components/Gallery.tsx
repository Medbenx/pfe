// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function TouristGallery() {
//   const [activeTab, setActiveTab] = useState("photos");
//   const [newExperience, setNewExperience] = useState("");
//   const [submittedExperiences, setSubmittedExperiences] = useState([]);
//   const [touristPhotos, setTouristPhotos] = useState([]);
//   const [newCaption, setNewCaption] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [comments, setComments] = useState({});

//   // Load from localStorage on first load
//   useEffect(() => {
//     const storedPhotos = JSON.parse(localStorage.getItem("touristPhotos") || "[]");
//     const storedExperiences = JSON.parse(localStorage.getItem("submittedExperiences") || "[]");
//     const storedComments = JSON.parse(localStorage.getItem("comments") || "{}");

//     setTouristPhotos(storedPhotos);
//     setSubmittedExperiences(storedExperiences);
//     setComments(storedComments);
//   }, []);

//   // Save to localStorage on change
//   useEffect(() => {
//     localStorage.setItem("touristPhotos", JSON.stringify(touristPhotos));
//   }, [touristPhotos]);

//   useEffect(() => {
//     localStorage.setItem("submittedExperiences", JSON.stringify(submittedExperiences));
//   }, [submittedExperiences]);

//   useEffect(() => {
//     localStorage.setItem("comments", JSON.stringify(comments));
//   }, [comments]);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setSelectedImage(reader.result); // base64
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddPhoto = () => {
//     if (!selectedImage || !newCaption.trim()) return;

//     const newPhoto = {
//       id: Date.now(),
//       src: selectedImage,
//       user: "You",
//       caption: newCaption,
//       likes: 0
//     };

//     setTouristPhotos([newPhoto, ...touristPhotos]);
//     setSelectedImage(null);
//     setNewCaption("");
//   };

//   const handleLike = (photoId) => {
//     setTouristPhotos((prev) =>
//       prev.map((p) =>
//         p.id === photoId ? { ...p, likes: p.likes + 1 } : p
//       )
//     );
//   };

//   const handleAddComment = (photoId, text) => {
//     if (!text.trim()) return;
//     setComments((prev) => ({
//       ...prev,
//       [photoId]: [...(prev[photoId] || []), { id: Date.now(), user: "You", text }]
//     }));
//   };

//   const handleSubmitExperience = (e) => {
//     e.preventDefault();
//     if (!newExperience.trim()) return;

//     const newEntry = {
//       id: Date.now(),
//       name: "You",
//       avatar: "/avatars/default.jpg",
//       text: newExperience,
//       date: "Just now",
//       location: "Morocco"
//     };

//     setSubmittedExperiences([newEntry, ...submittedExperiences]);
//     setNewExperience("");
//   };

//   return (
//     <div className="py-16 bg-gradient-to-r from-blue-50 to-amber-50 min-h-screen">
//       <div className="container  mx-auto px-4">
//         <div className="text-center mt-20 mb-12">
//           <h1 className="text-4xl font-bold text-gray-800 mb-3">
//             Traveler's Corner
//           </h1>
//           <p className="text-lg text-gray-600">
//             See Morocco through the eyes of fellow travelers and share your own experiences
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="flex bg-white rounded-full p-1 shadow-inner">
//             <button
//               onClick={() => setActiveTab("photos")}
//               className={`px-6 py-2 rounded-full transition-colors ${activeTab === "photos" ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"}`}
//             >
//               Traveler Photos
//             </button>
//             <button
//               onClick={() => setActiveTab("experiences")}
//               className={`px-6 py-2 rounded-full transition-colors ${activeTab === "experiences" ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"}`}
//             >
//               Experiences
//             </button>
//           </div>
//         </div>

//         {activeTab === "photos" ? (
//           <>
//             {/* Photo Upload */}
//             <div className="bg-white p-6 rounded-xl shadow-md mb-8 max-w-2xl mx-auto">
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
//                   <Image
//                     src="/avatars/default.jpg"
//                     alt="User"
//                     width={40}
//                     height={40}
//                     className="object-cover"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   value={newCaption}
//                   onChange={(e) => setNewCaption(e.target.value)}
//                   placeholder="Add a caption..."
//                   className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
//                 />
//               </div>
//               <input type="file" onChange={handleImageUpload} />
//               {selectedImage && (
//                 <div className="my-4">
//                   <Image
//                     src={selectedImage}
//                     alt="Preview"
//                     width={300}
//                     height={200}
//                     className="rounded-md"
//                   />
//                 </div>
//               )}
//               <button
//                 onClick={handleAddPhoto}
//                 className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//               >
//                 Upload
//               </button>
//             </div>

//             {/* Photo Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {touristPhotos.map((photo) => (
//                 <div key={photo.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                   <div className="relative h-64">
//                     <Image
//                       src={photo.src}
//                       alt={photo.caption}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <div className="flex items-center mb-2">
//                       <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
//                         <Image
//                           src={`/avatars/default.jpg`}
//                           alt={photo.user}
//                           width={32}
//                           height={32}
//                           className="object-cover"
//                         />
//                       </div>
//                       <span className="font-medium">{photo.user}</span>
//                     </div>
//                     <p className="text-gray-700 mb-3">{photo.caption}</p>
//                     <div className="flex items-center text-gray-500">
//                       <button
//                         onClick={() => handleLike(photo.id)}
//                         className="flex items-center text-orange-500 hover:text-orange-600 mr-4"
//                       >
//                         ❤️ {photo.likes}
//                       </button>
//                     </div>
//                     {/* Comments */}
//                     <div className="mt-2">
//                       {(comments[photo.id] || []).map((c) => (
//                         <p key={c.id} className="text-sm text-gray-600">
//                           <strong>{c.user}:</strong> {c.text}
//                         </p>
//                       ))}
//                       <input
//                         type="text"
//                         placeholder="Add a comment..."
//                         className="w-full mt-2 border rounded-full px-3 py-1 text-sm"
//                         onKeyDown={(e) => {
//                           if (e.key === "Enter") {
//                             handleAddComment(photo.id, e.target.value);
//                             e.target.value = "";
//                           }
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             {/* Experience Sharing */}
//             <div className="bg-white p-6 rounded-xl shadow-md mb-8 max-w-2xl mx-auto">
//               <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
//               <form onSubmit={handleSubmitExperience}>
//                 <textarea
//                   value={newExperience}
//                   onChange={(e) => setNewExperience(e.target.value)}
//                   placeholder="Tell us about your favorite moment in Morocco..."
//                   className="w-full border border-gray-200 rounded-xl p-4 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-300 min-h-[120px]"
//                 />
//                 <div className="flex justify-between items-center">
//                   <div className="text-sm text-gray-500">
//                     Tip: Mention specific locations or guides!
//                   </div>
//                   <button
//                     type="submit"
//                     className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//                   >
//                     Post Experience
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Experiences List */}
//             <div className="space-y-6 max-w-2xl mx-auto">
//               {submittedExperiences.map((exp) => (
//                 <div key={exp.id} className="bg-white p-6 rounded-xl shadow-md">
//                   <div className="flex items-start mb-4">
//                     <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
//                       <Image
//                         src={exp.avatar}
//                         alt={exp.name}
//                         width={48}
//                         height={48}
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <div className="flex items-center">
//                         <h4 className="font-semibold mr-2">{exp.name}</h4>
//                         <span className="text-xs text-gray-500">{exp.date}</span>
//                       </div>
//                       <div className="text-sm text-orange-600 mt-1">{exp.location}</div>
//                     </div>
//                   </div>
//                   <p className="text-gray-700">{exp.text}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }