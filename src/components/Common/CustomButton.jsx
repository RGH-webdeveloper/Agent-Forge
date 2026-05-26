import React from "react";
import { Link } from "react-router";

const CustomButton = ({
  bgColor,
  textColor,
  text,
  onClick,
  disabled  = false,
  border,
  fontSize,
}) => {
  return (
    <>
    <Link>
      <button
       className="btn btn-success"
        onClick={onClick}
        disable={disabled}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          padding: "10px 30px",
          border: border,
          borderRadius: "8px",
          cursor: disabled  ? "not-allowed" : "pointer",
          fontSize: fontSize,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (!disabled ) e.target.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          if (!disabled ) e.target.style.opacity = "1";
        }}
        >
        {text}
      </button>
        </Link>
    </>
  );
};

export default CustomButton;
