import { Container, ErrorMessage, InputBox, Label } from "./style";
import PropTypes from "prop-types";

const Input = ({ type, name, label = "", value, onChange, placeholder, error, isTouched, isValid, onBlur, ...props}) => {
  const globalName = label.toLocaleLowerCase().replace(/ /g, "_");

  return (
    <Container>
      <Label htmlFor={globalName}>{label}</Label>
      <InputBox
        type={type || "text"}
        id={globalName}
        name={name || globalName}
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

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  isValid: PropTypes.bool,
  onBlur: PropTypes.func,
};
