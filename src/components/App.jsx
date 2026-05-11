import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys((currentToys) => [...currentToys, newToy]);
  }

  function handleDeleteToy(id) {
    setToys((currentToys) => currentToys.filter((toy) => toy.id !== id));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy} />
    </>
  );
}

export default App;
