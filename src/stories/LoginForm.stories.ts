import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within, expect } from "@storybook/test";
import LoginForm from "../components/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Forms/LoginForm",
  parameters: {
    layout: "centered",
  },
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await expect(emailInput).toBeInTheDocument();

    const passwordInput = canvas.getByTestId("password");
    await expect(passwordInput).toBeInTheDocument();

    // 버튼이 여러개이기 때문에 에러가날 수 있어서 name속성을 이용하여 확실히 로그인
    const loginButton = canvas.getByRole("button", { name: "로그인" });

    // 인풋이 비어있는 상태 이므로 디스에이블드
    await expect(loginButton).toBeDisabled();
  },
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await userEvent.type(emailInput, "test@email.com");

    const passwordInput = canvas.getByTestId("password");
    await userEvent.type(passwordInput, "a-random-password");

    // 버튼이 여러개이기 때문에 에러가날 수 있어서 name속성을 이용하여 확실히 로그인
    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeEnabled();
  },
};
