import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
    border-radius: 100px;
  }
`;

const ani_two = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

/*span 버전*/
const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${ani_two} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${ani_two} 1s linear infinite;
  span {
    //이렇게 <Box> 컴포넌트 안에있는 span에 접근할 수 있음..!! 정말 놀라운 일
    font-size: 36px;
    &:hover {
      //hover은 마우스를 올렸을 때의 동작을 가리킴!
      // span:hover과 똑같은 기능! &가 상위 여기서는 span을 가리킴!
      font-size: 50px;
    }
    &:active {
      // 클릭을 한 상태. 반대는 inactive
      opacity: 0;
    }
  }
`;

const Emogi = styled.span`
  font-size: 36px;
`;
/*Emoji component 버전*/
const Box_two = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${ani_two} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${ani_two} 1s linear infinite;
  ${Emogi} {
    //span에 접근했던 것 처럼 스타일드 컴포넌트에도 접근 가능!
    //아까 span의 경우 우리가 as="p"처럼 바꿔주면 적용이 안됐는데
    //이렇게 스타일드 컴포넌트로 할 경우, as로 바꿔도 잘 적용이 된다는 장점이 있음!!
    &:hover {
      //hover은 마우스를 올렸을 때의 동작을 가리킴!
      //hover하나만 필요한 경우 ${Emogi}:hover{}로 줄이기도 가능~!
      font-size: 50px;
    }
    &:active {
      // 클릭을 한 상태. 반대는 inactive
      opacity: 0;
    }
  }
`;

const Emogi_two = styled.span`
  font-size: 36px;
  /*또는 여기에 hover을 적어도 아무 상관 없움!*/
  &:hover {
    font-size: 50px;
  }
  /*둘의 차이점은 여기에 적으면 모든 Emogi_two에 적용되고,
  상위 컴포넌트인 Box안에 적으면 Box를 상위에 가지고 있는 Emogi_two에만 적용된다는 점이 다름!
  if문 느낌~~?*/
`;

export const Ani = () => {
  return (
    <>
      <Box>
        <Emogi>😉</Emogi>{" "}
        {/*이런식으로 모든걸 styledcomponent처리해 줄 필요 없음!
        이렇게 있어도 상관 없다!*/}
      </Box>
      {/*박스 밖에 Emogi가 있는건 당연히 Emogi 코드가 적용안됨~!*/}
    </>
  );
};
