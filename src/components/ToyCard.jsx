import React from "react";

function ToyCard({ toy, onDeleteToy }) {
  function handleDelete() {
    fetch(`/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete toy");
        }
        onDeleteToy(toy.id);
      })
      .catch((error) => {
        console.error("Error deleting toy:", error);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
