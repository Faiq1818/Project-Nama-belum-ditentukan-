import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/heroSection";
import "./styles/navbar.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <HeroSection />
  </StrictMode>
);
