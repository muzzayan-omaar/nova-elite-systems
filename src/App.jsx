import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import TechnicalSupport from "./pages/TechnicalSupport";
import BookConsultation from "./pages/BookConsultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/technical-support" element={<TechnicalSupport />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;