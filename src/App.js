import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/login-page";

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
  const [isAuth, setIsAuth] = useState(false);

  return (
    <MainWrapper>
      <Navbar isAuth={isAuth} role={"seller"} />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<div>Join</div>} />
        <Route path="properties" element={<div>Properties</div>} />
      </Routes>
    </MainWrapper>
  );
};

export default App;
