import classes from "./Image.module.css";
import { motion } from "framer-motion";

const Image = ({ currentData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className={classes["planet-image-container"]}
    >
      <img src={currentData.image} className={classes["planet-image"]} />
      <img
        className={classes.geo}
        src={currentData.geo ? currentData.geo : false}
      />
    </motion.div>
  );
};

export default Image;
