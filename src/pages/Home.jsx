import React from "react";
import Container from "../components/layout/Container";
import Hero from "../components/features/Hero";
import About from "../components/features/About";
import Benefits from "../components/features/Benefits";
import Navbar from "../components/layout/Navbar";
import Features from "../components/features/Features";
import Pricing from "../components/features/Pricing";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      <Container>
        <Benefits />
        <About />
      </Container>
      <Features />
      <Pricing />
    </div>
  );
}
