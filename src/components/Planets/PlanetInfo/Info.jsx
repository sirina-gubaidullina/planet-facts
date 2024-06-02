import classes from "./Info.module.css";

const Info = ({ planetData }) => {
  return (
    <div className={classes["planet-info"]}>
      <div className={classes["planet-data"]}>
        <h1>Rotation Time</h1>
        <p>{planetData.rotation}</p>
      </div>
      <div className={classes["planet-data"]}>
        <h1>Revolution Time</h1>
        <p>{planetData.revolution}</p>
      </div>
      <div className={classes["planet-data"]}>
        <h1>Radius</h1>
        <p>{planetData.radius}</p>
      </div>
      <div className={classes["planet-data"]}>
        <h1>Average temp.</h1>
        <p>{planetData.temperature}</p>
      </div>
    </div>
  );
};

export default Info;
