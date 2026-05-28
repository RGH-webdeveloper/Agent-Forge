import React from "react";
import { Link } from "react-router";
import "./CustomButton.css";
const CustomButton = ({
  bgColor,
  textColor,
  text,
  onClick,
  disabled = false,
  border,
  fontSize,
}) => {
  return (
    <>
      <Link>
        <button
          className="btn btn-success"
          onClick={onClick}
          disabled={disabled}
          style={{
            backgroundColor: bgColor,
            color: textColor,
            border: border,
            borderRadius: "8px",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            fontSize : fontSize
          }}
          onMouseEnter={(e) => {
            if (!disabled) e.target.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            if (!disabled) e.target.style.opacity = "1";
          }}
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default CustomButton;
