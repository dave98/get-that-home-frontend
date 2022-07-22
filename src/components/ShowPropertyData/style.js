import styled from "styled-components";
import { colors } from "../../style";



export const ShowPropertyDataWapper = styled.div({
  width: 830,
  height: "auto",
  backgroundColor: colors.grays.shallow,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

export const ShowAddressContainer = styled.div({
  width: 766,
  height: "auto",
  backgroundColor: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  paddingTop: 40,
})

export const ShowAddressContainer2 = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  minWidth: 200,
})

export const ShowDetailsContainer = styled.div({
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "20px 0",
})

export const ShowDetailsMiniContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
})


export const AboutPropertycontainer = styled.div`
  width: 760px;
  height: 204px;
`
