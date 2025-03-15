import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Beauty Banner */}
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" // Beauty banner image
          alt="Beauty Banner"
        />
      </div>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=200" // Lipstick image
              alt="Lipstick"
            />
            <h3>Lipstick</h3>
            <Link to="/products/makeup" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
          <div className="product-card">
            <img
              src="https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=200" // Foundation image
              alt="Foundation"
            />
            <h3>Foundation</h3>
            <Link to="/products/makeup" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;