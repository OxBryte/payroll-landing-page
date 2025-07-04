import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import Hero from "../components/features/Hero";
import About from "../components/features/About";
import Benefits from "../components/features/Benefits";
import Navbar from "../components/layout/Navbar";
import Features from "../components/features/Features";
import Pricing from "../components/features/Pricing";
import CTA from "../components/features/CTA";
import Footer from "../components/layout/Footer";
import { applySEOConfig } from "../utils/seoUtils";

export default function Home() {
  useEffect(() => {
    // Apply SEO configuration for home page
    applySEOConfig("home");
  }, []);

  return (
    <div>
      <Hero />
      <Container>
        <Benefits />
        {/* <About /> */}
      </Container>
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
