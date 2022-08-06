import styled from "@emotion/styled";
import { colors } from "../../style";

export const Logo = styled.img({
  height: 40,
  minHeight: 40,
  cursor: "pointer",
})

export const NavbarContainer = styled.div({
  height: 72,
  position: "fixed",
  top:0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 8% 16px 8%",
  zIndex: 30,
  backgroundColor: colors.white,
})

export const ButtonsContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginLeft: ".5rem",
  gap: "1rem",
  ".disposableButton": {
    display: "none",
  },
  "@media(max-width: 1200px)": {
    gap: ".5rem",
    ".disposableButton": {
      display: "flex",
    },
  }
})

export const DisposableButtons = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  transition: "all .3s linear",
  "@media(max-width: 1200px)": {
    position: "absolute",
    flexDirection: "column",
    left: 0, 
    right: 0,
    top: 70,
    backgroundColor: colors.white,
    padding: "10px 0 20px 0",
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    opacity: 0.5,
    "&.active": {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    }
  }
})