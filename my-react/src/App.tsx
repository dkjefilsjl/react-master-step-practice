import styled, { keyframes } from "styled-components";
import { Ani } from "./prac2-4";
import { ThemePrac } from "./prac2-7";

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

export default App;
