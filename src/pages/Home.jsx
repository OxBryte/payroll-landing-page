import React from "react";
import SEO from "../components/SEO";
import Container from "../components/layout/Container";
import Hero from "../components/features/Hero";
import About from "../components/features/About";
import Benefits from "../components/features/Benefits";
import Navbar from "../components/layout/Navbar";
import Features from "../components/features/Features";
import Pricing from "../components/features/Pricing";
import CTA from "../components/features/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  const seoData = {
    title:
      "GLÖC - Blockchain-Powered Crypto Payroll Platform | Instant Global Settlements",
    description:
      "Transform your payroll with GLÖC's blockchain-powered platform. Instant crypto settlements, multi-chain support, and automated tax calculations. Trusted by 500+ companies worldwide.",
    keywords:
      "crypto payroll, blockchain payroll, cryptocurrency payments, global payroll, USDC payroll, USDT payroll, automated payroll, crypto HR, DeFi payroll, cross-border payments",
    url: "https://gloc.pro/",
    image: "https://gloc.com/og-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "GLÖC - Blockchain-Powered Crypto Payroll Platform",
      description:
        "Transform your payroll with GLÖC's blockchain-powered platform. Instant crypto settlements, multi-chain support, and automated tax calculations.",
      url: "https://gloc.pro/",
      mainEntity: {
        "@type": "SoftwareApplication",
        name: "GLÖC",
        description:
          "Blockchain-powered crypto payroll platform for instant global settlements",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free trial available",
        },
      },
    },
  };

  return (
    <div>
      <SEO {...seoData} />
      {/* <Navbar/> */}
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
