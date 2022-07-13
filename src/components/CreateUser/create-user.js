import { Formik } from "formik";
import { useAuth } from "../../contexts/auth-context";
import Button from "../Button/button";
import Input from "../Input";
import { CreateUserFormContainer, CreateUserFormTitle } from "./style";

const CreateUserForm = ({ type }) => {
  const { join, error } = useAuth();
  const handleSubmit = (values) => {
    join(values);
    error && console.log(error);
  };

  const validates = (values) => {
    const errors = {};
    const { name, email, phone, password, password_confirmation } = values;

    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
      errors.email = "Format is invalid";
    }

    if (
      phone &&
      !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/.test(phone)
    ) {
      errors.phone = "Phone number is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (password !== password_confirmation) {
      errors.password_confirmation = "Password must match";
    } else if (!password_confirmation) {
      errors.password_confirmation = "Confirm Password is required";
    }

    return errors;
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
  };

  const parsePhone = (phone) => {
    if (!phone) {
      return "";
    }
    if (phone.length === 3 && phone.length < 6) {
      return `${phone}-`;
    } else if (phone.length > 6 && phone.length < 9) {
      return `${phone}-`;
    }
    return phone;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validates}
    >
      {({
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
        handleSubmit,
        isValid,
      }) => (
        <CreateUserFormContainer
          onSubmit={handleSubmit}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <CreateUserFormTitle>Create your Account</CreateUserFormTitle>
          <Input
            label="NAME"
            placeholder={"John Doe"}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name}
            isTouched={touched.name}
          />
          <Input
            label="EMAIL"
            placeholder={"user@mail.com"}
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email}
            isTouched={touched.email}
          />
          <Input
            label="PHONE"
            placeholder={"987-654-321"}
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={parsePhone(values.phone)}
            error={errors.phone}
            isTouched={touched.phone}
          />
          <Input
            label="PASSWORD"
            placeholder={"********"}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password}
            isTouched={touched.password}
          />
          <Input
            label="PASSWORD CONFIRMATION"
            placeholder={"********"}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password_confirmation}
            error={errors.password_confirmation}
            isTouched={touched.password_confirmation}
          />

          <Button type="submit" margin={8} disabled={!isValid}>
            CREATE ACCOUNT
          </Button>
        </CreateUserFormContainer>
      )}
    </Formik>
  );
};

export default CreateUserForm;
