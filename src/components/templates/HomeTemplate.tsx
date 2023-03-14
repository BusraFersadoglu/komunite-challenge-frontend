import { useState } from "react";
import TodoInput from "../molecules/TodoInput";
import TodoList from "../organisms/TodoList";
import { Todo } from "../../types/todo";

const HomeTemplate = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: text,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4 w-6/12">
      <h1 className="text-5xl text-center font-bold mb-8">Todo App</h1>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};

export default HomeTemplate;
