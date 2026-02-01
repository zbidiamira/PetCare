import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { products, categories, specialDeals } from '../data/products';
import './Home.css';

function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">🏆</span>
              <span>Trusted by 100,000+ Pet Parents</span>
            </div>
            <h1>Give Your Furry <br/>Friends the <span className="highlight-text">Best Care</span></h1>
            <p>
              Discover premium food, toys, accessories, and healthcare products 
              for dogs, cats, birds, and all your beloved pets. Quality guaranteed!
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-primary btn-large">
                <span>🛍️</span> Start Shopping
              </Link>
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
            <div key={index} className="deal-card" style={{ animationDelay: `${index * 0.1}s` }}>
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

      <main className="home-main">
        {/* Pet Categories */}
        <section className="categories-section">
          <div className="section-header">
            <div className="section-title">
              <h2>🐾 Shop by Pet</h2>
              <p>Find everything your furry, feathered, or finned friend needs</p>
            </div>
            <Link to="/products" className="view-all">View All →</Link>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                className="category-card"
                style={{ 
                  '--category-color': category.color, 
                  '--category-bg': category.bgColor,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <h4>{category.name}</h4>
                <span className="product-count">{category.count} products</span>
                <p className="category-desc">{category.description}</p>
                <div className="category-hover">
                  <span>Shop Now →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="products-section">
          <div className="section-header">
            <div className="section-title">
              <h2>⭐ Featured Products</h2>
              <p>Handpicked favorites for your pets</p>
            </div>
            <Link to="/products" className="view-all">View All →</Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="btn-outline btn-large">View All Products →</Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="features-section">
          <div className="section-header centered">
            <div className="section-title">
              <h2>💝 Why Pet Parents Love Us</h2>
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

        {/* Brands Marquee */}
        <section className="brands-section">
          <h3>Trusted Brands</h3>
          <div className="brands-marquee">
            <div className="brands-track">
              <span>🐕 Royal Canin</span>
              <span>🐈 Purina</span>
              <span>🦴 Pedigree</span>
              <span>🐟 Blue Buffalo</span>
              <span>🌿 Natural Balance</span>
              <span>✨ Hill's Science</span>
              <span>🏠 KONG</span>
              <span>🎯 Frisco</span>
              <span>🐕 Royal Canin</span>
              <span>🐈 Purina</span>
              <span>🦴 Pedigree</span>
              <span>🐟 Blue Buffalo</span>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <span className="newsletter-icon">📧</span>
              <div>
                <h3>Join Our Pack!</h3>
                <p>Subscribe for exclusive deals, pet care tips, and 15% off your first order.</p>
              </div>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
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
      </main>
    </div>
  );
}

export default Home;
