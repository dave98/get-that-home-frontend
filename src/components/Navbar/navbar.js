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

const icons = {
  login: <RiUserReceivedFill size={18} />,
  join: <RiUserAddFill size={18} />,
  find: <RiSearchLine size={18} />,
  logout: <RiLogoutCircleLine size={18} />,
  heart: <RiHeartFill size={18} />,
  home: <RiHome2Fill size={18} />,
  profile: <RiUserFill size={18} />,
};

const Navbar = ({ role, isAuth }) => {
  return (
    <NavbarContainer>
      <Logo src="/logo-capstone.svg" alt="logo" />

      <ButtonsContainer>
        <Button type={"transparent"} lefticon={icons.find}>
          FIND A HOME
        </Button>
        <Button type={"line"} lefticon={isAuth ? icons.logout : icons.join}>
          {isAuth ? "LOGOUT" : "JOIN"}
        </Button>
        {isAuth ? (
          role === "seller" ? (
            <Button lefticon={icons.heart}>SAVED PROPERTIES</Button>
          ) : (
            <Button lefticon={icons.home}>MY PROPERTIES</Button>
          )
        ) : (
          ""
        )}
        <Button lefticon={isAuth ? icons.profile : icons.login}>
          {isAuth ? "PROFILE" : "LOGIN"}
        </Button>
      </ButtonsContainer>
    </NavbarContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  role: PropTypes.oneOf(["landlord", "seller"]),
};
