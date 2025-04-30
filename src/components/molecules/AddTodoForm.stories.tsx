import type { Meta, StoryObj } from "@storybook/react";
import AddTodoForm from "./AddTodoForm";

const meta: Meta<typeof AddTodoForm> = {
  title: "Molecules/AddTodoForm",
  component: AddTodoForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddTodoForm>;

export const Default: Story = {
  args: {
    onAdd: (text: string) => {
      alert(`タスクを追加: ${text}`);
    },
  },
};
