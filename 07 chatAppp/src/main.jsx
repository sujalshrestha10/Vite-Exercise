import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./fornavComponents/Navbar.jsx";
import Gallery from "./useStatehook/Gallery.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Gallery />
    </BrowserRouter>
  </StrictMode>
);
