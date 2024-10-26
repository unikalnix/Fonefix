import React from "react";
import Header from "../../components/Header/Header";
import Offer from "../../components/Offer/Offer";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { homePageCategoriesSection , homePageBrandsSection, homePageServicesSection } from "../../assets/assets";

const Home = () => {
  const navigate = useNavigate();

  const handleViewNowClick = (categoryTitle) => {
    navigate(`/products?category=${encodeURIComponent(categoryTitle)}`);
  };

  return (
    <div>
      <Header />
      <Offer />

      <h2>Our Categories</h2>
      <div id="category" className="category">
        <ul>
          {homePageCategoriesSection.map((category, index) => (
            <li key={index} className="category-item">
              <div className="category_image_container">
                <img src={category.image} alt={category.title} />
              </div>
              <h2>{category.title}</h2>
              <button onClick={() => handleViewNowClick(category.title)} className="view-now">
                View Now
              </button>
            </li>
          ))}
        </ul>
      </div>

      <h2>We Fixed Those Brands</h2>
      <div className="brands" id="brands">
        <ul className="brands-list">
          {homePageBrandsSection.map((brand, index) => (
            <li key={index}>
              <div className="brand_image_container">
                <img src={brand.image} alt={brand.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="services_title">Our Services</h2>
      <p className="services_para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        placeat laborum voluptatem fugit omnis impedit ratione sint suscipit
        dolore quaerat!
      </p>
      <div className="services">
        <Link to='/services#service-categories' className="services_container">
          {homePageServicesSection.map((item, index) => (
            <div key={index} className="service_item">
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="service_image_container"
              >
                <div className="service_container">
                  <h3 className="service_title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Home;
