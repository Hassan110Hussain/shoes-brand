import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR
          SHOES. YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
          <div className="category-dropdown">
            <button className="btn btn-secondary">Category</button>
            <div className="dropdown-menu">
              <Link to="/category/running">Running</Link>
              <Link to="/category/casual">Casual</Link>
            </div>
          </div>
        </div>

        <div className="Shopping">
          <p>Also Available On</p>
        </div>

        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon" />
          <img src="/images/flipkart.png" alt="flipkart" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default HeroSection;
