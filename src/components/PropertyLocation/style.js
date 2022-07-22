import styled from "styled-components";
import { colors } from "../../style";


export const LocationWrapper = styled.div`
  padding: 0 32px;
  width: 830px;
  height: 828px;
  background-color: ${colors.grays.shallow};
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const MapLocation = styled.img`
  width: 760px;
  height: 760px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
`