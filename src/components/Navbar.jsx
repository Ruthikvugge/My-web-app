import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">BeautyShop</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <Link to="/cart">
            Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;