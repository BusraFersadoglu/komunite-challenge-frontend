import TodoItem from "../molecules/TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onDelete, onToggle }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
