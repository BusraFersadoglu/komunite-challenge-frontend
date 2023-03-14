import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type TodoInputProps = {
  onAdd: (text: string) => void;
};

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex mb-4">
      <Input
        type="text"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        className="flex-1 mr-2"
      />
      <Button
        text="Add"
        onClick={handleAddClick}
        className="text-white bg-purple-700 "
      />
    </div>
  );
};

export default TodoInput;
