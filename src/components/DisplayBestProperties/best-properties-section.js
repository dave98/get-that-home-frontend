import { useEffect, useState } from "react";
import { colors } from "../../style";
import PropertyCard from "../PropertyCard/cards";
import { Heading, Text } from "../typography";
import { BestPropertiesContainer, BestPropertiesWrapper } from "./style";

const BestPropertiesSection = ({ properties }) => {
  const [bestProperties, setBestProperties] = useState([]);

  useEffect(() => {
    const getBestProperties = () => {
      const bestProperties = properties
        .filter((property) => property.rentAmount <= 1000)
        .slice(0, 3);
      setBestProperties(bestProperties);
    };
    getBestProperties();
  }, [properties]);

  return (
    <>
      <BestPropertiesWrapper>
        <Text size={"xs"} weight={500} color={colors.grays.dark}>
          Find an apartament that suits you
        </Text>
        <Heading color={colors.blues.light} weight={400}>
          Homes for rent at the best prices
        </Heading>
        <BestPropertiesContainer>
          {bestProperties.map((property) => (
            <PropertyCard
              key={property.id}
              price={property.rentAmount}
              propertyType={property.propertyType}
              address={property.address}
              beds={property.bedrooms}
              baths={property.bathrooms}
              sqmeters={property.area}
              pets={property.pets}
              cover={property.base_image_url}
            />
          ))}
        </BestPropertiesContainer>
      </BestPropertiesWrapper>
    </>
  );
};

export default BestPropertiesSection;
