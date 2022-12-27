import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ href, linkName, className, linkClass, Arrow, children }) => {
  return (
    <li className={`group relative h-full flex items-center ${className}`}>
      <Link
        className={`linear duration-300 lg:after:h-[2px] after:w-full after:absolute after:bg-black after:linear after:duration-300 after:top-[70px] group-hover:after:top-[50px] after:right-0 after:opacity-0 group-hover:after:opacity-100 ${
          linkClass ? linkClass : "group-hover:text-black"
        }`}
        to={href}
      >
        {linkName}
      </Link>
      {Arrow && (
        <Arrow
          className={
            "linear duration-300 ml-1 text-base group-hover:text-black"
          }
        />
      )}
      {children}
    </li>
  );
};

export default NavItem;
