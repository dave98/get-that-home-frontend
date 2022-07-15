import styled from "@emotion/styled";
import { colors } from "../../style/colors";

export const UserContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: fit-content;
  margin-top: 26px;
`;
export const ImgUser = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-bottom: 1rem;
`;
export const RedesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem;
  color: ${colors.grays.regular};
`;
