import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue shopping</Link></p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="cart-buttons">
                    <button onClick={() => addToCart(item)}>+</button>
                    <button onClick={() => removeFromCart(item.id)} disabled={item.quantity === 1}>-</button>
                    <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            <button className="checkout-btn"><Link to="/checkout">Proceed to Checkout</Link></button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;