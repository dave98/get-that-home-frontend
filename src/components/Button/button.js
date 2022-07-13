import { CustomizableButton } from "./style";
import PropTypes from "prop-types";

const Button = ({
  children,
  lefticon,
  righticon,
  buttontype,
  size,
  margin,
  onClick,
  ...others
}) => {
  return (
    <>
      <CustomizableButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        buttontype={buttontype}
        lefticon={lefticon}
        righticon={righticon}
        size={size}
        margin={margin}
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
  buttontype: PropTypes.oneOf(["fill", "line", "transparent"]),
  size: PropTypes.oneOf(["sm", "rg", "lg"]),
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  margin: PropTypes.number,
};
