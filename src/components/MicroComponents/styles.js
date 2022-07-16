// CustomInput

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, typography } from "../../style";
import { fonts } from "../../style/typography";

export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 300px;
  border-radius: 8px;
  background-color: ${colors.background.light};
  border: 1px solid ${colors.blues.regular};
  color: ${colors.grays.dark};
  padding: 0.5rem;
`;

export const CustomInputBox = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  ${typography.body.sm}
  ${typography.weight[400]}
  ${fonts.secondary}
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.grays.light};
  }
`;

// PaginationButtonsComponent

export const PaginationButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  padding-bottom: 2rem;
  gap: 0.5rem;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  width: 31px;
  height: 31px;
  border-radius: 0.5rem;
  border: 1px solid ${colors.blues.light};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  ${typography.body.xs}
  &:hover {
    background-color: ${colors.blues.shallow};
  }
`;

export const NextPrevButton = styled(motion.button)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${colors.blues.shallow};
  border: none;
  outline: none;
  cursor: pointer;
  ${typography.body.xs}
  &:hover {
    background-color: ${colors.blues.dark};
    color: ${colors.white};
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
