import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFilteredProperties,
  getProperties,
  myContactedProperties,
  myFavoriteProperties,
  myProperties,
} from "../services/properties-service";
import { useAuth } from "./auth-context";

const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const {user} = useAuth();
  const [currentProperties, setCurrentProperties] = useState([]);
  const [myPropertiesList, setMyPropertiesList] = useState([])
  const [myFavoritePropertiesList, setMyFavoritePropertiesList] = useState([])
  const [myContactedPropertiesList, setMyContactedPropertiesList] = useState([])
  const [currentProperty, setCurrentProperty] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties().then(setCurrentProperties).catch(setError);
  }, []);

  useEffect(() => {
    getMyProperties();
    getMyFavoriteProperties();
    getMyContactedProperties();
  }, [user])

  const filteredProperties = async (filters) => {
    const properties = await getFilteredProperties(filters).catch(console.log);
    setCurrentProperties(properties);
    navigate("/properties");
  };

  async function getMyProperties(){
    await myProperties()
      .then(properties => {
        setMyPropertiesList(properties);
      })
      .catch((errors) => {
        console.error("My properties can't be shown: ", errors);
      })
  }

  async function getMyFavoriteProperties(){
    await myFavoriteProperties()
      .then(properties => {
        setMyFavoritePropertiesList(properties)
      })  
      .catch((errors) => {
        console.log("My favorites properties can't be shown: ", errors);
      })
  }

  async function getMyContactedProperties(){
    await myContactedProperties()
      .then(properties => {
        setMyContactedPropertiesList(properties)
      })
      .catch((errors) => {
        console.log("My contacted properties can't be shown: ", errors);
      })
  }


  const value = {
    currentProperties,
    isLoading,
    error,
    setCurrentProperties,
    setIsLoading,
    setCurrentProperty,
    currentProperty,
    filteredProperties,
    getMyProperties,
    myPropertiesList, 
    setMyPropertiesList,
    myFavoritePropertiesList,
    setMyFavoritePropertiesList,
    myContactedPropertiesList,
    setMyContactedPropertiesList,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useAuth must be used within a PropertyProvider");
  }
  return context;
};

export { PropertyProvider, useProperties };
