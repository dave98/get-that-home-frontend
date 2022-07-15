import { useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import BestPropertiesSection from "../components/DisplayBestProperties/best-properties-section";
import Hero from "../components/Hero";
import TeamComponent from "../components/TeamComponent";
import { getProperties } from "../services/properties-service";

const LandingPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then(setProperties).catch(console.error);
  }, []);

  return (
    <>
      <Hero />
      <BestPropertiesSection properties={properties} />
      <CallToAction />
      <TeamComponent />
    </>
  );
};

export default LandingPage;
