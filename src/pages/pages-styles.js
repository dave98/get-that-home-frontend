import styled from "@emotion/styled";
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

export const LoginForm = styled.form`
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
