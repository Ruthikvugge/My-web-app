import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

const Products = () => {
  return (
    <div className="products-page">
      <h2>Shop by Category</h2>
      <div className="category-list">
        <Link to="/products/skincare" className="category-item">Skincare</Link>
        <Link to="/products/makeup" className="category-item">Makeup</Link>
        <Link to="/products/haircare" className="category-item">Haircare</Link>
      </div>
    </div>
  );
};

export default Products;