import styled from "@emotion/styled";
import { colors } from "../../style";
import { fonts, typography } from "../../style/typography";


export const CustomSelectInput = styled.select(
  ({variant}) => (
    function(){
      if(variant === "search" || variant === "tropical"){
        return {
          width: "100%",
          height: 40,
          borderRadius: 8,
          backgroundColor: colors.background.light,
          border: `1px solid ${colors.blues.regular}`,
          color: colors.grays.dark,
          padding: "0.5rem",
        }
      }else{
        return {
          width: "100%",
          border: "none",
          padding: "0.5rem 0",
        }
      }
    }
  )
)

export const SelectContainer = styled.div(
  ({variant, width}) => (
    function(){
      if(variant === "search"){
        return {}
      }else if(variant === "tropical"){
        return {
          display: "flex",
          flexDirection: "column",
          gap: 4,
          "@media(max-width: 750px)": {
            width: "100%",
          }
        }
      }else{
        return {
          display: "flex",
          flexDirection: "column",
          width: {width},
          borderRight: `1px solid ${colors.grays.light}`,
          padding: "0 0.5rem",
        }
      }
    }
  ), ({width}) => ({
    minWidth: width ? width : "",
  })
)


export const SelectLabel = styled.label`
  width: 100%;
  border: none;
  box-sizing: border-box;
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`;
