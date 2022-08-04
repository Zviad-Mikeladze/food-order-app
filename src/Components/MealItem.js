import React from "react";
import classes from "./CartItem.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealItem = (peops) => {
  return (
    <div>
      {DUMMY_MEALS.map((meals) => {
        return (
          <div className={classes.meal} key={meals.id}>
            <h3> {meals.name} </h3>
            <p className={classes.description}> {meals.description} </p>
            <p className={classes.price}> {meals.price} </p>
          </div>
        );
      })}
    </div>
  );
};

export default MealItem;
