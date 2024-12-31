import React, { useState } from "react";
import "./../styles/Services.css";

function Services() {
  const [activeContent, setActiveContent] = useState(null);

  const services = [
    {
      id: 1,
      title: "Architectural Design",
      image: "https://img.freepik.com/premium-photo/modern-luxury-house-design-exterior_636537-300037.jpg",
      experts: "John Doe, Sarah Lee",
      description:
        "Explore our innovative architectural designs that redefine modern living. Whether it’s residential, commercial, or urban design, we bring your ideas to life.",
      price: "$5,000 - $15,000",
      testimonials: [
        { name: "Alice M.", feedback: "The design transformed our space beyond expectations!" },
        { name: "Mark T.", feedback: "Exceptional attention to detail and creativity." }
      ]
    },
    {
      id: 2,
      title: "Interior Design",
      image: "https://fancyhouse-design.com/wp-content/uploads/2023/11/A-hint-of-LA-vibe-infuses-energy-into-the-rooms-design.jpg",
      experts: "Michael Smith, Linda Brown",
      description:
        "Discover our interior design projects that blend functionality with aesthetics. From minimalist to luxurious, we design spaces that reflect your personality.",
      price: "$3,000 - $10,000",
      testimonials: [
        { name: "Jennifer C.", feedback: "Every corner of our home now speaks style." },
        { name: "Tom S.", feedback: "A dream team for transforming my office space!" }
      ]
    },
    {
      id: 3,
      title: "Landscape Design",
      image: "https://png.pngtree.com/background/20230526/original/pngtree-landscape-design-for-villa-3d-picture-image_2752673.jpg",
      experts: "James Clark, Emma Harris",
      description:
        "View our landscape designs that transform outdoor spaces into stunning environments. We specialize in creating beautiful, sustainable gardens and lawns.",
      price: "$2,000 - $8,000",
      testimonials: [
        { name: "Laura F.", feedback: "Our backyard is now a peaceful retreat!" },
        { name: "Brian P.", feedback: "Amazing work on the garden, very professional." }
      ]
    },
    {
      id: 4,
      title: "Urban Planning",
      image: "https://img.freepik.com/premium-photo/urban-planning-digital-simulation-showcasing-future-cityscapes-with-sustainable-designs-solid-color-background-4k-ultra-hd_964851-116708.jpg",
      experts: "Oliver Green, Mia Wilson",
      description:
        "Our urban planning services focus on sustainable development and smart city designs. We help create livable cities with innovative solutions for the future.",
      price: "$10,000 - $50,000",
      testimonials: [
        { name: "Emily W.", feedback: "They helped us plan a green, sustainable city layout." },
        { name: "Chris R.", feedback: "Smart designs that integrate technology and nature." }
      ]
    },
    {
      id: 5,
      title: "3D Visualization",
      image: "https://img.freepik.com/premium-photo/photo-architectural-visualization-3d-rendering-building-design_933496-27897.jpg",
      experts: "Lucas Brown, Emma Watson",
      description:
        "We offer high-quality 3D visualizations to bring your ideas to life in realistic detail. Let us help you visualize your space before construction begins.",
      price: "$1,000 - $7,000",
      testimonials: [
        { name: "Jessica D.", feedback: "The 3D renderings were exactly what we envisioned." },
        { name: "David B.", feedback: "A fantastic tool for decision-making!" }
      ]
    },
    {
      id: 6,
      title: "Project Management",
      image: "https://pacificheritageinc.net/images/background/bg03.jpg",
      experts: "Sophia Lee, Liam O'Connor",
      description:
        "We ensure smooth project execution with effective management and coordination. Our approach maximizes efficiency and ensures timely delivery.",
      price: "$3,500 - $12,000",
      testimonials: [
        { name: "Charlotte G.", feedback: "Our project was completed on time and within budget." },
        { name: "Richard A.", feedback: "The team handled everything with great professionalism." }
      ]
    }
  ];
  const packages = [
    {
      name: "Basic Package",
      price: "$5,000",
      features: ["2D Layout", "Consultation", "Email Support"]
    },
    {
      name: "Premium Package",
      price: "$10,000",
      features: ["3D Design", "On-Site Consultation", "Custom Layouts"]
    },
    {
      name: "Luxury Package",
      price: "$15,000",
      features: ["Complete Project Execution", "3D Renderings", "Full Support"]
    }
  ];

  const handleCardClick = (id) => {
    setActiveContent(id);
  };

  const handleClose = () => {
    setActiveContent(null);
  };

  const handleBack = () => {
    setActiveContent(null); // Close content and return to main services section
  };

  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-section">
        {services.map((service) => (
          <div
            key={service.id}
            className={`services-card card${service.id}`}
            onClick={() => handleCardClick(service.id)}
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="card-title">{service.title}</div>
          </div>
        ))}
      </div>

      {services.map(
        (service) =>
          activeContent === service.id && (
            <div className="services-content active" key={service.id}>
              <span className="close-btn" onClick={handleClose}>
              &times;
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p><strong>Experts:</strong> {service.experts}</p>
              <p><strong>Pricing:</strong> {service.price}</p>
              <div className="testimonials">
                <h4>What our clients say:</h4>
                {service.testimonials.map((testimonial, index) => (
                  <div className="testimonial" key={index}>
                    <p>"{testimonial.feedback}"</p>
                    <p><em>- {testimonial.name}</em></p>
                  </div>
                ))}
              </div>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "80%", maxWidth: "500px", marginTop: "20px" }}
              />
              <button className="back-btn" onClick={handleBack}>Back to Services</button>
            </div>
          )
      )}
      {/* Common Packages Section */}
      <div className="packages-section">
        <h2 className="packages-heading">Our Service Packages</h2>
        <div className="packages-container">
          {packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <h3>{pkg.name}</h3>
              <p><strong>Price:</strong> {pkg.price}</p>
              <ul>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
