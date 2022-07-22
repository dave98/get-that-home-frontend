import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, typography } from "../style";
import { fonts } from "../style/typography";

// LoginPage
export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.regular};
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.light};
  min-height: 256px;
  height: fit-content;
  width: 388px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0px 1rem;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
  gap: 0.5rem;
`;

export const LoginTitle = styled.h1`
  ${typography.head.sm}
  ${typography.weight[400]}
  color: ${colors.black};
  margin: 1rem;
  cursor: default;
`;

// SignUpPage

export const SignUpPageWrapper = styled.div`
  height: 89vh;
  background: linear-gradient(
    180deg,
    ${colors.blues.light} 50%,
    ${colors.white} 50%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 4rem 0px;
  margin-top: 72px;
`;

export const ShowPropertyWrapper = styled(motion.div)({
  margin: "104px 0 32px 0",
  padding: "0 15%",
  display: "flex",
  gap: 16,
});

export const ShowPropertyContainer = styled.div({
  width: 830,
  height: 1606,
  backgroundColor: colors.white,
});

// ListPropertiesPage

export const ListPropertiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding-top: 72px;
  height: fit-content;
  width: 100vw;
  padding-left: 10%;
  padding-right: 10%;
`;

export const FiltersHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const ButtonsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const PropertyList = styled.div(({ justify = "center" }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: justify,
  alignItems: "center",
  width: "100%",
  margin: "1rem 0 1rem 0",
  gap: "2rem 5rem",
}));

export const EditPropertyWrapper = styled.div({
  height: "89vh",
  background: `conic-gradient(from 300deg at 125% 95%, ${colors.blues.light} 50%, ${colors.white} 50%)`,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100vw",
  overflowY: "scroll",
  scrollBehavior: "smooth",
  padding: "3rem 50px 3rem 200px",
  marginTop: 72,
});

export const FriendlyImageContainer = styled(motion.div)({
  position: "absolute",
  right: "5%",
  top: "5%",
  height: 900,
  width: "auto",
  "@media(max-width: 1700px)": {
    height: 700,
    top: "20%",
  },
  "@media(max-width: 1200px)": {
    display: "none",
  },
});

export const LostImageContainer = styled(motion.div)(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    marginTop: "5%",
  },
  ({ height }) => ({
    height: height ? height : 800,
  })
);

export const LostImageHelperText = styled.p({
  fontSize: 25,
});

export const FriendlyImage = styled.img({
  height: "100%",
  width: "auto",
  objectFit: "cover",
  borderRadius: 8,
});

// MyPropertiesStyles
export const MyPropertiesTabsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  gap: 24,
  width: "100%",
  padding: "20px 0",
});

export const MyPropertiesTab = styled(motion.div)(
  {
    paddingBottom: 6,
    color: "gray",
    cursor: "pointer",
  },
  ({ active }) => ({
    borderBottom: active ? "2px solid red" : "none",
    color: active ? "black" : "gray",
  })
);

export const MyPropertiesTabText = styled.p({
  fontSize: 18,
  fontFamily: fonts.primary,
  textTransform: "uppercase",
  letterSpacing: 1.25,
  color: "inherit",
});

// MyProfileStyles
export const ProfileContainer = styled.div({
  marginTop: "10%",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 50,
});

export const ProfileImageContainer = styled(motion.div)({
  height: 400,
  width: 400,
  display: "flex",
  justifyContent: "center",
  backgroundColor: "gray",
  borderRadius: "50%",
});

export const ProfileImage = styled.img({
  objectFit: "cover",
});

export const ProfileDescriptionContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
});

export const ProfileName = styled.h2({
  fontSize: 35,
  fontFamily: fonts.primary,
  letterSpacing: 3,
});

export const ProfileDescription = styled.p({
  fontSize: 20,
  fontFamily: fonts.secondary,
  letterSpacing: 1,
});

export const ErrorMessageGlobal = styled.p({
  fontSize: 14,
  fontFamily: fonts.secondary,
  letterSpacing: 1,
  color: "red",
  marginBottom: "0.5rem",
});
