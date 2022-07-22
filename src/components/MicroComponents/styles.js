// CustomInput

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, typography } from "../../style";
import { fonts } from "../../style/typography";

// Custom input styles.
export const SurrounderInputContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
}, ({type}) => (
  function(){
    if(type === "file"){
      return {
        cursor: "pointer",
        transformOrigin: "top left",
        transition: "transform .5s",
        ":hover": {
          transform: "scale(1.05)",
        }
      }
    }
  }
))

export const ErrorContainer = styled.div({
  display: "flex",
}, ({errorDirection}) => (
  function(){
    if(errorDirection==="row"){
      return {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }
    }else{
      return {
        flexDirection: "column",
        alignItems: "flex-start",
      }
    }
  }
))

export const CustomInputContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 10,
  justifyContent: "center" ,
  height: 40, 
  width: 300,
  borderRadius: 8,
  backgroundColor: colors.background.light,
  border: `1px solid ${colors.blues.regular}`,
  color: colors.grays.dark,
  padding: "0.5rem"
})

export const CustomInputLabel = styled.label(`
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`)

export const CustomInputBox = styled.input({
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: 16,
  lineHeight: "24px",
  fontWeight: 400,
  backgroundColor: "transparent",
  fontFamily: fonts.secondary,
  ":focus": {
    outline: "none",
  },
  ":placeholder": {
    color: colors.grays.light,
  },
  "::-webkit-file-upload-button": {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer"
  }
})

export const CustomErrorMessage = styled.p`
  text-align: center;
  font-family: ${fonts.secondary};
  ${typography.body.xs}
  ${typography.weight[500]}
  color: #ef233c;
  padding: 10px 10px 0 10px;
`

// Radio input styles
export const RadioInputMainContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 6,
})

export const RadioInputMainLabel = styled.p(`
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`)

export const RadioInputContainer = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 10,
}, ({direction}) => ({
  flexDirection: direction,
}))

export const RadioInputInput = styled.input({
  display: "none",
})

export const RadioInputSpan = styled.span({
  content: `""`, 
  minWidth: 20,
  minHeight: 20,
  border: "2px solid black",
  position: "absolute",
  top: 0,
  left: 0,
  display: "inline-block",
  verticalAlign: "top",
  transition: ".5s",
})

export const RadioInputLabel = styled.label({
  display: "inline-block",
  paddingLeft: 30,
  cursor: "pointer",
  position: "relative",

  "input:checked+span": {
    borderLeft: "none",
    borderTop: "none",
    minWidth: 7,
    borderColor: colors.black,
    transform: "rotate(45deg) translate(5px, -8px)",
  }
})

// Text input styles
export const TextInputMainContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
})

export const TextInputMainLabel = styled.p(`
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`)

export const TextInputContainer = styled.div({
})

export const TextInputText = styled.textarea({
  border: "1px solid black",
  padding: 8,
  borderRadius: 8,
  width: "100%",
  height: 76,
  resize: "none",
  overflow: "hidden",
})

export const TextInputFooter = styled.p(`
  color: ${colors.grays.light};
  font-family: ${fonts.secondary};
  ${typography.others.captionFooter}
  ${typography.weight[400]}
`)

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
