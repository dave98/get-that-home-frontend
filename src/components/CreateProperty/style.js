import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, typography } from "../../style";
import { fonts } from "../../style/typography";

export const CreatePropertyFormTitle = styled(motion.h1)({
    fontSize: 36,
    lineHeight: "48px",
    fontWeight: 400, 
    color: colors.black
})

export const CreatePropertyFormContainer = styled(motion.form)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    
    gap: 16,
    width: 600,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px 20px"
})

export const CreatePropertyFormPropertyConfigContainer = styled(motion.div)({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 16,
    alignItems: "flex-start",
    "@media(max-width: 750px)": {
        flexDirection: "column",
    }
})

export const CreatePropertyFormPetsHelperTextContainer = styled.div({
    display: "flex",
    flexDirection: "column",
})

export const CreatePropertyFormHelperText = styled(motion.p)({
    fontSize: 12,
    fontFamily: fonts.secondary,
    color: colors.grays.light,
    fontWeight: 400,
})

export const CreatePropertyFormImageContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: 8,
})

export const CreatePropertyFormImageTitle = styled(motion.h3)({
    fontSize: 36,
    lineHeight: "48px",
    fontWeight: 400, 
    color: colors.black
})

export const CreatePropertyFormImageInputContainer = styled(motion.div)({
    display: "flex",
    flexDirection: "column",
    gap: 4,
})

export const CreatePropertyFormImageInputTitle = styled.div({
    textTransform: "uppercase",
    fontSize: 12,
    lineHeight: "14px",
    letterSpacing: 1.5,
})

export const CreatePropertyFormImageImagesContainer = styled(motion.div)({
    padding: "8px 8px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"left",
    gap: 4,
    borderRadius: 8,
    backgroundColor: colors.blues.shallow
})

export const CreatePropertyFormImageImage = styled(motion.div)({
    height: 105,
    width: 105,
    borderRadius: 5,
    backgroundColor: colors.grays.regular,
    display: "flex",
    justifyContent: "center"
})

export const PropertyFormFriendlyImage = styled.img({
    height: "100%",
    width: "auto",
    objectFit: "cover",
    
})