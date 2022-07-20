import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, typography } from "../style";

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

export const ShowPropertyWrapper = styled.div`
  margin-top: 104px;
  padding: 0 15%;
  margin-bottom: 2rem;
  display: flex;
  gap: 16px;
`;
export const ShowPropertyContainer = styled.div`
  width: 830px;
  height: 1606px;
  background-color: ${colors.white};
`;
