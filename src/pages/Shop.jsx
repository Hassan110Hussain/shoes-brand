import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Shop.css';

const PRODUCTS = [
  { id: 1, name: 'Nike Air Max', price: 120, category: 'running', image: '/images/shoe_image.png', rating: 4.5 },
  { id: 2, name: 'Adidas Ultraboost', price: 180, category: 'running', image: '/images/shoe_image.png', rating: 4.8 },
  { id: 3, name: 'Puma RS-X', price: 100, category: 'casual', image: '/images/shoe_image.png', rating: 4.2 },
  { id: 4, name: 'New Balance 990', price: 175, category: 'casual', image: '/images/shoe_image.png', rating: 4.6 },
  { id: 5, name: 'Converse Chuck Taylor', price: 65, category: 'casual', image: '/images/shoe_image.png', rating: 4.3 },
  { id: 6, name: 'Asics Gel-Lyte', price: 130, category: 'running', image: '/images/shoe_image.png', rating: 4.4 },
  { id: 7, name: 'Vans Old Skool', price: 75, category: 'casual', image: '/images/shoe_image.png', rating: 4.5 },
  { id: 8, name: 'Saucony Ride', price: 140, category: 'running', image: '/images/shoe_image.png', rating: 4.7 },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      
      <div className="shop-layout">
        <aside className="filters">
          <div className="filter-group">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <h3>Category</h3>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="running">Running</option>
              <option value="casual">Casual</option>
            </select>
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="price-inputs">
              <input
                type="number"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                placeholder="Max"
              />
            </div>
          </div>

          <div className="filter-group">
            <h3>Sort By</h3>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </aside>

        <main className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-image-link">
                  <img src={product.image} alt={product.name} className="product-image" />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.id}`} className="product-name-link">
                    <h3>{product.name}</h3>
                  </Link>
                  <div className="product-rating">★ {product.rating}</div>
                  <div className="product-footer">
                    <span className="price">${product.price}</span>
                    <button
                      className="add-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">No products found</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
