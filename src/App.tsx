import { useState } from "react";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Lable from "./components/Lable";
import TagList from "./components/TagList";

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <div className="space-y-10">
      <div>
        <Lable htmlFor="email">이메일</Lable>
        <DefaultTextField
          id="email"
          placeholder="이메일을 입력하세요"
          value=""
          isError={isError}
          errorMessage="이메일을 확인해 주세요"
          iconAlt="delete"
          iconPath="https://res.cloudinary.com/dxesudkxn/image/upload/t_asdfasd/lzxdpssnaoactpwy4tqo.jpg"
          onChange={() => {}}
          onIconClick={() => {}}
        />
      </div>
      <div>
        <Lable htmlFor="address">주소</Lable>
        <DefaultTextField
          id="address"
          placeholder="주소를 입력하세요"
          value=""
          isError={isError}
          errorMessage="주소를 확인해 주세요"
          iconAlt="delete"
          iconPath="https://res.cloudinary.com/dxesudkxn/image/upload/t_asdfasd/lzxdpssnaoactpwy4tqo.jpg"
          onChange={() => {}}
          onIconClick={() => {}}
        />
      </div>
      {/* CLS 에러 발생 (버튼을 눌를 떄 레이아웃이 확 바뀜)*/}
      <button onClick={() => setIsError(!isError)}>에러 토글</button>

      <div className="bg-primary">
        <TagList
          tagList={["ALL", "React", "TypeScript", 1, 2, 3]}
          onTagClick={console.log}
        />
      </div>
    </div>
  );
}

export default App;
