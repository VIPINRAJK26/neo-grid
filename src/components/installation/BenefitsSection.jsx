import React from "react";
import "./Benefits.css";

const BenefitsSection = () => {
  const deliverables = [
    {
      id: 1,
      text: "Fast ROI",
      text2:
        "Quick payback periods offer substantial financial returns over time.",
      icon: "https://cdn-icons-png.flaticon.com/128/17328/17328113.png",
    },
    {
      id: 2,
      text: "Cost Savings",
      text2:
        "Significantly reduces electricity bills for both homes and businesses.",
      icon: "https://cdn-icons-png.flaticon.com/128/1611/1611179.png",
    },
    {
      id: 3,
      text: "Sustainability",
      text2:
        "Provides a clean, renewable energy source, reducing carbon footprints.",
      icon: "https://cdn-icons-png.flaticon.com/128/2942/2942555.png",
    },
    {
      id: 4,
      text: "Energy Independence",
      text2:
        "Provides a clean, renewable energy source, reducing carbon footprints",
      icon: "https://cdn-icons-png.flaticon.com/128/17306/17306069.png",
    },
    {
      id: 5,
      text: "Custom Solutions",
      text2: "Tailored system designs maximize efficiency and performance.",
      icon: "https://cdn-icons-png.flaticon.com/128/16500/16500445.png",
    },
    {
      id: 6,
      text: "Increased Property Value",
      text2: "Solar installations enhance property resale value.",
      icon: "https://cdn-icons-png.flaticon.com/128/4106/4106537.png",
    },
    {
      id: 7,
      text: "Government Incentives",
      text2: "Access to rebates and tax credits, lowering upfront costs",
      icon: "https://cdn-icons-png.flaticon.com/128/992/992591.png",
    },
    {
      id: 8,
      text: "Low Maintenance",
      text2: "Access to rebates and tax credits, lowering upfront costs",
      icon: "https://cdn-icons-png.flaticon.com/128/1077/1077198.png",
    },
    {
      id: 9,
      text: "Reliable Technology",
      text2: "High-quality components ensure long-term energy generation.",
      icon: "https://cdn-icons-png.flaticon.com/128/4257/4257483.png",
    },
  ];

  return (
    <div className="container benefits-section py-5">
      <div className="row">
        <div className="col-lg-4 col-md-12 benefits-text align-items-center d-flex">
          <h2 className="benefits-title w-75 m-auto">
            The Caliber of Neogrid Projects and Installation
          </h2>
        </div>
        <div className="col-lg-8 col-md-12 benefits-images">
          <div className="row">
            {deliverables.map((deliverable) => (
              <div
                key={deliverable.id}
                className="col-lg-4 col-md-6 col-sm-12 deliverable-item"
              >
                <div className="icon-container justify-content-center align-items-center d-flex ">
                  <img
                    src={deliverable.icon}
                    alt={deliverable.text}
                    className="deliverable-icon"
                  />
                  <div className="overlay">
                    <div className="overlay-text">
                      <h4 className="fw-bold pb-1">{deliverable.text}</h4>
                      <p>{deliverable.text2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
