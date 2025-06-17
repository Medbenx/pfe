// import Image from "next/image";
// import styles from './menuOfTheDay.module.css';
// import BackToTop from "./BackToTop";
// import AnimateOnScroll from "./AnimateOnScroll";

// export default function MenuOfTheDay() {
//   // Menu data
//   const menuSections = [
//     {
//       id: "starters",
//       title: "Starters",
//       subtitle: "Begin your culinary journey",
//       items: [
//         {
//           name: "Marinated Shrimp",
//           description: "Fresh Shrimp, Olive Oil, Tomato Sauce",
//           price: "$12",
//         },
//         {
//           name: "Avocado & Mango Salad",
//           description: "Avocado, Mango, Cherry Tomatoes",
//           price: "$10",
//         },
//         {
//           name: "Cream of Asparagus",
//           description: "Asparagus, Potato, Celery, Onion",
//           price: "$9",
//         },
//       ],
//       image: "/images/menu/starters-bg.jpg",
//     },
//     {
//       id: "mains",
//       title: "Main Courses",
//       subtitle: "Our chef's specialties",
//       items: [
//         {
//           name: "Prime Rib",
//           description: "Rib, Rosemary, Black pepper",
//           price: "$28",
//         },
//         {
//           name: "Sriracha Beef",
//           description: "Beef, Sriracha, Vegetables",
//           price: "$24",
//         },
//         {
//           name: "Chicken with Garlic",
//           description: "Chicken, Cherry tomatoes, Olive oil",
//           price: "$22",
//         },
//       ],
//       image: "/images/menu/mains-bg.jpg",
//     },
//     // Add desserts and drinks sections similarly
//   ];

//   return (
//     <main className={styles.menuPage}>
//       {/* Header Section */}
//       <section className={styles.menuHeader}>
//         <div className={styles.headerContent}>
//           <Image
//             src="/images/logo.png"
//             alt="Restaurant Logo"
//             width={160}
//             height={60}
//             className={styles.menuLogo}
//           />
//           <h1>Today Is Special Menu</h1>
//           <p className={styles.subtitle}>
//             Fresh ingredients prepared with passion
//           </p>
//         </div>
//       </section>

//       {/* Menu Sections */}
//       {menuSections.map((section) => (
//         <section key={section.id} className={styles.menuSection}>
//           <div className={styles.imageContainer}>
//             <Image
//               src={section.image}
//               alt={section.title}
//               fill
//               className={styles.sectionImage}
//               priority
//             />
//           </div>
//           <div className={styles.contentCol}>
//             <div className={styles.menuContent}>
//               <div className={styles.sectionTitle}>
//                 <h2>{section.title}</h2>
//                 <p>{section.subtitle}</p>
//               </div>
//               <ul className={styles.menuItems}>
//                 {section.items.map((item, index) => (
//                   <li key={index}>
//                     <h3>{item.name}</h3>
//                     <p>{item.description}</p>
//                     <span className={styles.price}>{item.price}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* Reservation Section */}
//       <section className={styles.reservationSection}>
//         <div className={styles.reservationContent}>
//           <h2>Reserve Your Table</h2>
//           <p>
//             Experience our culinary excellence in person. Book your table now
//             for an unforgettable dining experience.
//           </p>
//           <a href="/reservations" className={styles.reservationBtn}>
//             Make Reservation
//           </a>
//           <p className={styles.contactText}>
//             Or call us directly: <a href="tel:+1234567890">(123) 456-7890</a>
//           </p>
//         </div>
//       </section>

//       {/* Back to Top Button */}
//       <BackToTop />

//       <AnimateOnScroll>
//         <section className={styles.menuSection}>{/* ... */}</section>
//       </AnimateOnScroll>
//     </main>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import styles from './FoodMenuCard.module.css';
import Image from 'next/image';

const menuItems = [
  {
    name: "Spicy Tuna Roll",
    price: "$14.99",
    description: "Our signature spicy tuna roll features fresh, high-quality tuna mixed with our special spicy mayo sauce, wrapped in premium sushi rice and nori seaweed. Topped with crispy tempura flakes for added texture.",
    ingredients: ["Tuna", "Sushi Rice", "Nori", "Spicy Mayo", "Tempura Flakes"],
    image: "/images/food-menu/spicy-tuna-roll.jpg"
  },
  {
    name: "Truffle Pasta",
    price: "$18.50",
    description: "Handmade pasta tossed in a rich truffle cream sauce with wild mushrooms and parmesan cheese. Finished with a drizzle of truffle oil and fresh herbs.",
    ingredients: ["Pasta", "Truffle", "Mushrooms", "Cream", "Parmesan"],
    image: "/images/food-menu/truffle-pasta.jpg"
  },
  {
    name: "Beef Wellington",
    price: "$32.99",
    description: "Tender beef fillet wrapped in mushroom duxelles and prosciutto, then encased in flaky puff pastry. Served with red wine reduction and seasonal vegetables.",
    ingredients: ["Beef Tenderloin", "Mushrooms", "Prosciutto", "Puff Pastry", "Red Wine Sauce"],
    image: "/images/food-menu/beef-wellington.jpg"
  },
  {
    name: "Avocado Toast",
    price: "$10.99",
    description: "Sourdough bread topped with smashed avocado, cherry tomatoes, feta cheese, microgreens, and a poached egg. Drizzled with olive oil and balsamic glaze.",
    ingredients: ["Sourdough", "Avocado", "Cherry Tomatoes", "Feta", "Poached Egg"],
    image: "/images/food-menu/avocado-toast.jpg"
  },
  {
    name: "Chocolate Lava Cake",
    price: "$9.99",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries. Dusted with powdered sugar for a perfect finish.",
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Vanilla Ice Cream"],
    image: "/images/food-menu/chocolate-lava-cake.jpg"
  }
];

export default function FoodMenuCard() {
  const [currentItem, setCurrentItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showNextItem = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentItem((prev) => (prev + 1) % menuItems.length);
  };

  const showPrevItem = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentItem((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentItem]);

  const currentFood = menuItems[currentItem];

  return (
    <div className={`${styles.container} py-16 bg-gradient-to-r from-blue-50 to-amber-50`}>
      <h1 className={styles.menuTitle}>Our Signature Dishes</h1>
      
      <div className={styles.cardsContainer}>
        {/* Image Card (Left) */}
        <div className={`${styles.imageCard} ${isAnimating ? styles.slideOut : styles.slideIn}`}>
          <Image
            width={400}
            height={400} 
            src={currentFood.image} 
            alt={currentFood.name} 
            className={styles.foodImage}
          />
        </div>
        
        {/* Details Card (Right) */}
        <div className={`${styles.detailsCard} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
          <h2 className={styles.foodName}>{currentFood.name}</h2>
          <p className={styles.foodPrice}>{currentFood.price}</p>
          <p className={styles.foodDescription}>{currentFood.description}</p>
          <div className={styles.foodIngredients}>
            {currentFood.ingredients.map((ingredient, index) => (
              <span key={index} className={styles.ingredientTag}>
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.navButtons}>
          <button onClick={showPrevItem} className={styles.navBtn} aria-label="Previous item">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={showNextItem} className={styles.navBtn} aria-label="Next item">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className={styles.foodCounter}>
          <span>{currentItem + 1}</span> / <span>{menuItems.length}</span>
        </div>
      </div>
    </div>
  );
}