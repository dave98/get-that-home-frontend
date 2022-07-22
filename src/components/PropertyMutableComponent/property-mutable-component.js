import Button from "../Button";
import { Text } from "../typography"
import { MutableComponentContainer, MutableComponentWarrper } from "./style";
import { RiUserReceived2Fill } from "react-icons/ri";
import { useAuth } from "../../contexts/auth-context";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const PropertyMutableComponent = ({property}) => {
  const {user} = useAuth();
  const navigate = useNavigate();

  return (
    <MutableComponentWarrper>
      <MutableComponentContainer>
        {
          user
          ?
          <Fragment>
            <Button>
              CONTACT ADVERTISER
            </Button>
          </Fragment>
          :
          <Fragment>
            <Text>Log in or Join to contact the advertiser</Text>
            <Button
              onClick={() => {navigate("login")}}
            >
              <RiUserReceived2Fill/>
              Login
            </Button>
          </Fragment>
        }
      </MutableComponentContainer>
    </MutableComponentWarrper>
  )
}

export default PropertyMutableComponent;