import styled from "@emotion/styled";
import { RiUserReceived2Fill } from "react-icons/ri";
import Button from "../components/Button/button";
import { typography } from "../style";
import { colors } from "../style/colors";
import Input from "../components/Input";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.regular};
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.light};
  height: 256px;
  width: 388px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0px 1rem;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
`;

const LoginTitle = styled.h1`
  ${typography.head.sm}
  ${typography.weight[400]}
  color: ${colors.black};
  margin: 1rem;
  cursor: default;
`;

const LoginPage = () => {
  return (
    <>
      <LoginPageWrapper>
        <LoginForm>
          <LoginTitle>Login</LoginTitle>
          <Input label="EMAIL" placeholder={"user@mail.com"} type="email" />
          <Input label="PASSWORD" placeholder={"**********"} type="password" />

          <Button lefticon={<RiUserReceived2Fill size={17} />}>LOGIN</Button>
        </LoginForm>
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;
