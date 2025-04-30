import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "タスクを入力",
    onChange: () => {}, // Storybook ではダミー関数でOK
  },
};

export const WithText: Story = {
  args: {
    value: "既存のタスク内容",
    placeholder: "タスクを入力",
    onChange: () => {},
  },
};
