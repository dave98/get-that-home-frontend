import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFilteredProperties,
  getProperties,
  myProperties,
} from "../services/properties-service";

const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [currentProperties, setCurrentProperties] = useState([]);
  const [myPropertiesList, setMyPropertiesList] = useState([])
  const [currentProperty, setCurrentProperty] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties().then(setCurrentProperties).catch(setError);
  }, []);

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
