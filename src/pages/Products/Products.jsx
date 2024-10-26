import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./Products.css";
import { productsData, categories } from "../../assets/assets";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setCurrentCategory(categoryFromUrl);
    }
  }, [location]);

  useEffect(() => {
    filterProducts();
  }, [currentCategory, searchTerm]);

  const filterProducts = () => {
    let filtered = productsData; // Use productsData directly
    if (currentCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === currentCategory
      );
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="products-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <nav className="category-nav">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </Link>
        ))}
      </div>

      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredProducts.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`page-btn`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;