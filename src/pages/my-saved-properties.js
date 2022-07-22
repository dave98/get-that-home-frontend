import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { Heading } from "../components/typography";
import { useAuth } from "../contexts/auth-context";
import { useProperties } from "../contexts/properties-context";
import { FriendlyImage, ListPropertiesWrapper, LostImageContainer, LostImageHelperText, MyPropertiesTab, MyPropertiesTabsContainer, MyPropertiesTabText, PropertyList } from "./pages-styles";

export default function MySavedProperties(){
    const {role} = useAuth()
    const navigate = useNavigate();
    const {myFavoritePropertiesList, myContactedPropertiesList} = useProperties()
    const [tabFilter, setTabFilter] = useState("favorites") // favorites - contacted
    const [filteredData, setFilteredData] = useState([])

    function handleTabChange(newState){
        setTabFilter(newState)
    }

    useEffect(() => {
        let tList = []
        if(tabFilter === "favorites"){
            tList = myFavoritePropertiesList;
        }else{
            tList = myContactedPropertiesList
        }
        setFilteredData(tList)
    }, [tabFilter, myFavoritePropertiesList, myContactedPropertiesList])

    useEffect(() => {
        if(role === "landlord"){
            navigate("/my-properties")
        }
    }, [role])

    return (
        <ListPropertiesWrapper>
            <MyPropertiesTabsContainer>
                <MyPropertiesTab
                    onClick={() => {handleTabChange("favorites")}}
                    active={tabFilter === "favorites"}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 1.1}}
                >
                    <MyPropertiesTabText>FAVORITES</MyPropertiesTabText>
                </MyPropertiesTab>
                <MyPropertiesTab
                    onClick={() => {handleTabChange("contacted")}}
                    active={tabFilter === "contacted"}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 1.1}}
                >
                    <MyPropertiesTabText>CONTACTED</MyPropertiesTabText>
                </MyPropertiesTab>
            </MyPropertiesTabsContainer>
            
            <Heading weight={500} size="xs">
                Properties founded {"(" + filteredData.length + ")"}
            </Heading>

            <PropertyList>
                {
                    filteredData.length
                    ? filteredData.map((property) => {
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
                            />
                        )
                    })
                    : <LostImageContainer height={500} initial={{scale: 0}} animate={{scale: 1}}>
                        <FriendlyImage src="/empty-street-rafiki.svg"/>
                        <LostImageHelperText>Well... apparently there is nothing to show</LostImageHelperText>
                    </LostImageContainer>
                }
            </PropertyList>
        </ListPropertiesWrapper>
    )
}