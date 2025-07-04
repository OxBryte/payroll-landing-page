import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Supports weights 100-900
import "@fontsource-variable/inter";
// Supports weights 200-800
import "@fontsource-variable/bricolage-grotesque";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>
);
