import styled from "@emotion/styled";
import { colors } from "../../style/colors";
import { fonts, typography } from "../../style/typography";

export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${colors.background.light};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const BeBaSelector = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: ${colors.background.regular};
  align-items: center;
`;

export const BeBaSelectorLabel = styled.label`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  ${fonts.secondary}
  color: ${colors.grays.light};
  ${typography.others.overline}
`;

export const BeBaSelectorLink = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${fonts.primary}
  color: ${colors.grays.dark};
  text-decoration: none;
  ${({ cornerLeft }) =>
    cornerLeft &&
    `
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  `}
  ${({ cornerRight }) =>
    cornerRight &&
    `
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  `}
  border: 1px solid ${colors.grays.light};
  cursor: pointer;
  &:hover {
    background-color: ${colors.blues.dark};
    color: ${colors.white};
  }
  &:active {
    background-color: ${colors.blues.light};
    color: ${colors.white};
  }
  &:focus {
    outline: none;
  }
`;
