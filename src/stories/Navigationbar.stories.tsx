import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "../components/NavigationBar";
import { fn } from "@storybook/test";

const meta = {
  title: "TextFields/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // 컴포넌트를 꾸며줘라 확장자를 tsx로 바꿔야 함
  decorators: [
    (Story) => (
      <div style={{ width: "360px", border: "1px solid red" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "페이지 타이틀",
    },
    showTitle: {
      control: "boolean",
      description: "페이지 이름 표시 여부",
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
    },
  },
  args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
  },
};
