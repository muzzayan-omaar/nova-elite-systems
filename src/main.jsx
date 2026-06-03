import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import React from "react";

import App from "./App.jsx";

import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "sonner";
import WhatsAppButton from "./components/WhatsAppButton";

import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <App />
        <WhatsAppButton />
        <Toaster />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);