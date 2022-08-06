import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/auth-context";
import CreatePropertyPage from "./pages/create-property";
import EditProperty from "./pages/edit-property";
import { PropertyProvider } from "./contexts/properties-context";
import LandingPage from "./pages/landing-page";
import ListProperties from "./pages/list-properties-page";
import LoginPage from "./pages/login-page";
import ShowProperty from "./pages/show-property-page";
import SignUpPage from "./pages/signup-page";
import { IndividualPropertyProvider } from "./contexts/individual-property-context";
import MyProperties from "./pages/my-properties";
import MySavedProperties from "./pages/my-saved-properties";
import Profile from "./pages/profile-page";
// import ShowProperty from "./pages/show-property-page";

// const MainWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   min-height: 100vh;
//   max-width: 100vw;
//   overflow: hidden;
//   scroll-behavior: smooth;
//   justify-content: center;
//   items-align: center;
// `;

const MainWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  minHeight: "100vh",
  maxWidth: "100vw",
  overflow: "hidden",
  scrollBehavior: "smooth",
  justifyContent: "center",
  alignItems: "center",
})

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
      <PropertyProvider>
        <IndividualPropertyProvider>
          <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="join" element={<SignUpPage />}>
                <Route path=":landlord" element={<SignUpPage />} />
                <Route path=":seeker" element={<SignUpPage />} />
              </Route>
              <Route path="properties" element={<ListProperties />} />
              <Route path="my-properties" element={<MyProperties/> } />
              <Route path="my-saved-properties" element={<MySavedProperties/> } />
              <Route path="profile" element={ <Profile/> } />
              <Route path="property" >
                <Route  path="show" element={ <ShowProperty/>  }/>
                <Route  path="edit" element={ <EditProperty/>  }/>
                <Route  path="create" element={ <CreatePropertyPage/>  }/>
              </Route>
            </Routes>
          </IndividualPropertyProvider>
      </PropertyProvider>
    </MainWrapper>
  );
};

export default App;
