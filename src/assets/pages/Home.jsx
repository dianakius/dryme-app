import TowelsCard from "../../components/TowelsCard";

function Home() {
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

  return (
    <div className="home">
      <div className="home-header">
        {towels.map((towel) => (
          <TowelsCard towels={towel} key={towel.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
