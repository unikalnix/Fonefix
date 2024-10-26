import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const categories = ['All', 'Mobile Phones', 'Accessories', 'Laptops', 'Vapes', 'Disposable Vapes', 'Coil Vapes', 'Vapes Category 2'];

const productsData = [
  { id: 1, name: 'iPhone 12', category: 'Mobile Phones', price: 799, image: 'src/assets/iphone.png', description: 'Latest iPhone with A14 Bionic chip' },
  { id: 2, name: 'Samsung Galaxy S21', category: 'Mobile Phones', price: 699, image: 'src/assets/samsung.png', description: 'Powerful Android smartphone' },
  { id: 3, name: 'AirPods Pro', category: 'Accessories', price: 249, image: 'src/assets/ipods.png', description: 'Wireless earbuds with active noise cancellation' },
  { id: 4, name: 'MacBook Air', category: 'Laptops', price: 999, image: 'src/assets/tablet.png', description: 'Thin and light laptop with M1 chip' },
  { id: 5, name: 'JUUL Starter Kit', category: 'Vapes', price: 34.99, image: 'src/assets/tablet.png', description: 'Popular e-cigarette starter kit' },
  { id: 6, name: 'JUUL Starter Kit', category: 'Disposable Vapes', price: 34.99, image: 'src/assets/tablet.png', description: 'Popular e-cigarette starter kit' },
  { id: 7, name: 'JUUL Starter Kit', category: 'Coil Vapes', price: 34.99, image: 'src/assets/tablet.png', description: 'Popular e-cigarette starter kit' },
  { id: 8, name: 'JUUL Starter Kit', category: 'Vapes Category 2', price: 34.99, image: 'src/assets/tablet.png', description: 'Popular e-cigarette starter kit' },
  // Add more products as needed
];

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData, categories]);

  useEffect(() => {
    filterProducts();
  }, [currentCategory, searchTerm]);

  const filterProducts = () => {
    let filtered = products;
    if (currentCategory !== 'All') {
      filtered = filtered.filter(product => product.category === currentCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
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
          {categories.map(category => (
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
        {currentProducts.map(product => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p className="product-price">${product.price}</p>
          </Link>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
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
