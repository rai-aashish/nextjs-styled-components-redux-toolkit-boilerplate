import React from "react";
import { StyledHeader, StyledLogo } from "./header.style";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import withAppTheme from "src/hoc/withAppTheme";
import { Container } from "src/components/_bits/Containers";
import { Button } from "src/components/_bits/Buttons";

type Props = {
  toggleTheme: ActionCreatorWithoutPayload;
};

function Header({ toggleTheme }: Props) {
  return (
    <StyledHeader>
      <Container variant="lg">
        <StyledLogo>Brand</StyledLogo>
        <Button variant="secondary" onClick={() => toggleTheme()}>
          Change Theme
        </Button>
      </Container>
    </StyledHeader>
  );
}

export default withAppTheme(Header);
