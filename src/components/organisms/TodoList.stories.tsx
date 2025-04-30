import type { Meta, StoryObj } from "@storybook/react";
import TodoList from "./TodoList";

const meta: Meta<typeof TodoList> = {
  title: "Organisms/TodoList",
  component: TodoList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoList>;

export const Default: Story = {
  args: {
    todos: [
      { id: "1", text: "宿題をやる", isDone: false },
      { id: "2", text: "洗濯物をたたむ", isDone: false },
    ],
    onEdit: (id: string) => alert(`編集: ${id}`),
    onDelete: (id: string) => alert(`削除: ${id}`),
  },
};
