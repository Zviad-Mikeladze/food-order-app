import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3> {props.mealName} </h3>
      <p className={classes.description}> {props.mealDescription} </p>
      <p className={classes.price}> {props.mealPrice} </p>
      <button>test</button>
    </div>
  );
};

export default MealItem;
