import { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { planets } from "./data";
import classes from "./Navigation.module.css";
import { motion } from "framer-motion";
import IconMenu from "../../assets/icons/IconMenu";
import IconClose from "../../assets/icons/IconClose";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sideBar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
};

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showCartHandler = () => {
    setSidebar(true);
  };

  const hideCartHandler = () => {
    setSidebar(false);
  };

  return (
    <Fragment>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <nav>
          <div className={classes.logo}>
            <h1>THE PLANETS</h1>
          </div>
          <button onClick={showCartHandler} className={classes.toggle}>
            <IconMenu />
          </button>
          {sidebar && (
            <motion.ul
              variants={sideBar}
              animate={sidebar ? "open" : "closed"}
              className={classes["nav-menu"]}
            >
              <button
                onClick={hideCartHandler}
                className={classes["icon-close"]}
              >
                <IconClose />
              </button>
              {planets.map((planet) => {
                return (
                  <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={classes["side-links"]}
                    key={planet.id}
                  >
                    <NavLink
                      style={({ isActive }) => {
                        return { color: isActive ? "white" : "" };
                      }}
                      onClick={hideCartHandler}
                      className={classes["side-link"]}
                      to={planet.path}
                    >
                      {planet.name}
                    </NavLink>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
          <ul className={classes.links}>
            {planets.map((planet) => {
              return (
                <li key={planet.id}>
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "var(--white)" : "" };
                    }}
                    className={classes.link}
                    to={planet.path}
                  >
                    {planet.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.header>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
