import React from "react";

const DropdownBox = ({ className, children }) => {
  return (
    <div
      className={`linear duration-300 hidden group-hover:block animate-[popDownY_.4s_ease_1] text-black absolute top-[5vw] left-[-1vw] bg-primary/20 w-[260%] py-3 px-4 ${className}`}
    >
      <ul>{children}</ul>
    </div>
  );
};

export default DropdownBox;
