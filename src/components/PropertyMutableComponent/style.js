import styled from "styled-components";
import { colors } from "../../style";
import { fonts } from "../../style/typography";

export const FakeComponentWarrper = styled.div({
  width: 290,
  maxHeight: "50vh",
  "@media(max-width: 1270px)": {
    display: "none",
  } 
})

export const MutableComponentWarrper = styled.div({
  backgroundColor: colors.grays.shallow,
  padding: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  left: "75vw",

  "@media(max-width: 1270px)": {
    position: "fixed",
    left: 0, 
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    padding: 0,
  }
})


export const MutableComponentContainer = styled.div({
  backgroundColor: colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "32px 22px",
  gap: "0 20px",
  width: 226,
  height: "auto",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
  "@media(max-width: 1270px)": {
    flexDirection: "row",
    width: "100vw",
  }
})


export const OwnerInformationContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  "@media(max-width: 1270px)": {
    gap: 15,
    alignItems: "flex-end",
    flexDirection: "row",
  }
})

export const OwnerInformationImageContainer = styled.div({
  minWidth: 80,
  width: 80,
  minHeight: 80,
  height: 80,
  backgroundColor: "gray",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const OwnerInformationImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const OwnerInformationTextContainer = styled.div({

})
 
export const OwnerInformationText = styled.p(({size = 15}) => ({
  fontSize: size,
  fontFamily: fonts.secondary,
  textAlign: "center"
}))