import { CustomizableButton } from "./style";
import PropTypes from "prop-types";

const Button = ({
  children,
  lefticon,
  righticon,
  type,
  size,
  onClick,
  ...others
}) => {
  return (
    <>
      <CustomizableButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type={type}
        lefticon={lefticon}
        righticon={righticon}
        size={size}
        onClick={onClick}
        {...others}
      >
        {lefticon && lefticon}
        {children}
        {righticon && righticon}
      </CustomizableButton>
    </>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  lefticon: PropTypes.object,
  righticon: PropTypes.object,
  type: PropTypes.oneOf(["fill", "line", "transparent"]),
  size: PropTypes.oneOf(["sm", "rg", "lg"]),
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
