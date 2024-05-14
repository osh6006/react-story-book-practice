import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지 alt 속성",
    },
    iconPath: {
      control: "text",
      description: "이미지 src 속성",
    },
    text: {
      control: "text",
      description: "버튼의 텍스트",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CategoryButton>;
export default meta;
type Story = StoryObj<typeof meta>;

/** svg를 넣는 방법으로는 3가지
 * 1. public 폴더 : /icon.svg
 * 2. assets 폴더 : 리액트 컴포넌트 처럼 import Icon from "../assets/icon.svg"
 * 3. 외부 스토리지 활용하기 : url을 복사하여 넣기
 */

export const Default: Story = {
  args: {
    iconAlt: "icon",
    text: "category",
    iconPath:
      "https://res.cloudinary.com/dxesudkxn/image/upload/v1689598934/fdsvnqxd1gs68ewutpqo.png",
  },
};
