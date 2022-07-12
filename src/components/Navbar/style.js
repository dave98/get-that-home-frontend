import styled from "@emotion/styled";

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
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
