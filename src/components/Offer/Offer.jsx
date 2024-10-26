import React from "react";
import "./Offer.css";
import offerImg from '../../assets/offer.png'

const Offer = () => {
  return (
    <div className="offer_container" id="offers">
      <div className="offer_container_main">
        <div className="offer_container_left">
            <h2>Student Offer</h2>
            <p>Get 10% off on all services</p>

        </div>
        <div className="offer_container_right">
            <img src={offerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
