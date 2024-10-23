import "./ServiceOverview.css";
import { Link } from "react-router-dom";

const ServiceOverview = () => {
  return (
    <div className="service-overview">
      <h1 className="animated-heading py-3 px-4 md:px-0 text-center">
        Project Execution & Installation of Solar Power System
      </h1>
      <p >
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
      <Link to={"/ser"}>
        <button>Service Page</button>
      </Link>
    </div>
  );
};

export default ServiceOverview;
