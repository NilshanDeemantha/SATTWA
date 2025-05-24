import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/?q=YOUR_LOCATION_COORDINATES",
      "_blank"
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.png" alt="SATTWA Logo" />
          <span>SATTWA Ayurvedic Beauty Care Center</span>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About Us
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/gallery" className="nav-link">
            Gallery
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <button onClick={handleLocationClick} className="location-btn">
            Get Location
          </button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
