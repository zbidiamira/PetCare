import { useState, useEffect } from 'react';
import './App.css';

// Sample product data
const featuredProducts = [
  { id: 1, name: 'Premium Dog Food', price: 49.99, originalPrice: 59.99, rating: 4.8, reviews: 234, image: '🦴', category: 'Dogs', badge: 'Best Seller' },
  { id: 2, name: 'Cozy Cat Bed', price: 35.99, originalPrice: null, rating: 4.9, reviews: 189, image: '🛏️', category: 'Cats', badge: 'New' },
  { id: 3, name: 'Interactive Bird Toy', price: 15.99, originalPrice: 19.99, rating: 4.7, reviews: 98, image: '🎯', category: 'Birds', badge: 'Sale' },
  { id: 4, name: 'Aquarium Filter Pro', price: 89.99, originalPrice: null, rating: 4.6, reviews: 156, image: '🌊', category: 'Fish', badge: null },
  { id: 5, name: 'Hamster Exercise Wheel', price: 24.99, originalPrice: 29.99, rating: 4.8, reviews: 78, image: '🎡', category: 'Small Pets', badge: 'Popular' },
  { id: 6, name: 'Dog Grooming Kit', price: 45.99, originalPrice: null, rating: 4.9, reviews: 312, image: '✨', category: 'Dogs', badge: 'Top Rated' },
];

const petCategories = [
  { id: 'dogs', name: 'Dogs', icon: '🐕', color: '#f97316', bgColor: '#fff7ed', count: '2,450+' },
  { id: 'cats', name: 'Cats', icon: '🐈', color: '#a855f7', bgColor: '#faf5ff', count: '1,890+' },
  { id: 'birds', name: 'Birds', icon: '🦜', color: '#22c55e', bgColor: '#f0fdf4', count: '560+' },
  { id: 'fish', name: 'Fish', icon: '🐠', color: '#3b82f6', bgColor: '#eff6ff', count: '780+' },
  { id: 'small-pets', name: 'Small Pets', icon: '🐹', color: '#ec4899', bgColor: '#fdf2f8', count: '420+' },
  { id: 'reptiles', name: 'Reptiles', icon: '🦎', color: '#14b8a6', bgColor: '#f0fdfa', count: '180+' },
];

const specialDeals = [
  { title: 'First Order Discount', description: '20% off your first purchase', code: 'WELCOME20', icon: '🎉' },
  { title: 'Free Shipping', description: 'On orders over $50', code: null, icon: '🚚' },
  { title: 'Subscribe & Save', description: 'Up to 35% on auto-deliveries', code: null, icon: '💝' },
];

function App() {
  const [healthStatus, setHealthStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    checkHealth();
  }, []);

  const checkHealth = async () => {
    try {
      const response = await fetch('/api/health');
      const data = await response.json();
      setHealthStatus(data);
    } catch (error) {
      setHealthStatus({ status: 'ERROR', message: 'Unable to connect to API' });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app">
      {/* Promo Banner */}
      {showPromo && (
        <div className="promo-banner">
          <div className="promo-content">
            <span className="promo-icon">🐾</span>
            <p><strong>Happy Paws Sale!</strong> Get 25% off on all premium pet food this week!</p>
            <button className="promo-cta">Shop Now</button>
          </div>
          <button className="promo-close" onClick={() => setShowPromo(false)}>×</button>
        </div>
      )}

      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <span className="paw-main">🐾</span>
              <span className="paw-sparkle">✨</span>
            </div>
            <div className="logo-text">
              <h1>PetCare</h1>
              <span>Market</span>
            </div>
          </div>
          
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search for products, brands, and more..." />
            <button className="search-btn">Search</button>
          </div>
          
          <nav className="nav-actions">
            <a href="#wishlist" className="nav-icon-btn">
              <span>❤️</span>
              <span className="nav-label">Wishlist</span>
            </a>
            <a href="#account" className="nav-icon-btn">
              <span>👤</span>
              <span className="nav-label">Account</span>
            </a>
            <a href="#cart" className="nav-icon-btn cart-btn">
              <span>🛒</span>
              <span className="nav-label">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </a>
          </nav>
        </div>
        
        <nav className="category-nav">
          <a href="#dogs" className="category-link">🐕 Dogs</a>
          <a href="#cats" className="category-link">🐈 Cats</a>
          <a href="#birds" className="category-link">🦜 Birds</a>
          <a href="#fish" className="category-link">🐠 Fish</a>
          <a href="#small-pets" className="category-link">🐹 Small Pets</a>
          <a href="#deals" className="category-link highlight">🔥 Deals</a>
          <a href="#new" className="category-link">✨ New Arrivals</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">🏆</span>
              <span>Trusted by 100,000+ Pet Parents</span>
            </div>
            <h2>Give Your Furry <br/>Friends the <span className="highlight-text">Best Care</span></h2>
            <p>
              Discover premium food, toys, accessories, and healthcare products 
              for dogs, cats, birds, and all your beloved pets. Quality guaranteed!
            </p>
            <div className="hero-actions">
              <button className="btn-primary btn-large">
                <span>🛍️</span> Start Shopping
              </button>
              <button className="btn-secondary btn-large">
                <span>📱</span> Download App
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Brands</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="floating-pets">
                <span className="pet pet-1">🐕</span>
                <span className="pet pet-2">🐈</span>
                <span className="pet pet-3">🦜</span>
                <span className="pet pet-4">🐠</span>
                <span className="pet pet-5">🐹</span>
              </div>
              <div className="hero-card">
                <div className="card-content">
                  <span className="big-emoji">🐾</span>
                  <p>Everything for your pets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Deals Banner */}
      <section className="deals-banner">
        <div className="deals-container">
          {specialDeals.map((deal, index) => (
            <div key={index} className="deal-card">
              <span className="deal-icon">{deal.icon}</span>
              <div className="deal-info">
                <h4>{deal.title}</h4>
                <p>{deal.description}</p>
                {deal.code && <span className="deal-code">{deal.code}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="app-main">
        {/* Pet Categories */}
        <section className="categories-section">
          <div className="section-header">
            <div className="section-title">
              <h3>🐾 Shop by Pet</h3>
              <p>Find everything your furry, feathered, or finned friend needs</p>
            </div>
            <a href="#all-categories" className="view-all">View All →</a>
          </div>
          <div className="categories-grid">
            {petCategories.map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                style={{ '--category-color': category.color, '--category-bg': category.bgColor }}
              >
                <div className="category-icon">{category.icon}</div>
                <h4>{category.name}</h4>
                <span className="product-count">{category.count} products</span>
                <div className="category-hover">
                  <button>Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="products-section">
          <div className="section-header">
            <div className="section-title">
              <h3>⭐ Featured Products</h3>
              <p>Handpicked favorites for your pets</p>
            </div>
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >All</button>
              <button 
                className={`filter-tab ${activeCategory === 'dogs' ? 'active' : ''}`}
                onClick={() => setActiveCategory('dogs')}
              >Dogs</button>
              <button 
                className={`filter-tab ${activeCategory === 'cats' ? 'active' : ''}`}
                onClick={() => setActiveCategory('cats')}
              >Cats</button>
              <button 
                className={`filter-tab ${activeCategory === 'others' ? 'active' : ''}`}
                onClick={() => setActiveCategory('others')}
              >Others</button>
            </div>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {product.badge && (
                  <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                    {product.badge}
                  </span>
                )}
                <button className="wishlist-btn">🤍</button>
                <div className="product-image">
                  <span>{product.image}</span>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h4>{product.name}</h4>
                  <div className="product-rating">
                    <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span className="rating-text">{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="add-to-cart" onClick={addToCart}>
                    <span>🛒</span> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <button className="btn-outline btn-large">View All Products →</button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="features-section">
          <div className="section-header centered">
            <div className="section-title">
              <h3>💝 Why Pet Parents Love Us</h3>
              <p>We're committed to making pet parenting easier and more joyful</p>
            </div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h4>Vet-Approved Products</h4>
              <p>All our products are carefully selected and approved by veterinary experts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h4>Same-Day Delivery</h4>
              <p>Order before 2 PM and get your pet supplies delivered the same day!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Best Price Guarantee</h4>
              <p>Found it cheaper elsewhere? We'll match the price plus give 10% extra off.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h4>Easy Returns</h4>
              <p>Not satisfied? Return within 30 days for a full refund, no questions asked.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h4>24/7 Pet Expert Support</h4>
              <p>Our pet care specialists are available around the clock to help you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h4>Rewards Program</h4>
              <p>Earn points on every purchase and redeem them for exclusive discounts.</p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <span className="newsletter-icon">📧</span>
              <h3>Join Our Pack!</h3>
              <p>Subscribe for exclusive deals, pet care tips, and 15% off your first order.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe 🐾</button>
            </form>
          </div>
          <div className="newsletter-pets">
            <span>🐕</span>
            <span>🐈</span>
            <span>🦜</span>
          </div>
        </section>

        {/* API Status (collapsed) */}
        <section className="status-section">
          <details>
            <summary>
              <span className="status-icon">⚡</span>
              <span>System Status</span>
              {!loading && (
                <span className={`status-badge ${healthStatus?.status === 'OK' ? 'online' : 'offline'}`}>
                  {healthStatus?.status === 'OK' ? '● Online' : '● Offline'}
                </span>
              )}
            </summary>
            <div className="status-content">
              {loading ? (
                <div className="loading">
                  <div className="loading-spinner"></div>
                  <span>Checking API status...</span>
                </div>
              ) : (
                <div className={`status-card ${healthStatus?.status === 'OK' ? 'success' : 'error'}`}>
                  <p><strong>Status:</strong> {healthStatus?.status}</p>
                  <p><strong>Message:</strong> {healthStatus?.message}</p>
                  {healthStatus?.timestamp && (
                    <p><strong>Last checked:</strong> {new Date(healthStatus.timestamp).toLocaleString()}</p>
                  )}
                </div>
              )}
            </div>
          </details>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <span>🐾</span>
              </div>
              <div className="logo-text">
                <h1>PetCare</h1>
                <span>Market</span>
              </div>
            </div>
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
              <li><a href="#dogs">🐕 Dogs</a></li>
              <li><a href="#cats">🐈 Cats</a></li>
              <li><a href="#birds">🦜 Birds</a></li>
              <li><a href="#fish">🐠 Fish</a></li>
              <li><a href="#small-pets">🐹 Small Pets</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h5>Shop by Category</h5>
            <ul>
              <li><a href="#food">Pet Food</a></li>
              <li><a href="#toys">Toys & Accessories</a></li>
              <li><a href="#health">Health & Wellness</a></li>
              <li><a href="#grooming">Grooming</a></li>
              <li><a href="#beds">Beds & Furniture</a></li>
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
    </div>
  );
}

export default App;
