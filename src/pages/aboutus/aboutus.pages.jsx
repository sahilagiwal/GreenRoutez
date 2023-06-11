import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>AboutUs</h1>
    </motion.div>
    <div className="card-section">
    <AboutUsCard />
    <AboutUsCard />
    <AboutUsCard />
    <AboutUsCard />
    <AboutUsCard />
    <AboutUsCard />
  </div>
  </>
  );
};

export default AboutUs;
