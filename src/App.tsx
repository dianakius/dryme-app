import ListGroup from "./components/ListGroup";
import TowelsCard from "./components/TowelsCard";
import "./App.css";

function App() {
  return (
    <>
      <TowelsCard
        towels={{
          title: "Soft Cotton Towel",
          url: "https://example.com/towel.jpg",
          description: "A soft and absorbent cotton towel.",
        }}
      />
    </>
  );
}

export default App;
