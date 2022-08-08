import React, {Fragment} from "react";
import CartButton from "./CartButton";

import classes from "./Header.module.css";
import meals from "./meals.jpg";

const Header = () => {
  return (
    <Fragment >
      <header className={classes.header} >
        <h1>ReactMeals</h1>
        <CartButton />
        
      </header>
      
      <div className={classes['main-image']} >
        <img  src={meals} alt="A Cover" />
      </div>
     
    </Fragment>
  );
};

export default Header;
