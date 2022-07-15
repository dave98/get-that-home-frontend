import { CustomInput } from "../components/MicroComponents";
import {
  FiltersHead,
  ListPropertiesWrapper,
  ButtonsContainer,
  PropertyList,
} from "./pages-styles";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import Button from "../components/Button/button";
import CustomSelect from "../components/CustomSelect/custom-select";
import { Heading } from "../components/typography";
import { useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";
import PropertyCard from "../components/PropertyCard";
import PaginationButtons from "../components/MicroComponents/pagination-buttons";

const ListProperties = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProperties().then(setProperties).catch(console.error);
  }, []);

  const pagesParser = (lenght) => Math.ceil(lenght / 9);

  return (
    <ListPropertiesWrapper>
      <FiltersHead>
        <CustomInput
          name="search"
          placeholder="Find a place you like"
          icon={<RiSearchLine size={22} />}
        />
        <ButtonsContainer>
          <Button>PRICE</Button>
          <Button>PROPERTY TYPE</Button>
          <Button>BEDS & BADS</Button>
          <Button righticon={<FaChevronDown />}>MORE</Button>
        </ButtonsContainer>
        <CustomSelect variant="search" options={["Buying & Selling"]} />
      </FiltersHead>
      <Heading weight={500} size="xs">
        {properties.length} Properties found
      </Heading>
      <PropertyList>
        {properties.slice(0, 9).map((property) => (
          <PropertyCard
            key={property.id}
            transactionType={property.transactionType}
            propertyType={property.propertyType}
            price={property.rentAmount}
            beds={property.bedrooms}
            baths={property.bathrooms}
            sqmeters={property.area}
            address={property.address}
            cover={property.base_image_url}
          />
        ))}
      </PropertyList>
      {properties.length > 9 && (
        <PaginationButtons
          totalPages={pagesParser(properties.length)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </ListPropertiesWrapper>
  );
};

export default ListProperties;
