import React from "react";
import "../assets/css/pricingTable.css";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "$10/month",
    features: ["1 Website", "10 GB Storage", "Basic Support"],
  },
  {
    id: 2,
    name: "Pro",
    price: "$30/month",
    features: ["5 Websites", "50 GB Storage", "Priority Support"],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$100/month",
    features: ["Unlimited Websites", "Unlimited Storage", "24/7 Support"],
  },
];

const PricingTable = () => {
  return (
    <section className="pricing-table">
      <h2 className="pricing-heading">Pricing Plans</h2>
      <div className="cards-container">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="pricing-card">
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
