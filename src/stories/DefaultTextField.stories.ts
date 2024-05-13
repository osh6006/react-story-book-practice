import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";
import { fn } from "@storybook/test";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: { control: "text", description: "아이콘 이미지의 alt 속성" },
    iconPath: { control: "text", description: "아이콘 이미지의 경로" },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
    },
    id: {
      control: "text",
      description: "텍스트 필드의 id",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
    },
    errorMessage: {
      control: "text",
      description: "에러 메세지의 값",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 정보",
    },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    onIconClick: {
      action: "clicked",
      description: "텍스트 필드 값 변경 이벤트",
    },
  },
  args: { onIconClick: fn(), onChange: fn() },
} satisfies Meta<typeof DefaultTextField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "",
    iconAlt: "icon",
    iconPath:
      "https://res.cloudinary.com/dxesudkxn/image/upload/t_asdfasd/lzxdpssnaoactpwy4tqo.jpg",
    placeholder: "텍스트를 입력해 주세요",
    value: "",
    isError: false,
    errorMessage: "텍스트를 확인해 주세요",
  },
};
