import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "./CartIcon";

import classes from "./HeaderCartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const badgeNumber = cartCtx.items.reduce((curNumb , item)=>{
    return curNumb +item.amount
  },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{badgeNumber} </span>
    </button>
  );
};

export default CartButton;
