import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-animation">
            <span className="cart-icon">🛒</span>
            <span className="sparkle sparkle-1">✨</span>
            <span className="sparkle sparkle-2">✨</span>
            <span className="sparkle sparkle-3">✨</span>
          </div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items for your furry friends yet!</p>
          <Link to="/products" className="btn-shop">
            🛍️ Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = cartTotal;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>🛒 Shopping Cart</h1>
        <p>{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item, index) => (
            <div 
              key={item.id} 
              className="cart-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="item-image">
                <span>{item.image}</span>
              </div>
              
              <div className="item-details">
                <Link to={`/product/${item.id}`} className="item-name">
                  {item.name}
                </Link>
                <p className="item-category">{item.category}</p>
                {item.badge && (
                  <span className={`item-badge ${item.badge.toLowerCase().replace(' ', '-')}`}>
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="item-quantity">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="item-price">
                <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                {item.quantity > 1 && (
                  <span className="unit-price">${item.price.toFixed(2)} each</span>
                )}
              </div>

              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
              >
                🗑️
              </button>
            </div>
          ))}

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping">
              ← Continue Shopping
            </Link>
            <button className="clear-cart" onClick={clearCart}>
              🗑️ Clear Cart
            </button>
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              {shipping === 0 ? (
                <span className="free-shipping">FREE 🎉</span>
              ) : (
                <span>${shipping.toFixed(2)}</span>
              )}
            </div>
            
            {shipping > 0 && (
              <div className="shipping-progress">
                <p>Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!</p>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              🛍️ Proceed to Checkout
            </Link>

            <div className="payment-methods">
              <p>We accept:</p>
              <div className="payment-icons">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
              </div>
            </div>

            <div className="guarantee">
              <span>🔒</span>
              <p>Secure checkout. Your data is protected.</p>
            </div>
          </div>

          <div className="promo-card">
            <h3>🎁 Have a Promo Code?</h3>
            <div className="promo-input">
              <input type="text" placeholder="Enter code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-features">
        <div className="feature">
          <span>🚚</span>
          <div>
            <strong>Free Shipping</strong>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className="feature">
          <span>↩️</span>
          <div>
            <strong>Easy Returns</strong>
            <p>30-day return policy</p>
          </div>
        </div>
        <div className="feature">
          <span>🛡️</span>
          <div>
            <strong>Secure Payment</strong>
            <p>100% secure checkout</p>
          </div>
        </div>
        <div className="feature">
          <span>💬</span>
          <div>
            <strong>24/7 Support</strong>
            <p>We're here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
