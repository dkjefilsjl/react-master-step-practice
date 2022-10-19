import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

/*
theme.ts 파일로 이동

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};*/
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* 여기서 theme만 변경해주면, 밖의 모든 theme사용 컴포넌트 값들이 한번에 변경될 수 있어 편리함!!
      단, 해당 테마들이 같은 property name들을 가지고 있어야함!
      예시의 darkTheme과 lightTheme이 textColor와 backgroundColor 두 가지를 똑같이 가지고 있는 것 처럼!!*/}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

/*
 <typescript 개념!!>
 protection은 코드가 발동하기 전에 일어난다

 1. protection을 위해 쓴 typescript 부분
 -> const plus = (a:number, b:number) => a + b;

 2. 별 문제가 없는 것 같으면 평범한 js코드를 return.
 -> const plus = (a, b) -> a + b;
 */

/* <ts와 tsx!!>
  ts => typescript에서 사용
  tsx => typescript와 react에서 사용
 */
