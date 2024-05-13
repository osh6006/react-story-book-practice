import type { Meta, StoryObj } from "@storybook/react";
import Lable from "../components/Lable";

const meta = {
  title: "Text/Lable",
  component: Lable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "label의 for 속성" },
    children: { control: "text", description: "label의 text" },
  },
} satisfies Meta<typeof Lable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
