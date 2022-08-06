import styled from "styled-components";
import { colors } from "../../style";



export const ShowPropertyDataWapper = styled.div({
  width: "70vw",
  maxWidth: 1000,
  height: "auto",
  backgroundColor: colors.grays.shallow,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media(max-width: 1270px)": {
    width: "90vw",
  }
})

export const ShowAddressContainer = styled.div({
  width: "100%",
  height: "auto",
  backgroundColor: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 20,
  padding: "0px 20px",
  marginTop: "20px",
})

export const ShowAddressContainer2 = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
})

export const ShowDetailsContainer = styled.div({
  width: "100%",
  height: "auto",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "20px 20px",
  gap: "10px 20px",
})

export const ShowDetailsMiniContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  minWidth: "20%",
})

// export const AboutPropertycontainer = styled.div`
//   width: 760px;
//   height: 204px;
// `

export const AboutPropertycontainer = styled.div({
  width: "100%",
  height: "auto",
  padding: "20px 20px",
  textAlign: "justify",
})
