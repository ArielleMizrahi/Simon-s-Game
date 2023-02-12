import React from "react";

interface ButtonProps {
  color: string;
  handleClick: () => void;
}


const Button: React.FC<ButtonProps> = ({ color, handleClick }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "10px",
        cursor: "pointer"
      }}
      onClick={handleClick}
    />
  );
};

export default Button;
