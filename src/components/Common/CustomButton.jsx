import React from "react";
import { Link } from "react-router";
import "./CustomButton.css";

const CustomButton = ({
  children,
  border,
  fontSize,
  fontWeight,
  bootstrapClass,
  to,
  variant,
  gap ,
}) => {
  return (
    <Link
      to={to}
      className={`${variant} ${bootstrapClass}`}
      style={{
        borderRadius: "8px",
        fontSize,
        fontWeight,
        border,
        gap,
      }}
    >
      {children}
    </Link>
  );
};

export default CustomButton;