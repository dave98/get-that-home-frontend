import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as individualProperty from "../services/properties-service";


const IndividualPropertyContext = createContext();

const IndividualPropertyProvider = ({children}) => {
    const [selected, setSelected] = useState(null);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    async function createProperty(propertyData){
        return await individualProperty.createProperty(propertyData)
            .then(property => {
                console.log("Property: ", property);
                setSelected(property);
                navigate("/properties");
            })
            .catch(errors => {
                console.log("Property error creation: ", errors);
            });
    }

    async function updateProperty(propertyId, propertyData){

    }

    async function destroyProperty(propertyId){

    }

    async function showProperty(propertyId){

    }

    return <IndividualPropertyContext.Provider value={{
        selected,
        setSelected,
        errors,
        setErrors,
        createProperty,
        updateProperty,
        destroyProperty,
        showProperty,
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

