import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <div className="product-not-found">
        <span>🔍</span>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn-primary">Browse Products</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 3000);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  return (
    <div className="product-detail-page">
      {/* Added to Cart Notification */}
      <div className={`cart-notification ${showAddedNotification ? 'show' : ''}`}>
        <span>✓</span> Added {quantity} item(s) to cart!
        <Link to="/cart">View Cart →</Link>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products/${product.category.toLowerCase().replace(' ', '-')}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
      </div>

      {/* Product Main */}
      <div className="product-detail-main">
        {/* Product Image */}
        <div className="product-image-section">
          <div className="product-image-main">
            {product.badge && (
              <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                {product.badge}
              </span>
            )}
            <span className="product-emoji">{product.image}</span>
          </div>
          <div className="product-image-thumbnails">
            <button className="thumbnail active">{product.image}</button>
            <button className="thumbnail">📦</button>
            <button className="thumbnail">📋</button>
            <button className="thumbnail">⭐</button>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <div className="product-category-tag">{product.category}</div>
          <h1>{product.name}</h1>
          
          <div className="product-rating-row">
            <div className="stars">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="rating-number">{product.rating}</span>
            <span className="review-count">({product.reviews} reviews)</span>
            <span className="stock-status">
              {product.inStock ? '✓ In Stock' : '✕ Out of Stock'}
            </span>
          </div>

          <div className="product-price-section">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">${product.originalPrice}</span>
                <span className="discount-badge">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          <p className="product-description">{product.description}</p>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-primary btn-large" onClick={handleAddToCart}>
              <span>🛒</span> Add to Cart
            </button>
            <button className="btn-secondary btn-large" onClick={handleBuyNow}>
              <span>⚡</span> Buy Now
            </button>
            <button 
              className={`wishlist-button ${inWishlist ? 'active' : ''}`}
              onClick={() => toggleWishlist(product.id)}
            >
              {inWishlist ? '❤️' : '🤍'}
            </button>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <div className="delivery-item">
              <span className="delivery-icon">🚚</span>
              <div>
                <strong>Free Delivery</strong>
                <p>On orders over $50</p>
              </div>
            </div>
            <div className="delivery-item">
              <span className="delivery-icon">🔄</span>
              <div>
                <strong>Easy Returns</strong>
                <p>30-day return policy</p>
              </div>
            </div>
            <div className="delivery-item">
              <span className="delivery-icon">🛡️</span>
              <div>
                <strong>Secure Payment</strong>
                <p>100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="product-tabs-section">
        <div className="tabs-header">
          <button 
            className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            📋 Description
          </button>
          <button 
            className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            ⭐ Reviews ({product.reviews})
          </button>
          <button 
            className={`tab-button ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            🚚 Shipping
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="tab-panel">
              <h3>Product Description</h3>
              <p>{product.description}</p>
              <h4>Features:</h4>
              <ul>
                <li>Premium quality ingredients</li>
                <li>Suitable for all {product.category.toLowerCase()}</li>
                <li>Vet recommended</li>
                <li>Made with natural ingredients</li>
              </ul>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="tab-panel">
              <div className="reviews-summary">
                <div className="rating-big">
                  <span className="rating-number">{product.rating}</span>
                  <div className="stars large">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="review-count">{product.reviews} reviews</span>
                </div>
              </div>
              <div className="review-list">
                <div className="review-item">
                  <div className="review-header">
                    <span className="reviewer-avatar">🐕</span>
                    <div>
                      <strong>Happy Pet Parent</strong>
                      <div className="stars small">★★★★★</div>
                    </div>
                    <span className="review-date">2 days ago</span>
                  </div>
                  <p>Amazing product! My pet loves it. Will definitely buy again.</p>
                </div>
                <div className="review-item">
                  <div className="review-header">
                    <span className="reviewer-avatar">🐈</span>
                    <div>
                      <strong>Pet Lover</strong>
                      <div className="stars small">★★★★☆</div>
                    </div>
                    <span className="review-date">1 week ago</span>
                  </div>
                  <p>Great quality and fast shipping. Highly recommend!</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className="tab-panel">
              <h3>Shipping Information</h3>
              <div className="shipping-options">
                <div className="shipping-option">
                  <span>🚚</span>
                  <div>
                    <strong>Standard Delivery</strong>
                    <p>3-5 business days - Free on orders over $50</p>
                  </div>
                </div>
                <div className="shipping-option">
                  <span>⚡</span>
                  <div>
                    <strong>Express Delivery</strong>
                    <p>1-2 business days - $9.99</p>
                  </div>
                </div>
                <div className="shipping-option">
                  <span>🌟</span>
                  <div>
                    <strong>Same Day Delivery</strong>
                    <p>Order before 2PM - $14.99</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="related-products-section">
          <h2>🛍️ You Might Also Like</h2>
          <div className="related-products-grid">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
