import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Zap, Shield, Headphones } from 'lucide-react';
import Products from './Products';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <span>TechTrove: Get 10% off on your first purchase! Use code: FIRST10</span>
        <a href="#" className="cta-link">
          Shop now
        </a>
      </div>

    

      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1>
              Discover the latest in <span className="highlight">tech innovation</span>
            </h1>
            <p>
              Explore TechTrove's curated collection of cutting-edge electronics. From smartphones to smart homes, find the perfect gadget to elevate your digital life.
            </p>
            <div className="cta-buttons">
              <button className="primary-btn glow-effect" onClick={() => navigate('/Products.jsx')}>
                Shop Now <ChevronRight size={20} />
              </button>
              <button className="secondary-btn pulse-effect">
                View Deals
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Latest Electronics"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose TechTrove?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <Star size={40} />
              <h3>Top Brands</h3>
              <p>We offer products from the most trusted names in tech.</p>
            </div>
            <div className="feature-item">
              <Zap size={40} />
              <h3>Fast Shipping</h3>
              <p>Get your gadgets quickly with our expedited delivery options.</p>
            </div>
            <div className="feature-item">
              <Shield size={40} />
              <h3>Secure Shopping</h3>
              <p>Shop with confidence knowing your data is protected.</p>
            </div>
            <div className="feature-item">
              <Headphones size={40} />
              <h3>Expert Support</h3>
              <p>Our tech-savvy team is always ready to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <blockquote>
            "TechTrove has the best selection of gadgets I've ever seen. Their customer service is top-notch, and the prices are unbeatable!"
          </blockquote>
          <cite>- Udayan T, Tech Enthusiast</cite>
        </div>
      </section>

      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px #ff00ff; }
          50% { box-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
          100% { box-shadow: 0 0 5px #ff00ff; }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .home-container {
          font-family: 'Arial', sans-serif;
          color: #f0f4f8;
          background: linear-gradient(135deg, #1a237e, #4a148c, #880e4f);
        }
        .top-bar {
          background-color: #000051;
          color: #fff;
          font-size: 0.875rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
        }
        .cta-link {
          color: #ff80ab;
          font-weight: 600;
          text-decoration: underline;
        }
        .navbar {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }
        .logo a {
          font-size: 1.875rem;
          font-weight: 700;
          color: #ff80ab;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .logo a:hover {
          color: #f48fb1;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          font-size: 1.125rem;
          font-weight: 500;
          color: #f0f4f8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #ff80ab;
        }
        .cart-btn {
          background-color: #ff80ab;
          color: #000051;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .cart-btn:hover {
          background-color: #f48fb1;
          transform: translateY(-2px);
        }
        .hero {
          padding: 4rem 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hero.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero .container {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .hero-content {
          flex: 1;
        }
        .hero h1 {
          font-size: 3.75rem;
          font-weight: 800;
          color: #f0f4f8;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .highlight {
          position: relative;
          display: inline-block;
          color: #ff80ab;
        }
        .highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background-color: #ff80ab;
        }
        .hero p {
          font-size: 1.125rem;
          color: #b0bec5;
          margin-bottom: 2rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
        }
        .primary-btn, .secondary-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .primary-btn {
          background-color: #ff80ab;
          color: #000051;
          border: none;
        }
        .primary-btn:hover {
          background-color: #f48fb1;
        }
        .secondary-btn {
          border: 2px solid #ff80ab;
          color: #ff80ab;
          background-color: transparent;
        }
        .secondary-btn:hover {
          background-color: rgba(255, 128, 171, 0.1);
        }
        .glow-effect {
          animation: glow 2s infinite;
        }
        .pulse-effect:hover {
          animation: pulse 1s infinite;
        }
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .hero-image img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .features {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 4rem 0;
        }
        .features h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ff80ab;
          text-align: center;
          margin-bottom: 3rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .feature-item {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }
        .feature-item:hover {
          transform: translateY(-5px);
        }
        .feature-item svg {
          color: #ff80ab;
          margin-bottom: 1rem;
        }
        .feature-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f0f4f8;
          margin-bottom: 0.5rem;
        }
        .feature-item p {
          color: #b0bec5;
        }
        .testimonial {
          background-color: rgba(0, 0, 0, 0.3);
          color: #f0f4f8;
          padding: 4rem 0;
          text-align: center;
        }
        .testimonial blockquote {
          font-size: 1.5rem;
          font-style: italic;
          max-width: 800px;
          margin: 0 auto 1rem;
        }
        .testimonial cite {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ff80ab;
        }
        @media (max-width: 768px) {
          .hero .container {
            flex-direction: column;
          }
          .hero-content, .hero-image {
            width: 100%;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

