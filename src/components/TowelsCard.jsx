import React from "react";

<TowelsCard
  towels={{
    name: "Soft Cotton Towel",
    url: "https://example.com/towel.jpg",
    description: "A soft and absorbent cotton towel.",
  }}
/>;

function TowelsCard({ towels }) {
  function onFavoriteClick() {
    alert("clicked");
    console.log(`Added ${towels.name} to favorites`);
  }

  return (
    <div className="towels-card">
      <div className="towels-image">
        <img src={towels.url} alt={towels.name} />
        <div className="towels-overlay">
          <button className="towels-button">Add to Cart</button>
          <button className="towels-button">Buy Now</button>
          <button className="towels-button" onClick={onFavoriteClick}>
            Favorite 🩷
          </button>
        </div>
      </div>
      <div className="towels-info">
        <h3>{towels.name}</h3>
        <p>{towels.description}</p>
      </div>
    </div>
  );
}

export default TowelsCard;
