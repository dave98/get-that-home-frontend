import styled from "@emotion/styled";
import { colors } from "../../style";
import { fonts, typography } from "../../style/typography";

export const CustomSelectInput = styled.select`
  border: none;
  padding: 0.5rem 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: 1px solid ${colors.grays.light};
  padding: 0 0.5rem;
`;
export const SelectLabel = styled.label`
  width: 100%;
  border: none;
  box-sizing: border-box;
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`;
