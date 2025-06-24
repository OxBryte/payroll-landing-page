import React from "react";
import Container from "../components/layout/Container";
import Hero from "../components/features/Hero";
import About from "../components/features/About";
import Benefits from "../components/features/Benefits";

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <Benefits />
        <About />
      </Container>
    </div>
  );
}
