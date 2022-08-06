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
  type = "button",
  animationOnAppear = false,
  width="auto",
  ...others
}) => {
  return (
    <>
      <CustomizableButton
        initial={{scale: animationOnAppear ? 0 : 1}}
        animate={{scale: 1}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        buttontype={buttontype}
        lefticon={lefticon}
        righticon={righticon}
        size={size}
        margin={margin}
        onClick={onClick}
        type={type}
        width={width}
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
