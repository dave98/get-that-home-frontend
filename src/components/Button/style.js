import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../style/colors";
import { fonts } from "../../style/typography";

// Refactor to styles props in an object
export const CustomizableButton = styled(motion.button)({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  borderRadius: "3rem",
  fontFamily: fonts.primary,
  width: "fit-content",
  outline: "none",
  cursor: "pointer",
  transition: "background-color 0.2 ease-in-out",
  fontWeight: "500",
  fontSize: 14,
  "::selection": {
    background: "none",
  },
  ":disabled": {
    cursor: "not-allowed",
    opacity: "0.6",
  }
}, ({buttontype}) => (
  function(){
    if(buttontype === "line"){
      return {
        backgroundColor: "transparent",
        border: `1px solid ${colors.blues.regular}`,
        color: colors.blues.regular,
        ":hover": {
          backgroundColor: colors.blues.shallow,
          color: colors.grays.dark,
          border: `1px solid ${colors.blues.dark}`
        }
      }
    }else if(buttontype === "transparent"){
      return {
        backgroundColor: "transparent",
        border: "none",
        color: colors.blues.regular,
        ":hover": {
          backgroundColor: colors.blues.shallow,
          color: colors.grays.dark,
        }
      }
    }else{
      return {
        backgroundColor: colors.blues.regular,
        border: "none",
        color: colors.white,
        ":hover": {
          backgroundColor: colors.blues.dark,
        }
      }
    }
  }
), ({size}) => (
  function(){
    if(size ==="sm"){
      return {
        padding: "4px 0.5rem",
        height: 32,
      }
    }else if(size === "lg"){
      return {
        padding: "1rem 1.5rem",
        height: 56,
      }
    }else{
      return {
        padding: "0.5rem 1rem",
        height: 40,
      }
    }
  }
))