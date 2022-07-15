import { CustomInputBox, CustomInputContainer } from "./styles";

export const CustomInput = ({ name, value, onChange, placeholder, icon }) => {
  const globalName = name.toLocaleLowerCase().replace(/ /g, "_");

  return (
    <CustomInputContainer>
      {icon && icon}
      <CustomInputBox
        type="text"
        id={globalName}
        name={globalName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </CustomInputContainer>
  );
};
