import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/auth-context";
import LandingPage from "./pages/landing-page";
import ListProperties from "./pages/list-properties-page";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    }
  }, [user]);

  return (
    <MainWrapper>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} role={"seller"} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<SignUpPage />}>
          <Route path=":landlord" element={<SignUpPage />} />
          <Route path=":seeker" element={<SignUpPage />} />
        </Route>
        <Route path="properties" element={<ListProperties />} />
        <Route path="profile" element={<div>Profile</div>} />
      </Routes>
    </MainWrapper>
  );
};

export default App;
