"use client";

import { FC } from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onEdit, onDelete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onEdit={() => onEdit(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
