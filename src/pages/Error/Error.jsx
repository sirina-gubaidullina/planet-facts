import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Error.module.css";

const Error = () => {
  const error = useRouteError();
  return (
    <Fragment>
      <Navigation />
      <div className={classes.error}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Fragment>
  );
};

export default Error;
