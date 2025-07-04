import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/gloc-logo.svg",
        "/time.svg",
        "/error.svg",
        "/data.svg",
        "/crypto.svg",
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Optimize fonts loading
    const optimizeFonts = () => {
      if ("fonts" in document) {
        Promise.all([
          document.fonts.load('1em "Bricolage Grotesque Variable"'),
          document.fonts.load('1em "Inter Variable"'),
        ]).then(() => {
          document.documentElement.classList.add("fonts-loaded");
        });
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    lazyLoadImages();
    optimizeFonts();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
