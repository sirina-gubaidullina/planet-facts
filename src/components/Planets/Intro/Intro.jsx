import classes from "./Intro.module.css";
import { motion } from "framer-motion";

const Intro = ({ planetData, currentData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={classes.intro}
    >
      <h1>{planetData.name}</h1>
      <p aria-live="assertive" className={classes.content}>
        {currentData.content}
      </p>
      <div className={classes.source}>
        <p>Source:</p>
        <a href={currentData.source} planetData={planetData}>
          Wikipedia
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
