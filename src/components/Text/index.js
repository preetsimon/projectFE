import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  h2: "sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "font-semibold text-[18px]",
  h4: "text-[16px]",
  h5: "font-bold text-[15.08px]",
  h6: "text-[14px]",
  body1: "text-[13px]",
  body2: "text-[12px]",
  body3: "font-semibold text-[11px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
