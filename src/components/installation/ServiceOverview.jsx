import React from "react";
import "./ServiceOverview.css";

const ServiceOverview = () => {
  const headingText = "Project Execution & Installation of Solar Power System";

  return (
    <div className="service-overview">
      <h1 className="animated-heading py-3 px-4 px-md-0">
        Project Execution & Installation of Solar Power System
        {/* {headingText.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.02}s` }}>
            {char}
          </span>
        ))} */}
      </h1>
      <p>
        NeoGrid offers comprehensive solar power system Projects/installation
        services for both domestic and commercial sectors, providing customized
        energy solutions that promote sustainability and cost efficiency. Our
        expert team handles everything from initial site assessment and energy
        analysis to system design and seamless installation. NeoGrid’s
        installations are designed to meet specific energy needs, helping
        homeowners reduce bills and businesses achieve long-term energy
        independence. With a focus on quality and performance, NeoGrid ensures
        reliable and eco-friendly solar power solutions.
      </p>
    </div>
  );
};

export default ServiceOverview;
