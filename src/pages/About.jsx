import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Your trusted destination for premium footwear</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, we&apos;ve been committed to providing the highest quality shoes
            at competitive prices. Our mission is to make premium footwear accessible to everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe that everyone deserves comfortable, stylish shoes. We partner with
            leading brands to bring you the best selection of running, casual, and lifestyle shoes.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Authentic products from trusted brands</li>
            <li>Competitive pricing and regular discounts</li>
            <li>Fast and free shipping on orders over $100</li>
            <li>30-day return policy for your peace of mind</li>
            <li>Expert customer support</li>
            <li>Secure payment processing</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We only sell authentic, high-quality products</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Transparent pricing and honest customer service</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly improving our platform and services</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>Committed to eco-friendly practices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
