import { motion } from "framer-motion";
import styled from "styled-components";
import { colors, typography } from "../../style";

export const CreatePropertyFormTitle = styled.h1`
    ${typography.head.md};
    ${typography.weight[400]};
    color: ${colors.black};
`
export const CreatePropertyFormContainer = styled(motion.form)`
    display: flex;
    flex-direction: column;   
    gap: 16px;
    width: 600px;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    padding: 10px 20px;
`

export const CreatePropertyFormPropertyConfigContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    gap: 16,
    alignItems: "flex-start"
})

export const CreatePropertyFormPetsHelperText = styled.div({
    display: "flex",
    flexDirection: "column",
})

export const CreatePropertyFormImageContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: 8,
})

export const CreatePropertyFormImageTitle = styled.h3(`
    ${typography.head.l}
    ${typography.weight[400]}
    color: ${colors.white};
`)

export const CreatePropertyFormImageInputContainer = styled.div({
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

export const CreatePropertyFormImageImagesContainer = styled.div({
    padding: "8px 8px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    borderRadius: 8,
    backgroundColor: colors.blues.shallow
})

export const CreatePropertyFormImageImage = styled(motion.div)({
    height: 120,
    width: 120,
    borderRadius: 8,
    backgroundColor: colors.grays.regular,
})
