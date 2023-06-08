import { useState } from "react";

import { motion } from "framer-motion";
import "./faqs.styles.css";
const FAQ = () => {
  const [style, setStyle] = useState([
    "panel-hide",
    "panel-hide",
    "panel-hide",
  ]);

  const [sign, setSign] = useState(["+", "+", "+"]);

  const changeStyle = (index) => {
    //  update wether the answer is visible
    const styles = style.map((c, i) => {
      if (i === index) {
        if (style[i] === "panel-hide") {
          return "panel-show";
        } else {
          return "panel-hide";
        }
      } else {
        return style[i];
      }
    });
    setStyle(styles);

    // updata the + or - sign
    const signs = sign.map((c, i) => {
      if (i === index) {
        if (style[i] === "panel-hide") {
          return "-";
        } else {
          return "+";
        }
      } else {
        return sign[i];
      }
    });
    setSign(signs);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <b className="fqa-head">FAQ</b>

      {/* the questeions (container not working) */}

      <motion.div
        className="fqa"
        transition={{ delay: 0.25 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => {
          changeStyle(0);
        }}
      >
        How do I get a ride?<b className="sign">{sign[0]}</b>
      </motion.div>
      <div class={style[0]}>
        <p>Click "Available Rides" find a ride.</p>
      </div>

      <motion.div
        className="fqa"
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => {
          changeStyle(1);
        }}
      >
        How do I share my car?<b className="sign">{sign[1]}</b>
      </motion.div>
      <div class={style[1]}>
        <p>First you will need to log in from the home page.</p>
      </div>

      <motion.div
        className="fqa"
        transition={{ delay: 0.75 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => {
          changeStyle(2);
        }}
      >
        Where do the profits of this app go?<b className="sign">{sign[2]}</b>
      </motion.div>
      <div class={style[2]}>
        <p>The profits go to the Juniata ABD club</p>
      </div>
    </motion.div>
  );
};

export default FAQ;
