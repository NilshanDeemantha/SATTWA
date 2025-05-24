import "./Services.css";

const Services = () => {
  const services = [
    {
      category: "Facial Treatments",
      items: [
        {
          name: "Ayurvedic Facial",
          description: "Deep cleansing facial using natural herbs and oils",
          duration: "60 min",
          price: "$80",
        },
        {
          name: "Herbal Facial",
          description: "Rejuvenating facial with medicinal herbs",
          duration: "45 min",
          price: "$65",
        },
        {
          name: "Gold Facial",
          description: "Luxury facial with gold leaf treatment",
          duration: "90 min",
          price: "$120",
        },
      ],
    },
    {
      category: "Body Treatments",
      items: [
        {
          name: "Abhyanga Massage",
          description: "Traditional Ayurvedic full body massage",
          duration: "90 min",
          price: "$100",
        },
        {
          name: "Shirodhara",
          description: "Warm oil treatment for the third eye",
          duration: "60 min",
          price: "$85",
        },
        {
          name: "Body Scrub",
          description: "Exfoliating treatment with natural ingredients",
          duration: "45 min",
          price: "$70",
        },
      ],
    },
    {
      category: "Hair Care",
      items: [
        {
          name: "Hair Spa",
          description: "Complete hair treatment with natural oils",
          duration: "60 min",
          price: "$75",
        },
        {
          name: "Hair Coloring",
          description: "Natural henna and herbal hair coloring",
          duration: "120 min",
          price: "$90",
        },
        {
          name: "Scalp Treatment",
          description: "Therapeutic scalp massage and treatment",
          duration: "45 min",
          price: "$60",
        },
      ],
    },
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Discover the ancient wisdom of Ayurvedic beauty care</p>
      </section>

      <section className="services-content">
        {services.map((category, index) => (
          <div key={index} className="service-category">
            <h2>{category.category}</h2>
            <div className="services-grid">
              {category.items.map((service, serviceIndex) => (
                <div key={serviceIndex} className="service-card">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-details">
                    <span>Duration: {service.duration}</span>
                    <span>Price: {service.price}</span>
                  </div>
                  <button className="book-button">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="booking-info">
        <h2>Booking Information</h2>
        <div className="info-content">
          <p>
            To book an appointment, please call us or use our online booking
            system.
          </p>
          <p>We recommend booking at least 24 hours in advance.</p>
          <p>
            For group bookings or special occasions, please contact us directly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
