import React from "react";
import HomePage from "../pages/home/home.page";
import AboutUs from "../pages/aboutus/aboutus.pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Rides from "../pages/rides/rides.page";
import LoginPage from "../pages/login/login.page";
import SignUp from "../pages/signup/signup.page";
import FAQS from "../pages/faqs/faqs.page";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQS />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
