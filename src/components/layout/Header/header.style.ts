import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white.main};
`;

const StyledLogo = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
`;

export { StyledLogo, StyledHeader };
