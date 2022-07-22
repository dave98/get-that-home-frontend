import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../style";

export const ButtonIconContainer = styled(motion.div)(({radius}) => ({
    width: radius ? radius : 100,
    height: radius ? radius : 100,
    backgroundColor: "transparent",
    borderRadius: "50%",
    position: "relative",
    textAlign: "center",
}))

export const ButtonIconImage = styled(motion.img)({
    height: "100%",
    width: "100%",
    objectFit: "cover",
})

export const ButtonIconLabelContainer = styled.div({
    position: "absolute",
    bottom: 0,
    right: "0%",
    left: "0%",
    backgroundColor: colors.blues.light,
    padding: "4px 3px 0px 3px",
    borderRadius: 5,
    maxHeight: 20,
    minWidth: 50,
    maxWidth: 100,
})

export const ButtonIconLabel = styled.p({
    color: "white",
    fontSize: 10
})