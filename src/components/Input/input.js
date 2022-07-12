import { Container, ErrorMessage, InputBox, Label } from "./style";

const Input = ({
  type,
  label = "",
  value,
  onChange,
  placeholder,
  error,
  isTouched,
  isValid,
  onBlur,
  ...props
}) => {
  const globalName = label.toLocaleLowerCase().replace(/ /g, "_");

  return (
    <Container>
      <Label htmlFor={globalName}>{label}</Label>
      <InputBox
        type={type || "text"}
        id={globalName}
        name={globalName}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        isValid={isValid}
        {...props}
      />
      {error && isTouched && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Input;
