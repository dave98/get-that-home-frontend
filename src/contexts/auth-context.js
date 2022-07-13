import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../services/sessions-service";
import { createUser, getUser } from "../services/users-service";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUser().then(setUser).catch(setError);
  }, []);

  const login = async (credentials) => {
    const user = await auth.login(credentials).catch(setError);
    console.log(user);
    if (user) {
      setUser(user);
      navigate("/");
    }
    return user;
  };

  const logout = async () => {
    await auth.logout().catch(setError);
    setUser(null);
    navigate("/login");
  };

  const join = async (data) => {
    const user = await createUser(data).catch(setError);
    if (user) {
      setUser(user);
      navigate("/");
    }
    return user;
  };

  const value = {
    user,
    // isLoading,
    login,
    logout,
    join,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
