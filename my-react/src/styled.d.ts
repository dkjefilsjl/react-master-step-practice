import "styled-components";

declare module "styled-components" {
  export interface DefalutTheme {
    //styledcomponents의 기본 테마정의 확장
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
