import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "追加",
    className: "bg-blue-500 text-white",
  },
};

export const Secondary: Story = {
  args: {
    children: "編集",
    className: "bg-gray-300 text-black",
  },
};

export const Danger: Story = {
  args: {
    children: "削除",
    className: "bg-red-500 text-white",
  },
};
