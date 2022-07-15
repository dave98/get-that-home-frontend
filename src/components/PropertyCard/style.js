import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../style";
import { fonts, typography } from "../../style/typography";

export const Container = styled(motion.div)`
  background-color: ${colors.white};
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 8px;
  width: 300px;
  min-height: 360px;
  height: fit-content;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;
export const CardImg = styled.div`
  ${({ cover }) =>
    cover
      ? `background-image: url(${cover});`
      : `background-image: url(/buildings.svg);`}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.grays.shallow};
  display: flex;
  justify-content: flex-end;
  border-radius: 8px 8px 0 0;
  width: 300px;
  height: 200px;
`;
export const CardLabel = styled.div`
  font-family: ${fonts.primary};
  background-color: ${(props) =>
    props.type === "rental" ? `${colors.blues.light}` : `${colors.blues.dark}`};
  ${typography.body.xs}
  ${typography.weight[400]}
  color: ${colors.white};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  border-radius: 0 8px 0 0;
  width: 110px;
  height: 28px;
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.6rem;
  padding: 0 11px;
`;

export const CardCost = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  ${typography.head.sm}
  ${typography.weight[400]}
  color: ${colors.grays.dark};
  align-self: center;
  gap: 0.6rem;
`;
export const CardInmueble = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  ${typography.body.sm}
  ${typography.weight[400]}
  color: ${colors.grays.regular};
  gap: 0.3rem;
`;

export const CardAddress = styled.p`
  ${fonts.secondary}
  ${typography.body.sm}
  ${typography.weight[400]}
  color: ${colors.grays.dark};
  text-align: left;
  padding: 0 0.5rem;
`;

export const CardFooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  ${typography.body.sm}
  ${typography.weight[400]}
  color: ${colors.grays.dark};
  gap: 1.5rem;
  padding: 0 0.5rem;
  margin-top: 1.7rem;
`;
export const FooterInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const MutableBottom = styled.div`
  display: flex;
  min-height: 7px;
  background-color: ${colors.blues.dark};
  border-radius: 0 0 8px 8px;
  width: 100%;
  height: fit-content;
  margin-top: 10px;
  color: ${colors.white};
  gap: 50px;
  ${({ owned }) => (owned ? `padding: 12px` : `padding: 0`)}
  justify-content: center;
`;
