import {
  CustomErrorMessage,
  CustomInputBox,
  CustomInputContainer,
  CustomInputLabel,
  ErrorContainer,
  SurrounderInputContainer,
} from "./styles";

export const CustomInput = ({
  type = "text",
  name,
  label = "",
  value,
  onChange,
  placeholder,
  icon,
  error,
  errorDirection = "column",
  isTouched,
  isValid,
  onBlur,
  ...props
}) => {
  const globalName = label.toLocaleLowerCase().replace(/ /g, "_");

  return (
    <ErrorContainer errorDirection={errorDirection}>
      <SurrounderInputContainer type={type} errorDirection={errorDirection}>
        {label && <CustomInputLabel>{label}</CustomInputLabel>}
        <CustomInputContainer>
          {icon && icon}
          <CustomInputBox
            type={type}
            id={globalName}
            name={name || globalName}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            isValid={isValid}
            accept="image/png, image/jpeg"
            multiple
            {...props}
          />
        </CustomInputContainer>
      </SurrounderInputContainer>
      {error && isTouched && <CustomErrorMessage>{error}</CustomErrorMessage>}
    </ErrorContainer>
  );
};
