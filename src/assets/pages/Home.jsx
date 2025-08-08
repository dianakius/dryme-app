import { useEffect, useState } from "react";
import TowelsCard from "../../components/TowelsCard";
import { getAllTowels } from "../../services/api"; 
import "../../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [towels, setTowels] = useState([]); // ✅ Store towels from API or mock data

  
  useEffect(() => {
    const fetchTowels = async () => {
      const data = await getAllTowels();
      setTowels(data);
    };

    fetchTowels();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search input will update automatically via state
  };

  const filteredTowels = towels.filter((towel) =>
    towel.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredTowels.map((towel) => (
          <TowelsCard towels={towel} key={towel.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
