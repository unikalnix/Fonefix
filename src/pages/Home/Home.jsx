import React from "react";
import Header from "../../components/Header/Header";
import Offer from "../../components/Offer/Offer";
import "./Home.css";
import MobileImg from "../../assets/mobile-phone.png";
import TabletImg from "../../assets/tablet.png";
import IpodsImage from "../../assets/ipods.png";
import accessories from "../../assets/accessories.png";
import usedPhones from "../../assets/usedPhones.png";
import Vapes from "../../assets/Vapes.png";
import Oppo from "../../assets/Oppo.png";
import Xiaomi from "../../assets/Xiaomi.png";
import Acer from "../../assets/acer.png";
import Huawei from "../../assets/Huawei.png";
import iphone from "../../assets/iphone.png";
import samsung from "../../assets/samsung.png";
import windows from "../../assets/windows.png";
import OnePlus from "../../assets/OnePlus.png";
import Nokia from "../../assets/Nokia.jpg";
import phoneRepair from "../../assets/phoneRepair.jpg";
import refurbisehd from "../../assets/refurbisehd.jpg";
import order_managemenet from "../../assets/order_management.jpg";
import hotline_support from "../../assets/hotline_support.jpg";

const categories = [
  { title: "Mobile Phones", image: MobileImg },
  { title: "Tablets", image: TabletImg },
  { title: "iPods", image: IpodsImage },
  { title: "Accessories", image: accessories },
  { title: "Used Phones", image: usedPhones },
  { title: "Vapes", image: Vapes },
];

const brands = [
  { title: "Acer", image: Acer },
  { title: "Apple", image: Huawei },
  { title: "Xiaomi", image: Xiaomi },
  { title: "Oppo", image: Oppo },
  { title: "OnePlus", image: iphone },
  { title: "Huawei", image: samsung },
  { title: "Nokia", image: OnePlus },
  { title: "Nokia", image: Nokia },
  { title: "Windows", image: windows },
];

const services = [
  { title: "Repair", image: phoneRepair },
  { title: "Refurbished", image: refurbisehd },
  { title: "Order Management", image: order_managemenet },
  { title: "Hotline Support", image: hotline_support },
];

const Home = () => {
  return (
    <div>
      <Header />
      <Offer />
      <h2>Our Categories</h2>
      <div id="category" className="category">
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="category-item">
              <div className="category_image_container">
                <img src={category.image} alt={category.title} />
              </div>
              <h2>{category.title}</h2>
              <button className="view-now">View Now</button>
            </li>
          ))}
        </ul>
      </div>
      <h2>We Fixed Those Brands</h2>
      <div className="brands" id="brands">
        <ul className="brands-list">
          {brands.map((brand, index) => (
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
        <div className="services_container">
          {services.map((item, index) => {
            return (
              <div key={index} className="service_item">
                <div
                  style={{ backgroundImage: `url(${item.image})` }} // Correctly format the background image
                  className="service_image_container"
                >
                  <div className="service_container">
                    <h3 className="service_title">{item.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />

    </div>
  );
};

export default Home;
