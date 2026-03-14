import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Category.css';

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

const Category = () => {
  const { category } = useParams();
  const { addToCart } = useCart();

  const categoryProducts = PRODUCTS.filter(p => p.category === category);
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  if (categoryProducts.length === 0) {
    return <div className="category-container"><h1>Category not found</h1></div>;
  }

  return (
    <div className="category-container">
      <h1>{categoryTitle} Shoes</h1>
      <p className="category-description">Browse our collection of {categoryTitle.toLowerCase()} shoes</p>

      <div className="products-grid">
        {categoryProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-image-link">
              <img src={product.image} alt={product.name} />
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
        ))}
      </div>
    </div>
  );
};

export default Category;
