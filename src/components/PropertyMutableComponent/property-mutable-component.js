import Button from "../Button";
import { Text } from "../typography"
import { MutableComponentContainer, MutableComponentWarrper } from "./style";
import { RiUserReceived2Fill } from "react-icons/ri";

const PropertyMutableComponent = ({property}) => {

  return (
    <MutableComponentWarrper>
      <MutableComponentContainer>
        <Text>Log in or Join to contact the advertiser</Text>
        <Button><RiUserReceived2Fill/>Login </Button>
      </MutableComponentContainer>
    </MutableComponentWarrper>
  )
}

export default PropertyMutableComponent;