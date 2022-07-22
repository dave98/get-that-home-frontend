import {
  CustomErrorMessage,
  ErrorContainer,
  RadioInputContainer,
  RadioInputInput,
  RadioInputLabel,
  RadioInputMainContainer,
  RadioInputMainLabel,
  RadioInputSpan,
} from "./styles";

export default function CustomRadio({
  mainLabel,
  name,
  labels = [],
  value,
  onChange,
  direction = "row",
  error,
  errorDirection = "column",
  isTouched,
  isValid,
  onBlur,
  ...props
}) {
  const globalName = name.toLocaleLowerCase().replace(/ /g, "_");

  return (
    <ErrorContainer errorDirection={errorDirection}>
      <RadioInputMainContainer>
        {mainLabel && <RadioInputMainLabel>{mainLabel}</RadioInputMainLabel>}
        <RadioInputContainer direction={direction}>
          {labels.map((l, index) => {
            return (
              <RadioInputLabel key={index}>
                <RadioInputInput
                  type="radio"
                  id={globalName}
                  name={name}
                  value={l.toLowerCase()}
                  onBlur={onBlur}
                  onChange={onChange}
                  checked={l.toLowerCase() === value}
                  {...props}
                />
                <RadioInputSpan />
                {l}
              </RadioInputLabel>
            );
          })}
        </RadioInputContainer>
      </RadioInputMainContainer>
      {error && <CustomErrorMessage>{error}</CustomErrorMessage>}
    </ErrorContainer>
  );
}
