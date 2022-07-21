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
import PropertyCard from "../components/PropertyCard";
import PaginationButtons from "../components/MicroComponents/pagination-buttons";
import { useProperties } from "../contexts/properties-context";

const ListProperties = () => {
  const { currentProperties } = useProperties();
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const properties = currentProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const pagesParser = (lenght) => Math.ceil(lenght / 9);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentProperties.length} Properties found
      </Heading>
      <PropertyList>
        {properties.map((property) => (
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
      {currentProperties.length > 9 && (
        <PaginationButtons
          totalPages={pagesParser(currentProperties.length)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
        />
      )}
    </ListPropertiesWrapper>
  );
};

export default ListProperties;
