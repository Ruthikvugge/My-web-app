import React from "react";
import { Link } from "react-router-dom";
import "../styles/OrderConfirmation.css";

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation-container">
      <h2>Thank you for your order!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to="/" className="continue-shopping-btn">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;