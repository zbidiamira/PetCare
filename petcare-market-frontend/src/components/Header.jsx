import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header({ showPromo, setShowPromo }) {
  const { cartCount, wishlist } = useCart();

  return (
    <>
      {/* Promo Banner */}
      {showPromo && (
        <div className="promo-banner">
          <div className="promo-content">
            <span className="promo-icon">🐾</span>
            <p><strong>Happy Paws Sale!</strong> Get 25% off on all premium pet food this week!</p>
            <Link to="/products" className="promo-cta">Shop Now</Link>
          </div>
          <button className="promo-close" onClick={() => setShowPromo(false)}>×</button>
        </div>
      )}

      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <span className="paw-main">🐾</span>
              <span className="paw-sparkle">✨</span>
            </div>
            <div className="logo-text">
              <h1>PetCare</h1>
              <span>Market</span>
            </div>
          </Link>
          
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for products, brands, and more..." />
            <button className="search-btn">Search</button>
          </div>
          
          <nav className="nav-actions">
            <Link to="/wishlist" className="nav-icon-btn">
              <span>❤️</span>
              <span className="nav-label">Wishlist</span>
              {wishlist.length > 0 && <span className="wishlist-badge">{wishlist.length}</span>}
            </Link>
            <Link to="/account" className="nav-icon-btn">
              <span>👤</span>
              <span className="nav-label">Account</span>
            </Link>
            <Link to="/cart" className="nav-icon-btn cart-btn">
              <span>🛒</span>
              <span className="nav-label">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </nav>
        </div>
        
        <nav className="category-nav">
          <Link to="/products/dogs" className="category-link">🐕 Dogs</Link>
          <Link to="/products/cats" className="category-link">🐈 Cats</Link>
          <Link to="/products/birds" className="category-link">🦜 Birds</Link>
          <Link to="/products/fish" className="category-link">🐠 Fish</Link>
          <Link to="/products/small-pets" className="category-link">🐹 Small Pets</Link>
          <Link to="/products" className="category-link highlight">🔥 Deals</Link>
          <Link to="/products" className="category-link">✨ New Arrivals</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
