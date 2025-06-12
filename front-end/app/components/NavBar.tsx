import Link from "next/link";
import "../styles/Navbar.css";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-lines-container">
        <div className="nav-line"></div>
      </div>
      <div className="nav-content">
        <div className="nav-section">
          <ul className="navLinks">
            <li>
              <Link href="/about">About Morocco</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/TravelProgram">Travel Program</Link>
            </li>
          </ul>
        </div>

        <div className="nav-section center">
        <Link href="/" className="logo"><Image src="/images/logo1.png" alt="Logo" width={70} height={70} /></Link>
        </div>

        <div className="nav-section">
          <ul className="navLinks">
            <li>
              <Link href="/event-happy">Event Happyies</Link>
            </li>
            <li>
              <Link href="/language">EN/AR</Link>
            </li>
            <li>
              <Link href="/menu-of-the-day" className="nav-link">Today’s Menu</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-lines-container">
        <div className="nav-line"></div>
      </div>
    </nav>
  );
}
