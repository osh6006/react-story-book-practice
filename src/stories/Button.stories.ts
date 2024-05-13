import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/Button";

// 버튼이라는 스토리의 메타 정보를 나타냄
// 컴포넌트는 구지 스토리에 있을 필요가 없다. 똑같이 잘 나옴
// 우리의 컴포넌트는 이런 스토리를 가지고 있어야 해

const meta = {
  // 경로를 나타냄 Basic/Button 으로 해도 상관 없음
  title: "Example/Button",

  // 내가 이 컴포넌트의 버튼을 선언 했다.
  component: Button,

  // 스토리 북에서 컴포넌트를 어디에 위치 시킬 것인지 left center right 안건드려도 됨
  parameters: {
    layout: "centered",
  },
  // 안건드려도 됨
  tags: ["autodocs"],

  // 스토리북에서 props를 설명하는데 쓰임 타입스크립트이기 떄문에 버튼의 props만 들어간다.
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    primary: { control: "boolean", description: "버튼의 타입" },
    backgroundColor: { control: "color", description: "버튼의 배경 길이" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>; // 버튼이 받는 프롭 정의

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
