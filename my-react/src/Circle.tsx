import { useState } from "react";
import styled from "styled-components";
/*interface : object 설명해주는 것. object가 어떤식으로 보일지.*/
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function CircleCompo({
  bgColor,
  borderColor,
  text = "default text" /*text에 default 값 주는 법!*/,
}: CircleProps) {
  const [counter, setCounter] = useState(0);
  /*props:CircleProps라 적고, props.bgColor로 사용해도 되지만,
  보통 {bgColor}:CircleProps를 더 많이 사용함*/

  //한쪽만 required인 경우 없을 경우를 대비해서 초기값을 설정해 줘야함.
  return (
    <>
      {/* ??를 통해 초기값을 정해줄 수 있음!*/}
      <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
        {text}
      </Container>
      {/*이렇게도 가능*/}
      <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
    </>
  );
}

export default CircleCompo;
