import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}
const Button = styled.button.attrs((props: ButtonProps) => ({
  variant: props.variant ?? "primary",
}))`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary": {
        return props.theme.colors.primary.main;
      }
      case "secondary": {
        return props.theme.colors[`${props.variant}`].main;
      }
    }
  }};
  color: ${(props) => props.theme.colors.white.main};
  box-sizing: content-box;
`;

export { Button };
