import styled from "@emotion/styled";
import { useState } from "react";
import Navbar from "./components/Navbar";

const MainWrapper = styled.div`
  display: flex;
  position: relative;
`;

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <MainWrapper>
      <Navbar isAuth={isAuth} role={"seller"} />
    </MainWrapper>
  );
};

export default App;
