import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as individualProperty from "../services/properties-service";
import { useProperties } from "./properties-context";


const IndividualPropertyContext = createContext();

const IndividualPropertyProvider = ({children}) => {
    const {
        myPropertiesList, 
        setMyPropertiesList,
        myFavoritePropertiesList,
        setMyFavoritePropertiesList,
        myContactedPropertiesList,
        setMyContactedPropertiesList,
    } = useProperties();
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
                setMyPropertiesList([...myPropertiesList, propertyFormatter(property)])
                setSelected(property);
                navigate("/my-properties");
            })
            .catch(errors => {
                console.log("Property error creation: ", errors);
            });
    }

    async function updateProperty(propertyId, propertyData){
        return await individualProperty.updateProperty(propertyId, propertyData)
            .then(property => {
                let tMyPropertiesList = myPropertiesList.filter(p => p.id !== property.id);
                tMyPropertiesList.push(propertyFormatter(property));
                setMyPropertiesList(tMyPropertiesList);
                setSelected(property);
                navigate("/my-properties");
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

    async function contactWithProperty(propertyId){
        return await individualProperty.contactWithProperty(propertyId)
            .then(property => {
                setMyContactedPropertiesList([...myContactedPropertiesList, property])
            })
            .catch(errors => {
                console.log("Property error on contact: ", errors);
            }) 
    }

    async function likeProperty(propertyId){
        return await individualProperty.likeProperty(propertyId)
            .then(propertyLiked => {
              setMyFavoritePropertiesList([...myFavoritePropertiesList, propertyLiked])  
            })
            .catch(errors => {
                console.log("Property error on like: ", errors);
            }) 
    }

    async function destroyLike(likeId, propertyId){
        return await individualProperty.deleteLikeProperty(likeId)
        .then(() => {
            setMyFavoritePropertiesList( myFavoritePropertiesList.filter(p => p.property.id != propertyId) )
        })
        .catch((errors) => {
            console.log("Property error on like destroy: ", errors)
        })
    }

    async function reachOwner(propertyId){
        return await individualProperty.reachPropertyUser(propertyId)
            .catch((errors) => {
                console.log("Property owner cannot be reached: ", errors);
                return null;
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
                navigate("/property/show") // Change to show page
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
        contactWithProperty,
        likeProperty,
        destroyLike,
        reachOwner
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

