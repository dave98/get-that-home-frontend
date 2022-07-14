import { CustomSelectInput, SelectContainer, SelectLabel } from "./style";

const CustomSelect = ({ options, label, variant, name, ...props }) => {
  return (
    <SelectContainer>
      <SelectLabel htmlFor={name}>{label}</SelectLabel>
      <CustomSelectInput id={name} name={name} {...props}>
        {options.map((e) => (
          <option>{e}</option>
        ))}
      </CustomSelectInput>
    </SelectContainer>
  );
};

export default CustomSelect;
