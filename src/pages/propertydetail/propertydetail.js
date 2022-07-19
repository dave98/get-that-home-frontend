
import { PropertydetailWrapper, PropertydetailWrapper2,
         ImgPropertyWapper, ImgsProperty, DatePropertyWapper,
         DatePropertyContainer, DatePropertyContainer2,
          TextAddrres, TextRegion, ContainerFlexStart} from "./style";

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdPets } from "react-icons/md";
import { CardCost, CardFooterInfo, FooterInfo } from "../../components/PropertyCard/style";
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";


import { Heading, Text } from "../../components/typography"

import { LoginIn, ContactAdvertiser, ContactInformation, EditProperty } from "./style";

const Propertydetailpage = () => {
  return (
    <PropertydetailWrapper>
      <PropertydetailWrapper2>
        <ImgPropertyWapper>
          <MdOutlineArrowBackIos/>
          <ImgsProperty/>
          <MdOutlineArrowForwardIos/>
        </ImgPropertyWapper>
        <DatePropertyWapper>
          <DatePropertyContainer2>
            <DatePropertyContainer>
              <TextAddrres>Francisco de Paula Ugarriza 27</TextAddrres>
              <TextRegion>Miraflores, Lima</TextRegion>
            </DatePropertyContainer>
            <DatePropertyContainer>
              <CardCost><BiDollarCircle/>3000</CardCost>
              <TextRegion>+100</TextRegion>
            </DatePropertyContainer>
          </DatePropertyContainer2>
          <CardFooterInfo>
            <FooterInfo>
              <TextRegion><BiBed/>1</TextRegion>
              <TextRegion><BiBath/>1</TextRegion>
              <TextRegion><BiArea/>100m2</TextRegion>
              <TextRegion><MdPets/></TextRegion>
            </FooterInfo>
          </CardFooterInfo>

          <DatePropertyContainer>
            <ContainerFlexStart>
              <Heading>About this property</Heading>
              <Text>
                3 Bedroom/2 Bathroom apartment available for ASAP move-in!
                Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. 
                The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.
              </Text>
            </ContainerFlexStart>
            <ContainerFlexStart>
              <Heading>
                Location
              </Heading>
              <Text>
                Francisco de Paula Ugarriza 27, Miraflores, Lima
              </Text>
              <ImgsProperty></ImgsProperty>
            </ContainerFlexStart>
          </DatePropertyContainer>
        </DatePropertyWapper>
      </PropertydetailWrapper2>

      <LoginIn/>
      {/* <ContactAdvertiser/> 
      <ContactInformation/> */}
      <EditProperty/>
    </PropertydetailWrapper>
  )
}

export default Propertydetailpage