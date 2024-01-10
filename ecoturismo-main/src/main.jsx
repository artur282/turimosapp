import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Pages/Contacto.jsx";
import Empresa from "./Pages/Empresa.jsx";
import NotFound from "./components/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
