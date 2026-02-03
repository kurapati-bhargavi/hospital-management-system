import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import CreateAccount from "./pages/CreateAccount";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";
import BookSlot from "./pages/BookSlot";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/book-slot" element={<BookSlot />} />   {/* ✅ Now defined */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </main>
      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;