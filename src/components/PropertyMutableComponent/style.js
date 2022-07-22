import styled from "styled-components";
import { colors } from "../../style";
import { fonts } from "../../style/typography";

export const MutableComponentWarrper = styled.div({
  backgroundColor: colors.grays.shallow,
  padding: 32,
  width: 290,
  maxHeight: 400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})


export const MutableComponentContainer = styled.div({
  backgroundColor: colors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "32px 22px",
  gap: 16,
  width: 226,
  height: "auto",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)",
  borderRadius: 8,
})


export const OwnerInformationContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
})

export const OwnerInformationImageContainer = styled.div({
  width: 80,
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

export const OwnerInformationText = styled.p(({size = 15}) => ({
  fontSize: size,
  fontFamily: fonts.secondary,
  textAlign: "center"
}))