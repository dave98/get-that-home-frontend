import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, typography } from "../../style";
import { fonts } from "../../style/typography";

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 8px;
  height: 274px;
  width: 280px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const CardImage = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.h3`
  font-family: ${fonts.secondary};
  ${typography.head.xs}
  ${typography.weight[500]}
  color: ${colors.grays.dark};
`;

export const CardDescription = styled.p`
  font-family: ${typography.secondary};
  ${typography.body.xs}
  ${typography.weight[400]}
  color: ${colors.grays.dark};
`;
