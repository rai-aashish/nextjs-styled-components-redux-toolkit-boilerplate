import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { StyledPageLayout } from "./page-layout.style";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <StyledPageLayout>
      <Header />
      {children}
      <Footer />
    </StyledPageLayout>
  );
}
