// SEO Utility Functions

export const updatePageTitle = (title) => {
  if (title) {
    document.title = title;
  }
};

export const updateMetaDescription = (description) => {
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description || "";
};

export const updateCanonicalUrl = (url) => {
  if (url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
};

export const updateOpenGraphTags = (data) => {
  const { title, description, type = "website", url, image } = data;

  const updateOGTag = (property, content) => {
    if (content) {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    }
  };

  updateOGTag("og:title", title);
  updateOGTag("og:description", description);
  updateOGTag("og:type", type);
  updateOGTag("og:url", url);
  updateOGTag("og:image", image);
};

export const updateTwitterTags = (data) => {
  const { title, description, url, image } = data;

  const updateTwitterTag = (name, content) => {
    if (content) {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement("meta");
        twitterTag.name = name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = content;
    }
  };

  updateTwitterTag("twitter:title", title);
  updateTwitterTag("twitter:description", description);
  updateTwitterTag("twitter:url", url);
  updateTwitterTag("twitter:image", image);
};

export const addStructuredData = (structuredData) => {
  if (structuredData) {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => {
      if (script.textContent.includes('"@context":"https://schema.org"')) {
        script.remove();
      }
    });

    // Add new structured data
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
};

// Predefined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title:
      "GLÖC - Blockchain-Powered Crypto Payroll Platform | Instant Global Settlements",
    description:
      "Transform your payroll with GLÖC's blockchain-powered platform. Instant crypto settlements, multi-chain support, and automated tax calculations. Trusted by 500+ companies worldwide.",
    keywords:
      "crypto payroll, blockchain payroll, cryptocurrency payments, global payroll, USDC payroll, USDT payroll, automated payroll, crypto HR, DeFi payroll, cross-border payments",
    url: "https://gloc.pro/",
    image: "https://gloc.pro/og-image.jpg",
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
  },
  features: {
    title: "GLÖC Features - Multi-Chain Crypto Payroll & Instant Settlements",
    description:
      "Discover GLÖC's powerful features: multi-chain support, instant crypto settlements, automated tax calculations, and global payroll solutions.",
    keywords:
      "crypto payroll features, multi-chain payroll, instant settlements, automated payroll, blockchain features",
    url: "https://gloc.pro/features",
    image: "https://gloc.pro/features-og.jpg",
  },
  pricing: {
    title: "GLÖC Pricing - Transparent Crypto Payroll Solutions",
    description:
      "Simple, transparent pricing for GLÖC's crypto payroll platform. Scale from 5 to 5,000 employees with flexible plans.",
    keywords:
      "crypto payroll pricing, payroll costs, blockchain payroll pricing, affordable payroll",
    url: "https://gloc.pro/pricing",
    image: "https://gloc.pro/pricing-og.jpg",
  },
};

// Function to apply SEO config
export const applySEOConfig = (configName) => {
  const config = seoConfigs[configName];
  if (config) {
    updatePageTitle(config.title);
    updateMetaDescription(config.description);
    updateCanonicalUrl(config.url);
    updateOpenGraphTags(config);
    updateTwitterTags(config);
    if (config.structuredData) {
      addStructuredData(config.structuredData);
    }
  }
};
