import header_img from "./header-img.png";
import accessories from "./accessories.png";
import acer from "./acer.png";
import hotline_support from "./hotline_support.jpg";
import Huawei from "./Huawei.png";
import iphone from "./iphone.png";
import ipods from "./ipods.png";
import mobile_phone from "./mobile-phone.png";
import Nokia from "./Nokia.jpg";
import offer from "./offer.png";
import OnePlus from "./OnePlus.png";
import Oppo from "./Oppo.png";
import order_management from "./order_management.jpg";
import phoneRepair from "./phoneRepair.jpg";
import refurbisehd from "./refurbisehd.jpg";
import samsung from "./samsung.png";
import tablet from "./tablet.png";
import usedPhones from "./usedPhones.png";
import Vapes from "./Vapes.png";
import windows from "./windows.png";
import Xiaomi from "./Xiaomi.png";

export const assets = {
  header_img,
  accessories,
  acer,
  hotline_support,
  Huawei,
  iphone,
  ipods,
  mobile_phone,
  Nokia,
  offer,
  OnePlus,
  Oppo,
  order_management,
  phoneRepair,
  refurbisehd,
  samsung,
  tablet,
  usedPhones,
  Vapes,
  windows,
  Xiaomi,
};

export const homePageCategoriesSection = [
  { title: "Mobile Phones", image: assets.mobile_phone },
  { title: "Tablets", image: assets.tablet },
  { title: "iPods", image: assets.ipods },
  { title: "Accessories", image: assets.accessories },
  { title: "Used Phones", image: assets.usedPhones },
  { title: "Vapes", image: assets.Vapes },
];

export const homePageBrandsSection = [
  { title: "Acer", image: assets.acer },
  { title: "Apple", image: assets.iphone },
  { title: "Xiaomi", image: assets.Xiaomi },
  { title: "Oppo", image: assets.Oppo },
  { title: "OnePlus", image: assets.OnePlus },
  { title: "Huawei", image: assets.Huawei },
  { title: "Nokia", image: assets.Nokia },
  { title: "Windows", image: assets.windows },
];

export const homePageServicesSection = [
  { title: "Repair", image: assets.phoneRepair },
  { title: "Refurbished", image: assets.refurbisehd },
  { title: "Order Management", image: assets.order_management },
  { title: "Hotline Support", image: assets.hotline_support },
];

export const categories = [
    "All",
    "Mobile Phones",
    "Accessories",
    "Tablets",
    "iPods",
    "Used Phones",
    "Vapes",
  ];

export const productsData = [
  {
    id: 1,
    name: "iPhone 12",
    category: categories[1],
    price: 799,
    image: iphone,
    description: "Latest iPhone with A14 Bionic chip",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    category: categories[1],
    price: 699,
    image: mobile_phone,
    description: "Powerful Android smartphone",
  },
  {
    id: 3,
    name: "AirPods Pro",
    category: categories[2],
    price: 249,
    image: ipods,
    description: "Wireless earbuds with active noise cancellation",
  },
  {
    id: 4,
    name: "MacBook Air",
    category: categories[3],
    price: 999,
    image: tablet,
    description: "Thin and light laptop with M1 chip",
  },
  {
    id: 5,
    name: "JUUL Starter Kit",
    category: categories[6],
    price: 34.99,
    image: Vapes,
    description: "Popular e-cigarette starter kit",
  },
];
