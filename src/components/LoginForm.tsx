import { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Lable from "./Lable";
import PrimaryButton from "./PrimaryButton";

export interface ILoginFormProps {}

export default function LoginForm() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Lable htmlFor="email">이메일</Lable>
      <DefaultTextField
        id={"email"}
        errorMessage={"이메일을 확인해 주세요"}
        iconPath={
          "https://res.cloudinary.com/dxesudkxn/image/upload/v1715605034/coo171f6vvov0yqatuum.svg"
        }
        iconAlt={"delete"}
        value={email}
        onChange={(e) => setEamil(e.target.value)}
        onIconClick={() => setEamil("")}
        placeholder={"이메일을 입력해 주세요"}
        isError={false}
      />
      <Lable htmlFor="password">비밀번호</Lable>
      <DefaultTextField
        id={"password"}
        errorMessage={"비밀번호를 확인해 주세요"}
        iconPath={
          "https://res.cloudinary.com/dxesudkxn/image/upload/v1715605034/coo171f6vvov0yqatuum.svg"
        }
        iconAlt={"delete"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onIconClick={() => setPassword("")}
        placeholder={"이메일을 입력해 주세요"}
        isError={false}
      />
      <PrimaryButton
        theme="dark"
        onClick={() => {}}
        isDisabled={!email || !password}
      >
        로그인
      </PrimaryButton>
    </div>
  );
}
