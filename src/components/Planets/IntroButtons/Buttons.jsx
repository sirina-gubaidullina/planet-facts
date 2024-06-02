import classes from "./Buttons.module.css";
import { motion } from "framer-motion";

const Buttons = ({ planetData, handleClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={classes["intro-buttons"]}
    >
      <button
        data-type="overview"
        planetData={planetData}
        onClick={handleClick}
      >
        <span>01</span>Overview
      </button>
      <button
        data-type="structure"
        planetData={planetData}
        onClick={handleClick}
      >
        <span>02</span>Structure
      </button>
      <button data-type="geology" planetData={planetData} onClick={handleClick}>
        <span>03</span>Surface Geology
      </button>
    </motion.div>
  );
};

export default Buttons;
