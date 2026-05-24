import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "sonner";
import WhatsAppButton from "./components/WhatsAppButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <WhatsAppButton />

      <Toaster />
    </LanguageProvider>
  </StrictMode>
);