import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../style";
import { fonts, typography } from "../../style/typography";

export const Container = styled(motion.div)({
  backgroundColor: "#13315C",
  opacity: 0.6,
  backgroundSize: "20px 20px",
  backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 2px, #13315C 0, #13315C 50%)",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  width: 300,
  minWidth: 300,
  maxWidth: 300,
  //minHeight: 360,
  cursor: "pointer",
  //boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
})

export const CardImg = styled.div(({cover}) => ({
  backgroundImage: cover ? `url(${cover})` : "url(/buildings.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: colors.grays.shallow,
  display: "flex",
  justifyContent: "flex-end",
  width: 300,
  height: 200,
}))

export const CardLabel = styled.div(({type}) => ({
  fontFamily: fonts.primary,
  backgroundColor: type === "rental" ? colors.blues.light : colors.blues.dark,
  fontSize: 14, 
  lineHeight: "20px",
  fontWeight: 400,
  color: colors.white,
  padding: "0.5rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.5rem",
  width: 110,
  height: 28,
}))

export const CardHeaderContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "0.6rem",
  padding: "10px 15px",
  backgroundColor: "#fff",
})

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

export const CardAddress = styled.p({
  fontFamily: fonts.secondary,
  fontSize: 16,
  lineHeight: "24px",
  fontWeight: 400,
  color: colors.grays.dark,
  textAlign: "left",
  padding: "0 15px",
  height: 72,
  maxHeight: 72,
  overflowY: "scroll",
  backgroundColor: "#fff",
  
  "::-webkit-scrollbar": {
    width: "5px",    
  },
  "::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#888",
  },
  "::webkit-scrollbar-thumb:hover": {
    background: "#555",
  }
})

export const CardFooter = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderBottom: `2px solid ${colors.grays.dark}`
})

export const CardFooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  ${typography.body.sm}
  ${typography.weight[400]}
  color: ${colors.grays.dark};
  gap: 1.5rem;
  padding: 0 0.5rem;
  margin-top: 0.4rem;
`;

export const FooterInfo = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4px;
  gap: 4px;
`;

export const MutableBottom = styled.div(({owned}) => ({
  display: "flex",
  justifyContent: "space-around",
  minHeight: 7,
  backgroundColor: colors.blues.dark,
  width: "100%",
  color: colors.white,
  padding: owned ? 12 : 0,
}))