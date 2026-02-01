import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product, index }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  return (
    <div 
      className="product-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {product.badge && (
        <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
          {product.badge}
        </span>
      )}
      <button 
        className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
        onClick={() => toggleWishlist(product.id)}
      >
        {inWishlist ? '❤️' : '🤍'}
      </button>
      <Link to={`/product/${product.id}`} className="product-image">
        <span>{product.image}</span>
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h4>{product.name}</h4>
        </Link>
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
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          <span>🛒</span> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
