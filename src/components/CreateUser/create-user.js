import Button from "../Button/button";
import Input from "../Input";
import { CreateUserFormContainer, CreateUserFormTitle } from "./style";

const CreateUserForm = ({ type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <CreateUserFormContainer onSubmit={handleSubmit}>
      <CreateUserFormTitle>Create your Account</CreateUserFormTitle>
      <Input label="NAME" placeholder={"John Doe"} />
      <Input label="EMAIL" placeholder={"user@mail.com"} type="email" />
      <Input label="PHONE" placeholder={"987-654-321"} type="phone" />
      <Input label="PASSWORD" placeholder={"********"} type="password" />
      <Input
        label="PASSWORD CONFIRMATION"
        placeholder={"********"}
        type="password"
      />

      <Button type="submit" margin={8}>
        CREATE ACCOUNT
      </Button>
    </CreateUserFormContainer>
  );
};

export default CreateUserForm;
