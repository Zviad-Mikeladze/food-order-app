import React from "react";
import Input from "./Input";
import classes from "./MealItem.module.css";

const MealItem = (props) => {


  return (
    <div className={classes.meal}>
      <ul>
        <h3> {props.mealName} </h3>
        <p className={classes.description}> {props.mealDescription} </p>
        <p className={classes.price}> {props.mealPrice} </p>
      </ul>
      <div>
        <Input />
        <button>+ADD</button>
      </div>
    </div>
  );
};

export default MealItem;
