"use client";

import AddTodoForm from "@/components/molecules/AddTodoForm";
import TodoList from "@/components/organisms/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      isDone: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string) => {
    const newText = prompt("新しいタスク名を入力してください");
    if (newText !== null && newText.trim()) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo
        )
      );
    }
  };

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">タスク管理アプリ</h1>
      <AddTodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
}
