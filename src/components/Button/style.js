import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../style/colors";
import { fonts, typography } from "../../style/typography";

export const CustomizableButton = styled(motion.button)`
  ${({ buttontype }) => {
    return buttontype === "line"
      ? `
    border: 1px solid ${colors.blues.regular};
    background-color: tansparent;`
      : buttontype === "transparent"
      ? `
    border: none;
    background-color: transparent;
    `
      : `background-color: ${colors.blues.regular}; border: none;`;
  }}
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 3rem;
  color: ${({ buttontype }) => {
    return buttontype === "line"
      ? colors.blues.regular
      : buttontype === "transparent"
      ? colors.blues.regular
      : colors.white;
  }};
  margin: ${({ margin }) => margin + "px" || ""};
  padding: ${({ size }) =>
    size === "sm"
      ? "4px 0.5rem"
      : size === "lg"
      ? "1rem 1.5rem"
      : "0.5rem 1rem"};
  height: ${({ size }) =>
    size === "sm" ? "32px" : size === "lg" ? "56px" : "40px"};
  font-family: sans-serif;
  width: fit-content;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-family: ${fonts.primary};
  ${typography.body.xs};
  ${typography.weight[500]};
  &:hover {
    ${({ buttontype }) =>
      buttontype === "line"
        ? `background-color: ${colors.blues.shallow};
     color: ${colors.grays.dark};
     border: 1px solid ${colors.blues.dark};
    `
        : buttontype === "transparent"
        ? `background-color: ${colors.blues.shallow};
     color: ${colors.grays.dark};
    `
        : `background-color: ${colors.blues.dark}
    `}
  }
  &::selection {
    background: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Refactor to styles props in an object
