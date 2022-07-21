import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { Heading } from "../components/typography";
import { useIndividualProperty } from "../contexts/individual-property-context";
import { useProperties } from "../contexts/properties-context";
import { ListPropertiesWrapper, MyPropertiesContainer, PropertyList } from "./pages-styles";

export default function MyProperties(){
    //const [myPropertiesList, setMyPropertiesList] = useState([])
    const {getMyProperties, myPropertiesList} = useProperties()
    const { showProperty, showToUpdateProperty } = useIndividualProperty();

    useEffect(() => {
        getMyProperties();
    }, [])

    return (
        <ListPropertiesWrapper>
            <Heading weight={500} size="xs">
                 Your properties:
            </Heading>
            <PropertyList>
                {
                    myPropertiesList.map((property) => {
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
                                owned
                                onShow={() => { showProperty(property.id) }}
                                onEdit={() => { showToUpdateProperty(property.id)  }}
                                onClosed={() => { console.log("Closing property")} }
                                onRestore={() => { console.log("Restoring properties") }}
                                onDelete={() => {console.log("Deleting") }}
                            />
                        )
                    })
                }
            </PropertyList>
        </ListPropertiesWrapper>
    )
}