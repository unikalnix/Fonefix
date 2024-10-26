import React, { useEffect } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import Cross from '../../assets/Icons/Cross';

const Topbar = ({ menuOpen, toggleTopbar, handlePath }) => {
  // Close the topbar and enable scrolling
  const handleClose = () => {
    toggleTopbar();
    handlePath(); // Ensure the active state is updated when closing
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  // Disable scrolling when the topbar is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [menuOpen]);

  return (
    <div className={`topbar ${menuOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={handleClose}>Home</Link>
        </li>
        {menuOpen && window.location.pathname === "/" && ( // Only show Offers on the home page
          <li>
            <a href="/#offers" onClick={handleClose}>Offers</a>
          </li>
        )}
        <li>
          <Link to="/services" onClick={handleClose}>Services</Link>
        </li>
        <li>
          <Link to="/products" onClick={handleClose}>Products</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClose}>Contact</Link>
        </li>
      </ul>
      <button className="close_btn" onClick={handleClose}>
        <Cross />
      </button>
    </div>
  );
};

export default Topbar;
