import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([])

  const toyDatabase = "http://localhost:3001/toys"

  useEffect(fetchToys, [])

  function fetchToys() {
    fetch(toyDatabase)
    .then(response => response.json())
    .then(data => setToyArray(data))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(formData) {
    const newToy = {
      ...formData,
      likes: 0
    }
    fetch(toyDatabase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
    .then(response => response.json())
    .then(() => fetchToys())
  }

  function donateToy(toy) {
    fetch(toyDatabase+"/"+toy.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(() => fetchToys())
  }

  function likeToy(toy) {
    const newLikes = toy.likes+1;
    
    fetch(toyDatabase+"/"+toy.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({likes: newLikes})
    })
    .then(response => response.json())
    .then(() => fetchToys())
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} donateToy={donateToy} likeToy={likeToy} />
    </>
  );
}

export default App;
