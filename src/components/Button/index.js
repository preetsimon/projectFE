import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  icbRoundedBorder10: "rounded-radius10",
};
const variants = {
  FillBluegray50: "bg-bluegray_50 text-gray_900",
  icbFillBluegray50: "bg-bluegray_50",
};
const sizes = { sm: "pl-[9px] py-[9px]", smIcn: "p-[12px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10", "icbRoundedBorder10"]),
  variant: PropTypes.oneOf(["FillBluegray50", "icbFillBluegray50"]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbRoundedBorder10",
  variant: "icbFillBluegray50",
  size: "smIcn",
};

export { Button };
