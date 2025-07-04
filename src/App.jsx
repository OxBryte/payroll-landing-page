import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Home from "./pages/Home";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

function App() {
  return (
    <HelmetProvider>
      <PerformanceOptimizer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
