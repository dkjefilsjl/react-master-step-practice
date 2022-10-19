import styled from "styled-components"; //typescript로 만들어진 코드가 아닌 js이기 때문에, 설치할 경우 npm install @types/styled-components를 해줘야 오류가 나지 않음!
/*여기서 @types란?
 : 아주 큰 github repository + 모든 유명한 npm 라이브러리를 가지고 있는 저장소
 -> type definition: styled-component의 소스를 보고 typescript에게 해 줄 설명을 만들어 냄
 typescript를 지원하지 않던걸 사용할 수 있도록 많은 사람들이 모여 만들어냄!! 멋쟁이 분들임.
*/
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

interface DummyProps {
  text: string;
  otherThingHere?: boolean;
}

function Dummy({ text, otherThingHere = false }: DummyProps) {
  return <h1>{text}</h1>;
}

export const ThemePrac = () => {
  return (
    <>
      <Wrapper>
        <Title>Hi</Title>
        <Dummy text="hello" otherThingHere></Dummy>
        {/*
        값을 안넘기고 otherThingHere처럼 이렇게만 적혀있으면
        otherThingHere = {true}라는 값을 준 것과 같음!! 디폴트값이 아니라 true라는점~!
        */}
      </Wrapper>
    </>
  );
};
