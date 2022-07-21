import styled from "@emotion/styled";
import { colors } from "../../style/colors";
import { fonts, typography } from "../../style/typography";

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

export const BeBaSelectorLink = styled.a`
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
}
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
