// import {LanlordCard, Homeseeker} from "./components/cards";
import { Text, Heading } from "./components/typography"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/auth-context";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";


const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const App = () => {
  const { user } = useAuth();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    }
  }, [user]);

  return (
    <MainWrapper>
      <Navbar isAuth={isAuth} role={"seller"} />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<SignUpPage />}>
          <Route path=":landlord" element={<SignUpPage />} />
          <Route path=":seeker" element={<SignUpPage />} />
        </Route>
        <Route path="properties" element={<div>Properties</div>} />
        <Route path="profile" element={<div>Profile</div>} />
      </Routes>
    </MainWrapper>
  );
};

export default App;