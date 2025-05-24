import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SATTWA</h1>
          <h2>Ayurvedic Beauty Care Center</h2>
          <p>
            Experience the ancient wisdom of Ayurveda for modern beauty care
          </p>
          <button className="cta-button">Book Appointment</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Natural Treatments</h3>
          <p>Pure Ayurvedic treatments using natural ingredients</p>
        </div>
        <div className="feature-card">
          <h3>Expert Therapists</h3>
          <p>Highly trained professionals in Ayurvedic beauty care</p>
        </div>
        <div className="feature-card">
          <h3>Holistic Approach</h3>
          <p>Complete wellness through traditional Ayurvedic methods</p>
        </div>
      </section>

      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Facial Treatments</h3>
            <p>Natural facials using Ayurvedic herbs</p>
          </div>
          <div className="service-card">
            <h3>Body Treatments</h3>
            <p>Rejuvenating body therapies</p>
          </div>
          <div className="service-card">
            <h3>Hair Care</h3>
            <p>Traditional hair care treatments</p>
          </div>
        </div>
        <a href="/services" className="view-all-btn">
          View All Services
        </a>
      </section>
    </div>
  );
};

export default Home;
