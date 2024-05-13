import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "../components/IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지 alt 속성",
      defaultValue: "icon",
    },
    iconPath: { control: "text", description: "이미지와 경로" },
    onClick: { action: "click", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** svg를 넣는 방법으로는 3가지
 * 1. public 폴더 : /icon.svg
 * 2. assets 폴더 : 리액트 컴포넌트 처럼 import Icon from "../assets/icon.svg"
 * 3. 외부 스토리지 활용하기 : url을 복사하여 넣기
 */

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath:
      "https://res.cloudinary.com/dxesudkxn/image/upload/t_asdfasd/lzxdpssnaoactpwy4tqo.jpg",
  },
};
