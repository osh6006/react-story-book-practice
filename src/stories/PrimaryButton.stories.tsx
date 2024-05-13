import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      defaultValue: "icon",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "icon",
    },
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
    onClick: { action: "click", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    theme: "light",
    isDisabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    isDisabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: true,
  },
};
