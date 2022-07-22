import Button from "../Button";
import { Text } from "../typography"
import { MutableComponentContainer, MutableComponentWarrper, OwnerInformationContainer, OwnerInformationImage, OwnerInformationImageContainer, OwnerInformationText } from "./style";
import { RiDislikeFill, RiDislikeLine, RiHeart3Fill, RiHeart3Line, RiUserReceived2Fill } from "react-icons/ri";
import { useAuth } from "../../contexts/auth-context";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../contexts/properties-context";
import { useIndividualProperty } from "../../contexts/individual-property-context";
import ButtonIcon from "../ButtonIcon/buttonIcon";

const PropertyMutableComponent = ({propertyId}) => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const {
    myPropertiesList, 
    myFavoritePropertiesList, 
    myContactedPropertiesList
  } = useProperties();
  const {
    showToUpdateProperty,
    likeProperty,
    destroyLike,
    contactWithProperty,
    reachOwner
  } = useIndividualProperty()

  const [isMyProperty, setIsMyProperty] = useState(false);
  const [isInMyFavorites, setIsInMyFavorites] = useState(false);
  const [isInMyContacts, setIsInMyContacts] = useState(false);
  const [ownerInformation, setOwnerInformation] = useState(null)
  
  useEffect(() => {
    if(user){
      let tIsMyProperty = !!myPropertiesList.find(p => p.id === propertyId);
      if(tIsMyProperty){
        setIsMyProperty(tIsMyProperty);
      }else{
        setIsInMyFavorites( myFavoritePropertiesList.find(p =>  p.property.id == propertyId) );
        setIsInMyContacts( !!myContactedPropertiesList.find(p => p.id == propertyId) );
      }
    }
  }, [user, myPropertiesList, myFavoritePropertiesList, myContactedPropertiesList]);

  useEffect(() => {
    reachOwner(propertyId)
      .then(owner => {
        setOwnerInformation(owner);
      })
  }, [isInMyContacts])

  function handleLike(){
    likeProperty(propertyId)
  }

  function handleRemoveLike(){
    destroyLike(isInMyFavorites.id, isInMyFavorites.property.id)
  }

  function handleContact(){
    contactWithProperty(propertyId)
  }

  // 🚬🚬
  return (
    <MutableComponentWarrper>
      <MutableComponentContainer>
        {
          user
          ? isMyProperty 
          ?
          <Fragment>
            <Button
             onClick={() => {showToUpdateProperty(propertyId)}} 
            >
              EDIT PROPERTY
            </Button>
          </Fragment>
          :
          <Fragment>
            {
              isInMyContacts 
              ?
                ownerInformation 
                ? 
                  <OwnerInformationContainer>
                    <OwnerInformationImageContainer>
                      <OwnerInformationImage 
                        src={ownerInformation.avatar_url ? ownerInformation.avatar_url : "/avatar-1.svg"} 
                      />
                    </OwnerInformationImageContainer>

                      <OwnerInformationText size={20}>
                        {ownerInformation.name}
                      </OwnerInformationText>
                      <OwnerInformationText>
                          {ownerInformation.email}
                      </OwnerInformationText>
                      <OwnerInformationText>
                          {ownerInformation.phone}
                      </OwnerInformationText>
      
                  </OwnerInformationContainer>
                :
                  <Text>Obtaining owner information</Text>
              :
                <Button
                  onClick={() => {handleContact()}}
                >
                  CONTACT ADVERTISER
                </Button>
            } 

            <ButtonIcon
              icon={ isInMyFavorites ? <RiHeart3Fill size={35} color={"#c90c0c"}/> : <RiHeart3Line size={30} color={"#0c1f8a"}/> }
              onClick={() => {isInMyFavorites ? handleRemoveLike() : handleLike()}}
              duration={0.5}
              rotate
            >
                {isInMyFavorites ? "LIKED" : "LIKE"}
            </ButtonIcon>
          </Fragment>
          :
          <Fragment>
            <Text>Log in or Join to contact the advertiser</Text>
            <Button
              onClick={() => {navigate("/login")}} 
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