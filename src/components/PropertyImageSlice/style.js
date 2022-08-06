import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../style";

export const SlicesWrapper = styled.div({
  width: "70vw",
  maxWidth: 1000,
  height: "auto",
  backgroundColor: colors.grays.shallow,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  "@media(max-width: 1270px)": {
    width: "90vw",
  }
})

export const ButtonArrow = styled(motion.div)({
  width: "15%",
  height: "100%",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const ImgesContainer = styled.div({
  backgroundColor: colors.blues.shallow,
  maxWidth: "70%", 
  height: "100%",
  overflowY: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
})

export const ImagesImage = styled(motion.img)({
  width: "100%",
  height: "auto",
})

