import styled from "@emotion/styled";
import { fonts, typography } from "../../style/typography";

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${fonts.primary};
  ${typography.body.sm};
  ${typography.weight[700]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  position: absolute;
  height: 72px;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 10rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  gap: 1rem;
`;
