import React from "react";
import "../assets/css/serviceCard.css";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build scalable web applications.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Design intuitive user interfaces.",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Improve your search engine rankings.",
  },
];

const ServiceCards = () => {
  return (
    <section className="service-cards">
      <h2 className="service-heading">Our Services</h2>
      <div className="cards-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
