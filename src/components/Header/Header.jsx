import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="container">
            <div className="main">
                <h1>Repair and Maintenance Services</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, illo?</p>
                <button>Find Out More</button>
            </div>
            <a href="#offers"><span className="bottom"></span></a>
        </div>
    );
};

export default Header;
