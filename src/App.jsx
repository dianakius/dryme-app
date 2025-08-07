import ListGroup from "./components/ListGroup";
import TowelsCard from "./components/TowelsCard";
import Home from "./assets/pages/Home";
import "./App.css";

function App() {
  return (
    <>
    <Home/>
      <TowelsCard
        towels={{
          name: "Soft Cotton Towel",
          url: "https://example.com/towel.jpg",
          description: "A soft and absorbent cotton towel.",
        }}
      />
      <TowelsCard
        towels={{
          name: "Quick-Dry Towel",
          url: "https://example.com/towel2.jpg",
          description: "A quick-drying towel perfect for travel.",
        }}
      />
      <TowelsCard
        towels={{
          name: "Silk Towel",
          url: "https://example.com/towel3.jpg",
          description: "A luxurious silk towel for a luxurious experience.",
        }}
      />
    </>
  );
}

export default App;
