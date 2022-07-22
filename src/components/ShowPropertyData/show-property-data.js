
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import {  CardDescription, CardTitle } from "../SimpleCard/style"
import { Text } from "../typography";
import { AboutPropertycontainer,
          ShowAddressContainer,
          ShowAddressContainer2,
          ShowDetailsContainer,
          ShowPropertyDataWapper } from "./style"

const ShowPropertyData = ({property}) => {

  return (
    <ShowPropertyDataWapper>
      <ShowAddressContainer>
        <ShowAddressContainer2>
          <CardTitle>Francisco de Paula Ugarriza 27</CardTitle>
          <CardTitle><BiDollarCircle/>3000</CardTitle>
        </ShowAddressContainer2>
        <ShowAddressContainer2>
          <CardDescription>Miraflores, Lima</CardDescription>
          <CardDescription>+100</CardDescription>
        </ShowAddressContainer2>
      </ShowAddressContainer>               
      <ShowDetailsContainer>
        <Text><BiBed/>&nbsp;asdasdasd</Text>
        <Text><BiBath/>&nbsp;asdasdasd</Text>
        <Text><BiArea/>&nbsp;asdasdasd</Text>
        <Text><MdPets/>&nbsp;asdasdasd</Text>
      </ShowDetailsContainer>
      <AboutPropertycontainer>
        <CardTitle>About this property</CardTitle>
        <Text>
          3 Bedroom/2 Bathroom apartment available for ASAP move-in!
          Apartment features hardwood floors throughout, virtual doorman, Central AC/heat, dishwasher and a microwave. 
          The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.
        </Text>
      </AboutPropertycontainer>
    </ShowPropertyDataWapper>
  )
}

export default ShowPropertyData