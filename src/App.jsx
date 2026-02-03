// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SuccessStories from "./pages/SuccessStories";
import BookAppointment from "./pages/BookAppointment";
import Services from "./pages/Services";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success" element={<SuccessStories />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;