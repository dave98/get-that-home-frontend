import { RiCoinsLine, RiBuildingLine, RiHome2Line } from "react-icons/ri";
import { BiDollarCircle, BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  CardAddress,
  CardCost,
  CardFooter,
  CardFooterInfo,
  CardHeaderContainer,
  CardImg,
  CardInmueble,
  CardLabel,
  Container,
  FooterInfo,
  MutableBottom,
} from "./style";

const PropertyCard = ({
  transactionType,
  price,
  propertyType,
  address,
  beds,
  baths,
  sqmeters,
  pets,
  owned,
  cover,
}) => {
  return (
    <Container>
      <CardImg cover={cover}>
        {/* refactor this label into a separate component */}
        <CardLabel type={transactionType || "rental"}>
          <RiCoinsLine />
          {transactionType === "sale" ? "For Sale" : "For Rental"}
        </CardLabel>
      </CardImg>
      <CardHeaderContainer>
        <CardCost>
          <BiDollarCircle size={26} />
          {price || 3000}
        </CardCost>
        <CardInmueble>
          {propertyType === "aparment" ? (
            <RiBuildingLine size={22} />
          ) : (
            <RiHome2Line size={22} />
          )}
          {propertyType === "aparment" ? "Apartment" : "House"}
        </CardInmueble>
      </CardHeaderContainer>
      <CardAddress>{address || "this is a test address"}</CardAddress>

      <CardFooter>
        <CardFooterInfo>
          <FooterInfo>
            <BiBed size={20} />
            {beds || 4}
          </FooterInfo>
          <FooterInfo>
            <BiBath size={20} />
            {baths || 2}
          </FooterInfo>
          <FooterInfo>
            <BiArea size={20} />
            {sqmeters + " m2" || 180 + " m2"}
          </FooterInfo>
          {pets ? <MdPets size={24} /> : null}
        </CardFooterInfo>
        <MutableBottom>
          {owned ? (
            <>
              <FooterInfo>
                <BiEdit size={24} />
                EDIT
              </FooterInfo>
              <FooterInfo>
                <AiOutlineCloseCircle size={24} />
                DELETE
              </FooterInfo>
            </>
          ) : null}
        </MutableBottom>
      </CardFooter>
    </Container>
  );
};
export default PropertyCard;
