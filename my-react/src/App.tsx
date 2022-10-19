import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { getConstantValue } from "typescript";
import CircleCompo from "./Circle";
import { Ani } from "./prac2-4";
import { ThemePrac } from "./prac2-7";

/*2장 styled-component*/
const animation = keyframes`
  from {
    transform:rotate();
  }
`;
const Father = styled.div`
  display: flex;
`;

interface props {
  bgColor: string;
}

const Box = styled.div`
  background-color: ${(props: props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Text = styled.span`
  color: white;
`;

/*잘 쓰이진 않지만 유용하다!*/
//attrs로 input에 required나 minLength를 주며 제한도 줄 수 있움!!
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
/*2장 styled-component

function App() {
  return (
    <Father as="header">
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log out
      </Btn>
      <Input />
      <Ani />
      <ThemePrac />
    </Father>
  );
}
*/

/*3장 typescript*/

function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e; // e에 있는 currentTarget의 value값 value 변수에 얻기
    setValue(value);
  };
  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>push</button>
      </form>
      {/*<CircleCompo bgColor={"tomato"} />*/}
      <ThemePrac></ThemePrac>
    </div>
  );
}
export default App;
