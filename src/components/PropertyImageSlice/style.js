import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../style";

export const SlicesWrapper = styled.div({
  width: 830,
  height: 384,
  backgroundColor: colors.grays.shallow,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  paddingTop: "2rem",
})

export const ButtonArrow = styled(motion.div)({
  width: 160,
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
  width: 512, 
  height: 384,
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

