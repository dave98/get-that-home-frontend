import styled from "@emotion/styled";
import { colors } from "../../style";

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const NavbarContainer = styled.div`
  position: fixed;
  height: 72px;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 10rem;
  z-index: 1;
  background-color: ${colors.white};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  gap: 1rem;
`;
