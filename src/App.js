import { Fragment } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import MealForm from "./Components/MealForm";
import Meals from "./Components/Meals";
import MealsSummary from "./Components/MealsSummary";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
