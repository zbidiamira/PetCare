import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist } = useCart();

  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="empty-wishlist">
          <div className="empty-animation">
            <span className="heart-icon">💝</span>
            <span className="pulse-ring"></span>
          </div>
          <h2>Your Wishlist is Empty</h2>
          <p>Save your favorite items to buy later!</p>
          <Link to="/products" className="btn-explore">
            ✨ Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <div className="header-content">
          <h1>💝 My Wishlist</h1>
          <p>{wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved</p>
        </div>
        <Link to="/products" className="btn-continue">
          Continue Shopping →
        </Link>
      </div>

      <div className="wishlist-grid">
        {wishlistProducts.map((product, index) => (
          <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }} className="wishlist-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="wishlist-suggestions">
        <h2>You Might Also Like</h2>
        <div className="suggestions-grid">
          {products
            .filter(p => !wishlist.includes(p.id))
            .slice(0, 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
