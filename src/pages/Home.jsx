import React from "react";
import Container from "../components/layout/Container";
import Hero from "../components/features/Hero";
import About from "../components/features/About";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <About />
      </Container>
    </div>
  );
}
