import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [imageError, setImageError] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (storedProduct && storedProduct.id === parseInt(id)) {
      setProduct(storedProduct);
    } else {
      setProduct(null); // Set product to null if not found
    }
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (!product) {
    return (
      <div className="product-details-container">
        <Link to="/products" className="back-btn">&larr; Back to Products</Link>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <Link to="/products" className="back-btn">&larr; Back to Products</Link>
      <div className="product-details">
        <div className="product-image-container">
          {imageError ? (
            <div className="image-placeholder">Image not available</div>
          ) : (
            <img 
              src={`/${product.image}`} // Use the image from the product
              alt={product.name} 
              className="product-image" 
              onError={handleImageError}
            />
          )}
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
