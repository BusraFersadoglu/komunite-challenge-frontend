import React from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      type={type}
      className={`${className}` + " w-full p-2 border border-gray-300"}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
