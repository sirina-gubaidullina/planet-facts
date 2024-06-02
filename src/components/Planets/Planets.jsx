import Image from "./Images/Image";
import Intro from "./Intro/Intro";
import Buttons from "./IntroButtons/Buttons";
import Info from "./PlanetInfo/Info";
import classes from "./Planets.module.css";
import dataChanging from "./ReplaceInfo";
import { motion } from "framer-motion";

const Planets = ({ planetData }) => {
  const [handleClick, currentData] = dataChanging(planetData);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={classes.section}
    >
      <div className={classes.planet}>
        <Buttons handleClick={handleClick} />
        <Image currentData={currentData} planetData={planetData} />
        <Intro planetData={planetData} currentData={currentData} />
        <Info planetData={planetData} />
      </div>
    </motion.section>
  );
};

export default Planets;
