import Link from "next/link";
import "../styles/Navbar.css";

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
          <div className="logo">MOROCCO</div>
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
