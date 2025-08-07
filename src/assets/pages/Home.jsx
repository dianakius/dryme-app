import TowelsCard from "../../components/TowelsCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const towels = [
    {
      id: 1,
      name: "Soft Cotton Towel",
      url: "https://example.com/towel1.jpg",
      description: "A soft and absorbent cotton towel.",
    },
    {
      id: 2,
      name: "Quick-Dry Towel",
      url: "https://example.com/towel2.jpg",
      description: "A quick-drying towel perfect for travel.",
    },
    {
      id: 3,
      name: "Silk Towel",
      url: "https://example.com/towel3.jpg",
      description: "A luxurious silk towel for a luxurious experience.",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery(""); // Clear the search input after submission
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for towels..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="home-header">
        {towels.map(
          (towels) =>
            towels.name.toLowerCase().startsWith(searchQuery) && (
              <TowelsCard towels={towels} key={towels.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
