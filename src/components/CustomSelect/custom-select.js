import { CustomSelectInput, SelectContainer, SelectLabel } from "./style";

const CustomSelect = ({
  options,
  variant,
  name,
  label,
  value,
  onChange,
  onBlur,
  width,
  ...props
}) => {
  return (
    <SelectContainer variant={variant} width={width}>
      {label && <SelectLabel htmlFor={name}>{label}</SelectLabel>}

      <CustomSelectInput
        variant={variant}
        id={name}
        name={name}
        value={value || ""}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
      >
        {options.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </CustomSelectInput>
    </SelectContainer>
  );
};

export default CustomSelect;
