import "./About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About SATTWA</h1>
        <p>Your Journey to Natural Beauty and Wellness</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            SATTWA Ayurvedic Beauty Care Center was founded with a vision to
            bring the ancient wisdom of Ayurveda to modern beauty care. We
            combine traditional Ayurvedic practices with contemporary techniques
            to provide holistic beauty and wellness solutions.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>
            We believe in the power of natural ingredients and traditional
            Ayurvedic methods. Our treatments are designed to enhance your
            natural beauty while promoting overall wellness and balance.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Dr. Sarah Johnson</h3>
              <p>Ayurvedic Specialist</p>
            </div>
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Priya Sharma</h3>
              <p>Senior Therapist</p>
            </div>
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Michael Chen</h3>
              <p>Wellness Consultant</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Commitment</h2>
          <ul className="commitment-list">
            <li>100% Natural Ingredients</li>
            <li>Personalized Treatments</li>
            <li>Professional Expertise</li>
            <li>Customer Satisfaction</li>
            <li>Continuous Innovation</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
