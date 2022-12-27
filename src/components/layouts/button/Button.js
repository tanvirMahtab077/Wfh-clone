import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <a
      href="#"
      className={`inline-block cursor-pointer linear duration-300 font-semibold ${className}`}
    >
      {btnText}
    </a>
  );
};

export default Button;
