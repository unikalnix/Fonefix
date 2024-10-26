import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Bars from "../../assets/Icons/Bars";
import Topbar from "../../components/Topbar/Topbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    const navbar = document.querySelector(".navbar_container");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePath = () => {
    const path = location.pathname;

    // Set the active state based on the current path or hash
    if (path === "/") {
      setActive(location.hash === "#offers" ? "offers" : "home");
    } else if (path === "/products") {
      setActive("products");
    } else if (path === "/services") {
      setActive("services");
    } else if (path === "/contact") {
      setActive("visit us");
    } else {
      setActive(""); // Fallback if no matches
    }
  };

  useEffect(() => {
    handlePath();
  }, [location.pathname, location.hash]); // Listening for changes in both pathname and hash

  return (
    <>
      <div className="navbar_container">
        <nav className="navbar">
          <Link className="logo-title" to='/'>Logo</Link>
          <ul className="nav-items">
            <Link to="/">
              <li className={`${active === "home" ? "active" : ""}`}>home</li>
            </Link>
            {location.pathname === "/" && ( // Only show Offers on the home page
              <li className={`${active === "offers" ? "active" : ""}`}>
                <a href="#offers">Offers</a>
              </li>
            )}
            <Link to="/products">
              <li className={`${active === "products" ? "active" : ""}`}>
                products
              </li>
            </Link>
            <Link to="/services">
              <li className={`${active === "services" ? "active" : ""}`}>
                services
              </li>
            </Link>
            <Link to="/contact">
              <li className={`${active === "visit us" ? "active" : ""}`}>
                visit us
              </li>
            </Link>
          </ul>
          {/* <div className="signup-container">
            <button>Signup</button>
            <button>Login</button>
          </div> */}
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <Bars />
          </div>
        </nav>
        <hr />
      </div>
      <Topbar menuOpen={menuOpen} toggleTopbar={() => setMenuOpen(!menuOpen)} handlePath={handlePath} />
    </>
  );
};

export default Navbar;
