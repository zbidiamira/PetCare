import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const subtotal = cartTotal;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate order placement
      setOrderPlaced(true);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 5000);
    }
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="empty-checkout">
          <span>🛒</span>
          <h2>Your cart is empty</h2>
          <p>Add some items before checking out</p>
          <Link to="/products" className="btn-shop">Shop Now</Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="order-success">
          <div className="success-animation">
            <span className="check-icon">✓</span>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="confetti">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="confetti-piece" style={{
                  '--delay': `${Math.random() * 2}s`,
                  '--x': `${Math.random() * 200 - 100}px`,
                  '--rotation': `${Math.random() * 360}deg`
                }}>🎉</span>
              ))}
            </div>
          </div>
          <h1>Order Placed Successfully! 🎊</h1>
          <p>Thank you for shopping with PetCare Market</p>
          <p className="order-number">Order #PCM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p className="redirect-msg">Redirecting to home page...</p>
          <div className="happy-pets">
            <span>🐕</span>
            <span>🐈</span>
            <span>🐦</span>
            <span>🐠</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <Link to="/cart" className="back-to-cart">← Back to Cart</Link>
        <h1>Checkout</h1>
      </div>

      {/* Progress Steps */}
      <div className="checkout-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
          <div className="step-number">{step > 1 ? '✓' : '1'}</div>
          <span>Shipping</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
          <div className="step-number">{step > 2 ? '✓' : '2'}</div>
          <span>Payment</span>
        </div>
        <div className="progress-line"></div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Review</span>
        </div>
      </div>

      <div className="checkout-layout">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="form-step animate-in">
                <h2>📦 Shipping Information</h2>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Street Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Pet Street"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="NY"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="shipping-options-form">
                  <h3>🚚 Shipping Method</h3>
                  <label className="shipping-option-select">
                    <input type="radio" name="shippingMethod" value="standard" defaultChecked />
                    <div className="option-content">
                      <strong>Standard Shipping (5-7 days)</strong>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                  </label>
                  <label className="shipping-option-select">
                    <input type="radio" name="shippingMethod" value="express" />
                    <div className="option-content">
                      <strong>Express Shipping (2-3 days)</strong>
                      <span>$12.99</span>
                    </div>
                  </label>
                  <label className="shipping-option-select">
                    <input type="radio" name="shippingMethod" value="overnight" />
                    <div className="option-content">
                      <strong>Overnight Shipping</strong>
                      <span>$24.99</span>
                    </div>
                  </label>
                </div>

                <button type="submit" className="btn-continue">
                  Continue to Payment →
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="form-step animate-in">
                <h2>💳 Payment Information</h2>
                
                <div className="payment-icons-large">
                  <span className="active">💳</span>
                  <span>🏦</span>
                  <span>📱</span>
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="secure-badge">
                  <span>🔒</span>
                  <p>Your payment information is encrypted and secure</p>
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn-back" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="submit" className="btn-continue">
                    Review Order →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="form-step animate-in">
                <h2>📋 Review Your Order</h2>

                <div className="review-section">
                  <h3>Shipping Address</h3>
                  <p>
                    {formData.firstName} {formData.lastName}<br />
                    {formData.address}<br />
                    {formData.city}, {formData.state} {formData.zip}<br />
                    {formData.phone}
                  </p>
                  <button type="button" className="edit-btn" onClick={() => setStep(1)}>
                    Edit
                  </button>
                </div>

                <div className="review-section">
                  <h3>Payment Method</h3>
                  <p>💳 Card ending in {formData.cardNumber.slice(-4) || '****'}</p>
                  <button type="button" className="edit-btn" onClick={() => setStep(2)}>
                    Edit
                  </button>
                </div>

                <div className="review-section">
                  <h3>Order Items ({cart.length})</h3>
                  <div className="review-items">
                    {cart.map(item => (
                      <div key={item.id} className="review-item">
                        <span className="item-emoji">{item.image}</span>
                        <div className="item-info">
                          <strong>{item.name}</strong>
                          <span>Qty: {item.quantity}</span>
                        </div>
                        <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="button" className="btn-back" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button type="submit" className="btn-place-order">
                    🛍️ Place Order - ${total.toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="checkout-summary">
          <div className="summary-card">
            <h2>Order Summary</h2>
            
            <div className="summary-items">
              {cart.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="item-thumbnail">
                    <span>{item.image}</span>
                    <span className="item-qty">{item.quantity}</span>
                  </div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="guarantee">
              <div className="guarantee-item">
                <span>🔒</span>
                <p>Secure Checkout</p>
              </div>
              <div className="guarantee-item">
                <span>↩️</span>
                <p>30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
