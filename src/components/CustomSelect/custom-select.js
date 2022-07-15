import { CustomSelectInput, SelectContainer, SelectLabel } from "./style";

const CustomSelect = ({ options, label, variant, name, ...props }) => {
  return (
    <SelectContainer variant={variant}>
      {label && <SelectLabel htmlFor={name}>{label}</SelectLabel>}
      <CustomSelectInput id={name} name={name} variant={variant} {...props}>
        {options.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </CustomSelectInput>
    </SelectContainer>
  );
};

export default CustomSelect;
