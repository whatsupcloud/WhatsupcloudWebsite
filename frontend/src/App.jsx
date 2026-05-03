import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";
import LeadPopup from "./components/LeadPopup.jsx";
import StickyCTA from "./components/StickyCTA.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Internship from "./pages/Internship.jsx";
import Workshop from "./pages/Workshop.jsx";
import Ebook from "./pages/Ebook.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <LeadPopup />
      <StickyCTA />
    </div>
  );
}
