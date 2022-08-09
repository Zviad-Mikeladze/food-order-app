import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "./CartIcon";

import classes from "./HeaderCartButton.module.css";

const CartButton = (props) => {
  const [btnIs, setBtnIs] = useState(false);
  const cartCtx = useContext(CartContext);
  const badgeNumber = cartCtx.items.reduce((curNumb, item) => {
    return curNumb + item.amount;
  }, 0);
  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnIs ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIs(true);

    const timer = setTimeout(() => {
      setBtnIs(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{badgeNumber} </span>
    </button>
  );
};

export default CartButton;
