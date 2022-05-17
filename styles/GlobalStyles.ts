import { createGlobalStyle } from "styled-components";
import { StyledThemeType } from "./styledTheme";

const GlobalStyle = createGlobalStyle<{ theme: StyledThemeType }>`


  html{
    font-size: 62.5%;
  }

  html,body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white};;
  }

  body{
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size:1.5rem;
  }

  //styles
  a{
    color: inherit;
    text-decoration: none;
  }

  li{
    list-style-type: none;
  }

  input,button{
    padding:1rem;
    border: 0.1rem solid #000;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
