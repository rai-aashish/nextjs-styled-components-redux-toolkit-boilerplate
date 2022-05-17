import styled from "styled-components";

interface ContainerProps {
  fluid: true | false;
  variant: "xs" | "sm" | "md" | "lg" | "xl";
}

const Container = styled.div.attrs((props: ContainerProps) => ({
  fluid: props.fluid,
  variant: props.variant,
}))`
  max-width: ${(props) =>
    !props.fluid ? `${props.theme.breakpoints[`${props.variant}`]}px` : "100%"};
  margin: auto;
`;

export { Container };
