
import { BiDollarCircle, BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import {  CardDescription, CardTitle } from "../SimpleCard/style"
import { Text } from "../typography";
import { AboutPropertycontainer,
          ShowAddressContainer,
          ShowAddressContainer2,
          ShowDetailsContainer,
          ShowDetailsMiniContainer,
          ShowPropertyDataWapper } from "./style"

const ShowPropertyData = ({ 
    address = "Default direction", 
    rentAmount = 2000, 
    maintenance = 100, 
    bedrooms = 7, 
    bathrooms = 7, 
    area = 120,
    petsAllowed = true, 
    about = "Default description" 
}) => {
  return (
    <ShowPropertyDataWapper>
      <ShowAddressContainer>
        <ShowAddressContainer2>
          <CardTitle>{address}</CardTitle>
        </ShowAddressContainer2>
        
        <ShowAddressContainer2>
          <ShowDetailsMiniContainer>
              <BiDollarCircle size={25}/>
              <CardTitle>{rentAmount}</CardTitle>
          </ShowDetailsMiniContainer>
          <CardDescription>+{maintenance}</CardDescription>
        </ShowAddressContainer2>

      </ShowAddressContainer>               
      
      <ShowDetailsContainer>
        <ShowDetailsMiniContainer>
            <BiBed size={25}/>
            <Text>{bedrooms + " bedrooms"}</Text>
        </ShowDetailsMiniContainer>

        <ShowDetailsMiniContainer>
            <BiBath size={25}/>
            <Text>{bathrooms + " bathrooms"}</Text>
        </ShowDetailsMiniContainer>

        <ShowDetailsMiniContainer>
            <BiArea size={25}/>
            <Text>{area + " m2"}</Text>
        </ShowDetailsMiniContainer>

        <ShowDetailsMiniContainer>
            <MdPets size={25}/>
            <Text>{petsAllowed ? "Yep" : "Sorry... no"}</Text>
        </ShowDetailsMiniContainer>
      </ShowDetailsContainer>

      <AboutPropertycontainer>
        <CardTitle>About this property</CardTitle>
        <Text>{about}</Text>
      </AboutPropertycontainer>

    </ShowPropertyDataWapper>
  )
}

export default ShowPropertyData