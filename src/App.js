import Header from "./Components/Header";
import MealForm from "./Components/MealForm";
import MealsSummary from "./Components/MealsSummary";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <MealsSummary />
      <MealForm items={DUMMY_MEALS} />
    </div>
  );
}

export default App;
