import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://global-uploads.webflow.com/5fb894860e4980731e5af152/609eedd04d14b920657124f2_staff%20meals.jpg"
          alt=" a table full of delious food!"
        />
      </div>
    </Fragment>
  );
};
export default Header;
