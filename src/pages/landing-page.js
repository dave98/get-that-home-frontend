import CallToAction from "../components/CallToAction";
import BestPropertiesSection from "../components/DisplayBestProperties/best-properties-section";
import Hero from "../components/Hero";
import TeamComponent from "../components/TeamComponent";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <BestPropertiesSection />
      <CallToAction />
      <TeamComponent />
    </>
  );
};

export default LandingPage;
