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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import TemplateDetails from "./pages/TemplateDetails";
import WebDevelopment from "./pages/services/web-development";
import AppDevelopment from "./pages/services/app-development";
import CCTVSystems from "./pages/services/CCTVSystems";
import Networking from "./pages/services/Networking";
import SAASApplications from "./pages/services/saas-applications";

import AdminLogin
from "./pages/admin/AdminLogin";

import ProtectedRoute
from "./components/admin/ProtectedRoute";

import ServicePage from "./pages/ServicePage";
import { services } from "./data/servicesData";
import StartProject from "./pages/StartProject";
import Leads from "./pages/admin/Leads";
import Templates from "./pages/admin/Templates";
import TemplatesPage from "./pages/TemplatesPage";



function App() {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">  
          <BrowserRouter>
<Routes>

  {/* =========================
      ADMIN AUTH
  ========================= */}

  <Route
    path="/admin-login"
    element={<AdminLogin />}
  />

  {/* =========================
      PROTECTED ADMIN ROUTES
  ========================= */}

  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/invoice"
    element={
      <ProtectedRoute>
        <Invoice />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/revenue"
    element={
      <ProtectedRoute>
        <Revenue />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/expenses"
    element={
      <ProtectedRoute>
        <Expenses />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/support-tickets"
    element={
      <ProtectedRoute>
        <SupportTickets />
      </ProtectedRoute>
    }
  />

  <Route
    path="/admin/consultations"
    element={
      <ProtectedRoute>
        <Consultations />
      </ProtectedRoute>
    }
  />

  <Route
  path="/admin/leads"
  element={
    <ProtectedRoute>
      <Leads />
    </ProtectedRoute>
  }
/>

  <Route
    path="/admin/templates"
    element={
      <ProtectedRoute>
        <Templates />
      </ProtectedRoute>
    }
  
/>

  {/* =========================
      FRONTEND ROUTES
  ========================= */}

  <Route
    path="/"
    element={<Home />}
  />
  
<Route
  path="/templates/:slug"
  element={<TemplateDetails />}
/>

  <Route
    path="/contact"
    element={<Contact />}
  />

  <Route
    path="/pricing"
    element={<Pricing />}
  />

  <Route
    path="/templates"
    element={<TemplatesPage />}
  />

  <Route
    path="/technical-support"
    element={<TechnicalSupport />}
  />

  <Route
    path="/book-consultation"
    element={<BookConsultation />}
  />

  <Route
    path="/about"
    element={<About />}
  />

  <Route
    path="/industries"
    element={<Industries />}
  />

  <Route
    path="/blog"
    element={<Blog />}
  />

  <Route
    path="/privacy-policy"
    element={<PrivacyPolicy />}
  />

  <Route
    path="/terms-of-service"
    element={<TermsOfService />}
  />

  <Route
    path="/refund-policy"
    element={<RefundPolicy />}
  />

  <Route
    path="/start-project"
    element={<StartProject />}
  />

  <Route
    path="/services/web-development"
    element={<WebDevelopment />}
  />

  <Route
    path="/services/app-development"
    element={<AppDevelopment />}
  />

  <Route
    path="/services/cctv-systems"
    element={<CCTVSystems />}
  />

  <Route
    path="/services/networking"
    element={<Networking />}
  />

  <Route
    path="/services/saas-applications"
    element={<SAASApplications />}
  />



</Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;