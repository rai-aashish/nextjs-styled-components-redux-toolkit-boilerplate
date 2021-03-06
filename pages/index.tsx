import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "src/components/_bits/Containers";
import CounterSection from "src/components/CounterSection";
import PageLayout from "src/components/layout/PageLayout";
import StyledTitle from "src/components/home page/StyledTitle";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>next js boiler plate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Container variant="lg">
          <CounterSection />
          <StyledTitle>
            Next js + Typescript + Styled Components + Redux toolkit + husky
          </StyledTitle>
        </Container>
      </PageLayout>
    </div>
  );
};

export default Home;
