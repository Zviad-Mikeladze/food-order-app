import React from "react";
import MealItem from "./MealItem";
import classes from "./MealForm.module.css";
import Card from "./Card";
import Input from "./Input";

const MealForm = (props) => {
  return (
   
      <form className={classes.form}>
       <Input label="amount" input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1',
       }} />
       <button>+ ADD </button>
      </form>
   
  );
};

export default MealForm;
