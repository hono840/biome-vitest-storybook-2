"use client";

import { FC } from "react";
import Button from "../atoms/Button";


type TodoItemProps = {
  text: string;
  onEdit: () => void;
  onDelete: () => void;
};

const TodoItem: FC<TodoItemProps> = ({ text, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center border p-3 rounded mb-2">
      <span className="flex-1">{text}</span>
      <div className="flex gap-2 ml-4">
        <Button
          className="bg-gray-300 text-black hover:bg-gray-400"
          onClick={onEdit}
        >
          編集
        </Button>
        <Button className="bg-red-500 hover:bg-red-600" onClick={onDelete}>
          削除
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
