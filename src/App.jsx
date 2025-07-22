import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <>
      <PerformanceOptimizer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/roadmap" element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
