import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PropertyCard from "../components/PropertyCard";
import { Heading } from "../components/typography";
import { useAuth } from "../contexts/auth-context";
import { useIndividualProperty } from "../contexts/individual-property-context";
import { useProperties } from "../contexts/properties-context";
import { FriendlyImage, ListPropertiesWrapper, LostImageContainer, LostImageHelperText, MyPropertiesTab, MyPropertiesTabsContainer, MyPropertiesTabText, PropertyList } from "./pages-styles";

export default function MyProperties(){
    const navigate = useNavigate();
    const {role} = useAuth();
    const {myPropertiesList} = useProperties()
    const { showProperty, showToUpdateProperty, updateClosedStateProperty, destroyProperty } = useIndividualProperty();

    const [tabFilter, setTabFilter] = useState("active")
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        let tList = []
        if( tabFilter === "active" ){
            tList = myPropertiesList.filter(p => !p.closed);
        }else{
            tList = myPropertiesList.filter(p => p.closed);
        }
        setFilteredData(tList)
    }, [tabFilter, myPropertiesList])
    
    useEffect(() => {
        if(role === "seeker"){
            navigate("/properties")
        }
    }, [role])

    function handleTabChange(newState){
        setTabFilter(newState)
    }

    function handleCreatePropertyButton(){
        navigate("/property/create");
    }

    return (
        <ListPropertiesWrapper>
            <MyPropertiesTabsContainer>
                
                <MyPropertiesTab 
                    onClick={ () => {handleTabChange("active")} } 
                    active={tabFilter==="active" ? true : false} 
                    whileTap={{scale: 1.1}} 
                    whileHover={{scale: 1.05}}
                >
                    <MyPropertiesTabText>ACTIVE</MyPropertiesTabText>
                </MyPropertiesTab>
                <MyPropertiesTab 
                    onClick={ () => {handleTabChange("closed")} } 
                    active={ tabFilter==="closed" ? true : false} 
                    whileTap={{scale: 1.1}} 
                    whileHover={{scale: 1.05}}
                >
                    <MyPropertiesTabText>CLOSED</MyPropertiesTabText>
                </MyPropertiesTab>
                
                <Button
                    onClick={() => {handleCreatePropertyButton()}}
                >
                    +
                </Button>

            </MyPropertiesTabsContainer>
            <Heading weight={500} size="xs">
                 Your properties:
            </Heading>
            <PropertyList>
                {   filteredData.length 
                        ? filteredData.map((property, index) => {
                            return (
                                <PropertyCard
                                    key={property.id}
                                    transactionType={property.operationType}
                                    propertyType={property.propertyType}
                                    price={property.rentAmount}
                                    beds={property.bedrooms}
                                    baths={property.bathrooms}
                                    sqmeters={property.area}
                                    address={property.address}
                                    cover={property.base_image_url}
                                    index={index}
                                    owned
                                    closed={ tabFilter === "active" ? false : true }
                                    onShow={() => { showProperty(property.id) }}
                                    onEdit={() => { showToUpdateProperty(property.id)  }}
                                    onClosed={() => { updateClosedStateProperty(property.id, true) }} // Mark as closed
                                    onRestore={() => { updateClosedStateProperty(property.id, false) } }
                                    onDelete={() => { destroyProperty(property.id)} }
                                />
                            )
                        })
                        :
                        <LostImageContainer height={500} initial={{scale: 0}} animate={{scale: 1}}>
                            <FriendlyImage src="/empty-street-rafiki.svg"/>
                            <LostImageHelperText>Well... apparently there is nothing to show</LostImageHelperText>
                        </LostImageContainer>
                }
            </PropertyList>
        </ListPropertiesWrapper>
    )
}