import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <span>🐾</span>
            </div>
            <div className="logo-text">
              <h1>PetCare</h1>
              <span>Market</span>
            </div>
          </Link>
          <p>Your one-stop destination for all pet needs. Quality products, expert advice, and unconditional love for your furry friends.</p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">📘</a>
            <a href="#instagram" aria-label="Instagram">📸</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#youtube" aria-label="YouTube">📺</a>
          </div>
        </div>
        
        <div className="footer-links">
          <h5>Shop by Pet</h5>
          <ul>
            <li><Link to="/products/dogs">🐕 Dogs</Link></li>
            <li><Link to="/products/cats">🐈 Cats</Link></li>
            <li><Link to="/products/birds">🦜 Birds</Link></li>
            <li><Link to="/products/fish">🐠 Fish</Link></li>
            <li><Link to="/products/small-pets">🐹 Small Pets</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h5>Shop by Category</h5>
          <ul>
            <li><Link to="/products">Pet Food</Link></li>
            <li><Link to="/products">Toys & Accessories</Link></li>
            <li><Link to="/products">Health & Wellness</Link></li>
            <li><Link to="/products">Grooming</Link></li>
            <li><Link to="/products">Beds & Furniture</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h5>Customer Care</h5>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#track">Track Order</a></li>
            <li><a href="#returns">Returns & Refunds</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h5>About Us</h5>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Pet Care Blog</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#partners">Partner with Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-info">
          <p>© 2026 PetCare Market. All rights reserved. Made with ❤️ for pets everywhere.</p>
        </div>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Settings</a>
        </div>
        <div className="payment-methods">
          <span>💳</span>
          <span>🏦</span>
          <span>📱</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
