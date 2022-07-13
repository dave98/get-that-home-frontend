import styled from "@emotion/styled";
import { colors } from "../style/colors";
import { typography } from "../style/typography";
import { Text } from "./typography";

import { RiCoinsLine, RiBuildingLine } from "react-icons/ri"
import { BiDollarCircle, BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi"

import { MdPets } from "react-icons/md"
import { AiOutlineCloseCircle } from "react-icons/ai"





const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 8px;
  width: 300px;
  height: 360px;
`;
const Cardimage = styled.div`
  background-color: ${colors.grays.dark};
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  border-radius: 8px 8px 0 0;
  width: 300px;
  height: 200px;
`;
const Cardchip = styled.div`
  padding: 0.5rem;
  background-color: ${colors.blues.light};
  font-family: ${typography.body.xs}
  display: flex;
  gap: 0.5rem;
  border-radius: 0 8px 0 0;
  width: 110px;
  height: 28px;
`;

const Textcardchip = styled.p`                   
  color: ${colors.white};
  font-family: ${typography.body.sx}
`;

const Carddate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 11px;
`;

const Cardcost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardInmueble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text2 = styled.p`
  color: ${colors.grays.dark};
  font-size: 16px;
  font-weight: 800;
  line-height: 24px;
  padding: 8px;
`;

const Detailcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Rooms = styled.div`
  color: ${colors.grays.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 8px;
  display: flex;
  align-items: center;
`;
const Bathroom = styled.div`
  color: ${colors.grays.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 8px;
  display: flex;
  align-items: center;
`;
const Area = styled.div`
  color: ${colors.grays.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 8px;
  display: flex;
  align-items: center;
`;
const Decoration = styled.div`
background-color: ${colors.grays.dark};
  border-radius: 0 0 8px 8px;
  width: 300px;
  height: 7px;
  display: flex;
  align-items: end;
`;
const Decoration2 = styled.div`
background-color: ${colors.grays.dark};
  border-radius: 0 0 8px 8px;
  width: 300px;
  height: 47px;
  display: flex;
  align-items: end;
  justify-content: space-around;
`;
const Edit = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const TextEdit = styled.div`
  color: ${colors.white};
`;
const Close = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextClose = styled.div`
  color: ${colors.white};
`;



function Homeseeker(){
  return(
    <Container>
      <Cardimage>
        <Cardchip>
          <RiCoinsLine style={{color:"white"}}/>
          <Textcardchip>For Rental</Textcardchip>
        </Cardchip>
      </Cardimage>

      <Carddate>
        <Cardcost>
          <BiDollarCircle/>
          &nbsp;
          <Text>3000</Text>
        </Cardcost>
        <CardInmueble>
          <RiBuildingLine/>
          &nbsp;
          <Text>Apartament</Text>
        </CardInmueble>
      </Carddate>
      <Text2>
        86872 Jacob Gateway, Durganport, WV 48044
      </Text2>
      
      <Detailcontainer>
        <Rooms>
          <BiBed/>
          <Text2>4</Text2>
        </Rooms>
        <Bathroom>
          <BiBath/>
          <Text2>2</Text2>
        </Bathroom>
        <Area>
          <BiArea/>
          <Text2>180m2</Text2>
        </Area>
        <MdPets/>
      </Detailcontainer>

      <Decoration/>
    </Container>
  )
}
function LanlordCard(){
  return(
    <Container>
      <Cardimage>
        <Cardchip>
          <RiCoinsLine style={{color:"white"}}/>
          <Textcardchip>For Rental</Textcardchip>
        </Cardchip>
      </Cardimage>

      <Carddate>
        <Cardcost>
          <BiDollarCircle/>
          &nbsp;
          <Text>3000</Text>
        </Cardcost>
        <CardInmueble>
          <RiBuildingLine/>
          &nbsp;
          <Text>Apartament</Text>
        </CardInmueble>
      </Carddate>
      <Text2>
        86872 Jacob Gateway, Durganport, WV 48044
      </Text2>
      
      <Detailcontainer>
        <Rooms>
          <BiBed/>
          <Text2>4</Text2>
        </Rooms>
        <Bathroom>
          <BiBath/>
          <Text2>2</Text2>
        </Bathroom>
        <Area>
          <BiArea/>
          <Text2>180m2</Text2>
        </Area>
        <MdPets/>
      </Detailcontainer>

      <Decoration2>
        <Edit>
            <BiEdit style={{color:"white"}}/>
            &nbsp;
            <TextEdit>EDIT</TextEdit>
        </Edit>
        <Close>
            <AiOutlineCloseCircle style={{color:"white"}}/>
            &nbsp;
            <TextClose>CLOSE</TextClose>
        </Close>
      </Decoration2>
    </Container>
  )
}

export { LanlordCard, Homeseeker};
