import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Simulate placing an order
    alert("Order placed successfully!");
    clearCart(); // Clear the cart
    navigate("/order-confirmation"); // Redirect to confirmation page
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      </div>
      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;