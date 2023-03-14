import React from "react";
import { Todo } from "../../types/todo";
import Button from "../atoms/Button";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div
        className={`flex items-center capitalize ${
          todo.isComplete ? "line-through text-gray-500" : ""
        }`}
      >
        <input
          type="checkbox"
          className="form-checkbox h-7 w-7 text-blue-600"
          checked={todo.isComplete}
          onChange={() => onToggle(todo.id)}
        />
        <span className="ml-2 text-3xl ">{todo.text}</span>
      </div>
      <Button
        text="Delete"
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
      />
    </div>
  );
};

export default TodoItem;
