import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as individualProperty from "../services/properties-service";
import { useProperties } from "./properties-context";


const IndividualPropertyContext = createContext();

const IndividualPropertyProvider = ({children}) => {
    const {currentProperties, setCurrentProperties, myPropertiesList, setMyPropertiesList} = useProperties();
    const [currentOperation, setCurrentOperation] = useState("create") // update
    const [selected, setSelected] = useState(null);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("CurrentOperation: ", currentOperation);
    }, [currentOperation])

    function propertyFormatter(property){ // Property to properties format (About, images_url are different)
        return {
            address:    property.address,
            area:   property.area,
            base_image_url: !!property.images_url.length ?property.images_url[0] : null,
            bathrooms:  property.bathrooms,
            bedrooms:   property.bedrooms,
            closed: property.closed,
            id: property.id,
            operationType:  property.operationType,
            petsAllowed:    property.petsAllowed,
            propertyType:   property.propertyType,
            rentAmount: property.rentAmount,
        }
    }

    async function createProperty(propertyData){
        return await individualProperty.createProperty(propertyData)
            .then(property => {
                setSelected(property);
                setCurrentProperties([...currentProperties, propertyFormatter(property)]);
                navigate("/properties");
            })
            .catch(errors => {
                console.log("Property error creation: ", errors);
            });
    }

    async function updateProperty(propertyId, propertyData){
        return await individualProperty.updateProperty(propertyId, propertyData)
            .then(property => {
                setSelected(property);
                let tCurrentProperties = currentProperties.filter(cProperty => cProperty.id !== property.id);
                tCurrentProperties.push(propertyFormatter(property));
                setCurrentProperties(tCurrentProperties);
                navigate("/properties");
            })
            .catch(errors => {
                console.log("Property error update", errors) 
            })
    }

    async function updateClosedStateProperty(propertyId, closed){
        return await individualProperty.updateClosedProperty(propertyId, { closed: closed } )
            .then(property => {
                let tMyPropertiesList = myPropertiesList.filter(p => p.id !== property.id);
                tMyPropertiesList.push(propertyFormatter(property))
                setMyPropertiesList(tMyPropertiesList);
            })
            .catch(errors => {
                console.log("Property error on closed update", errors)
            })
    }

    async function destroyProperty(propertyId){
        return await individualProperty.deleteProperty(propertyId)
            .then(() => {
                setMyPropertiesList(myPropertiesList.filter(p => p.id !== propertyId));
            })
            .catch((errors) => {
                console.log("Property error on destroying: ", errors)
            })
    }

    async function showToUpdateProperty(propertyId){
        return await individualProperty.showProperty(propertyId)
            .then(property => {
                setSelected(property);
                navigate("/property/edit");
            })
            .catch((errors) => {
                console.log("Property cannot be queried to update", errors);
            })
    }

    async function showProperty(propertyId){
        return await individualProperty.showProperty(propertyId)
            .then(property => {
                setSelected(property);
                //navigate("/property/edit") // Change to show page
            })
            .catch(errors => {
                console.log("Property cannot be shown", errors);
            })
    }

    return <IndividualPropertyContext.Provider value={{
        selected,
        setSelected,
        errors,
        setErrors,
        currentOperation, 
        setCurrentOperation,
        createProperty,
        updateProperty,
        destroyProperty,
        showProperty,
        showToUpdateProperty,
        updateClosedStateProperty,
    }}>
        {children}
    </IndividualPropertyContext.Provider>
}

const useIndividualProperty = () => {
    const context = useContext(IndividualPropertyContext);
    if(!context){
        throw new Error("useIndividualProperty must be used within a IndividualPropertyProvider")
    }else{
        return context
    }
};

export {IndividualPropertyProvider, useIndividualProperty}

