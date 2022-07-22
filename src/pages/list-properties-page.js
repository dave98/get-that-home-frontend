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
import { useIndividualProperty } from "../contexts/individual-property-context";
import FilterModal from "../components/FiltersModal/filters-modal";
import { getFilteredProperties } from "../services/properties-service";

const ListProperties = () => {
  const { showProperty } = useIndividualProperty();
  const { currentProperties, setCurrentProperties } = useProperties();
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;
  const [filters, setFilters] = useState({
    min_price: "",
    max_price: "",
    propertyType: "",
    address: "",
    transactionType: "",
    bedrooms: "",
    bathrooms: "",
    min_area: "",
    max_area: "",
    petsAllowed: "",
  });
  const [typeOfModal, setTypeOfModal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [clearFilters, setClearFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    console.log("Flag")
    getFilteredProperties(filters)
      .then(setCurrentProperties)
      .catch(console.log);
    setCurrentPage(1);
  }, [filters, setCurrentProperties]);

  useEffect(() => {
    if (clearFilters) {
      setFilters({
        min_price: "",
        max_price: "",
        propertyType: "",
        address: "",
        operationType: "",
        bedrooms: "",
        bathrooms: "",
        min_area: "",
        max_area: "",
        petsAllowed: "",
      });
      setClearFilters(false);
    }
  }, [clearFilters]);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const properties = currentProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const pagesParser = (lenght) => Math.ceil(lenght / 9);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ListPropertiesWrapper>
      <FiltersHead>
        <CustomInput
          name="search"
          placeholder="Find a place you like"
          icon={<RiSearchLine size={22} />}
        />
        <ButtonsContainer>
          <Button
            onClick={() => {
              setTypeOfModal("price");
              setIsOpen(!isOpen);
            }}
          >
            PRICE
          </Button>
          <Button
            onClick={() => {
              setTypeOfModal("propertyType");
              setIsOpen(!isOpen);
            }}
          >
            PROPERTY TYPE
          </Button>
          <Button
            onClick={() => {
              setTypeOfModal("beds");
              setIsOpen(!isOpen);
            }}
          >
            BEDS & BATHS
          </Button>
          <Button
            righticon={<FaChevronDown />}
            onClick={() => {
              setTypeOfModal("more");
              setIsOpen(!isOpen);
            }}
          >
            MORE
          </Button>
          <Button
            buttontype={"line"}
            onClick={() => {
              setClearFilters(true);
            }}
          >
            CLEAR FILTERS
          </Button>
        </ButtonsContainer>
        <CustomSelect
          variant="search"
          options={["Buying & Renting", "Buying", "Renting"]}
          placeholder="Transaction Type"
          name="transactionType"
          value={filters.transactionType}
          onChange={(e) => {
            setFilters({
              ...filters,
              transactionType: e.target.value === "Buying" ? "sale" : "rent",
            });
          }}
        />
      </FiltersHead>

      <FilterModal
        open={isOpen}
        onClose={handleClose}
        filters={filters}
        onFilterChange={setFilters}
        variant={typeOfModal}
      />

      <Heading weight={500} size="xs">
        {currentProperties.length} Properties found
      </Heading>
      <PropertyList>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            transactionType={property.operationType}
            propertyType={property.propertyType}
            price={property.rentAmount}
            beds={property.bedrooms}
            baths={property.bathrooms}
            sqmeters={property.area}
            address={property.address}
            cover={property.base_image_url}
            onShow={() => { showProperty(property.id) }}
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
