import styled from "styled-components";
import { colors, typography } from "../../style";
import { fonts } from "../../style/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  margin-bottom: 0.5rem;
`;
export const Label = styled.label`
  width: 100%;
  border: none;
  box-sizing: border-box;
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`;
export const InputBox = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.blues.light};
  border-radius: 8px;
  backgorund: ${colors.white};
  height: 40px;
  color: ${colors.grays.dark}
  display: flex;
  flex-direction: row;
  align-items: center;
  &::placeholder{
    color: ${colors.grays.light}
  }
`;
export const ErrorMessage = styled.p``;
