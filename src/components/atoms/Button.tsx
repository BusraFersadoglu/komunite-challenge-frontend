import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button = ({ text, onClick, type = "button", className }: ButtonProps) => {
  return (
    <button
      className={` ${className}` + "px-5 py-2 rounded"}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
