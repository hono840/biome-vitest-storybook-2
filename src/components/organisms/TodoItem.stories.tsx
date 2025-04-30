import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  title: "Organisms/TodoItem",
  component: TodoItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    text: "買い物に行く",
    onEdit: ()=> alert("編集ボタンがクリックされました"),
    onDelete: ()=> alert("削除ボタンがクリックされました"), 
  },
};
