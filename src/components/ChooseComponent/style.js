import styled from "styled-components";
import { colors } from "../../style";
import { fonts, typography } from "../../style/typography";

export const SignUpHomeHeadSubtitle = styled.p`
  font-family: ${fonts.secondary};
  ${typography.weight[400]}
  ${typography.head.sm}
    color: ${colors.background.light};
`;
export const SignUpHomeHeadTitle = styled.h1`
  font-family: ${fonts.secondary};
  ${typography.weight[300]}
  ${typography.head.xl}
    color: ${colors.white};
`;

export const SignUpCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 1rem;
  margin-top: 3rem;
  gap: 3.5rem;
`;
