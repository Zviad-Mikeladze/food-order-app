import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.input}>
      <label>
        {" "}
        Amount
        <input min={0} max={99} type="number" defaultValue={0} ></input>
      </label>
    </div>
  );
};

export default Input;
