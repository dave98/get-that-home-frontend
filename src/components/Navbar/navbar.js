import Button from "../Button/button";
import PropTypes from "prop-types";
import { Logo, NavbarContainer, ButtonsContainer } from "./style";
import {
  RiUserAddFill,
  RiUserReceivedFill,
  RiSearchLine,
  RiLogoutCircleLine,
  RiHeartFill,
  RiHome2Fill,
  RiUserFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useEffect } from "react";
import ButtonIcon from "../ButtonIcon/buttonIcon";

const icons = {
  login: <RiUserReceivedFill size={18} />,
  join: <RiUserAddFill size={18} />,
  find: <RiSearchLine size={18} />,
  logout: <RiLogoutCircleLine size={18} />,
  heart: <RiHeartFill size={18} />,
  home: <RiHome2Fill size={18} />,
  profile: <RiUserFill size={18} />,
};

const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const { logout, error, user, role, setRole } = useAuth();

  useEffect(() => {
    if (!user) {
      setIsAuth(false);
    }
  }, [user, isAuth, setIsAuth]);

  const handleClick = (e, route) => {
    e.preventDefault();
    navigate(route);
  };
  return (
    <NavbarContainer>
      <Logo
        src="/logo-capstone.svg"
        alt="logo"
        onClick={(e) => handleClick(e, "/")}
      />

      <ButtonsContainer>
        <Button
          buttontype={"transparent"}
          lefticon={icons.find}
          onClick={(e) => handleClick(e, "/properties")}
        >
          FIND A HOME
        </Button>
        
        <Button
          buttontype={"line"}
          lefticon={isAuth ? icons.logout : icons.join}
          onClick={(e) => {
            if (isAuth) {
              logout();
              handleClick(e, "/");
              error && console.log(error);
            } else {
              handleClick(e, "/join");
            }
          }}
        >
          {isAuth ? "LOGOUT" : "JOIN"}
        </Button>

        {isAuth ? (
          role === "seeker" ? (
            <Button 
              lefticon={icons.heart}
              onClick={(event) => {
                event.preventDefault();
                navigate("/my-saved-properties") 
              }}
              animationOnAppear={true}
            >
              SAVED PROPERTIES
            </Button>
          ) : ( // landlordCase
            <Button 
              lefticon={icons.home}
              onClick={(event) => {
                event.preventDefault();
                navigate("/my-properties");
              }}
              animationOnAppear={true}
            >
              MY PROPERTIES
            </Button>
          )
        ) : (
          ""
        )}
        <Button
          lefticon={isAuth ? icons.profile : icons.login}
          onClick={(e) => {
            isAuth ? handleClick(e, "/profile") : handleClick(e, "/login");
          }}
        >
          {isAuth ? "PROFILE" : "LOGIN"}
        </Button>
        {
          isAuth 
          ? <ButtonIcon 
            radius={60} 
            image={role === "seeker" ? "/house-searching-cuate.svg" : "/for-sale-cuate.svg"}
            rotate
            onClick={() => {
              setRole( role === "seeker" ? "landlord" : "seeker")
            }}
          >
            {role.toUpperCase()}
          </ButtonIcon>
          : null
        }
        

      </ButtonsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
