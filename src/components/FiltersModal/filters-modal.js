import { useState } from "react";
import { CustomInput } from "../MicroComponents/custom-input";
import { FaDollarSign } from "react-icons/fa";
import ReactDom from "react-dom";
import Button from "../Button";
import {
  BackgroundDiv,
  BeBaSelector,
  BeBaSelectorLabel,
  BeBaSelectorLink,
  ModalContainer,
  ModalWrapper,
} from "./style";
import CustomRadio from "../MicroComponents/custom-radio";
import { MdSquareFoot } from "react-icons/md";

const FilterModal = ({ open, filters, onFilterChange, onClose, variant }) => {
  const [filter, setFilter] = useState(filters);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterChange(filter);
    onClose();
  };

  const handleClickOutside = () => {
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("js-modal-close")) {
        onClose();
      }
    });
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <BackgroundDiv onClick={handleClickOutside} className="js-modal-close">
      <ModalWrapper>
        {variant === "price" && (
          <>
            <ModalContainer>
              <CustomInput
                type="number"
                label="Min Price"
                value={filter.min_price}
                onChange={handleChange}
                placeholder="Min"
                icon={<FaDollarSign />}
              />
              <CustomInput
                type="number"
                label="Max Price"
                value={filter.max_price}
                onChange={handleChange}
                placeholder="Max"
                icon={<FaDollarSign />}
              />
              <Button onClick={handleSubmit}>DONE</Button>
            </ModalContainer>
          </>
        )}
        {variant === "propertyType" && (
          <>
            <ModalContainer>
              <>
                <CustomRadio
                  mainLabel={"Property Type"}
                  name="propertyType"
                  labels={["aparment", "house"]}
                  value={filter.propertyType}
                  onChange={handleChange}
                />
              </>
              <Button onClick={handleSubmit}>DONE</Button>
            </ModalContainer>
          </>
        )}
        {variant === "beds" && (
          <>
            <ModalContainer>
              <BeBaSelectorLabel>Beds</BeBaSelectorLabel>
              <BeBaSelector>
                {["any", "1+", "2+", "3+", "4+"].map((bed) => (
                  <BeBaSelectorLink
                    cornerLeft={bed === "any"}
                    cornerRight={bed === "4+"}
                    key={bed + `${Math.random()}`}
                    onClick={() => {
                      if (bed === "any") {
                        setFilter({ ...filter, bedrooms: "" });
                      } else {
                        setFilter({
                          ...filter,
                          bedrooms: bed.replace("+", ""),
                        });
                      }
                    }}
                    disabled={filter.bedrooms === bed.replace("+", "")}
                  >
                    {bed}
                  </BeBaSelectorLink>
                ))}
              </BeBaSelector>
              <BeBaSelectorLabel>Baths</BeBaSelectorLabel>
              <BeBaSelector>
                {["any", "1+", "2+", "3+", "4+"].map((bath) => (
                  <BeBaSelectorLink
                    cornerLeft={bath === "any"}
                    cornerRight={bath === "4+"}
                    key={bath + `${Math.random()}`}
                    onClick={() => {
                      if (bath === "any") {
                        setFilter({ ...filter, bathrooms: "" });
                      } else {
                        setFilter({
                          ...filter,
                          bathrooms: bath.replace("+", ""),
                        });
                      }
                    }}
                    disabled={filter.bathrooms === bath.replace("+", "")}
                  >
                    {bath}
                  </BeBaSelectorLink>
                ))}
              </BeBaSelector>
              <Button onClick={handleSubmit}>DONE</Button>
            </ModalContainer>
          </>
        )}
        {variant === "more" && (
          <>
            <ModalContainer>
              <CustomRadio
                mainLabel={"Pets Allowed"}
                name="petsAllowed"
                labels={["true", "false"]}
                onChange={handleChange}
              />
              <CustomInput
                type="number"
                label="Min Area"
                value={filter.min_area}
                onChange={handleChange}
                placeholder="Min"
                icon={<MdSquareFoot />}
              />
              <CustomInput
                type="number"
                label="Max Area"
                value={filter.max_area}
                onChange={handleChange}
                placeholder="Max"
                icon={<MdSquareFoot />}
              />
              <Button onClick={handleSubmit}>DONE</Button>
            </ModalContainer>
          </>
        )}
      </ModalWrapper>
    </BackgroundDiv>,
    document.getElementById("modal")
  );
};

export default FilterModal;
