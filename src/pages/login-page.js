import Button from "../components/Button/button";
import Input from "../components/Input";
import { LoginPageWrapper, LoginForm, LoginTitle } from "./pages-styles";
import { RiUserReceived2Fill } from "react-icons/ri";
import { validate, initialLogin } from "./utils";
import { Formik } from "formik";

const handleSubmit = (values) => {
  console.log(values);
};

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Formik
        initialValues={initialLogin}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <LoginForm onSubmit={handleSubmit}>
            <LoginTitle>Login</LoginTitle>
            <Input
              label="EMAIL"
              placeholder={"user@mail.com"}
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              isTouched={touched.email}
              onBlur={handleBlur}
            />
            {console.log(isValid)}
            <Input
              label="PASSWORD"
              placeholder={"**********"}
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              isTouched={touched.password}
              onBlur={handleBlur}
            />

            <Button
              lefticon={<RiUserReceived2Fill size={17} />}
              margin={8}
              type="submit"
              disabled={!isValid}
            >
              LOGIN
            </Button>
          </LoginForm>
        )}
      </Formik>
    </LoginPageWrapper>
  );
};

export default LoginPage;
