import React from "react";

const sizeClasses = {
  txtLexendBold14: "font-bold font-lexend",
  txtLexendRegular14Gray900: "font-lexend font-normal",
  txtLexendBold32: "font-bold font-lexend",
  txtLexendRegular14: "font-lexend font-normal",
  txtLexendMedium16: "font-lexend font-medium",
  txtLexendRegular16: "font-lexend font-normal",
  txtLexendMedium14: "font-lexend font-medium",
  txtLexendBold14Gray900: "font-bold font-lexend",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
