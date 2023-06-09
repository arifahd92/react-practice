import React from "react";
import classes from "./MealsSummery.module.css";
export default function MealsSummery() {
  return (
    <>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You </h2>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy the delecious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just-in-time
          and of course by experinced chefs{" "}
        </p>
      </section>
    </>
  );
}
