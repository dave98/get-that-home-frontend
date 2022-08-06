import styled from "styled-components";
import { colors } from "../../style";


// export const LocationWrapper = styled.div`
//   padding: 0 32px;
//   width: 830px;
//   height: 828px;
//   background-color: ${colors.grays.shallow};
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `
export const LocationWrapper = styled.div({
  width: "70vw",
  maxWidth: 1000,
  height: "50vh",
  backgroundColor: colors.grays.shallow,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 32px",
  gap: 8,
  "@media(max-width: 1270px)": {
    width: "90vw",
  }
})

export const MapLocation = styled.img({
  width: "100%",
  height: "100%", 
  backgroundColor: colors.white,
})

// export const MapLocation = styled.img`
//   width: 760px;
//   height: 760px;
//   background-color: ${colors.white};
//   display: flex;
//   flex-direction: column;
// `