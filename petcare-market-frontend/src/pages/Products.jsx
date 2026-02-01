import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories, subcategories } from '../data/products';
import './Products.css';

function Products() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryName = categories.find(c => c.id === selectedCategory)?.name;
      filtered = filtered.filter(p => p.category === categoryName);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'All') {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSubcategory, sortBy, priceRange]);

  const currentSubcategories = selectedCategory !== 'all' 
    ? subcategories[selectedCategory] || ['All']
    : ['All'];

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Products</span>
            {selectedCategory !== 'all' && (
              <>
                <span>/</span>
                <span>{categories.find(c => c.id === selectedCategory)?.name}</span>
              </>
            )}
          </nav>
          <h1>
            {selectedCategory === 'all' 
              ? '🛍️ All Products' 
              : `${categories.find(c => c.id === selectedCategory)?.icon} ${categories.find(c => c.id === selectedCategory)?.name}`
            }
          </h1>
          <p>{filteredProducts.length} products found</p>
        </div>
      </div>

      <div className="products-layout">
        {/* Sidebar Filters */}
        <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
          <div className="filters-header">
            <h3>🎯 Filters</h3>
            <button className="close-filters" onClick={() => setShowFilters(false)}>×</button>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <h4>Pet Category</h4>
            <div className="filter-options">
              <label className={`filter-option ${selectedCategory === 'all' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'all'}
                  onChange={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory('All');
                  }}
                />
                <span className="option-icon">🐾</span>
                <span>All Pets</span>
              </label>
              {categories.map(cat => (
                <label 
                  key={cat.id} 
                  className={`filter-option ${selectedCategory === cat.id ? 'active' : ''}`}
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat.id}
                    onChange={() => {
                      setSelectedCategory(cat.id);
                      setSelectedSubcategory('All');
                    }}
                  />
                  <span className="option-icon">{cat.icon}</span>
                  <span>{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Subcategory Filter */}
          {selectedCategory !== 'all' && (
            <div className="filter-group">
              <h4>Product Type</h4>
              <div className="filter-chips">
                {currentSubcategories.map(sub => (
                  <button
                    key={sub}
                    className={`filter-chip ${selectedSubcategory === sub ? 'active' : ''}`}
                    onClick={() => setSelectedSubcategory(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price Range */}
          <div className="filter-group">
            <h4>Price Range</h4>
            <div className="price-range">
              <div className="price-inputs">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  placeholder="Min"
                />
                <span>to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  placeholder="Max"
                />
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="price-slider"
              />
            </div>
          </div>

          {/* Quick Filters */}
          <div className="filter-group">
            <h4>Quick Filters</h4>
            <div className="quick-filters">
              <button className="quick-filter">🔥 On Sale</button>
              <button className="quick-filter">✨ New Arrivals</button>
              <button className="quick-filter">⭐ Top Rated</button>
              <button className="quick-filter">🏆 Best Sellers</button>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          {/* Sort & View Options */}
          <div className="products-toolbar">
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              🎯 Filters
            </button>
            <div className="sort-options">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Category Pills (Mobile) */}
          <div className="category-pills">
            <button
              className={`category-pill ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              🐾 All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <span className="no-products-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your filters or search for something else.</p>
              <button onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('All');
                setPriceRange([0, 200]);
              }}>
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More */}
          {filteredProducts.length > 0 && (
            <div className="load-more">
              <button className="btn-outline">Load More Products</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Products;
