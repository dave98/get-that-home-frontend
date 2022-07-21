import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFilteredProperties,
  getProperties,
} from "../services/properties-service";

const PropertyContext = createContext();

const PropertyProvider = ({ children }) => {
  const [currentProperties, setCurrentProperties] = useState([]);
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

  const value = {
    currentProperties,
    isLoading,
    error,
    setCurrentProperties,
    setIsLoading,
    setCurrentProperty,
    currentProperty,
    filteredProperties,
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
