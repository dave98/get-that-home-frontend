import styled from "@emotion/styled";
import { colors } from "../../style";

export const BestPropertiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: ${colors.white};
  width: 100%;
  height: 604px;
`;

export const BestPropertiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 2rem;
  gap: 3rem;
  justify-content: center;
`;
