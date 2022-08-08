import { Fragment, useState } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import MealForm from "./Components/MealForm";
import Meals from "./Components/Meals";
import MealsSummary from "./Components/MealsSummary";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
