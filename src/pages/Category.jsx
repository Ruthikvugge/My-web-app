import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import products from "../data/products";
import "../styles/Category.css";

const Category = () => {
  const { category } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div className="category-page">
      <button onClick={() => navigate("/")} className="back-to-home-btn">
        Back to Home
      </button>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;