import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import TechnicalSupport from "./pages/TechnicalSupport";
import BookConsultation from "./pages/BookConsultation";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import Invoice from "./pages/admin/Invoice";
import Revenue from "./pages/admin/Revenue";
import Expenses from "./pages/admin/Expenses";
import SupportTickets from "./pages/admin/SupportTickets";
import Consultations from "./pages/admin/Consultations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/invoice" element={<Invoice />} />
        <Route path="/admin/revenue" element={<Revenue />} />
        <Route path="/admin/expenses" element={<Expenses />} />
        <Route path="/admin/support-tickets" element={<SupportTickets />} />
        <Route path="/admin/consultations" element={<Consultations />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/technical-support" element={<TechnicalSupport />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;