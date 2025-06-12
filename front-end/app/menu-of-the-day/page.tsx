import Image from "next/image";
import styles from './menuOfTheDay.module.css';
import BackToTop from "./BackToTop";
import AnimateOnScroll from "./AnimateOnScroll";

export default function MenuOfTheDay() {
  // Menu data
  const menuSections = [
    {
      id: "starters",
      title: "Starters",
      subtitle: "Begin your culinary journey",
      items: [
        {
          name: "Marinated Shrimp",
          description: "Fresh Shrimp, Olive Oil, Tomato Sauce",
          price: "$12",
        },
        {
          name: "Avocado & Mango Salad",
          description: "Avocado, Mango, Cherry Tomatoes",
          price: "$10",
        },
        {
          name: "Cream of Asparagus",
          description: "Asparagus, Potato, Celery, Onion",
          price: "$9",
        },
      ],
      image: "/images/menu/starters-bg.jpg",
    },
    {
      id: "mains",
      title: "Main Courses",
      subtitle: "Our chef's specialties",
      items: [
        {
          name: "Prime Rib",
          description: "Rib, Rosemary, Black pepper",
          price: "$28",
        },
        {
          name: "Sriracha Beef",
          description: "Beef, Sriracha, Vegetables",
          price: "$24",
        },
        {
          name: "Chicken with Garlic",
          description: "Chicken, Cherry tomatoes, Olive oil",
          price: "$22",
        },
      ],
      image: "/images/menu/mains-bg.jpg",
    },
    // Add desserts and drinks sections similarly
  ];

  return (
    <main className={styles.menuPage}>
      {/* Header Section */}
      <section className={styles.menuHeader}>
        <div className={styles.headerContent}>
          <Image
            src="/images/logo.png"
            alt="Restaurant Logo"
            width={160}
            height={60}
            className={styles.menuLogo}
          />
          <h1>Today Is Special Menu</h1>
          <p className={styles.subtitle}>
            Fresh ingredients prepared with passion
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <section key={section.id} className={styles.menuSection}>
          <div className={styles.imageContainer}>
            <Image
              src={section.image}
              alt={section.title}
              fill
              className={styles.sectionImage}
              priority
            />
          </div>
          <div className={styles.contentCol}>
            <div className={styles.menuContent}>
              <div className={styles.sectionTitle}>
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>
              </div>
              <ul className={styles.menuItems}>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className={styles.price}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Reservation Section */}
      <section className={styles.reservationSection}>
        <div className={styles.reservationContent}>
          <h2>Reserve Your Table</h2>
          <p>
            Experience our culinary excellence in person. Book your table now
            for an unforgettable dining experience.
          </p>
          <a href="/reservations" className={styles.reservationBtn}>
            Make Reservation
          </a>
          <p className={styles.contactText}>
            Or call us directly: <a href="tel:+1234567890">(123) 456-7890</a>
          </p>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />

      <AnimateOnScroll>
        <section className={styles.menuSection}>{/* ... */}</section>
      </AnimateOnScroll>
    </main>
  );
}
