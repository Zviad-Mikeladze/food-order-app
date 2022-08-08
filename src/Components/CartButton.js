import React from "react";
import CartIcon from "./CartIcon";

import classes from "./HeaderCartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <div className={classes.icon}>
        {" "}
        <CartIcon />{" "}
      </div>
      test
    </button>
  );
};

export default CartButton;
