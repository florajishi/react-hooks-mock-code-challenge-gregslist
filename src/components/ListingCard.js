import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, image, description, location } = listing
  const [isFavorited, setFavorite] = useState(false)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method:"DELETE",
    })
      .then(r => r.json())
      .then(() => {
        onDeleteListing(id)
      })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
