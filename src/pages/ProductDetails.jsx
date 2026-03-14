import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetails.css';

const PRODUCTS = [
  { id: 1, name: 'Nike Air Max', price: 120, category: 'running', image: '/images/shoe_image.png', rating: 4.5, description: 'Premium running shoe with excellent cushioning', stock: 15 },
  { id: 2, name: 'Adidas Ultraboost', price: 180, category: 'running', image: '/images/shoe_image.png', rating: 4.8, description: 'High-performance running shoe', stock: 8 },
  { id: 3, name: 'Puma RS-X', price: 100, category: 'casual', image: '/images/shoe_image.png', rating: 4.2, description: 'Casual lifestyle shoe', stock: 20 },
  { id: 4, name: 'New Balance 990', price: 175, category: 'casual', image: '/images/shoe_image.png', rating: 4.6, description: 'Classic comfort shoe', stock: 12 },
  { id: 5, name: 'Converse Chuck Taylor', price: 65, category: 'casual', image: '/images/shoe_image.png', rating: 4.3, description: 'Iconic canvas shoe', stock: 25 },
  { id: 6, name: 'Asics Gel-Lyte', price: 130, category: 'running', image: '/images/shoe_image.png', rating: 4.4, description: 'Gel cushioning technology', stock: 10 },
  { id: 7, name: 'Vans Old Skool', price: 75, category: 'casual', image: '/images/shoe_image.png', rating: 4.5, description: 'Skate shoe classic', stock: 18 },
  { id: 8, name: 'Saucony Ride', price: 140, category: 'running', image: '/images/shoe_image.png', rating: 4.7, description: 'Responsive running shoe', stock: 14 },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate('/cart');
  };

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      
      <div className="product-details">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info-section">
          <h1>{product.name}</h1>
          <div className="rating">★★★★★ {product.rating} (128 reviews)</div>
          
          <div className="price-section">
            <span className="price">${product.price}</span>
            <span className="stock" style={{ color: product.stock > 0 ? 'green' : 'red' }}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <p className="description">{product.description}</p>

          <div className="quantity-section">
            <label>Quantity:</label>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>

          <div className="product-details-info">
            <h3>Product Details</h3>
            <ul>
              <li>Category: {product.category}</li>
              <li>Free shipping on orders over $100</li>
              <li>30-day return policy</li>
              <li>1-year warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
