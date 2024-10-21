import ServiceOverview from "../components/installation/ServiceOverview";
import BenefitsSection from "../components/installation/BenefitsSection";
import ProjectGallery from "../components/installation/ProjectGallery";
import Contact from "../components/installation/Contact";
import TrendingSlider from "../components/installation/TrendingSlider";

const ServiceInstallation = () => {
  return (
    <div>
      <div>
        <ServiceOverview />
      </div>
      <div>
        <BenefitsSection />
      </div>
      <div>
        <ProjectGallery />
      </div>
      <div >
        <Contact />
      </div>
      <div>
        <TrendingSlider />
      </div>
    </div>
  );
};

export default ServiceInstallation;
