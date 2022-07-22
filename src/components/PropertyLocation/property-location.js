import { CardTitle } from "../SimpleCard/style"
import { Text } from "../typography"
import { LocationWrapper, MapLocation } from "./style"



const PropertyLocation = ({property}) => {

  return (
    <LocationWrapper>
      <CardTitle>Location</CardTitle>
      <Text>Francisco de Paula Ugarriza 27, Miraflores, Lima</Text>
      <MapLocation/>
    </LocationWrapper>
  )
}

export default PropertyLocation