import React, { useRef, useState } from "react";
import MealItem from "./MealItem";
import classes from "./MealForm.module.css";
import Card from "./Card";
import Input from "./Input";

const MealForm = (props, ref) => {
  const [amountIsvalid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD </button>
      {!amountIsvalid && <p> enter valid amount </p>}
    </form>
  );
};

export default MealForm;
