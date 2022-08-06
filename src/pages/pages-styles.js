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
  margin: "104px 4% 32px 4%",
  display: "flex",
  justifyContent: "center",
  "@media(max-width: 1270px)": {
    marginBottom: 200,
  }
});

export const ShowPropertyContainer = styled.div({
  //maxWidth: 830,
  //height: 1606,
  backgroundColor: colors.white,
});

// ListPropertiesPage
export const ListPropertiesWrapper = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  paddingTop: 72,
  width: "100vw",
  paddingLeft: "8%",
  paddingRight: "8%",
  "@media(max-width: 1270px)": {
    paddingTop: 114,
  }
})

export const BackgroundImage = styled.div({
  position: "fixed",
  top: 0,
  bottom: "-25vw",//-330,
  left: 0,
  right: 0,
  backgroundImage: "url(/construction-cuate.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "contain",
  zIndex: -1,
  opacity: 0.6,
})

export const FiltersHead = styled.div({
  position: "fixed",
  top: 40, 
  left: 0,
  right: 0,
  zIndex: 10,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "20px 8%",
  marginBottom: "2rem",
  marginTop: "2rem",
  "@media(max-width: 1270px)": {
    flexDirection: "column",
    gap: "1rem 0"
  }
})

export const TopHead = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  zIndex: 1,
  "@media(max-width: 540px)": {
    flexDirection: "column",
  }
})

export const TopCenter = styled.div({
  position: "absolute",
  left: 0, 
  right: 0,
  display: "flex",
  justifyContent: "center",
  transition: "all .3s linear",
  "@media(max-width: 1270px)": {
      position: "static",
  },
  "@media(max-width: 750px)": {
    display: "flex",
    position: "absolute",
    bottom: -255,
    opacity: 0.5,
    padding: "10px 8%",
    backgroundColor: colors.white,
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    "&.active": {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  }
})

export const TopCenterDisplayer = styled.div({
  width: "100%",
  display: "none",
  "@media(max-width: 750px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
})

export const ButtonsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  "@media(max-width: 750px)": {
    padding: "10px 0",
    width: "100%",
    flexDirection: "column",
    boxShadow: `0px 0px 10px ${colors.grays.dark}`
  }
})

export const PropertyList = styled.div(({ justify = "center" }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: justify,
  alignItems: "center",
  width: "100%",
  margin: "4rem 0 5rem 0",
  gap: "2rem 4%",
}));

export const EditPropertyWrapper = styled.div({
  height: "89vh",
  background: `conic-gradient(from 300deg at 125% 95%, ${colors.blues.light} 50%, ${colors.white} 50%)`,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
  overflowY: "scroll",
  scrollBehavior: "smooth",
  padding: "3rem 50px 3rem 9vw",
  marginTop: 72,
  "@media(max-width: 1200px)": {
    justifyContent: "center",
  },
  "@media(max-width: 750px)": {
    padding: "3rem 1vw 3rem 1vw",
  }
});

export const FriendlyImageContainer = styled(motion.div)({
  position: "fixed",
  right: "5vw",
  bottom: 0,
  width: 900,
  height: "auto",
  "@media(max-width: 1700px)": {
    top: "5vh",
    height: 700,
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
    width: "100%",
    marginTop: "5%",
    maxWidth: 900,
  },
  ({ height }) => ({
    height: height ? height : 900,
  })
);

export const LostImageHelperText = styled.p({
  fontSize: 25,
  margin: "0 10%",
  textAlign: "center",
});

export const FriendlyImage = styled.img({
  width: "90vw",
  height: "auto",
  objectFit: "cover",
  borderRadius: 8,
});

export const FindHomeInputContainer = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
})

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
