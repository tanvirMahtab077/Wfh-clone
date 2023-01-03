import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, btnText }) => {
    return (
        <Link
            to="make-a-donation"
            className={`inline-block cursor-pointer linear duration-300 font-semibold ${className}`}
        >
            {btnText}
        </Link>
    );
};

export default Button;