import styled, { keyframes } from "styled-components";

//styl
const gradientAnimation = keyframes`
    0%{background-position:66% 0%}
    50%{background-position:35% 100%}
    100%{background-position:66% 0%}
`;

const StyledTitle = styled.h1`
  background-clip: text;
  text-align: center;
  background: linear-gradient(
    13deg,
    #e8bc30,
    #30e857,
    #30dee8,
    #6d30e8,
    #c630e8
  );
  background-size: 1000% 1000%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  -webkit-animation: ${gradientAnimation} 3s ease infinite;
  -moz-animation: ${gradientAnimation} 3s ease infinite;
  animation: ${gradientAnimation} 3s ease infinite;
`;

export default StyledTitle;
