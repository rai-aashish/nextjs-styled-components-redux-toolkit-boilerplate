import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.dark.main};
  color: ${({ theme }) => theme.colors.white.main};
  padding: 2rem;
`;

export { StyledFooter };
