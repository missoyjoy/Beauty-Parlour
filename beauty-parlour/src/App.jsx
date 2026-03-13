import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Admin from "./pages/Admin";


// Individual service pages (directly under /pages)
import Massage from "./pages/Massage";
import HairBeauty from "./pages/HairBeauty";
import Barbershop from "./pages/Barbershop";
import Waxing from "./pages/Waxing";
import Sauna from "./pages/Sauna";
import BodyScrub from "./pages/BodyScrub";
import Pedicure from "./pages/Pedicure";
import Manicure from "./pages/Manicure";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Service pages */}
        <Route path="/massage" element={<Massage />} />
        <Route path="/hair-beauty" element={<HairBeauty />} />
        <Route path="/barbershop" element={<Barbershop />} />
        <Route path="/waxing" element={<Waxing />} />
        <Route path="/sauna" element={<Sauna />} />
        <Route path="/body-scrub" element={<BodyScrub />} />
        <Route path="/pedicure" element={<Pedicure />} />
        <Route path="/manicure" element={<Manicure />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}


