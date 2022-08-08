import React from "react";
import MealItem from "./MealItem";
import classes from "./MealForm.module.css";
import Card from "./Card";

const MealForm = (props) => {
  return (
    <Card>
      <form className={classes.form}>
        {props.items.map((meals) => {
          return (
            <div key={meals.id}>
              <MealItem
                mealId={meals.id}
                mealName={meals.name}
                mealDescription={meals.description}
                mealPrice={meals.price}
              />
            </div>
          );
        })}
      </form>
    </Card>
  );
};

export default MealForm;
