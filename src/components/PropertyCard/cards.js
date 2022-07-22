import { RiCoinsLine, RiBuildingLine, RiHome2Line } from "react-icons/ri";
import { BiDollarCircle, BiBed, BiBath, BiArea, BiEdit, BiReset } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
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
  index,
  closed = false,
  onShow = () => {},
  onEdit = () => {},
  onClosed = () => {},
  onDelete = () => {},
  onRestore = () => {},
}) => {

  const variants = { // Prevents shared animation times  where animate, whileHover, whileTab
    active: {
      y: 0,
      opacity: 1,
      transition: { delay: index ? (index*0.25) : 0}
    },
    hovering: {
      scale:  owned ? 1.02 : 1.03,
      transition: {delay: 0.2}
    },
    tapping: {
      scale: owned ? 1 : 1.05,
      transition: { delay: 0 }
    }
  }

  return (
    <Container
      initial={{ y: 20, opacity: index ? 0 : 1}}
      variants={variants}
      animate={"active"}
      whileHover={"hovering"}
      whileTap={"tapping"}
    >
      <div onClick={onShow}>
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
      </div>
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
          {owned ? !closed ? (
            <>
              <FooterInfo onClick={onEdit} whileTap={{scale: 0.8}}>
                <BiEdit size={24} />
                EDIT
              </FooterInfo>
              <FooterInfo onClick={onClosed} whileTap={{scale: 0.8}}>
                <AiOutlineCloseCircle size={24} />
                CLOSE
              </FooterInfo>
            </>
          ) 
          : <>
              <FooterInfo onClick={onRestore} whileTap={{scale: 0.8}}>
                <BiReset size={24} />
                RESTORE
              </FooterInfo>
              <FooterInfo onClick={onDelete} whileTap={{scale: 0.8}}>
                <AiOutlineDelete size={24} />
                DELETE
              </FooterInfo>
            </>
          : null}
        </MutableBottom>

      </CardFooter>
    </Container>
  );
};
export default PropertyCard;
