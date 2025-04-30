"use client";

import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type AddTodoFormProps = {
  onAdd: (text: string) => void;
};

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力"
        className="flex-1"
      />
      <Button type="submit">追加</Button>
    </form>
  );
};

export default AddTodoForm;
