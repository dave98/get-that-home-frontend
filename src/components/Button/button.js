import { CustomizableButton } from "./style";
import PropTypes from "prop-types";
import { useState } from "react";

const Button = ({
  children,
  lefticon,
  righticon,
  type,
  size,
  onClick,
  ...others
}) => {
  const [isOver, setIsOver] = useState(false);
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <CustomizableButton
        animate={
          isOver ? { scale: 1.05 } : isClick ? { scale: 0.9 } : { scale: 1 }
        }
        type={type}
        lefticon={lefticon}
        righticon={righticon}
        size={size}
        onClick={() => {
          setIsClick(true);
          setIsOver(false);
        }}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
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
